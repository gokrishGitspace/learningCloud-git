import { useEffect,useState } from "react";

function App() {
 const [data,setdata]=useState([])
 useEffect(async()=>{
  const res=await fetch('https://learningcloud-git-2.onrender.com/api/health')
  const data=await res.json()
  setdata(data)
 }
,[]);
 
  return (
    <>
      {JSON.stringify(data)}
    </>
  );
}

export default App;