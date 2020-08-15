import axios from 'axios';
import { GET_USERS, DELETE_USER, ADD_USER } from './types';

//GET USERS

export const getUsers = () => dispatch => {
    axios.get('/api/gens/')
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//DELETE USER

export const deleteUser = (id) => dispatch => {
    axios.delete(`/api/gens/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_USER,
                payload: id
            });
        }).catch(err => console.log(err));
};

//ADD USERS

export const addUser = (user) => dispatch => {
    axios.post('/api/gens/', user)
        .then(res => {
            dispatch({
                type: ADD_USER,
                payload: res.data
            });
        }).catch(err => console.log(err));
};