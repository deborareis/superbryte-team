import React from 'react';
import Modal from '../modal/modal.component';

import { Card } from '../card/card.component';

import './card-list.styles.scss';

export const CardList = props => {
  console.log('aaa', props.data.currentUser);
  return (
    <div>
      <div className='card-list'>
        {props.users.map(user => (
          <Card key={user.id} user={user} {...props} />
        ))}
      </div>
      <Modal
        {...props}
        currentUser={props.data.currentUser}
        show={props.data.show}
        handleClose={props.hideModal}
      />
    </div>
  );
};
