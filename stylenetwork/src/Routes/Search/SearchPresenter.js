import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchPresenter = ({searchResult, searchTerm, error, loading, controllSubmit}) => null;

SearchPresenter.propTypes = {
    searchResult: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    controllSubmit: PropTypes.func.isRequired,
}

export default SearchPresenter;