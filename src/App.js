import './App.css';
import Header from "./MyComponents/Header";
import Navbar from "./MyComponents/Navbar";
import { SigmaXMarketing } from "./MyComponents/SigmaXMarketing";
import { Footer } from "./MyComponents/Footer";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Products from './Pages/Products'
import Reports from './Pages/Reports'





function App() {
  let sigmaxmarketing = [
    {
      SNo: 1,
      title: "Prepare the HomePage of SigmaX first",
      desc: "I have received the homepage from hasan and now I have to deploy it into react and coding"
    },

    {
      SNo: 2,
      title: "Learn react from different videos and other learning websites",
      desc: "I am learning it from codewith harry but it is not very helping but w3schools is a good source to learn any coding language available on it"
    },

    {
      SNo: 3,
      title: "Discuss with Hasan and Suhaib",
      desc: "Every week work on the homepage and discuss an updated version of homepage with Hasan and Suhaib"
    }
  ]


  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Routes>

      </Router>




      <Header title="My SigmaX Marketing" searchBar={true} />
      <SigmaXMarketing sigmaxmarketing={sigmaxmarketing} />
      <Footer />
    </>

  );
}

export default App;
