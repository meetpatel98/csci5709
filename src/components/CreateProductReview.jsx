import React from 'react'
import { Rating } from 'react-simple-star-rating'
import Button from "@mui/material/Button";

function CreateProductReview() {

  return (
    <div class="create-product-review">
        <h1>Create Product Review</h1>
        <table class="table">
          <tr class="table-row">
            <td class="table-col">
            <h2>Warehouse Forklift, 10,000 lbs.-12,500 lbs., Electric Powered</h2>
            <h3>Overall Rating</h3>
            <Rating />
            <h3>Add a headline</h3>
            <input type="text" class="text-field"/>
            <h3>Add a written review</h3>
            <textarea id="w3review" class="text-area" rows="4" cols="105"/>
            </td>
          </tr>
          <tr>
            <td>
            <Button class="submit-review" onClick={() => alert('Review Posted')}
              variant="outlined"
            > Submit
            </Button>
            </td>
          </tr>        
        </table>
    </div>
  );
}

export default CreateProductReview;