import PropTypes from 'prop-types';
import { BtnLoad } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <>
      <BtnLoad type="button" onClick={onLoadMore}>
        Load more
      </BtnLoad>
    </>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
