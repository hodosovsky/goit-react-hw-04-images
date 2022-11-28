import { useState } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [categoryName, setCategoryName] = useState('');
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(0);

  const handleFormSubmit = value => {
    setCategoryName(value);
    setPage(1);
    setLoaded(12);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        categoryName={categoryName}
        page={page}
        loaded={loaded}
        setPage={setPage}
        setLoaded={setLoaded}
      />
    </>
  );
};

// class oldApp extends Component {
//   state = {
//     categoryName: '',
//   };
//   handleFormSubmit = categoryName => {
//     this.setState({ categoryName });
//   };
//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery categoryName={this.state.categoryName} />
//       </>
//     );
//   }
// }
export default App;

App.propTypes = {
  categoryName: PropTypes.string,
};
