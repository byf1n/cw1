import React, {useEffect, useState} from 'react';

const Compon = () => {
    let [flightsList, setFlightsList] = useState([]);
    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json()).then(flights => {
            console.log(flights);
            setFlightsList(flights.filter(flight => flight.launch_year !== '2020'));

        })
    }, []);
    return (

        <div>
            {
                flightsList.map(flight =>
                    <div className={'main'} key={flight.flight_number}>
                        <div className={'text'}>
                            <h1>{flight.mission_name}</h1>
                            <div>{flight.launch_year}</div>
                        </div>
                        <div className={'pic'}>
                            <img src={flight.links.mission_patch} />
                        </div>

                    </div>


                )
            }
        </div>
    );
};

export default Compon;