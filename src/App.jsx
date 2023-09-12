import './App.css'
import Blogs from './Componenets/Blogs/Blogs'
import BookMarks from './Componenets/BookMarks/BookMarks'
import Header from './Componenets/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex '>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>

    </>
  )
}

export default App
