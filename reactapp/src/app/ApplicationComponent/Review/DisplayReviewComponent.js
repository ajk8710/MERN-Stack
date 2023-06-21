import React from "react";

let DisplayReview = (props) => {
    
    let username = props.username;
    let rating = props.rating;
    let contents = props.contents;
    let date = new Date(props.date);

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[date.getMonth()];
    let dateOfMonth = date.getDate();
    let year = date.getFullYear();

    return (
        <>
            <h4><b>{username} reviewed on {month} {dateOfMonth} {year}</b></h4>
            <h5><b>Rating: {rating}</b></h5>
            <h5><b>Comments: {contents}</b></h5>
        </>
    )
}

export default DisplayReview;
