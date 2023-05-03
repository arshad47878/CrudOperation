import axios from "axios";
// import {ActionTypes} from "../By-redux-thunk";

export const fetchProducts = async()=> {

    const response = await axios.get("/products")
    console.log(response)
    return{
        // types:ActionTypes.FETCH_PRODUCTS,
        payload: response,
    }
}