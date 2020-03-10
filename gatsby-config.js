module.exports = {
  siteMetadata: {
    title: `Kindred Cochrane`,
    description: `Kindred Cochrane is a volunteer run organization focused on promoting and celebrating diversity, equality, and inclusion for Cochrane area residents. We organize community education workshops, host fun social events, and advocate for LGBTQ2S+ community.`,
    keywords: [
      `LGBTQ`,
      `Kindred Cochrane`,
      `LGBTQ2S+`,
      `Pride`,
      `Cochrane Pride`,
      `Raindow Cochrane`,
    ],
    author: `Eric Howey`,
    siteUrl: `https://www.kindredcochrane.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    socialLinks: [
      {
        name: `Email`,
        link: `kindredcochrane@gmail.com`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Facebook`,
        link: `https://www.facebook.com/kindredcochrane/`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Instagram`,
        link: `https://www.instagram.com/kindredcochrane/`,
        location: `header`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        //footerContentLocation: "left", // "left", "right", "center"
      },
    },
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kindred Cochrane`,
        short_name: `Kindred`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
