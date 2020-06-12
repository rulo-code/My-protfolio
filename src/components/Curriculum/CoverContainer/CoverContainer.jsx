import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading/Loading';
import Modal from '../../Modal/Modal';
import './CoverContainer.scss';
import Video from '../../Video/Video';

const CoverContainer = () => {
  const user = useSelector((state) => state.user.user);

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='cover-container'>
      <img onClick={handleClose} src={user.cover} alt='Profile' />
      <div className='loading-container'>
        <Loading />
      </div>
      <Modal onClose={handleClose} isOpen={isOpen}>
        <Video onClose={handleClose} />
      </Modal>
    </div>
  );
};
export default CoverContainer;
