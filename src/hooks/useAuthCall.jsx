import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios, { axiosPublic } from "./useAxios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector((store)=> store.auth)
  

  const axiosWithToken = useAxios()


  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
    
      const {data} = await axiosPublic.post("users/", userInfo)
      console.log(data);

      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed")
      navigate("/stock");

    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed")
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());

    try {
   
      const {data} = await axiosPublic.post("auth/login",userInfo)

      dispatch(loginSuccess(data));

      console.log(dispatch(loginSuccess(data)));
    

      toastSuccessNotify("Login performed")
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login can not be performed")
    }
  };

  const logout = async () => {

    dispatch(fetchStart())

    try {

        await axiosWithToken.get("auth/logout/")

        dispatch(logoutSuccess())
        toastSuccessNotify("Logout performed")
        navigate("/")

        
    } catch (error) {
        dispatch(fetchFail())
        console.log(error);
        toastErrorNotify("Logout can not be performed")
        
    }
  }

  return { register, login, logout};
};

export default useAuthCall;
