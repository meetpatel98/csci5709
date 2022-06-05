import React from "react";
import Review from "./Review";
import Notes from "../notes";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  let navigate = useNavigate();
  return (
    <div class="main-div">
      <h1 class="main-div-title">Product</h1>
      <table class="first-table">
        <tr>
          <td class="first-table-col">
            <img src={require("../images/product.jpg")} alt="product" />
          </td>
          <td class="first-table-col">
            <h2>
              Warehouse Forklift, 10,000 lbs.-12,500 lbs., Electric Powered
            </h2>
            <p>
              Lift stock, pallets and other loads easily and securely with this
              warehouse forklift. This heavy-duty lift truck has a maximum
              capacity of 12,500 lbs. It is easy to use and durable. You can
              trust United Rentals with all your material handling needs.
            </p>
            <ul>
              <li>2-stage mast for high visibility</li>
              <li>36V, 48V, 80V power supply</li>
              <li>Travel speed up to 9.4 mph under full load</li>
              <li>Full lift load of up to 71 feet per minute</li>
              <li>Add this warehouse forklift to your cart now</li>
            </ul>
          </td>
        </tr>
      </table>
      <h1 class="main-div-title">Custome Reviews</h1>
      <table class="first-table">
        <tr>
          <td class="second-table-col-left">
            <h2 class="star-rating">Ratings</h2>
            <p class="star">
            <span class="Rating-Content">5 Star</span>
              <ProgressBar now={40} />
            </p>
            <p class="star">
              <span class="Rating-Content">4 Star</span>
              <ProgressBar now={20} />
            </p>
            <p class="star">
            <span class="Rating-Content">3 Star</span>
              <ProgressBar now={85} />
            </p>
            <p class="star">
            <span class="Rating-Content">2 Star</span>
              <ProgressBar now={10} />
            </p>
            <p class="star">
            <span class="Rating-Content">1 Star</span>
              <ProgressBar now={35} />
            </p>

            <h2 class="review-this-product-title">Review this product</h2>

            <h5 class="review-this-product">Share your thought with other customers</h5>

            <Button class="btn"
              variant="outlined"
              onClick={() => {
                navigate("/createproductreview");
              }}
            >
              Write a customer review
            </Button>
            <br></br>
            <Button class="btn"
              variant="outlined"
              onClick={() => {
                navigate("/createownerreview");
              }}
            >
              Leave a seller feedback
            </Button>
            <br></br>
            <Button class="btn"
              variant="outlined"
              onClick={() => {
                navigate("/productreviews");
              }}
            >
              All Posted Reviews
            </Button>
          </td>
          <td class="second-table-col">
          <h3>Most Recent Rev</h3>
              {Notes.map((review) => (
                <Review
                  key={review.key}
                  title={review.title}
                  rating={review.rating}
                  content={review.content}
                />
              ))}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ProductPage;
