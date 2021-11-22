//do we need to pull the user list and then make sure the user exists?
export const instructorlogin = (creds) => {
  //check creds
  console.log("instructor logged in");
  localStorage.setItem("Itoken", "helloooooooIAmTheInstructorToken");
  window.location.href = "/instructor";
};

export const clientLogin = (creds) => {
  //check creds
  console.log("client logged in");
  localStorage.setItem("Ctoken", "yooooImTheClientWasGud");
  window.location.href = "/classes";
};

export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};
