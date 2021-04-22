const build = require("../../database/build.js");

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("task", {
    resetDb: () => {
      console.log("Resetting DB...");
      return build();
    },
  });
};
