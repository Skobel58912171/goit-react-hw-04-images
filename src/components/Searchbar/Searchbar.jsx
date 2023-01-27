import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header, Form, Field, Btn } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast(
        'Sorry, there are no images matching your search query. Please try again'
      );
      return;
    }
    console.log(searchQuery);
    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <span>
            <AiOutlineSearch />
          </span>
        </Btn>

        <Field
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
