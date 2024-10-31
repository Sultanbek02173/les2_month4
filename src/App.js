import { useState } from "react";
import axios from 'axios';
import './style.css';
// import FirstSection from "./components/FirstSection";

function App() {
  // const [num, setNum] = useState(0); // хук useState
  // const [nu, setNu] = useState(0);
  
  // const nuChange = () => {
    //   setNu(nu + 1)
    //   console.log(nu);
    // }
    
    // const numChange = () => {
      //   setNum(num + 1)
      //   console.log(num);
      // }
  const [city, setCity] = useState('');
  const [data, setData] = useState();
  const KEY = '2eab2e128fa712ffc3bbf4f9c53e275d';

  const search = (city) => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
    .then(({data}) => {
      setData(data);
      console.log(data);
    }).catch((error) => {
      setData()
      console.log(error);
    })
  }


  return (
    <div>
      {/* <p>{nu}</p>
      <p>{num}</p>
      <button onClick={nuChange}>nu</button>
      <button onClick={numChange}>num</button> */}
      <h1>Hello React</h1>
      <input type="text" placeholder="Введите страну" onChange={(event) => {
        setCity(event.target.value);
        console.log(city);
      }} />
      <button type="submit" onClick={() => search(city)}>Поиск</button>
      {/* <FirstSection num={num} setNum={setNum}/> */}
      {
        data && (
          <div>
            <h1>{data.name}</h1>
            <h2>{((data.main.temp) - 272).toFixed(0)}</h2>
            <h2>{data.weather[0]?.main}</h2>  
          </div>
        )
      }
      
    </div>

  );
}

export default App;
