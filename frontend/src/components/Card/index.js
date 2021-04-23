import React from 'react'
import { Link } from 'react-router-dom'
import CardArticle from 'react-bootstrap/Card'


const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url

  return (
    <Link to={`/article/${article.slug}`} className="uk-link-reset">
      {/* <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={imageUrl}
            alt={article.image.url}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.title}
          </p>
        </div>
      </div> */}
      <CardArticle>
        <CardArticle.Img variant="top" src={imageUrl} alt={article.image.url} />
        <CardArticle.Body>
          <CardArticle.Title>{article.title}</CardArticle.Title>
          <CardArticle.Text>
            {article.category.name}
          </CardArticle.Text>
        </CardArticle.Body>
        <CardArticle.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardArticle.Footer>
      </CardArticle>


    </Link>

    // <CardGroup>


    //   <Card>
    //     <Card.Img variant="top" src="localhost:1337/uploads/1024_2000_c942796a78.jpg" />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in to
    //         additional content. This card has even longer content than the first to
    //         show that equal height action.
    //   </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    // </CardGroup>


  )

}

export default Card