import axios from "axios"
import dataBase from "../../db";

export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload,
})

export const fetchCoffee = () => (dispatch) => {
    dispatch(setLoaded(false));
    dispatch(setCoffee(dataBase.coffeeData));
};

export const setCoffee = (items) => ({
    type: 'SET_COFFEE',
    payload: items
})