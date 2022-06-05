import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProductReviews from "./PostedReviews";
import ProductPage from "./ProductPage";
import CreateProductReview from "./CreateProductReview";
import CreateOwnerReview from "./CreateOwnerReview";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
          <Route exact path="/" element={<ProductPage />} />
          <Route exact path="/productreviews" element={<ProductReviews/>}/>
          <Route exact path="/createproductreview" element={<CreateProductReview/>}/>
          <Route exact path="/createownerreview" element={<CreateOwnerReview/>}/>
    );
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
