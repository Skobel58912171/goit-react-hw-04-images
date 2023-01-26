// import PropTypes from 'prop-types';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { ItemGallery, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
  };

  state = {
    isModalOpen: false,
  };
  handleToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };
  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <>
        <ItemGallery onClick={this.handleToggleModal}>
          <Image src={webformatURL} alt={tags} />
        </ItemGallery>
        {isModalOpen && (
          <Modal onClose={this.handleToggleModal} largeUrl={largeImageURL} />
        )}
      </>
    );
  }
}

// ImageGalleryItem.propTypes = {
//   image: PropTypes.object.isRequired,

// };
