import { signUpSuccess,signUpFailure,signInSuccess,signInFailure } from "../redux/userDetails";
  import { useAuthAPI } from "./useAuthApi";
  
  export const useAuth = () => {
    const signup = useAuthAPI("/signup", signUpSuccess, signUpFailure);
    const signin = useAuthAPI("/signin", signInSuccess, signInFailure);
  
    return { signup, signin };
  };
  