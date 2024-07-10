import React, {useEffect, useState} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import indexRoutes from './routes/index'
import Preloader from './components/preloader';


/*
The App component initializes with a loading state that shows a Preloader component for 5 seconds. 
After this period, it switches to render a set of routes using React Router. 
This setup allows you to display a loading screen before the main content of the application becomes visible.

This pattern is useful for simulating loading times or fetching initial data before displaying the main application.
*/
function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false);}, 5000);
      }, []);
  return (
      <>
      { loading ? 
        // If the loading state is true, the component renders a Preloader component.
        (<Preloader />) 
        : 
        // If the loading state is false, the component renders a set of routes using React Router.
        (
            <Router basename="/howard-ho">
            <Routes>
                {indexRoutes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.path}
                            key={key}
                            element={prop.component}
                        ></Route>
                    )
                })}
            </Routes>
        </Router>
        ) 
    }
      </>
  );
}

export default App;
