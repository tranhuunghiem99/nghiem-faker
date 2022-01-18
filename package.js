Npm.depends({
    'faker': '1.0.2'
});




Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.addFiles('meteor/npm-require.js', 'server');

  api.addFiles('build/build/faker.js', 'client');

  api.export("faker", "server");
});


Package.onTest(function(api) {
  api.use(['practicalmeteor:faker', "coffeescript", "tinytest", 'practicalmeteor:chai']);

  api.addFiles("meteor/tests/faker-export-test.coffee");
});
