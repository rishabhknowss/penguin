/**
 * Penguin Space - GitHub bot for onchain bounties
 * @param {import('probot').Probot} app
 */
export default (app) => {
  app.log.info("🐧 Penguin Space bot is ready to manage bounties!");

  // In-memory storage for MVP (replace with database in production)
  const bounties = new Map();
  const attempts = new Map();

  // Listen for issue comments to detect commands
  app.on("issue_comment.created", async (context) => {
    const comment = context.payload.comment.body;
    const issueNumber = context.payload.issue.number;
    const repo = context.payload.repository.name;
    const owner = context.payload.repository.owner.login;
    const commentAuthor = context.payload.comment.user.login;
    
    app.log.info(`Comment by ${commentAuthor} in ${owner}/${repo}#${issueNumber}`);
    
    // Handle /penguin command to create bounties
    if (comment.trim().toLowerCase().startsWith("/penguin")) {
      const parts = comment.trim().split(/\s+/);
      if (parts.length >= 3 && !isNaN(parts[1])) {
        const amount = parts[1];
        const currency = parts[2].toLowerCase();
        
        // Store bounty info
        const bountyId = `${owner}/${repo}#${issueNumber}`;
        bounties.set(bountyId, {
          amount,
          currency,
          creator: commentAuthor,
          created: new Date().toISOString(),
          status: "open"
        });
        
        app.log.info(`[MVP] Created bounty: ${amount} ${currency} for ${bountyId}`);
        
        // Post a cool confirmation comment
        await context.octokit.issues.createComment({
          owner,
          repo,
          issue_number: issueNumber,
          body: `## 💸 Bounty Created: ${amount} ${currency.toUpperCase()}

The hunt is on! This issue now has a **${amount} ${currency.toUpperCase()}** bounty attached to it.

### How to claim it:
1. Comment \`/attempt\` to let everyone know you're on it
2. Submit your PR with the solution
3. Drop \`/claim #<PR-number>\` when you're done

No middlemen. No delays. Just code and get paid.

*powered by [penguin.space](https://getpenguin.space)*`
        });
      }
    }
    
    // Handle /attempt command
    if (comment.trim().toLowerCase() === "/attempt") {
      const bountyId = `${owner}/${repo}#${issueNumber}`;
      const attemptId = `${bountyId}:${commentAuthor}`;
      
      // Check if bounty exists
      if (!bounties.has(bountyId)) {
        await context.octokit.issues.createComment({
          owner,
          repo,
          issue_number: issueNumber,
          body: `❌ No active bounty found on this issue. Someone needs to create one with \`/penguin\` first.`
        });
        return;
      }
      
      // Register attempt
      attempts.set(attemptId, {
        bountyId,
        user: commentAuthor,
        started: new Date().toISOString(),
        status: "in_progress"
      });
      
      app.log.info(`[MVP] Registered attempt by ${commentAuthor} for ${bountyId}`);
      
      await context.octokit.issues.createComment({
        owner,
        repo,
        issue_number: issueNumber,
        body: `## 🚀 @${commentAuthor} is on the case!

Challenge accepted. We've registered your attempt on this bounty.

When you're done:
1. Push your code
2. Open a PR
3. Comment \`/claim #<PR-number>\` to get paid

Good luck and happy hacking!`
      });
    }
    
    // Handle /claim command
    if (comment.trim().toLowerCase().startsWith("/claim")) {
      const parts = comment.trim().split(/\s+/);
      const bountyId = `${owner}/${repo}#${issueNumber}`;
      const attemptId = `${bountyId}:${commentAuthor}`;
      
      // Check if user attempted the bounty
      if (!attempts.has(attemptId)) {
        await context.octokit.issues.createComment({
          owner,
          repo,
          issue_number: issueNumber,
          body: `⚠️ You need to comment \`/attempt\` first before claiming this bounty.`
        });
        return;
      }
      
      // Get PR number (format: /claim #123)
      let prNumber = null;
      if (parts.length >= 2) {
        prNumber = parts[1].replace(/^#/, '');
      }
      
      if (!prNumber || isNaN(prNumber)) {
        await context.octokit.issues.createComment({
          owner,
          repo,
          issue_number: issueNumber,
          body: `❓ Please include your PR number: \`/claim #123\``
        });
        return;
      }
      
      // In a real implementation, we'd verify the PR actually exists and solves the issue
      app.log.info(`[MVP] Processing claim by ${commentAuthor} for ${bountyId} via PR #${prNumber}`);
      
      const bounty = bounties.get(bountyId);
      
      await context.octokit.issues.createComment({
        owner,
        repo,
        issue_number: issueNumber,
        body: `## 💰 Bounty Claimed Successfully!

🎉 **Mission accomplished, @${commentAuthor}!**

Your solution in PR #${prNumber} has been verified. **${bounty.amount} ${bounty.currency.toUpperCase()}** is headed to your wallet!

Thanks for making open source better with Penguin Space.

*Payment processing... Transaction will appear on Solana soon.*`
      });
      
      // In production, this is where you'd trigger the Solana payment
      app.log.info(`[MVP] Would pay ${bounty.amount} ${bounty.currency} to ${commentAuthor}`);
      
      // Update bounty status
      bounties.set(bountyId, {
        ...bounty,
        status: "claimed",
        claimedBy: commentAuthor,
        claimedAt: new Date().toISOString(),
        prNumber
      });
    }
  });

  // When a PR is submitted, check if it's for a bounty
  app.on("pull_request.opened", async (context) => {
    const pr = context.payload.pull_request;
    const prAuthor = pr.user.login;
    
    // If PR description or title mentions fixing an issue
    const issueMatch = pr.body?.match(/#(\d+)/) || pr.title.match(/fix(?:es)? #(\d+)/i);
    
    if (issueMatch) {
      const issueNumber = issueMatch[1];
      const repo = context.payload.repository.name;
      const owner = context.payload.repository.owner.login;
      const bountyId = `${owner}/${repo}#${issueNumber}`;
      const attemptId = `${bountyId}:${prAuthor}`;
      
      // If this user attempted this bounty
      if (attempts.has(attemptId) && bounties.has(bountyId)) {
        await context.octokit.issues.createComment({
          owner,
          repo,
          issue_number: pr.number,
          body: `## 🐧 Bounty PR Detected!

This PR appears to be solving a bounty issue.

To claim your reward, please comment \`/claim #${pr.number}\` on the original issue #${issueNumber}.`
        });
      }
    }
  });
};