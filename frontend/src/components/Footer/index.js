import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Footer = () => {
  return (
    <div className="bg-light">
      <>
        <Nav className="justify-content-center bg-light" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Action</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Adventures</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Tech
      </Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="text-center mt-4 mb-4 bg-light">GameBlog</p>
        <Nav className="justify-content-end bg-light" activeKey="/">
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
        </Nav>
      </>

    </div>
  )
}

export default Footer
