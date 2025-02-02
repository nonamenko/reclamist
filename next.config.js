/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React's Strict Mode for highlighting potential problems in an application.
    reactStrictMode: true,
    // Use SWC to minify the output JavaScript for faster builds and smaller bundle sizes.
    swcMinify: true,
    // Internationalization (i18n) configuration.
    i18n: {
        // Supported locales; in this case, only Ukrainian is enabled.
        locales: ["uk"],
        // The default locale to use when visiting the site.
        defaultLocale: "uk",
    },
};

module.exports = nextConfig;
