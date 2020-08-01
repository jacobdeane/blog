module.exports = {
  siteMetadata: {
    title: `Jacob Deane - geek, photographer, engineer`,
    author: `Jacob Deane`,
    description: `The personal ramblings of  Jacob Deane, a nuclear submarine engineer by day & an astrophotographer by night, except when its cloudy.`,
    siteUrl: `https://jacobdeane.netlify.com/`,
    social: {
      instagram: `jd_astronomy`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: 'gatsby-plugin-extract-image-colors',
      options: {
        extensions: ['jpg', 'jpeg']
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/categories`,
        name: `categories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/astrophotography`,
        name: `astrophotography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        plugins: [
          `gatsby-remark-images`, 
          `gatsby-remark-images-medium-zoom`
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve(`./plugins/gatsby-remark-unwrap-inlinecode`),
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 720,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              //height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              showCaptions: true,
              markdownCaptions: false,
              linkImagesToOriginal: false
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: var(--space-md)`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: "inline",
              footnoteBackRefDisplay: "inline",
              footnoteBackRefInnerText: "&#8635;", // Defaults to: "↩"
              //use if you want the Wikipedia style ^ link without an underline beneath it
              footnoteBackRefAnchorStyle: `text-decoration: none;`,
              //use "front" for Wikipedia style ^ links
              //footnoteBackRefInnerTextStartPosition: "front",
              useFootnoteMarkerText: false // Defaults to false
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `
          @import "${__dirname}/src/styles/variables";
          @import "${__dirname}/src/styles/mixins";
        `,
      }
    },
    /*{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },*/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jacob Deane`,
        short_name: `JD`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#808080`,
        display: `minimal-ui`,
        // edit below
        icon: `static/favicon.svg`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    /*{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },*/
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/
        }
      }
    },
  ],
}
