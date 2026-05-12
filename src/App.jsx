import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Home from './pages/Home'
import TV from './pages/TV';
import People from './pages/People'
import './App.css'
import Movies from './pages/Movies';
import DetailMovies from './pages/DetailMovies';
import DetailSeries from './pages/DetailSeries';

function App() {

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Tv_Series" element={<TV />} />
          <Route path ="/People" element={<People />} />
          <Route path="/Movie/Details/:id" element={<DetailMovies />} />
          <Route path="/Tv_Series/Details/:id" element={<DetailSeries />} />
        </Routes>
      </Router>
    </SkeletonTheme>
  )
}

export default App
