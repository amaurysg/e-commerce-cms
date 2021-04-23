import React from 'react'
import Heros from '../../components/Heros'
import Query from '../../components/Query'
import HEROS_QUERY from '../../queries/hero/heros'

const HomeSliders = () => {

  //Here heros data with 
  return (
    <div>

      <Query query={HEROS_QUERY}>
        {({ data: { heros } }) => {
          return <Heros heros={heros} />;
        }}
      </Query>


    </div>
  );
};

export default HomeSliders;
