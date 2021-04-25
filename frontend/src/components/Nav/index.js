import React from "react";
import Query from "../Query";
import { Link, useParams } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {

  let { id } = useParams()

  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div className="nav-wrapper">

              <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    <Link to="/" style={{ color: '#107B0F', fontWeight: 'bold' }}>Games Blog</Link>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <ul className="navbar-nav">
                        {
                          categories.map((category, i) => {
                            return (

                              <li className="nav-item" key={i}>
                                <Link className="nav-link active" aria-current="page"
                                  to={`/category/${category.slug}`}

                                >
                                  {category.name}
                                </Link>

                              </li>
                            )
                          })
                        }

                      </ul>

                    </div>
                  </div>
                </div>
              </nav>


            </div>




          );
        }}
      </Query>
    </div>
  );
};

export default Nav;