import { useState  , useEffect } from "react";

const Raghad= () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
   
    useEffect(()=>{
      const timeOut = setTimeout(()=>{console.log("effect");},2000);
    return()=>{
clearTimeout(timeOut);
    }; },[name]);
   
    return (
        <div className="App">
          <label>Name </label>
          <input onChange={(e) => setName(e.target.value)} value={name} />
          <br />
          <label>phone </label>
          <input onChange={(e) => setPhone(e.target.value)} value={phone} />
    
          <p>
            name: {name} <br /> phone: {phone}
          </p>
        </div>
      );
    }

   
export default Raghad ;