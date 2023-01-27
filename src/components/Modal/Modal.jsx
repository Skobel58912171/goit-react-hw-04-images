import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Backdrop, ModalContainer, ImgLarge } from './Modal.styled';

export const Modal = ({ largeUrl, onClose }) => {
  useEffect(() => {
    const onCloseByEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [onClose]);

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer>
        <ImgLarge src={largeUrl} />
      </ModalContainer>
    </Backdrop>
  );
};

Modal.propTypes = {
  largeUrl: PropTypes.string.isRequired,

  onClose: PropTypes.func.isRequired,
};
