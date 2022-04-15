import React, { useEffect, useState } from 'react';
import LaunchFood from './LaunchFood/LaunchFood';

const Launch = () => {
    const [launch, setLaunch] = useState([]);

    useEffect( ()=>{
        fetch('launch.json')
        .then(res => res.json())
        .then(data => setLaunch(data))
    }, [])

    return (
        <section>
            <article className='container mx-auto row row-cols-1 row-cols-lg-3 g-4'>
                {
                    launch.map(launchFood => <LaunchFood
                    key={launchFood.id}
                    launchFood={launchFood}
                    ></LaunchFood>)
                }
            </article>
        </section>
    );
};

export default Launch;