import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//import { ThemeContext } from '../../helpers/ThemeContext'; 
import { Link } from 'react-router-dom';
import './styles.css';
import BootstrapButton from 'react-bootstrap/Button'
import styled from 'styled-components'
import { ThemeContext,ThemeContextValue,AppThemes } from '../../helpers/ThemeContext';

const Button = styled(BootstrapButton)`
margin: 10px;
`
const appThemes = [AppThemes.Light, AppThemes.Dark];


const ThemeLanguageSwitcher = ({ title }) => {
  const { theme, changeThemeNext,} =
    useContext(ThemeContext);

  return (
    <div className="theme-language-switcher">
      <h1>{title}</h1>

      <div className="switcher-controls">
        <Button
          className={`switcher-button theme-button ${theme}`}
          onClick={changeThemeNext}
          variant="success"
          aria-label={`Сменить тему: ${theme === 'dark' ? 'светлая' : 'темная'}`}
        >
          Тема: {theme === 'dark' ? 'Темная' : 'Светлая'}
        </Button>
              <Button
          className={`switcher-button theme-button ${theme}`}
          onClick={changeThemeNext}
          variant="success"
          aria-label={`Сменить тему: ${theme === 'light' ? 'темная' : 'светлая'}`}
        >
          Тема: {theme === 'light' ? 'Темная' : 'Светлая'}
        </Button>
      </div>
    </div>
  );
};

export default ThemeLanguageSwitcher;
