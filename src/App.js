import About from './About';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Footer from './Footer';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/newpost">NewPost</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/newpost'element={<NewPost/>} />
        </Routes>
       {/* <Header/> 
       <Nav />
       <Home/>
       <NewPost/>
       <PostPage/>
       <About/>
       <Missing/>
       <Footer/> */}
      </header>
    </div>
  );
}

export default App;
