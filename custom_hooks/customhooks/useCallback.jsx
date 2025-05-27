import { useState } from "react"


//used to memorization
function Child({name}){
    console.log("Re-Rendered")
    return(
        <button onClick={Child}></button>
    )
}

function Test(){
    const [count, setCount]=useState(0);

    const handleClick=React.useCallback(()=>{
        console.log("Button clicked")
    },[]);

    return(
        <div>
            <Child onClick={handleClick}/>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Inc</button>
        </div>
    )
}
export default Test;