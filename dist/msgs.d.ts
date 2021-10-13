import { Replacers } from "./types";
export declare const messages: {
    command: {
        notImplemented: string;
        error: string;
        missingPermissions: string;
        missingPermissionsClient: string;
        ratelimit: {
            message: string;
            guild: string;
            channel: string;
            user: string;
        };
    };
};
export declare function replace(that: string, what: Replacers, _default?: Replacers): string;
