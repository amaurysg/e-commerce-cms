import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const Heros = ({ heros }) => {


  return (
    <div>
      <Carousel>
        {
          heros.map((hero, i) => {
            const imageUrl =
              process.env.NODE_ENV !== "development"
                ? hero.image.url
                : process.env.REACT_APP_BACKEND_URL + hero.image.url
            return (

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imageUrl}
                  alt={hero.slug}
                />

                <Carousel.Caption>
                  <h3>{hero.title}</h3>
                  <p style={{ fontWeight: 'bold' }}>{hero.content}</p>
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