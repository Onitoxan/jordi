/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["es-ES", "en-US"],
    defaultLocale: "es-ES",
  },
  trailingSlash: true,
};

module.exports = nextConfig;
