import PropTypes from 'prop-types';
import { Component } from 'react';
import { StyledButton } from './Button.styled';

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

export { Button };
