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

              <div className='card-wrapper'>

                <div style={{ backgroundColor: '#111114' }}>
                  <Card style={{ border: 'none' }}>
                    <Card.Img variant="top" src={imageUrl} />
                    <Card.Body>
                      <Card.Title >{articles[0].title}</Card.Title>
                      <Card.Text  >
                        {articles[0].content}
                      </Card.Text>
                      <Card.Text className="article-video" style={{ textAlign: 'center', maxWidth: '1200px' }} >
                        <video src={videoUrl} width="100%" height="500" controls />
                      </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                      <Moment format="D MMM YYYY">
                        <small >{articles[0].publishedAt}</small>
                      </Moment>
                    </Card.Footer>
                  </Card>
                </div>
              </div>

            </>
          );
        }
      }}
    </Query>

  )
}

export default Article
