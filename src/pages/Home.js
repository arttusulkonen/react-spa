import React, {useState, useEffect} from 'react';import {getAllCategories} from "../api";import Preloader from "../components/preloader";import CategoryList from "../components/category-list";const Home = () => {  const [catalog, setCatalog] = useState([]);  useEffect(() => {    getAllCategories()      .then(data => {        setCatalog(data.categories)      })  }, [])  return (    <>      {!catalog.length ? (        <Preloader/>      ): (        <CategoryList catalog={catalog} />      )}    </>  );};export default Home;