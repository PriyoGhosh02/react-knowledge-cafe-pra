import { useState } from 'react'
import './App.css'
import Blogs from './Componenets/Blogs/Blogs'
import BookMarks from './Componenets/BookMarks/BookMarks'
import Header from './Componenets/Header/Header'
import PropTypes from 'prop-types';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handelAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handelMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handelAddToBookmark={handelAddToBookmark}
          handelMarkAsRead={handelMarkAsRead}
        ></Blogs>
        <BookMarks bookmarks={bookmarks}
          readingTime={readingTime}
        ></BookMarks>
      </div>

    </>
  )
}

App.propTypes = {
  blog: PropTypes.object.isRequired
}

export default App
