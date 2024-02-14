import axios from "axios";

const BASE_URL = 'https://65cd2a62dd519126b8403437.mockapi.io/';

async function CarsData(carId){
    return await axios.get(`${BASE_URL}${carId}`)
    .then((res) => {
        return Response.data
    })
}


export {CarsData};