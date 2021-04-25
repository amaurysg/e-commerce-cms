import React from 'react'

import Card from '../Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'


const Articles = ({ articles }) => {
  // console.log(articles)



  return (

    <>
      <div>
        <CardGroup>

          <div>
            <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
              {articles.map((article, i) => {
                return <Card article={article} key={`article__${article.id}`} />;
              })}
            </div>
          </div>



        </CardGroup>

      </div>
    </>



  )

};

export default Articles;


