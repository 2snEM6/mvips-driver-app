const { loadSchema } = require('@graphql-toolkit/core');
const { UrlLoader } = require('@graphql-toolkit/url-loader');
const { GraphQLSchema, printSchema } = require('graphql');
const fs = require('fs');
const path = require('path');

loadSchema('https://mvips-server-dev.herokuapp.com', {
  // load from endpoint
  loaders: [new UrlLoader()],
}).then((schema: any) => {
  const writePath = path.join(process.cwd(), '/__generated__/graphql/');
  if (!fs.existsSync(writePath)) {
    fs.mkdirSync(writePath, { recursive: true });
  }
  fs.writeFileSync(path.join(writePath, 'schema.graphql'), printSchema(schema));
});