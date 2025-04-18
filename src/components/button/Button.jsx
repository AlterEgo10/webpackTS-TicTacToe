import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../helpers/ThemeContext';
import './styles.css';

export default function Button(props) {
 //const [language, setLanguage] = useContext(ThemeContext);
 const [
   theme,
   setTheme,
   changeTheme,
   changeThemeNext,
   language,
   setLanguage,
   changeLanguage,
   changeLanguageNext,
 ] = useContext(ThemeContext);
  return (
    <div>
      {props.title}
      <button
        className="button"
        onClick={() => changeLanguageNext('en-US')}
      >
        language: {language}
      </button>
      <button
        className="button"
        onClick={() => changeThemeNext()}
      >
        {' '}
        theme: {theme}
      </button>
    </div>
  ); 
}
