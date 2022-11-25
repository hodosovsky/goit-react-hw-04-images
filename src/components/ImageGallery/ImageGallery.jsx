import { Component } from 'react';

import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { RotatingLines } from 'react-loader-spinner';
import { Button } from 'components/Button/Button';
import { getGalleryService } from 'services/gallery-service';

export default class ImageGallery extends Component {
  state = {
    gallery: null,
    page: 1,
    loading: false,
    error: null,
    total: '',
    loaded: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const name = this.props.categoryName;

    if (prevProps.categoryName !== this.props.categoryName) {
      this.setState({ loading: true });
      this.setState({ page: 1 });
      this.setState({ loaded: 12 });

      try {
        const gallery = await getGalleryService(name);

        this.setState({ gallery: gallery.data.hits });
        this.setState({ total: gallery.data.totalHits });
        this.setState(prevState => ({ page: prevState.page + 1 }));
        this.setState({ visibleLearnMore: true });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadmoreClick = async () => {
    const name = this.props.categoryName;
    const { page, total, loaded } = this.state;
    this.setState({ loading: true });
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.setState(prevState => ({ loaded: prevState.loaded + 12 }));
    if (loaded >= total) {
      this.setState({ visibleLearnMore: false });
    }
    try {
      const newGallery = await getGalleryService(name, page);

      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...newGallery.data.hits],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { gallery, loading, error, total, loaded } = this.state;
    return (
      <section>
        <ImageGalleryStyled className="gallery">
          {gallery &&
            gallery.map(option => (
              <ImageGalleryItem
                key={option.id}
                img={option.webformatURL}
                largeImageURL={option.largeImageURL}
                alt={option.tags}
              />
            ))}
        </ImageGalleryStyled>

        {loaded < total && <Button onClick={this.handleLoadmoreClick} />}

        {loading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
        {error && <h1>Щось пішло не так...</h1>}
        {total === 0 && <h1>Нічого не знайдено...</h1>}
      </section>
    );
  }
}

ImageGallery.propTypes = {
  gallery: PropTypes.object,
};
