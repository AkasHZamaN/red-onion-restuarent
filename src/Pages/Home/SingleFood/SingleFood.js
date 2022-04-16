
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SingleFood = () => {
    const {foodId} = useParams();
    const [meals, setMeals] = useState({});
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/AkasHZamaN/red-onion-restuarent/main/public/launch.json')
        .then(res => res.json())
        .then(data => {
            const meal = data?.find(item=>item.id === parseInt(foodId));
            setMeals(meal)
            // console.log(meal)
        })
    },[foodId])
    
        
    
    // console.log(launch);

    return (
        <div>
            <h1>Single food ID : {foodId}</h1>
            <p>{meals?.name}</p>
            
            
        </div>
    );
};

export default SingleFood;