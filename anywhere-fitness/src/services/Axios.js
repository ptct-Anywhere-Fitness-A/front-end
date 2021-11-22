import axios from "axios";

const instructorAuth = () => {
  const token = localStorage.getItem("Itoken");

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const clientAuth = () => {
  const token = localStorage.getItem("Ctoken");

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { instructorAuth, clientAuth };
