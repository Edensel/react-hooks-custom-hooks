import React from "react";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function HomePage() {
  useDocumentTitle("Underreacted | Home");

  const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <ArticleList posts={posts} />
    </div>
  );
}

export default HomePage;
