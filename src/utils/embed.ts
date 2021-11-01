import { User } from "detritus-client/lib/structures";
import { Embed } from "detritus-client/lib/utils";
import { BrandIcons, BrandNames, Brands, Color } from "../globals";
import { store } from "./tools";

export function createUserEmbed(user: User, embed: Embed = new Embed()) {
  return embed.setAuthor(
    user.tag,
    user.avatarUrlFormat(null, { size: 1024 }),
    user.jumpLink
  );
}

export function createBrandEmbed(
  brand: Brands,
  user: User,
  embed: Embed = new Embed()
) {
  return createUserEmbed(user, embed).setFooter(
    BrandNames[brand],
    BrandIcons[brand]
  );
}

export async function createImageEmbed(
  url: URL | string | Buffer,
  filename: string,
  user: User,
  embed: Embed = new Embed()
) {
  const em = createUserEmbed(user, embed);
  const attachment = await store(filename, url);
  em.setImage(attachment.url!);

  em.setColor(Color.EMBED);

  let footer = "";
}
