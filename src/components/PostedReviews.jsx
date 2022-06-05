import React from "react";
import Review from "./Review";
import Notes from "../notes";

function PostedReviews() {
  return (
    <div class="posted-reviews">
      <table>
        <tr>
          <td class="posted-reviews-row">
            <h2>All Posted Reviews</h2>
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

export default PostedReviews;
