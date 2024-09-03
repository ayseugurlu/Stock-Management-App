import axios from "axios"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice";


const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const register = async (userInfo) => {
        dispatch(fetchStart())

        try {
            
            const {data} = await axios.post("https://19110.fullstack.clarusway.com/users" , userInfo)
            console.log(data);

            dispatch(registerSuccess(data))
            navigate("/stock")


        } catch (error) {
            dispatch(fetchFail())
        }
    }

    const login = async (userInfo) => {
        dispatch(fetchStart())

        try {
            
            const {data} = await axios.post("https://19110.fullstack.clarusway.com/auth/login" , userInfo)
            console.log("logindata:",data);

            dispatch(loginSuccess(data))

            console.log(dispatch(loginSuccess(data)));
            navigate("/stock")


        } catch (error) {
            dispatch(fetchFail())
        }
    }

    return {register , login}
}

export default useAuthCall;