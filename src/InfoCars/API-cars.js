import axios from "axios";

axios.defaults.baseURL = 'https://65cd2a62dd519126b8403437.mockapi.io/';

export const CarsData = async() => {
   const {data} = await axios.get(`/cars`);

   return data;
};



