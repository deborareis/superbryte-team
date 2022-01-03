import React from 'react';

import './card.styles.scss';

export const Card = props => {
  console.log(props);
  return (
    <div
      className='card-container'
      onClick={() => props.showModal(props.user.id)}
    >
      <img src={props.user.imgUrl} alt={props.user.name} />
      <h2>{props.user.name}</h2>
      <p>{props.user.role}</p>
      <button
        value={props.user.id}
        type='button'
        className='more-info-button'
        onClick={() => props.showModal(props.user.id)}
      >
        Contact Info
      </button>
    </div>
  );
};
