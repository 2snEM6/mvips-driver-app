module.exports = {
  client: {
    name: 'mvips',
    service: {
      url: process.env.GRAPHQL_ENDPOINT,
      skipSSLValidation: true,
    },
    includes: ['./graphql/mutations/**/*.ts', './graphql/queries/**/*.ts'],
    excludes: ['./expo/', './assets', './node_modules'],
  },
};
