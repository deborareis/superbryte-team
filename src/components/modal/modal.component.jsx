import { ModalCard } from '../modal-card/modal-card.component';
import './modal.styles.scss';

const Modal = ({ currentUser, users, handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  let chosenUser = {};
  console.log('xxx', currentUser, users);
  users.map(user => (user.id === currentUser ? (chosenUser = user) : null));
  console.log({ chosenUser });
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <ModalCard {...chosenUser} />
        {children}
        <button
          type='button'
          className='modal-close-button'
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
