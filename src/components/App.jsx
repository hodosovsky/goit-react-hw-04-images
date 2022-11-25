import { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    categoryName: '',
  };
  handleFormSubmit = categoryName => {
    this.setState({ categoryName });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery categoryName={this.state.categoryName} />
      </>
    );
  }
}

App.propTypes = {
  categoryName: PropTypes.string,
};
