import React from 'react';
import style from './style.css'

const UserCard = props => {
  const { user } = props;
  const {name, job, email, photo='https://pskgu.ru/app/pskgu/layouts/images/nophoto.png'} = user;
  return (
    <div className='user-card'>
      <div className='photo'>
        <img src={photo}/>
      </div>
      <h2>{name}</h2>
      <p>Должность: {job}</p>
      {email && 
        <a href={`mailto:${email}`}>{email}</a>
      }
    </div>
  );
};

export default UserCard;
  