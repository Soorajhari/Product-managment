import React from 'react'
import { useDispatch } from 'react-redux'
import {logoutFailure,logoutSuccess} from '../redux/userDetails'
import { removeData } from '../functions/localStorage';


const useLogout = () => {
    const dispatch = useDispatch();
    return async () => {
      try {
        removeData();
        dispatch(logoutSuccess());
      } catch (error) {
        console.log(error.message);
        dispatch(logoutFailure(error.message));
      }
    };
  };
  
  export default useLogout;
  