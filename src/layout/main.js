import React, { Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '../pages/header/header'
import Footer from '../pages/footer/footer'
import Home from '../pages/home/home'
import About from '../pages/about/about'
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
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
}

export default MainLayout