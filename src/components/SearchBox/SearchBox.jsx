import React from 'react';

import logoML from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';
import { Link } from 'react-router-dom';

export function SearchBox() {
  let myRef = React.createRef();

  function onClickHandler(e) {
    e.preventDefault();
    searchItems();
  }

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      searchItems();
    }
  }

  function searchItems() {
    const query = myRef.current.value;
    window.location.href = `/items?q=${query}`;
  }

  return (
    <div className="header">
      <div className="header__container">
        <Link to={``}>
        <img
          src={logoML}
          className="header__logo"
          alt="logo Mercado Libre"
        />
        </Link>
        <div className="search">
          <input
            ref={myRef}
            type="text"
            className="search__input"
            placeholder="Nunca dejes de buscar"
            onKeyDown={onKeyDown}
          />
          <button type="submit" className="search__button" onClick={onClickHandler}>
            <img src={searchIcon} alt="Boton buscar" />
          </button>
        </div>
      </div>
    </div>
  );
}
