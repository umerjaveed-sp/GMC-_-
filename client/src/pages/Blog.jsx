import React from "react";
import Hero from "../components/Blog/Hero";
import Search from "../components/Blog/Search";
import LatestBlog from "../components/Blog/LatestBlog";
import MoreBlogs from "../components/Blog/MoreBlogs";
import HighlightOfWeek from "../components/Blog/HighlightOfWeek";
import { Route, Routes } from "react-router-dom";
import BlogPage from "../components/RegisterNow/BlogPage";

const Blog = () => {
  return (
    <>
      <Hero />
      <Search />
      <LatestBlog />
      <MoreBlogs />
      <HighlightOfWeek />
    </>
  );
};

export default Blog;
