import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageAsync} from "./pages/About/AboutPage.async";
import {MainPageAsync} from "./pages/Main/MainPage.async";

import {useTheme} from "./styles/theme/useTheme";
import './styles/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to={'/about'}> About </Link>
            <Link to={'/'}> Main </Link>
            <Suspense fallback={<div>loading...</div>}>

                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
