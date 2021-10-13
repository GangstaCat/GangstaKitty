export const config = {
  prefix: "+",
  owners: ["0", "1"],
  ratelimits: [
    { duration: 2500, limit: 3, type: "user" },
    { duration: 5000, limit: 10, type: "channel" },
    { duration: 10000, limit: 20, type: "guild" },
  ],
};
