import React from 'react'
const Home = React.lazy(
    () => import('../pages/home/home'),
)
const About = React.lazy(
    () => import('../pages/about/about'),
)
const Blog = React.lazy(
    () => import('../pages/blog/blog'),
)
const Work = React.lazy(
    () => import('../pages/work/work'),
)
const Contact = React.lazy(
    () => import('../pages/contact/contact'),
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