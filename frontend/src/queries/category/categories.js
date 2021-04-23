import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      slug
      name
    }
  }
`;

export default CATEGORIES_QUERY;