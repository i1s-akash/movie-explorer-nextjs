const path = require("path");

module.exports = {
  env: {
    NEXT_API_KEY: process.env.NEXT_API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
