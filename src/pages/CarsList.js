import React from "react"
import data from '../src/InfoCars/data.json';

const CarsList= () =>{
    return data.map((cars) => {
     return (
       <div 
       key={cars.id}
       className="card mx-auto my-2" 
       style={{width: '600px'}}>
         <img src={cars.img} className="card-img-top" alt={cars.make} />
           <button className='button' type='button'>{}</button>
         
         <div className="card-body">
           <h5 className="card-title">{cars.make} <span>{cars.model}</span>, {cars.year}</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="https" className="btn btn-primary">Learn more</a>
         </div>
       </div>
     )    
   })
 } 

 export default CarsList;