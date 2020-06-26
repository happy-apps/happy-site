module.exports = {
  siteMetadata: {
    title: `Happy Apps`,
    description: `Apps development agency that makes people happy`,
    author: `David Dal Busco`,
    url: `https://happy-apps.org`,
    image: "/images/happy-meta.png",
    twitterUsername: "@daviddalbusco",
    siteUrl: `https://happy-apps.org`,
    languages: {
      langs: ["en"],
      defaultLangKey: "en",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://happy-apps.org`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `happy apps`,
        short_name: `Happy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FF7CB1`,
        display: `standalone`,
        icon: `src/images/happy-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: true,
        prefixDefault: true,
      },
    },
  ],
}
