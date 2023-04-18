import { useState } from "react"
import { useQueries } from "react-query";
import { fetchRates, fetchSymbols } from "../../Converter/api/fetchData";

export const useCurrency = () => {
    const [amount, setAmount] = useState(0);
    const [currencyOne, setCurrencyOne] = useState("MXN");
    const [currencyTwo, setCurrencyTwo] = useState("USD");

    const [ratesData, symbolsData] = useQueries(
        [
            {
                queryKey: ["rates", currencyOne],
                queryFn: () => fetchRates(currencyOne),
                staleTime: Infinity,
                select: ({rates, date, timestamp}) => { //With this we manipulate the data after we fetch it. query.data.rates/date/etc.
                    return { rates, date, timestamp };
                },
                keepPreviousData: true //We avoid the loading screen when changing the first currency
            },
            {
                queryKey: ["symbols"],
                queryFn: fetchSymbols,
                staleTime: Infinity,
                select: ({symbols}) => {
                    return symbols;
                }
            }
        ]
    );

    const isLoading = [ratesData, symbolsData].some((query) => query.isLoading); //If any or both of the fetches are loading we activate a single is Loading
    const isError = [ratesData, symbolsData].some((query) => query.isError); //if isError === true in any (some) of the queries, return isError = true.
    
    const convertedAmount = (ratesData.data?.rates[currencyTwo] * amount).toFixed(2); //round to 2 decimals.

    const date = new Date(ratesData.data?.date).toLocaleDateString(); // We use ? to make sure we have data before indexing it.
    const time = new Date(ratesData.data?.timestamp).toLocaleDateString("en-US"); //language in which the timestamp will be shown.

    const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : {}; //If we have it ? we return an array with the data, if not : we return an empty object.


    return {
        amount, 
        setAmount, 
        currencyOne, 
        setCurrencyOne, 
        currencyTwo, 
        setCurrencyTwo, 
        ratesData, 
        symbolsData, 
        currencyList,
        convertedAmount,
        isError,
        isLoading,
        date, 
        time
    };
}