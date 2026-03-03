import React from 'react';
import {useContext} from 'react';
import {ThemeContext} from '../App';

const Child3 = () => {
    //const theme = useContext(ThemeContext);
    const {theme, setTheme} = useContext(ThemeContext);

    function handleClick(){
        if(theme === 'light'){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

  return (
    <div>
        <button onClick={handleClick}>
            Change Theme
        </button>
    </div>
  );
}

export default Child3;
