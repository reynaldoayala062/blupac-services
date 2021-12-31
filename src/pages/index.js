import React, {useState} from 'react'
import Navbar from '../components/NavBar'
import Home from '../components/Home'
import Sidebar from '../components/Sidebar'


const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
       <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar togglre={toggle}/>
        <Home />
       </>
    )
}

export default HomePage
