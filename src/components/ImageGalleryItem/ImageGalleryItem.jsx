// import PropTypes from 'prop-types';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { ItemGallery, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ItemGallery onClick={() => setIsModalOpen(true)}>
        <Image src={image.webformatURL} />
      </ItemGallery>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          largeUrl={image.largeImageURL}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
