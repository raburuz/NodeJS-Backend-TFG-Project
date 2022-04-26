import { fetchSinToken, fetchConToken} from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { useState } from 'react';



export const startLogin = ( username,email, password ) => {
    return async( dispatch,getState ) => {

        const resp = await fetchSinToken( 'auth/user/login', { username, email, password }, 'GET' );
        const body = await resp.json();
        const {errors} = body;
        const message = errors.errors[0].msg;
        
        console.log(body);
        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
           
        } else {
            dispatch(fetchUsersErrors(message));

        }
        

    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });



const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

const fetchUsersErrors = (errors) =>( {
    type: types.fetchUsersErrors,
    payload: errors


})

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })