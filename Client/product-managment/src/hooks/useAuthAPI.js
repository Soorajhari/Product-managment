import instance from "../axios/axios";
import { useDispatch } from "react-redux";
import { storeUserInLocalStorage } from "../functions/localStorage";
import { useNavigate } from "react-router-dom";

export const useAuthAPI = (url, successAction, failureAction) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateTo = url === "/signup" ? "/signin" : "/home";
  return async (data) => {
    try {
      const response = await instance.post(url, data);
      if (url === "/signin") {
        storeUserInLocalStorage(response.data);
      }
      dispatch(successAction(response.data));
      navigate(navigateTo);
    } catch (error) {
      const { response } = error;
      dispatch(failureAction(response?.data?.message));
      throw response;
    }
  };
};
