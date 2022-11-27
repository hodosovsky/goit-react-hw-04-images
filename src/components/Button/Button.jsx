// import { Component } from 'react';
import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <>
      <StyledButton type="button" onClick={onClick}>
        Load More
      </StyledButton>
    </>
  );
};

// class oldButton extends Component {
//   render() {
//     return (
//       <>
//         <StyledButton type="button" onClick={this.props.onClick}>
//           Load More
//         </StyledButton>
//       </>
//     );
//   }
// }
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export { Button };
