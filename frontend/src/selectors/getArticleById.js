import React from "react";
import ARTICLES_QUERY from '../queries/article/articles'
import Query from '../components/Query'



const getHeroesById = (id) => {

  <Query query={ARTICLES_QUERY} >
    {({ data: { articles } }) => {
      return articles.find((article) => article.id === id);
    }}
  </Query>

};


export default getHeroesById;

