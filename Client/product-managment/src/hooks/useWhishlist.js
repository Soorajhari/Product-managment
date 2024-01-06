import React,{useEffect,useState} from 'react'
import instance from '../axios/axios';
import { useDispatch } from 'react-redux';
import {fetchProductsStart,fetchProductsSuccess,fetchProductsFailure} from '../redux/whishDetails'

const useWhishlist = () => {
    const [details,setDetails]=useState()
    const dispatch=useDispatch()


    const handleWhishlist= async (e,id) => {
        e.preventDefault()
        const body={
            id
        }
        try {
          const response = await instance.post("/whishlist",body);
          console.log(response.data)
          setDetails(response.data.whishlist)
          dispatch(fetchProductsSuccess(response.data.whishlist))
        } catch (error) {
          setError(error.message);
        }
      };
    
      useEffect(() => {
        handleWhishlist()
      }, []);

  return {
   handleWhishlist,details
}
}

export default useWhishlist