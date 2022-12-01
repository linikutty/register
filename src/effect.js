import React ,{useEffect,useState} from 'react';

const Effect=()=>{
    const [values,setValues]= useState([]);
    const[name,setNames]=useState("");

    useEffect(()=>{
        //console.log("helo");
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        
            .then(response => response.json())
            .then(json => setValues([json]))
    },[]);
    return(
        <>
        {
            values.map(e => <h1>{e.id}</h1>)
        }
        {name}
        <button onClick={()=>setNames("shali")}>add new</button>
        </>
    );
      

}
export default Effect