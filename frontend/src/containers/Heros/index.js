import React from 'react'
import Heros from '../../components/Heros'
import Query from '../../components/Query'
import HEROS_QUERY from '../../queries/hero/heros'
import Carousel from 'react-bootstrap/Carousel'

const HomeSliders = () => {

  //Here heros data with 
  return (
    <div>
      <Carousel>
        <Query query={HEROS_QUERY}>
          {({ data: { heros } }) => {
            return <Heros heros={heros} />;
          }}
        </Query>
      </Carousel>

    </div>
  );
};

export default HomeSliders;
