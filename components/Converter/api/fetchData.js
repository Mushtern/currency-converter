import {instance} from "../../../lib/axios";

export const fetchRates = async (currencyOne) => {
    const {data} = await instance.get(
        `/latest?base=${currencyOne}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    return data;
};

export const fetchSymbols = async () => {
    const {data} = await instance.get(
        `symbols?apikey=${import.meta.env.VITE_API_KEY}`
    );
    return data;
};