import React from "react";

function Review(props) {
  return (
    <div className="review">
      <h1>{props.title}</h1>
      <p>{props.rating}</p>
      <p>{props.content}</p>
    </div>
  );
}

export default Review;
