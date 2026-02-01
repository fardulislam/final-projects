import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Bannder2/Banner2";
import Banner1 from "../Banner1/Banner1";
import Brand from "../Brand/Brand";
import Review from "../Review/Review";

const Home = () => {

    // const reviewdata = fetch('/reviews.json').then(res=>res.json())
    
const [review , setreview]=useState([])

useEffect(()=>{
    fetch('/reviews.json')
    .then(res=>res.json())
    .then(data=>{
       console.log("Is array?", Array.isArray(data))
         setreview(data);
    })
},[])
  return (
    <div>
      <Banner></Banner>
      <Banner1></Banner1>
      <Brand></Brand>
      <Banner2></Banner2>
      <Review review={review}></Review>
    </div>
  );
};

export default Home;
