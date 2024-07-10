import React, { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '../pages/header/header'
import Footer from '../pages/footer/footer'
import './main.scss'

import mainRoutes from '../routes/main'

function MainLayout() {
    const location = useLocation(); // Use the useLocation hook here
    console.log("location",location.pathname);    
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