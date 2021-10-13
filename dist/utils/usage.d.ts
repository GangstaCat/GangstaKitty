import { Command } from "detritus-client";
export declare function optionalBrackets(optional?: boolean): {
    left: string;
    right: string;
};
export declare const max: (array: number[]) => number;
export declare const min: (array: number[]) => number;
export declare const fillArrayWithBounds: (min: number, max: number) => number[];
export declare const isConsecutive: (array: number[]) => boolean;
export declare function generateUsage(command: Command.Command): string;
