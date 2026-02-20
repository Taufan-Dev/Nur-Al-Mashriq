import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Pannellum } from 'pannellum-react';
import { locations } from '../../data/locations';

const MuseumDetail = () => {
    const { id } = useParams();
    const isLocal = !isNaN(id);
    const museumId = parseInt(id, 10);
    const location = locations.find((loc) => loc.id === museumId);

    // State for reading progress and focus mode
    const [scrollProgress, setScrollProgress] = useState(0);
    const [focusMode, setFocusMode] = useState(false);

    // Ref and state for parallax effect
    const imageContainerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Get other museums for the bottom section
    const otherMuseums = locations.filter((loc) => loc.id !== museumId).slice(0, 4);

    // Handle scroll for progress bar
    useEffect(() => {
        const handleScroll = () => {
            // Calculate how far down the user has scrolled
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle mouse move for parallax
    const handleMouseMove = (e) => {
        if (!imageContainerRef.current) return;
        const rect = imageContainerRef.current.getBoundingClientRect();

        // Calculate mouse position relative to center of image (-1 to 1)
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        // Reset to center smoothly
        setMousePos({ x: 0, y: 0 });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!location && isLocal) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Museum Tidak Ditemukan</h2>
                <Link to="/" className="text-indigo-600 hover:text-indigo-800 underline">Kembali ke Peta Utama</Link>
            </div>
        );
    }

    if (!location) return null;

    // Simple helper to get a short snippet for the top section
    const shortDescription = location.description.split('.')[0] + '.';

    return (
        <div className={`min-h-screen font-sans pb-20 relative overflow-hidden transition-colors duration-500 ${focusMode ? 'bg-slate-900' : 'bg-slate-50'}`}>

            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1.5 bg-indigo-600 z-[100] transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            {/* Background decorative gradient matching the screenshot's soft pink/purple aesthetic */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 rounded-full blur-3xl opacity-50 -z-10 transform translate-x-1/3 -translate-y-1/4"></div>

            {/* Navigation Header */}
            <header className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center max-w-7xl mx-auto xl:px-8">
                <Link to="/" className="flex items-center gap-2 text-indigo-900 font-semibold hover:text-indigo-600 transition bg-white/50 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm hover:shadow">
                    <span>&#8592;</span> Kembali ke Peta
                </Link>
            </header>

            {/* Top Section */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8 border-b-2 border-gray-100">
                <div className="lg:w-1/2 z-10 w-full pr-0 lg:pr-10">
                    <p className="text-indigo-600 font-bold tracking-[0.2em] text-[13px] mb-5">MUSEUM</p>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-7 uppercase tracking-tight">
                        {location.name}
                    </h1>
                    <p className="text-[17px] text-gray-500 leading-[1.8] max-w-lg">
                        {shortDescription}
                    </p>
                </div>
                <div className="lg:w-1/2 w-full mt-8 lg:mt-0 relative z-10">
                    <div
                        ref={imageContainerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-full aspect-[21/9] rounded-none sm:rounded-l-2xl shadow-xl overflow-hidden right-0"
                        style={{ marginRight: 'calc(-50vw + 50%)', perspective: '1000px' }}
                    >
                        <img
                            src={location.imageUrl}
                            alt={location.name}
                            className="w-full h-full object-cover object-center transition-transform duration-200 ease-out will-change-transform"
                            style={{
                                transform: `scale(1.05) translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`
                            }}
                        />
                        {/* Optional gradient at the bottom of the image for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* Middle Content Section */}
            <section className="px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 mt-16 lg:mt-20 relative">

                {/* Main Article */}
                <article className={`lg:w-2/3 prose prose-lg max-w-none transition-colors duration-500 ${focusMode ? 'text-gray-300 prose-invert' : 'text-gray-700 prose-indigo'}`}>
                    <p className={`text-[1.1rem] leading-8 font-medium mb-8 transition-colors duration-500 ${focusMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        {location.name} adalah destinasi bersejarah yang terletak di koordinat {location.position[0]}, {location.position[1]}. {shortDescription} Museum ini menjadi salah satu daya tarik utama bagi pengunjung yang ingin mempelajari lebih dalam tentang warisan kebudayaan dan peradaban Islam.
                    </p>

                    <p className={`text-base leading-relaxed mb-6 transition-colors duration-500 ${focusMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {location.description} Koleksi yang dipamerkan di museum ini mencakup beragam artefak berharga peninggalan masa lampau, yang tidak hanya memiliki nilai estetika, tetapi juga menceritakan sejarah panjang perkembangan seni, sains, dan budaya Islam dari berbagai belahan dunia.
                    </p>

                    <p className={`text-base leading-relaxed mb-6 transition-colors duration-500 ${focusMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Pengunjung dapat menikmati pengalaman imersif saat menyusuri setiap galeri, berkat penataan pameran yang apik serta penjelasan informatif yang menyertai setiap mahakarya. Arsitektur bangunan museum itu sendiri seringkali menjadi daya tarik tambahan yang memukau mata.
                    </p>

                    <p className={`text-base leading-relaxed transition-colors duration-500 ${focusMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Kehadiran museum ini bukan hanya sebagai tempat penyimpanan benda kuno, melainkan juga sebagai pusat edukasi interaktif yang bertujuan menjembatani pemahaman antarbudaya dan melestarikan identitas keagungan warisan nenek moyang untuk generasi mendatang.
                    </p>
                </article>

                {/* Sidebar Info Card (replacing Author Card) */}
                <aside className={`lg:w-1/3 transition-opacity duration-500 ${focusMode ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 sticky top-32">
                        <div className="flex items-center gap-5 mb-6">
                            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm shrink-0">
                                {/* Using initials based on name for a clean logo look */}
                                {location.name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-1">Info Praktis</h3>
                                <p className="text-sm text-gray-500">Koordinat: {location.position[0]}, {location.position[1]}</p>
                            </div>
                        </div>

                        <p className="text-[14px] text-gray-500 mb-8 leading-relaxed">
                            Pastikan Anda mengunjungi situs resmi museum ini untuk mendapatkan informasi terbaru mengenai
                            jam operasional, harga tiket, dan panduan kunjungan selengkapnya sebelum merencanakan
                            perjalanan Anda.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-10">
                            <span className="px-3 py-1 bg-[#ffe5e5] text-[#d63b3b] text-[11px] font-bold rounded uppercase tracking-wider">Timur Tengah</span>
                            <span className="px-3 py-1 bg-[#fff4cc] text-[#b8860b] text-[11px] font-bold rounded uppercase tracking-wider">Seni Islam</span>
                            <span className="px-3 py-1 bg-[#dcfce7] text-[#15803d] text-[11px] font-bold rounded uppercase tracking-wider">Sejarah Budaya</span>
                            <span className="px-3 py-1 bg-[#e0f2fe] text-[#0369a1] text-[11px] font-bold rounded uppercase tracking-wider">Edukasi</span>
                        </div>

                        {location.readMoreUrl && (
                            <a
                                href={location.readMoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3.5 bg-transparent border-2 border-indigo-500 hover:bg-indigo-50 hover:border-indigo-600 text-indigo-600 text-center font-bold text-sm rounded-full transition-all"
                            >
                                Kunjungi Situs Resmi
                            </a>
                        )}
                    </div>
                </aside>
            </section>

            {/* Virtual Tour 360 Section */}
            {location.panoramaUrl && (
                <section className="px-6 lg:px-8 max-w-7xl mx-auto mt-24 mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-xl font-extrabold text-gray-900 uppercase tracking-wider inline-block border-b-2 border-indigo-600 pb-1">Tur Virtual 360°</h2>
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-0.5 rounded-full">Baru</span>
                    </div>

                    <div className="relative w-full aspect-[21/9] sm:aspect-[16/6] bg-slate-200 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                        <Pannellum
                            width="100%"
                            height="100%"
                            image={location.panoramaUrl}
                            pitch={10}
                            yaw={180}
                            hfov={110}
                            autoLoad
                            showZoomCtrl={false}
                            autoRotate={-2}
                            compass={false}
                            className="z-10"
                        >
                            <Pannellum.Hotspot
                                type="info"
                                pitch={11}
                                yaw={-167}
                                text="Artefak Penting"
                                URL=""
                            />
                        </Pannellum>
                        {/* Overlay instruction for desktop */}
                        <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full pointer-events-none z-20 backdrop-blur-sm flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                            Tarik untuk melihat sekeliling
                        </div>
                    </div>
                </section>
            )}

            {/* Separator */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 my-16">
                <hr className="border-gray-200" />
            </div>

            {/* Bottom Section: Other Museums */}
            <section className="px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-lg font-extrabold text-gray-900 mb-6 uppercase tracking-wider inline-block border-b-2 border-indigo-600 pb-1">Museum Lainnya</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {otherMuseums.map((museum) => (
                        <Link to={`/museum/${museum.id}`} key={museum.id} className="group block">
                            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-sm transition-shadow group-hover:shadow-md mb-3">
                                <img
                                    src={museum.imageUrl}
                                    alt={museum.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">{museum.name}</h3>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{museum.description}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Floating Focus Mode Toggle */}
            <button
                onClick={() => setFocusMode(!focusMode)}
                className={`fixed bottom-8 right-8 p-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center ${focusMode ? 'bg-amber-400 text-slate-900 hover:bg-amber-300' : 'bg-slate-800 text-amber-400 hover:bg-slate-700 hover:-translate-y-1'}`}
                title={focusMode ? "Matikan Fokus Baca" : "Nyalakan Fokus Baca"}
            >
                {focusMode ? (
                    // Lightbulb On
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.59ZM12 19.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75ZM6.166 18.894a.75.75 0 0 0 1.06 1.06l1.59-1.591a.75.75 0 1 0-1.06-1.061l-1.59 1.59ZM2.25 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM6.166 6.166a.75.75 0 0 0-1.06 1.06l1.591 1.59a.75.75 0 1 0 1.06-1.061l-1.59-1.59Z" />
                    </svg>
                ) : (
                    // Lightbulb Off (Outline)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default MuseumDetail;
