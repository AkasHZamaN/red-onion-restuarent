import React, { useEffect, useState } from 'react';
import DinnerFood from '../DinnerFood/DinnerFood';

const Dinner = () => {
    const [dinnerFoods, setDinnerFoods] = useState([]);
    useEffect(()=>{
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setDinnerFoods(data))
    }, [])
    return (
        <section>
            <article className='container mx-auto row row-cols-1 row-cols-lg-3 g-4'>
                {
                    dinnerFoods.map(dinnerFood => <DinnerFood
                    key={dinnerFood.id}
                    dinnerFood={dinnerFood}
                    ></DinnerFood>)
                }
            </article>
        </section>
    );
};

export default Dinner;