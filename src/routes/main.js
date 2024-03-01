import React from 'react'
const Home = React.lazy(
    () => import('./../pages/Home/home'),
)
const About = React.lazy(
    () => import('./../pages/About/about'),
)
const Blog = React.lazy(
    () => import('./../pages/Blog/blog'),
)
const Work = React.lazy(
    () => import('./../pages/Work/work'),
)
const Contact = React.lazy(
    () => import('./../pages/Contact/contact'),
)

const Preloader = React.lazy(
    () => import('./../components/preloader'),
)

var mainRoutes = [
    { path: '/', name: 'Homepage', component: <Home /> },
    { path: '/about', name: 'About', component: <About /> },
    { path: '/blog', name: 'Blog', component: <Blog /> },
    { path: '/work', name: 'Work', component: <Work /> },
    { path: '/contact', name: 'Contact', component: <Contact /> },
    { path: '/preloader', name: 'Preloader', component: <Preloader /> },
]

export default mainRoutes