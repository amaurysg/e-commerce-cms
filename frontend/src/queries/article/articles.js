import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      slug
      title
      content 
      description
      category {
        id
        slug
        name
      }
      image {
        url
      }
      
    }
  }
`;

export default ARTICLES_QUERY;