"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthenticatedOctokit = getAuthenticatedOctokit;
const rebind_log_js_1 = require("../helpers/rebind-log.js");
async function getAuthenticatedOctokit(state, installationId, log) {
    const { octokit } = state;
    if (!installationId)
        return octokit;
    return octokit.auth({
        type: "installation",
        installationId,
        factory: ({ octokit, octokitOptions, ...otherOptions }) => {
            const pinoLog = log || state.log.child({ name: "github" });
            const options = {
                ...octokitOptions,
                log: (0, rebind_log_js_1.rebindLog)(pinoLog),
                throttle: octokitOptions.throttle?.enabled
                    ? {
                        ...octokitOptions.throttle,
                        id: String(installationId),
                    }
                    : { enabled: false },
                auth: {
                    ...octokitOptions.auth,
                    otherOptions,
                    installationId,
                },
            };
            const Octokit = octokit.constructor;
            return new Octokit(options);
        },
    });
}
//# sourceMappingURL=get-authenticated-octokit.js.map