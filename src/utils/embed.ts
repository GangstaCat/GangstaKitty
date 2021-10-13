import { User } from "detritus-client/lib/structures";
import { Embed } from "detritus-client/lib/utils";
import { BrandIcons, BrandNames, Brands } from "../globals";

export function createUserEmbed(user: User, embed: Embed = new Embed()) {
  return embed.setAuthor(
    user.tag,
    user.avatarUrlFormat(null, { size: 1024 }),
    user.jumpLink
  );
}

export function createBrandEmbed(brand: Brands, user: User) {
  return createUserEmbed(user).setFooter(BrandNames[brand], BrandIcons[brand]);
}
