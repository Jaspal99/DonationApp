import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import style from './Style';
import {scaleFontSize} from '../../Assets/Styles/scalling';
import PropTypes from 'prop-types';
export default function Search(props) {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');
  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = value => {
    setSearch(value);
    props.onSearch(value);
  };
  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        color={'#25C0FF'}
        size={scaleFontSize(22)}
        icon={faSearch}
      />
      <TextInput
        placeholder={props.placeholder}
        value={search}
        onChangeText={value => {
          handleSearch(value);
        }}
        ref={textInputRef}
        style={style.searchInput}
      />
    </Pressable>
  );
}
Search.defaultProps = {
  onSearch: () => {},
  placeholder: 'Search',
};
Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};
