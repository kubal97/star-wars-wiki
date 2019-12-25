import React from 'react';
import './styles.scss';
import LoaderImg from '../../assets/loader.png';

// eslint-disable-next-line require-jsdoc
function Loader() {
  return <div className="loader">
    <img className="loader__image" src={LoaderImg} alt="loader"/>
  </div>;
}

export default Loader;
