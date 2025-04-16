"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rebindLog = rebindLog;
function rebindLog(log) {
    for (const key in log) {
        // @ts-expect-error
        if (typeof log[key] !== "function")
            continue;
        // @ts-expect-error
        log[key] = log[key].bind(log);
    }
    return log;
}
//# sourceMappingURL=rebind-log.js.map