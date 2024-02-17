import React, { useState } from 'react';
import {
  BtnCard,
  BtnHeart,
  ImgCar,
  TextCard,
  TitleCard,
  WrapCarCard,
  WrapTextCard,
  WrapTitleCard,
} from './Car.styled';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addCars, deleteCars } from '../redux/server';
import { createPortal } from 'react-dom';
import CarUp from './CarUp';

export default function CarCard({item}){
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
   
    const handleLikes = evt => {
        const idCar = Number(evt.currentTarget.id);

        if(!item.completed){
            dispatch(addCars(idCar));
        } else {
            dispatch(deleteCars(idCar));
        }
    };

    let address = item.address.split(',');

    return (
        <>
         <WrapCarCard id={item.id}>
            <ImgCar src={item.img} alt={item.make} />
            <BtnHeart type="button" onClick={handleLikes} id={item.id}>
                {item.completed ? (
                    <BsHeartFill className='icon-heart-fill'/>
                ) : (
                    <BsHeart className='icon-heart' />
                )}
            </BtnHeart>
            <WrapTitleCard>
                <TitleCard>
                    {item.make} <span className='span'>{item.model}</span>, {item.year}
                </TitleCard>
                <TitleCard>{item.rentalPrice}</TitleCard>
            </WrapTitleCard>
            <WrapTextCard>
                <TextCard>
                    <p className='text border'>{address[1]}</p>
                    <p className='text border'>{address[2]}</p>
                    <p className='text last'>{item.rentalCompany}</p>
                </TextCard>
                <TextCard>
                    <p className='text border last'>{item.type}</p>
                    <p className='text border'>{item.dispatch}</p>
                    <p className='text last'>{item.accessories[0]}</p>
                </TextCard>
            </WrapTextCard>
            <BtnCard type='button' id={item.id}>
                Learn more
            </BtnCard>
            {showModal &&
            createPortal(
                <CarUp item={item} onClose={() => setShowModal(false)} />,
            )}
         </WrapCarCard>
        </>
    );
}
