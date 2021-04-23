
import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      id
      slug
      name
      articles {
        id
        slug
        title
        content
        image {
          url
        }
        category {
          slug
          id
          name
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;