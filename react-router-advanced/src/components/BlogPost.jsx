import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div style={{ padding: 16 }}>
      <h2>Blog Post {id}</h2>
      <p>This is dynamic content for blog post with ID: {id}</p>
    </div>
  );
}
