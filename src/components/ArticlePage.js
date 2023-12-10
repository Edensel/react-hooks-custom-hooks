
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function ArticlePage() {
  const { id } = useParams();
  const { data: post, isLoaded } = useQuery(`http://localhost:4000/posts/${id}`);
  
  useDocumentTitle(post ? `Underreacted | ${post.title}` : "Underreacted");

  useEffect(() => {
    // Fetch additional data or perform actions based on the 'id'
    // For instance:
    // fetch(`http://localhost:4000/posts/${id}`)
    //   .then((response) => response.json())
    //   .then((postData) => {
    //     // Handle the received post data as needed
    //   })
    //   .catch((error) => {
    //     // Handle errors if any
    //   });
  }, [id]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Article Page</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default ArticlePage;
