import { User } from "detritus-client/lib/structures";
import { Embed } from "detritus-client/lib/utils";
import { Brands } from "../globals";
export declare function createUserEmbed(user: User, embed?: Embed): Embed;
export declare function createBrandEmbed(brand: Brands, user: User): Embed;
