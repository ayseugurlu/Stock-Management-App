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

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector((store)=> store.auth)


  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(`${BASE_URL}users`, userInfo);
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
      const { data } = await axios.post(`${BASE_URL}auth/login`, userInfo);
      console.log("logindata:", data);

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

        await axios(`${BASE_URL}auth/logout` , {
            headers:{
                Authorization: `Token ${token}`
            }
        })

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
