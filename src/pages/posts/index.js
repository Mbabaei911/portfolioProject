import React from "react";
import AllPosts from "../../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "getting-started-with-nextJs",
    image: "first.jpg",
    excerpt: "react framework for production ssr rendering",
    date: "2022-02-10",
    slug: "getting-started-with-nextJs",
  },
  {
    title: "getting-started-with-nextJs2",
    image: "first.jpg",
    excerpt: "react framework for production ssr rendering",
    date: "2022-02-10",
    slug: "getting-started-with-nextJs2",
  },
  {
    title: "getting-started-with-nextJs3",
    image: "first.jpg",
    excerpt: "react framework for production ssr rendering",
    date: "2022-02-10",
    slug: "getting-started-with-nextJs3",
  },
  {
    title: "getting-started-with-nextJs4",
    image: "first.jpg",
    excerpt: "react framework for production ssr rendering",
    date: "2022-02-10",
    slug: "getting-started-with-nextJs4",
  },
  {
    title: "getting-started-with-nextJs5",
    image: "first.jpg",
    excerpt: "react framework for production ssr rendering",
    date: "2022-02-10",
    slug: "getting-started-with-nextJs5",
  },
];
function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS}/>;
}

export default AllPostsPage;
