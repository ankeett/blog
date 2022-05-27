import React,{useState} from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SeachBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';


const Home = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState("")

    const handleSearchSubmit=(event)=>{
        event.preventDefault();
        handleSearchResults();
    }

    const handleSearchResults=()=>{
        const allBlogs=blogList;
        const filteredBlogs = allBlogs.filter((blog)=>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
        setBlogs(filteredBlogs);
    }

    const handleClearSearch=()=>{
        setBlogs(blogList);
        setSearchKey("");

    }
  return (
    <div>
      {/*Page header*/}
      <Header/>

      {/*Search Bar*/ }
      <SeachBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey= {(e)=>setSearchKey(e.target.value)}
      />

      {/*BlogList*/}
      {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs}/>}
    </div>
  );
};

export default Home;