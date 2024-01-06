export const storeUserInLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  export const removeData = () => {
    localStorage.clear();
  };
  