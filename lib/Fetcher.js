
import useSWR from "swr";

const baseUrl = "http://localhost:3000";
const response = (...args) => fetch(...args).then(res => res.json());

const Fetcher = (endpoint) => {
    const {data, error} = useSWR(`${baseUrl}/${endpoint}`, response);

    return{
        data: data,
        isLoading: !error && !error,
        isError : error
    }
} 


export default Fetcher