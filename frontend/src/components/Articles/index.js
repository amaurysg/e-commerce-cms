import React from 'react'

import Card from '../Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'

const Articles = ({ articles }) => {
  // console.log(articles)

  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (

    <div>

      <CardDeck>

        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {articles.map((article, i) => {
              return <Card article={article} key={`article__${article.slug}`} />;
            })}
          </div>
        </div>
      </CardDeck>

    </div>



  )

};

export default Articles;


