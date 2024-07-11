import React, { Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '../pages/header/header'
import Footer from '../pages/footer/footer'
import './main.scss'

import mainRoutes from '../routes/main'

function MainLayout() {
    const location = useLocation();

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("location", location.pathname);
        }, 5000); // Log every 5 seconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [location.pathname]); // Re-run the effect only if the pathname changes
    return (
        <div className="main">
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    {mainRoutes.map((prop, key) => {
                        return (
                            <Route
                                path={prop.path}
                                key={key}
                                element={prop.component}
                            ></Route>
                        )
                    })}
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
}

export default MainLayout