module.exports = {
  env: {
    NEXT_API_KEY: process.env.NEXT_API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
};

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
