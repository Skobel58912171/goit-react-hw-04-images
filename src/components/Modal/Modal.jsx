import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Backdrop, ModalContainer, ImgLarge } from './Modal.styled';

export const Modal = ({ largeUrl, tags, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', onCloseByEsc);
  });

  useEffect(() => {
    window.removeEventListener('keydown', onCloseByEsc);
  });

  const onCloseByEsc = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer>
        <ImgLarge src={largeUrl} alt={tags} />
      </ModalContainer>
    </Backdrop>
  );
};

Modal.propTypes = {
  largeUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
