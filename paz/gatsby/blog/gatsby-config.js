module.exports = {
  siteMetadata: {
    title: 'Hamsa Hand Plank',
    description: 'This is the home of Hamsa Hand Planks.',
    image_file: 'IMG_20180728_210136_167.jpg'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
