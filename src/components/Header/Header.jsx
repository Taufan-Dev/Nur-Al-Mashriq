import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-center sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Peta Interaktif</h1>
            </div>
        </header>
    );
};

export default Header;
