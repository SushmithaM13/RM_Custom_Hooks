import { useEffect, useState } from "react";

function useFetch(url){
    const [data,setData]=useState(null);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false);

    useEffect(()=>{
        
    },[url])
}
export default useFetch;