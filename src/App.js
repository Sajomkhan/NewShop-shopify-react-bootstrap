import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
import MainLayout from "./components/MainLayout.jsx";

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Posts from './Pages/Posts.jsx'
import Products from './Pages/Products.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import Error from './Pages/Error.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="products" element={<Products />} />
//           <Route path="products/:productId" element={<SingleProduct />} />
//           <Route path="posts" element={<Posts />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// };
