import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)

  const handleBookmarksAdd = blog => {
    // console.log(blog);
    // console.log("book mark is adding", blog);
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    // console.log('This is mark as read',time);
    const newReadingTimes = readingTime + time;
    setReadingTime(newReadingTimes);

    // remove the read blog from bookmark 
    // console.log("remove bookmark",id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);

  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleBookmarksAdd={handleBookmarksAdd} handleMarkAsRead={handleMarkAsRead}></Blogs>
        
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
