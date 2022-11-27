import { useState } from 'react';
import { SearchbarStyled, Form } from './Searchbar.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Searchbar = ({ onSubmit }) => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = event => {
    setCategory(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (category.trim() === '') {
      Notify.failure('Enter search request...');
      return;
    }
    onSubmit(category);

    setCategory('');
  };

  return (
    <>
      <SearchbarStyled className="searchbar">
        <Form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="category"
            type="text"
            value={category}
            onChange={handleCategoryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchbarStyled>
    </>
  );
};
export default Searchbar;

// export default class oldSearchbar extends Component {
//   state = {
//     category: '',
//   };

//   handleCategoryChange = event => {
//     this.setState({ category: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.category.trim() === '') {
//       Notify.failure('Enter search request...');
//       return;
//     }
//     this.props.onSubmit(this.state.category);

//     this.setState({ category: '' });
//   };

//   render() {
//     return (
//       <SearchbarStyled className="searchbar">
//         <Form className="form" onSubmit={this.handleSubmit}>
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             name="category"
//             type="text"
//             value={this.state.category}
//             onChange={this.handleCategoryChange}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </Form>
//       </SearchbarStyled>
//     );
//   }
// }
