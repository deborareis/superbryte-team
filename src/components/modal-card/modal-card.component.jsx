import React from 'react';

import { ReactComponent as LinkedinLogo } from './../../assets/fa-linkedin-brands.svg';

import './modal-card.styles.scss';

export const ModalCard = user => {
  console.log('ccc', user);
  return (
    <div className='modal-card-container'>
      <a href={user.website} target='_blank'>
        <LinkedinLogo className='linkedin-logo' />
      </a>
      <img src={user.imgUrl} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <div className='more-info-container'>
        <p>
          <b>Email: </b>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <p>
          <b>Phone: </b>
          {user.phone}
        </p>
        <p>
          <b>Location: </b>
          {user.city}
        </p>
      </div>
    </div>
  );
};

/*

{
  "id": 2,
  "name": "Sophie von Schierstaedt ",
  "username": "Sophie",
  "email": "sophie@superbryte.com",
  "imgUrl": "https://i.ibb.co/z45bZvD/sophie.jpg",
  "role": "Lead Training Specialist",
  "city": "Berlin",
  "geo": {
    "lat": "52.5065133",
    "lng": "13.1445545"
  }
  "phone": "+49 123456789",
  "website": "https://www.linkedin.com/in/sophievonwedel/"
}

*/
