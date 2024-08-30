import React from 'react'
import Nav from '../components/Nav'
import BlogList from '../components/BlogList'
import Categories from '../components/Categories'
export default function Blogs() {
  console.log(import.meta.env.BACKEND_URL);
  
  return (
    <>
      <Nav/>
        <BlogList/>
        <Categories/>
    </>
  )
}
