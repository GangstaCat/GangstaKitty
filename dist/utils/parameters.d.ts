import { Context } from "detritus-client/lib/command";
export declare namespace Parameters {
    function user(value: string, context: Context): import("detritus-client/lib/structures").User | undefined;
}
export declare namespace DefaultParameters {
    function user(context: Context): import("detritus-client/lib/structures").User;
}
