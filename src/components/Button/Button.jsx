import { Component } from 'react';
import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <>
        <StyledButton type="button" onClick={this.props.onClick}>
          Load More
        </StyledButton>
      </>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export { Button };
