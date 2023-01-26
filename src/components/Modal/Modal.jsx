import PropTypes from 'prop-types';
import { Component } from 'react';
import { Backdrop, ModalContainer, ImgLarge } from './Modal.styled';
export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEsc);
  }
  onCloseByEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { largeUrl, tags, onClose } = this.props;
    return (
      <Backdrop onClick={onClose}>
        <ModalContainer>
          <ImgLarge src={largeUrl} alt={tags} />
        </ModalContainer>
      </Backdrop>
    );
  }
}

// Modal.propTypes = {
//   largeUrl: PropTypes.string,
//   tags: PropTypes.string,
// };
