import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeFoods from "./HomeFoods/HomeFoods";
import Services from "./Services/Services";

const Home = () => {
  const [homeFoods, setHomeFoods] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setHomeFoods(data));
  }, []);

  useEffect( ()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  return (
    <section>
      <article className="container mx-auto mt-3 row row-cols-1 row-cols-lg-3 g-4 p-4">
        {homeFoods.map((homefood) => (
          <HomeFoods key={homefood.id} homefood={homefood}></HomeFoods>
        ))}
      </article>
      <p className="text-center ">
        <button className="border-0 text-white bg-danger bg-opacity-75 fw-bold px-5 py-2 mb-5 rounded-3 ">
          Proceed To Checkout{" "}
          <ArrowRightIcon
            style={{ wide: "15px", height: "25px" }}
          ></ArrowRightIcon>
        </button>
      </p>

      {/* why you choose us*/}
          <article className="container px-5">
            <h3>Why You Choose Us?</h3>
            <small>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</small>
          </article>
          <article className="container mx-auto d-flex mt-2 row row-cols-1 row-cols-lg-3 g-4 p-4">
            {
              services.map(service => <Services 
              key={service.id}
              service={service}
              ></Services>)
            }
          </article>
      
    </section>
  );
};

export default Home;
