import { useRouter } from "next/router";
import React from "react";

const PostDetails = () => {
  const router = useRouter();
  const { postId } = router.query;
  return <div>PostDetails - {postId}</div>;
};

export default PostDetails;
