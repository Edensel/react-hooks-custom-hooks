import React from "react";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
// import useQuery from "../hooks/useQuery";
// import HomePage from "./HomePage";
// import ArticlePage from "./ArticlePage";
// import Posts from "./Posts";

function ArticlePage() {
  const { id } = useParams();
  const { data: post, isLoaded } = useQuery(`http://localhost:4000/posts/${id}`);
  
  useDocumentTitle(post ? `Underreacted | ${post.title}` : "Underreacted");

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Article Page</h1>
      {/* Display post if it exists */}
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <div>Post not found</div>
      )}
    </div>
  );
}

export default ArticlePage;
