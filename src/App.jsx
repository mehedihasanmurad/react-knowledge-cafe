import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);

  const handleBookmarksAdd = blog => {
    console.log("book mark is adding")
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleBookmarksAdd={handleBookmarksAdd}></Blogs>
        
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
