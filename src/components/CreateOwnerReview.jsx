import Button from "@mui/material/Button";
import React from 'react'
import { Rating } from 'react-simple-star-rating'

function CreateOwnerReview() {
  
  return (
    <div class="create-owner-review">
        <h1>Create Owner Review</h1>
        <table class="table">
          <tr class="table-row">
            <td class="table-col">
            <h2>Appario Retail Private LTD</h2>
            <h3>Overall Rating</h3>
            <Rating />
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

export default CreateOwnerReview;