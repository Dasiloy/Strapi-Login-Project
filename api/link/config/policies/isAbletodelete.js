"use strict";

/**
 * `isAbleToDelete` policy.
 */

module.exports = async (ctx, next) => {
  const { id: linkId } = ctx.params;

  console.log(ctx.params);
  const {
    user: { id: userId },
  } = ctx.state;

  const { users } = await strapi
    .query("link")
    .findOne({ id: linkId }, ["users"]);

  if (users && users.filter(({ id }) => id === userId).length) {
    return await next();
  }

  ctx.unauthorized("You can't delete this item");
};
