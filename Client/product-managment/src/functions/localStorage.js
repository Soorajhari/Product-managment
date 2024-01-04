export const storeUserInLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };