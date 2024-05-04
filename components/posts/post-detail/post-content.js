import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"
const DUMMY_POST = {
  title: "getting-started-with-nextJs",
  image: "first.jpg",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
   <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
