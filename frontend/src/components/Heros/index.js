import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const Heros = ({ heros }) => {

  return (
    <div className="hero-wrapper">
      <Carousel fade className='hero-carousel'>
        {
          heros.map((hero, i) => {
            const imageUrl =
              process.env.NODE_ENV !== "development"
                ? hero.image.url
                : process.env.REACT_APP_BACKEND_URL + hero.image.url
            return (

              <Carousel.Item interval={5000}>
                <img
                  className="d-block w-100"
                  src={imageUrl}
                  alt={hero.slug}
                />

                <Carousel.Caption>
                  <div className="text-slider">
                    <h3 className="title-slider">{hero.title}</h3>
                    <p className="title-content">{hero.content}</p>
                  </div>
                </Carousel.Caption>

              </Carousel.Item>



            )
          })
        }


      </Carousel>

    </div>
  );
};

export default Heros;