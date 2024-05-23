import axios from "axios";

export function getAllProducts () {
    return axios.get("https://dummyjson.com/products")
}