import React,{useEffect,useState} from 'react'
import instance from '../axios/axios';
import { useDispatch } from 'react-redux';
import {fetchProductsStart,fetchProductsSuccess,fetchProductsFailure} from '../redux/whishDetails'

const useWhishlist = () => {
    const [details,setDetails]=useState()
    const [error,setError]=useState()
    const[whishModal,setWhishModal]=useState(false)
    const dispatch=useDispatch()

    
    




    const handleWhishlist= async (e,id) => {
        e.preventDefault()
        const body={
            id
        }
        try {
          const response = await instance.post("/whishlist",body);
          console.log(response.data)
          if(response.data.status=="ok"){
            setDetails(response.data.whishlist)
            dispatch(fetchProductsSuccess(response.data.whishlist))
            setWhishModal(true)

          }else{
            setError(response.data.message);
          }
         
        } catch (error) {
          setError(error.message);
        }
      };
    
      useEffect(() => {
        handleWhishlist()
      }, []);

  return {
   handleWhishlist,details,error,whishModal
}
}

export default useWhishlist