module.exports = {
  apps: [
    {
      name: "strapi-loginproject",
      cwd: "/home/forge/login.apiblic.com",
      script: "yarn",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
