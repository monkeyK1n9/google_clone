import React, {useState} from 'react';

import { Routes } from './components/routes/Routes';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className={darkTheme ? 'dark': ''}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar />
                <Routes />
                <Footer />
            </div>
        </div>
    )
}

export default App