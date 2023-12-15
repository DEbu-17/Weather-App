import React, { useState } from "react";

const Weather = () => {
const [latitude, setLatitude] = useState(0);
const [longitude, setLongitude] = useState(0);
const [hemisphere, setHemisphere] = useState("");
const [month, setMonth] = useState(6);
  function fetchData(){
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude)

            if (position.coords.latitude > 0) {
              setHemisphere("southern Hemisphere");
            } else if (position.coords.latitude < 0) {
              setHemisphere("northern hemisphere");
            } else {
              setHemisphere("equator");
            }
        })
    }
  }

    return (
      <div>
        <button onClick={fetchData}>Fetch</button>
        <p>latitude:{latitude}</p>
        <p>longitude:{longitude} </p>
        <p>Hemisphere:{hemisphere}</p>
        <p>Month:{month}</p>

        <div>{hemisphere && (hemisphere == "southern Hemisphere" && (month>=4 && month<=8)) && (<div>"summer"</div>) }
        </div>
      </div>
    );
}

export default Weather