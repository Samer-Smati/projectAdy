import {SIGNIN,SIGNUP,CURRENT_USER} from '../ActionType/ActionType'
import axios from 'axios';

export const signUp = (userData) => async (dispatch) => {
    try {
        const user = await axios.post('http://localhost:5000/api/signup',userData)
        dispatch({
            type:SIGNUP,
            payload: user.data
        })
        dispatch(currenUser(user.data.token));
    } catch (error) {
        console.log(error);
    }
}

export const signIn = (userData) => async (dispatch) => {
    try {
        const user = await axios.post('http://localhost:5000/api/signin',userData)
        dispatch({
            type:SIGNIN,
            payload: user.data
        })
        dispatch(currenUser(user.data.token));
        setTimeout(() => {    
            window.location.reload();
        }, 500);
    } catch (error) {
        
    }
}

export const currenUser = (token) => async (dispatch) =>{
    const config = {
        headers: { authorization: token}
    }
    try {
        const user = await axios.get('http://localhost:5000/api/current',config)
        dispatch({
            type:CURRENT_USER,
            payload: user.data
        })
        localStorage.setItem('current_user',JSON.stringify(user.data))
    } catch (error) {
        console.log(error)
    }
}

export const addPost = (postData) => async (dispatch) =>{
    try {
        const post = await axios.post('http://localhost:5000/api/addPost',postData)
        dispatch({
            type:'ADD_POST',
            payload: post.data
        })
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}

export const getAllPosts = (postData) => async (dispatch) =>{
    try {
        const post = await axios.get('http://localhost:5000/api/getAllPosts')
        dispatch({
            type:'GET_ALL_POSTS',
            payload: post.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getOneUser = (ID) => async (dispatch) =>{
    try {
        const user = await axios.get('http://localhost:5000/api/getAllPosts',ID)
        dispatch({
            type:'GET_ONE_USER',
            payload: user.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const addComment = (comment) => async (dispatch) =>{
    console.log(comment)
    try {
        const comments = await axios.post('http://localhost:5000/api/addComment',comment)
        dispatch({
            type:'POST_COMMENT',
            payload: comments.data
        })
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}
export const getAllComments = () => async (dispatch) =>{
    try {
        const comments = await axios.get('http://localhost:5000/api/getAllComments')
        dispatch({
            type:'GET_ALL_COMMENTS',
            payload: comments.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const commentDeleted = (ID) => async (dispatch) =>{
    try {
        const comment = await axios.post(`http://localhost:5000/api/deleteComment/${ID}`)
        dispatch({ 
            type:'DELETE_COMMENT',
             payload: comment.data
            })
            window.location.reload();
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (ID) => async (dispatch) =>{
    try {
        const post = await axios.post(`http://localhost:5000/api/deletePost/${ID}`)
        dispatch({ 
            type:'DELETE_POST',
             payload: post.data
            })
            window.location.reload();
    } catch (error) {
        console.log(error)
    }
}


