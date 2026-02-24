import React from "react";
import HeroRecommendationCard from "./HeroRecommendationCard";

const HeroRecommendations = () => {
    // Mock data of 8 foods
    const recommendations = [
        {
            id: 1,
            title: "Mihrab Masjid Agung Kordoba",
            description: "Kordoba, Andalusia, Spanyol",
            imageUrl: "https://i.pinimg.com/736x/d8/7c/49/d87c491d9ccf5a2bbfbb7d3839257d07.jpg",
            linkUrl: "#",
        },
        {
            id: 2,
            title: "Seni Kaligrafi Arab",
            description: "Timur Tengah & Afrika Utara",
            imageUrl: "https://i.pinimg.com/736x/2a/35/86/2a3586aa9562dc6db954807a0c0e7b8b.jpg",
            linkUrl: "#",
        },
        {
            id: 3,
            title: "Mozaik Zellige Maroko",
            description: "Marrakech, Maroko",
            imageUrl: "https://i.pinimg.com/736x/71/e6/f1/71e6f1f3a9a4b3f81eccc7e3b88b0a99.jpg",
            linkUrl: "#",
        },
        {
            id: 4,
            title: "Keramik Iznik Utsmani",
            description: "Iznik, Bursa, Turki",
            imageUrl: "https://i.pinimg.com/736x/a2/2f/bc/a22fbc789f2a0335e9f4eb1bebeb3958.jpg",
            linkUrl: "#",
        },
        {
            id: 5,
            title: "Manuskrip Iluminasi Emas",
            description: "Kairo, Mesir",
            imageUrl: "https://i.pinimg.com/736x/95/9b/bc/959bbc90a1e3678bb3cd44a0375cf39f.jpg",
            linkUrl: "#",
        },
        {
            id: 6,
            title: "Astrolabe Klasik",
            description: "Baghdad, Irak",
            imageUrl: "https://i.pinimg.com/736x/67/da/67/67da6728cce7183e8460e1ad1563f8bf.jpg",
            linkUrl: "#",
        },
        {
            id: 7,
            title: "Lampu Kaca Mamluk",
            description: "Damaskus, Suriah",
            imageUrl: "https://i.pinimg.com/736x/b2/89/3e/b2893e4811a43a0e69d95f8e5ee8b4bd.jpg",
            linkUrl: "#",
        },
        {
            id: 8,
            title: "Karpet Anatolia",
            description: "Anatolia, Turki",
            imageUrl: "https://i.pinimg.com/736x/f6/54/25/f654252571ebb43addc646ae1a0fb711.jpg",
            linkUrl: "#",
        }
    ];

    return (
        <section className="mt-20 mb-10 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendations.map((item) => (
                    <HeroRecommendationCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default HeroRecommendations;
