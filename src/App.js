

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import User from './components/User';
import Post from './components/Post';
import Footer from './shared/Footer';
import NotFound from './components/NotFound';
import Header from './shared/Header';
import OneUser from './components/OneUser';
import SeePosts from './components/SeePosts';

function App() {
  // states
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user/get-all' element={<User />} />
          <Route path='/user/:userId' element={<OneUser />} />
          <Route path='/post/get-all' element={<Post />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/pagination' element={<SeePosts />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
