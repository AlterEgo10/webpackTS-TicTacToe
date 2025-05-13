import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../helpers/ThemeContext'; 
import { Link } from 'react-router-dom';
import './styles.css';


const ThemeLanguageSwitcher = ({ title }) => {
  const { theme, changeThemeNext, language, changeLanguageNext } =
    useContext(ThemeContext);

  return (
    <div className="theme-language-switcher">
      <h1>{title}</h1>

      <div className="switcher-controls">
        <button
          className={`switcher-button language-button ${language === 'en-US' ? 'active' : ''}`}
          onClick={() => changeLanguageNext('en-US')}
          aria-label="Сменить язык на английский"
        >
          Язык: {language}
        </button>

        <button
          className={`switcher-button theme-button ${theme}`}
          onClick={changeThemeNext}
          aria-label={`Сменить тему: ${theme === 'dark' ? 'светлая' : 'темная'}`}
        >
          Тема: {theme === 'dark' ? 'Темная' : 'Светлая'}
        </button>
      </div>
    </div>
  );
};

ThemeLanguageSwitcher.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ThemeLanguageSwitcher;
