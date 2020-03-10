/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      Image1: file(relativePath: { eq: "kindred-cakes.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image2: file(relativePath: { eq: "kindred-parade.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image3: file(relativePath: { eq: "kindred-flower.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image4: file(relativePath: { eq: "kindred-unicorn.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      sx={{
        mt: 4,
      }}
    >
      <Grid gap={2} columns={[1, 2, null, null, null]}>
        <Img fluid={data.Image1.childImageSharp.fluid} />
        <Img fluid={data.Image2.childImageSharp.fluid} />
        <Img fluid={data.Image3.childImageSharp.fluid} />
        <Img fluid={data.Image4.childImageSharp.fluid} />
      </Grid>
    </div>
  )
}

export default Gallery
