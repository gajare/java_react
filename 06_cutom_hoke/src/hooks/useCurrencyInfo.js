import {useEffect,useState} from 'react';

function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.4.5/v1/currencies/${currency}.json`)
        .then((res)=>{resizeBy.json()})
        .then((res)=>{setData(res[currency])})
        console.log(data);
        
    },[currency])
    console.log(data);
    
    return data;

}


export default useCurrencyInfo;
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.4.5/v1/currencies/usd.json