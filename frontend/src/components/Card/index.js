import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardBootstrap from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
// import CardArticle from 'react-bootstrap/Card'
import Moment from 'react-moment'


const Card = ({ article }) => {
  // console.log(article)


  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url

  return (
    <Link to={`/article/${article.slug}`} className="uk-link-reset">

      <CardBootstrap>
        <CardBootstrap.Img variant="top" src={imageUrl} />
        {/* <Image src={imageUrl} fluid /> */}
        <CardBootstrap.Body>
          <CardBootstrap.Title>{article.title}</CardBootstrap.Title>
          <CardBootstrap.Text>
            <p>  {article.description}</p>

          </CardBootstrap.Text>
        </CardBootstrap.Body>
        <CardBootstrap.Footer>
          {/* <small className="text-muted">{article.category.name}</small> */}
          <p>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p>
        </CardBootstrap.Footer>
      </CardBootstrap>



    </Link>



  )

}

export default Card






