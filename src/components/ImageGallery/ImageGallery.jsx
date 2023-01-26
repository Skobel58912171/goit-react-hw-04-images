import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ListGallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ListGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
