import axios from 'axios';

export async function getProductsByCategory (category) {
    return axios.get(`https://dummyjson.com/products/category/${category}`)
}

export async function getAllCategories () {
    return axios.get('https://dummyjson.com/products/categories')
}