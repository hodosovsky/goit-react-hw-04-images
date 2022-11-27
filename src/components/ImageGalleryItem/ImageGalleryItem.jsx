import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ alt, img, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ImageGalleryItemStyled className="gallery-item">
        <img src={img} alt={alt} onClick={handleModalToggle} />
        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            onModalClose={handleModalToggle}
          />
        )}
      </ImageGalleryItemStyled>
    </>
  );
};

// export default class lodImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   // handleModalOpen = () => {
//   //   this.setState({ isModalOpen: !this.state.isModalOpen });
//   // };

//   // handleModalClose = () => {
//   //   this.setState({ isModalOpen: false });
//   // };

//   handleModalToggle = () => {
//     this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
//   };
//   render() {
//     const { alt, img, largeImageURL } = this.props;
//     const { isModalOpen } = this.state;
//     return (
//       <ImageGalleryItemStyled className="gallery-item">
//         <img src={img} alt={alt} onClick={this.handleModalToggle} />
//         {isModalOpen && (
//           <Modal
//             largeImageURL={largeImageURL}
//             alt={alt}
//             onModalClose={this.handleModalToggle}
//           />
//         )}
//       </ImageGalleryItemStyled>
//     );
//   }
// }

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
