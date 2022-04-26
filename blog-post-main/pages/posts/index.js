import React from "react";

const posts = ({ posts }) => {
  return (
    <div>
      <h1>List of posts</h1>
      {posts.map((post) => (
        <div className="border border-gray-300 shadow-md p-5">
          <h1>{post.title}</h1>
          <h3>
            {post.author} - <small>{post.publishedDate}</small>
          </h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default posts;

export async function getServerSideProps() {
  // fetching takes place
  const res = await fetch("http://localhost:4000/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
