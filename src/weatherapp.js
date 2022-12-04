import React, {  useState } from 'react';

import './index.css';


const Weathers = () => {
    const apiKey = '0f7648e3bb45f233b1b09cb1a8ce4157';
    const[weatherData,updateWeather]=useState([{}]);
    const[city,updatecity]=useState();
    
  // const weather=[];
  // var city_name=[];
  // var season=[];
  // console.log(season);
  // useEffect(()=>{
  //   localStorage.setItem("weather",JSON.stringify(season))
  // },[weatherData])
  

  
  const getWeather=(e)=>{
    if(e.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response=>response.json()).then(data=>{
          updateWeather(data)
          
      
          // localStorage.setItem("datass",JSON.parse(data));
          // var rece=[];
          // city_name.push({

          // })
          // localStorage.setItem("city_name",JSON.stringify(data.name));
          // localStorage.setItem("temp",JSON.stringify(data.main.temp));
          // localStorage.setItem("climate",JSON.stringify(data.weather[0].main));
          //console.log(props);
          
          var recent=[];
          
          recent.push({
            city_name:data.name,
            
             temp:data.main.temp,
             climate:data.weather[0].main,

          })
          console.log(recent);
          localStorage.setItem("weather",JSON.stringify(recent));
          // console.log(recent);
          updatecity("")
        })
        
      
    }
}

const celcius = Math.round((weatherData?.main?.temp-32)/1.8);



return (
    <div className='container mt-5 weather_display'>
      <div className='row ' >
        <div className='col-4 weather mt-5' key={1}>
          <h1 className='head'>Weather Application</h1>
              <div>
                    <img className='front_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAgdWT_qxf3z-q4TZjnfz-NG7cQaHA9wLRQ&usqp=CAU"/>
                    <p className='para'>Find Weather of your city</p>
                    <div className='form' >
                        <input className='search' placeholder='city' onChange={e => updatecity(e.target.value)} value={city} onKeyPress={getWeather}/>
                        <button className='city_btn'>search</button>
                    
                    </div>
                        {typeof weatherData.main === 'undefined' ?(
                        <p>Enter city</p>
                    ) : (
                        <div className='show_weather'>
                            <p className='para_p text-center'>{weatherData.name}</p>
                            {/* <p>{Math.round(weatherData.main.temp)}*F</p> */}
                            <p className={(typeof weatherData.main!="undefined")?((celcius>16)?"cloudy":"strom"):'storm'}></p>
                            <p className='para_p text-center'>{celcius}°C</p>
                            <p className='para_p text-center'>{weatherData.weather[0].main}</p>
                            
                            

                              
                        </div>
                    )}
                   
        
                   
                </div>
            </div>
        </div>
        <div className='table'>
            <table className="table  table-striped">
                <thead>
                  <tr>
                    <th scope="col">name</th>
                    <th scope="col">temperator</th>
                    <th scope="col">climate</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                
                </tbody>
            </table>
        </div>
    </div>
  )
  }
  export default Weathers

  