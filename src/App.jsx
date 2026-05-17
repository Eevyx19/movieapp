import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Home from './pages/Home'
import TV from './pages/TV';
import People from './pages/People'
import './App.css'
import Movies from './pages/Movies';
import DetailPerson from './pages/DetailPerson';
import Detail from './pages/Detail';
import Search from './pages/Search';
import { ScrollToTop } from './component/Utilies/ScrollToTop';
import { useEffect } from 'react';

function App() {

  return (
    <SkeletonTheme baseColor="#6e6e6e" highlightColor="#969696">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/person" element={<People />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:mediaType/:id" element={<Detail />} />
          <Route path="/person/:id" element={<DetailPerson />} />
        </Routes>
      </Router>
    </SkeletonTheme>
  )
}

export default App
