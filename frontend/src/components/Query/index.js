import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;

// We are using the useQuery hook to call your Strapi server at this address http://localhost:1337/graphql. We are sending an id if it exists (it will be necessary when you'll want to fetch just one article).