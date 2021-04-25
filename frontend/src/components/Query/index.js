import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Spinner from 'react-bootstrap/Spinner'

const Query = ({ children, query, slug }) => {
  console.log('query slug', slug)
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug }
  });

  if (loading) return <div className="spinner-container">
    <Spinner animation="border" style={{ alignItems: 'center' }}></Spinner>
  </div>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
