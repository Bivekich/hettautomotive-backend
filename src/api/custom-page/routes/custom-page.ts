/**
 * custom-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::custom-page.custom-page", {
  config: {
    find: { auth: false },
    findOne: { auth: false },
    create: { auth: false },
    update: { auth: false },
    delete: { auth: false },
  },
  only: ["find", "findOne", "create", "update", "delete"],
});
