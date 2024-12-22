import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import LoaderPage from './components/loaderPage';
import Body from './components/Body';
import FormData from './components/form';
import GrowthBenchMarks from './components/AboutSection/growthBenchMark';
import GrowthRetention from './components/Services/growthRetention';
import Blogs from './components/BlogSection/blogs';
function App() {
  return (
    <div className="App  text-white">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoaderPage/>}/>
        <Route path='/body' element={<Body/>}/>
        <Route path='/Header' element={<Header/>}/>
        <Route path="/form" element = {<FormData/>}/>
        <Route path="/about" element = {<GrowthBenchMarks/>}/>
        <Route path="/services" element = {<GrowthRetention/>}/>
        <Route path="/blogs" element = {<Blogs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;