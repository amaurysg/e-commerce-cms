import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              {/* <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">Strapi Blog</Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.map((category, i) => {
                      return (
                        <li key={category.slug}>
                          <Link
                            to={`/category/${category.slug}`}
                            className="uk-link-reset"
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav> */}

              <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    <Link to="/">Strapi Blog</Link>
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <ul class="navbar-nav">
                        {
                          categories.map((category, i) => {
                            return (

                              <li class="nav-item" key={i}>
                                <Link class="nav-link active" aria-current="page"
                                  to={`/category/${category.slug}`}

                                >
                                  {category.name}
                                </Link>
                                {/* <a class="nav-link active" aria-current="page" href="#">{category.name}</a> */}
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