import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Modal.styled';

const rootModal = document.getElementById('modal-root');

export class Modal extends Component {
  handleBackdropClose = event => {
    if (event.currentTarget === event.target) {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeKey);
  }
  handleEscapeKey = event => {
    if (event.key === 'Escape') {
      this.props.onModalClose();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;
    return createPortal(
      <>
        <Overlay className="overlay" onClick={this.handleBackdropClose}>
          <div className="modal">
            <img src={largeImageURL} alt={alt} />
          </div>
        </Overlay>
      </>,
      rootModal
    );
  }
}

Modal.propType = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
