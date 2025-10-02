
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.10.1/v1/currencies/${currency}.json`)
        .then((res) => res.json()) //data ko json format me convert kiye hai
        .then((res) => setData(res[currency]))

    }, [currency])
    return data
}

export default useCurrencyInfo;





