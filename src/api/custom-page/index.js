"use strict";

module.exports = {
  register({ strapi }) {
    strapi.service("api::custom-page.custom-page");
  },
};
