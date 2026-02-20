import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { locations } from '../../data/locations';

const MuseumDetail = () => {
    const { id } = useParams();
    const isLocal = !isNaN(id);
    const museumId = parseInt(id, 10);
    const location = locations.find((loc) => loc.id === museumId);

    if (!location && isLocal) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Museum Tidak Ditemukan</h2>
                <Link to="/" className="text-indigo-600 hover:text-indigo-800 underline">Kembali ke Peta Utama</Link>
            </div>
        );
    }

    // In case the id is passed but it's not in the data and is somehow string-based fallback
    if (!location) return null;

    return (
        <div className="min-h-screen bg-[#aad3df] font-sans">
            <header className="bg-white shadow-md p-4 sticky top-0 z-50 flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🏛️</span>
                    <h1 className="text-xl font-bold text-gray-800 hidden sm:block">Detail Museum Islam</h1>
                </div>
                <nav>
                    <Link to="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold transition bg-indigo-50 px-4 py-2 rounded-full hover:bg-indigo-100">
                        <span>&#8592;</span> Kembali ke Peta
                    </Link>
                </nav>
            </header>

            <main className="max-w-4xl mx-auto p-4 sm:p-8 mt-6">
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="h-64 sm:h-96 w-full relative">
                        <img
                            src={location.imageUrl}
                            alt={location.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md">{location.name}</h2>
                        </div>
                    </div>

                    <div className="p-6 sm:p-10">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Koordinat Peta</h3>
                                <p className="text-gray-800 font-medium">Lat: {location.position[0]}, Lng: {location.position[1]}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-indigo-100 pb-2 inline-block">Tentang Museum</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {location.description}
                                </p>
                            </div>

                            {location.readMoreUrl && (
                                <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <p className="text-gray-500 italic text-sm text-center sm:text-left">
                                        Ingin melihat situs resmi dari museum ini untuk informasi lebih detail?
                                    </p>
                                    <a
                                        href={location.readMoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 hover:shadow-lg transition-all font-bold w-full sm:w-auto text-center shrink-0"
                                    >
                                        Kunjungi Situs Resmi
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default MuseumDetail;
