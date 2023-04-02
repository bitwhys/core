module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint`
  extends: ["@bitwhys"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
