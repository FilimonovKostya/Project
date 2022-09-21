import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageAsync} from "./pages/About/AboutPage.async";
import {MainPageAsync} from "./pages/Main/MainPage.async";

const App = () => {
    return (
        <div>
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
