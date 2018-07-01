import { FETCH_PROFILE, NEW_PROFILE, FETCH_REQUEST } from './types'
import axios from 'axios';

export const fetchRequest= () => dispatch => {
    console.log("Requesting...");
    dispatch ({
        type: FETCH_REQUEST,
        payload: {},
    })
};

export const fetchProfile = (username) => dispatch => {
    console.log("fetching...");
    axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
            dispatch ({
                type: FETCH_PROFILE,
                payload: response.data,
            })
        });
};

