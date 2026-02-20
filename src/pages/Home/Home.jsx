import React from 'react';
import Header from '../../components/Header';
import InteractiveMap from '../../components/Map';

const Home = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-50 font-sans overflow-hidden">
            <Header />
            <main className="flex-1 w-full h-full relative">
                <InteractiveMap />
            </main>
        </div>
    );
};

export default Home;
