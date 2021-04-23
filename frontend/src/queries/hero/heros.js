import gql from "graphql-tag";

const HEROS_QUERY = gql`
  query Heros {
  heros {
    slug
    title
    content
    image{
      url
    }
  }
}

`;

export default HEROS_QUERY;