import React from 'react'
import { useParams } from 'react-router'
import Query from '../../components/Query'
import ARTICLE_QUERY from '../../queries/article/article'
import Moment from 'react-moment'
import ReactMarkdown from "react-markdown";
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player'



const Article = () => {

  const { id } = useParams()



  return (


    <Query query={ARTICLE_QUERY} slug={id} >
      {({ data: { articles } }) => {

        if (articles) {
          // const for image
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles[0].image.url
              : process.env.REACT_APP_BACKEND_URL + articles[0].image.url;

          // const for video 
          const videoUrl =
            process.env.NODE_ENV !== "development"
              ? articles[0].video[0].url
              : process.env.REACT_APP_BACKEND_URL + articles[0].video[0].url;

          return (
            <>
              {/* <div>
                <div
                  id="banner"
                  className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                  data-src={imageUrl}
                  data-srcset={imageUrl}
                  data-uk-img
                >
                  <h1>{articles[0].title}</h1>
                </div>

                <div className="uk-section">
                  <div className="uk-container uk-container-small">
                    <ReactMarkdown source={articles[0].content} />
                    <p>
                      <Moment format="MMM Do YYYY">{articles[0].published_at}</Moment>
                    </p>
                  </div>
                </div>
                <p class="" >{articles[0].content}</p>
                <video src={videoUrl} width="750" height="500" controls >
                </video>


              </div> */}

              <Card>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                  <Card.Title>{articles[0].title}</Card.Title>
                  <Card.Text>
                    {articles[0].content}
                  </Card.Text>
                  <Card.Text style={{ textAlign: 'center', width: '100%' }}>
                    <video src={videoUrl} width="750" height="500" controls />
                  </Card.Text>
                </Card.Body>

                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>

            </>
          );
        }
      }}
    </Query>

  )
}

export default Article
