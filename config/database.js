const fs = require("fs");

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(
          "DATABASE_HOST",
          "SG-Strapi-2046-pgsql-master.servers.mongodirector.com"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "loginproject"),
        username: env("DATABASE_USERNAME", "username"),
        password: env("DATABASE_PASSWORD", "password"),
        ssl: {
          ca: fs.readFileSync(`${__dirname}/ca-certificate.crt`).toString(),
        },
      },
      options: {},
    },
  },
});
