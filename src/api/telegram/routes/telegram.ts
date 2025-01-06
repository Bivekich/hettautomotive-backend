export default {
  routes: [
    {
      method: "POST",
      path: "/telegram/contact",
      handler: "telegram.sendContactForm",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
