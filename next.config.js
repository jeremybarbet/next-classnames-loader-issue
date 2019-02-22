const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  webpack(config) {
    const classNamesLoader = require.resolve('classnames-loader');
    const styleRules = config.module.rules.filter(rule => rule.test.test('file.scss') || rule.test.test('file.sass'));

    styleRules.forEach(styleRule => {
      if (styleRule.use && styleRule.use.indexOf(classNamesLoader) === -1) {
        styleRule.use.splice(0, 0, classNamesLoader);
      }
    });

    return config;
  },
});
