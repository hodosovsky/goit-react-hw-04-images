import { Component } from 'react';
import { SearchbarStyled, Form } from './Searchbar.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default class Searchbar extends Component {
  state = {
    category: '',
  };

  handleCategoryChange = event => {
    this.setState({ category: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.category.trim() === '') {
      Notify.failure('Enter search request...');
      return;
    }
    this.props.onSubmit(this.state.category);

    this.setState({ category: '' });
  };

  render() {
    return (
      <SearchbarStyled className="searchbar">
        <Form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="category"
            type="text"
            value={this.state.category}
            onChange={this.handleCategoryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchbarStyled>
    );
  }
}
