import React, { useEffect, useState } from "react";
import BreakfastFood from "../BreakfastFood/BreakfastFood";

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState([]);

  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfast(data));
  }, []);

  return (
    <section className="container">
      <article className="row row-cols-1 row-cols-lg-3 g-4 p-4 ">
        {
            breakfast.map((breakFood) => (
            <BreakfastFood
                key={breakFood.id}
                breakFood={breakFood}
            ></BreakfastFood>
        ))}
      </article>
    </section>
  );
};

export default Breakfast;
