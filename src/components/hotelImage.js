import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const HotelImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <ImageBackground tag="section" fluid={image.sharp.fluid}>
        <TextoImagen>
          <h1>Bienvenido a Hotel Gatsby</h1>
          <p>El Mejor Lugar Para tus Vacaciones</p>
        </TextoImagen>
      </ImageBackground>
    </>
  )
}

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

const TextoImagen = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.75),
    rgba(34, 49, 63, 0.75)
  );
  color: #fff;
  height: 100%;

  h1 {
    font-size: 4rem;
    text-align: center;
    margin: 0;

    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }

  p {
    font-size: 2rem;
    text-align: center;

    @media (min-width: 992px) {
      font-size: 3.8rem;
    }
  }
`

export default HotelImage
