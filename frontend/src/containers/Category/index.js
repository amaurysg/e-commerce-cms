import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

const Category = () => {
  let { slug } = useParams();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} id={slug}>
      {({ data: { category } }) => {
        return (
          <div onClick={() => console.log('hola')}>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{category.name}</h1>
                <Articles articles={category.articles} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;