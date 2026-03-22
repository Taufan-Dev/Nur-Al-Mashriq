import React from 'react';
import Header from '../../components/Header';
import InteractiveMap from '../../components/Map';

const Home = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-dark text-gray-900 dark:text-ethereal-white font-sans overflow-hidden transition-colors duration-500">
            <Header />
            <main className="flex-1 w-full h-full relative">
                <InteractiveMap />
            </main>
        </div>
    );
};

export default Home;
