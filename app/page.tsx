import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { VideoDemo } from "@/components/video-demo"
import { GithubIntegration } from "@/components/github-integration"
import { BotWorkflow } from "@/components/bot-workflow"
import { FeaturedRepos } from "@/components/featured-repos"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navigation />
      <Hero />
      <VideoDemo />
      <GithubIntegration />
      <BotWorkflow />
      <FeaturedRepos />
      <Footer />
    </main>
  )
}
