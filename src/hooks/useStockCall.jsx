import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchStart } from '../features/authSlice'
import { getStockSuccess } from '../features/stockSlice'
import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useStockCall = () => {

    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token)

    const getStockData = async (endpoint) =>{
        dispatch(fetchStart());

        try {
            
            const {data} = await axios(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })

            console.log(data);
            dispatch(getStockSuccess({stock:data.data, endpoint}))
        } catch (error) {
            console.log(error);
            
        }
    }

    const postNewFirm = async (firmInfo) => {
        dispatch(fetchStart());
    
        try {
            const { data } = await axios.post(
                `${BASE_URL}firms`, 
                firmInfo, 
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }
        );
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
  return {getStockData, postNewFirm}
}

export default useStockCall