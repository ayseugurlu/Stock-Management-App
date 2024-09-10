import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import { getStockSuccess } from "../features/stockSlice";
import axios from "axios";
import useAxios from "./useAxios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useStockCall = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const axiosWithToken = useAxios();

  const getStockData = async (endpoint) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.get(endpoint);

      console.log(data);

      dispatch(getStockSuccess({ stock: data.data, endpoint }));

    } catch (error) {

      console.log(error);
    }
  };


  const deleteStockData = async (endpoint, id) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.delete(`${endpoint}/${id}`)
    } catch (error) {
      console.log(error);
    } finally {
      getStockData(endpoint);
    }
  };

  const postStockData = async (endpoint, info) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.post(endpoint,info)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
    } finally {
      getStockData(endpoint);
    }
  };


  const putStockData = async (endpoint, info) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.put(`${endpoint}/${info._id}`,info)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
    } finally {
      getStockData(endpoint);
    }
  };

  return { getStockData, deleteStockData,postStockData,putStockData};
};

export default useStockCall;
