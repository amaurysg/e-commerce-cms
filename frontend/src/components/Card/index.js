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

      <div className='card-wrapper'>
        <CardBootstrap className="card">
          <CardBootstrap.Img variant="top" src={imageUrl} />
          {/* <Image src={imageUrl} fluid /> */}
          <CardBootstrap.Body>
            <CardBootstrap.Title className="card-title">{article.title}</CardBootstrap.Title>
            <CardBootstrap.Text className="card-content">
              <p >  {article.description}</p>
            </CardBootstrap.Text>
            <CardBootstrap.Text style={{ margin: '0px' }}>
              <small className="card-author" >by {article.author.name} </small>

            </CardBootstrap.Text>
            <CardBootstrap.Text style={{ margin: '0px' }}>
              <small className="card-category"> {article.category.name} </small>

            </CardBootstrap.Text>
          </CardBootstrap.Body>
          <CardBootstrap.Footer>
            {/* <small className="text-muted">{article.category.name}</small> */}

            <Moment format="MMM Do YYYY" className="card-publish">{article.publishedAt}</Moment>

          </CardBootstrap.Footer>
        </CardBootstrap>
      </div>

      {/* style={{ color: '#107B0F', fontWeight: 'bold' } */}

    </Link>



  )

}

export default Card






