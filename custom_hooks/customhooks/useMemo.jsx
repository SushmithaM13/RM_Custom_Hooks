import { useState } from "react"


//used to memorization
const Child=React.memo(function Child({name}){
    console.log("Re-Rendered")
    return(
        <p>hello {name}</p>
    )
})

function Test(){
    const [count, setCount]=useState(0);

    return(
        <div>
            <Child name="sushma"/>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Inc</button>
        </div>
    )
}
export default Test;