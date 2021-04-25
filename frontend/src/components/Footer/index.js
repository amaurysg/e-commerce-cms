import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Query from "../Query";
import { Link, useParams } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Footer = () => {

  let { id } = useParams();

  return (
    <div className="bg-light">

      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <>


              <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                  {

                    categories.map((category, i) => {
                      return (
                        <Nav.Link className="footer-link" href={`/category/${category.slug}`}>{category.name}</Nav.Link>
                      )
                    })

                  }
                </Nav.Item>

              </Nav>
              <p className="text-center mt-4 mb-4 footer-games" href="/">GamesBlog </p>
              <Nav className="justify-content-center bg-light " activeKey="/">
                <Nav.Item className="fab fa-xbox">
                  <Nav.Link href="/"></Nav.Link>
                </Nav.Item>
                <Nav.Item className="fab fa-playstation">
                  <Nav.Link eventKey="link-1"></Nav.Link>
                </Nav.Item>
                <Nav.Item className="fab fa-windows">
                  <Nav.Link eventKey="link-2"></Nav.Link>
                </Nav.Item>
                <Nav.Item className="fab fa-bootstrap">
                  <Nav.Link eventKey="disabled" disabled>

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="fab fa-js">
                  <Nav.Link eventKey="disabled" disabled>

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="fab fa-react">
                  <Nav.Link eventKey="disabled" disabled>

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="fab fa-html5">
                  <Nav.Link eventKey="disabled" disabled>

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="fas fa-gamepad">
                  <Nav.Link eventKey="disabled" disabled>

                  </Nav.Link>
                </Nav.Item>

              </Nav>

            </>
          );
        }}
      </Query>

    </div>





  )
}

export default Footer
