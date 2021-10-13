"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBrandEmbed = exports.createUserEmbed = void 0;
const utils_1 = require("detritus-client/lib/utils");
const globals_1 = require("../globals");
function createUserEmbed(user, embed = new utils_1.Embed()) {
    return embed.setAuthor(user.tag, user.avatarUrlFormat(null, { size: 1024 }), user.jumpLink);
}
exports.createUserEmbed = createUserEmbed;
function createBrandEmbed(brand, user) {
    return createUserEmbed(user).setFooter(globals_1.BrandNames[brand], globals_1.BrandIcons[brand]);
}
exports.createBrandEmbed = createBrandEmbed;
