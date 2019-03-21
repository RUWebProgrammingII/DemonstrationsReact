import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

export const Rectangle = styled.div`
  width: ${ props => props.width }px;
  height: ${ props => props.height }px;
  background-color: orange;
`;

Rectangle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

Rectangle.defaultProps = {
  width: 100,
  height: 100
}
