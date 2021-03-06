import axios from 'axios';
import { GET_USERS, DELETE_USER, ADD_USER, GET_ERRORS } from './types';
import { createMessage, returnErrors } from './messages';

//GET USERS

export const getUsers = () => dispatch => {
    axios.get('/api/gens/')
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//DELETE USER

export const deleteUser = (id) => dispatch => {
    axios.delete(`/api/gens/${id}`)
        .then(res => {
            dispatch(createMessage({ deleteUser: "user deleted" }));

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
            dispatch(createMessage({ addUser: "user added" }));
            dispatch({
                type: ADD_USER,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};