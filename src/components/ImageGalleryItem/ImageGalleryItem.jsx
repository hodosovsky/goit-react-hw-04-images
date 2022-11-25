import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
  render() {
    const { alt, img, largeImageURL } = this.props;
    const { isOpen } = this.state;
    return (
      <ImageGalleryItemStyled className="gallery-item" onClick={this.toggle}>
        <img src={img} alt={alt} />
        {isOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            onModalClose={this.toggle}
          />
        )}
      </ImageGalleryItemStyled>
    );
  }
}

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
