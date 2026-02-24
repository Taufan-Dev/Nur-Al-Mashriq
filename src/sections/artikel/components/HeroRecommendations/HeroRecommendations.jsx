import React from "react";
import HeroRecommendationCard from "./HeroRecommendationCard";

const HeroRecommendations = () => {
    // Mock data of 8 foods
    const recommendations = [
        {
            id: 1,
            title: "Mihrab Masjid Agung Kordoba",
            description: "Kordoba, Andalusia, Spanyol",
            imageUrl: "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?auto=format&fit=crop&q=80&w=600&h=400",
            linkUrl: "#",
        },
        {
            id: 2,
            title: "Seni Kaligrafi Arab",
            description: "Timur Tengah & Afrika Utara",
            imageUrl: "https://images.unsplash.com/photo-1579781404176-79176378ae75?auto=format&fit=crop&q=80&w=600&h=400",
            linkUrl: "#",
        },
        {
            id: 3,
            title: "Mozaik Zellige Maroko",
            description: "Marrakech, Maroko",
            imageUrl: "https://images.unsplash.com/photo-1582561424760-00b84df4dd88?auto=format&fit=crop&q=80&w=600&h=400",
            linkUrl: "#",
        },
        {
            id: 4,
            title: "Keramik Iznik Utsmani",
            description: "Iznik, Bursa, Turki",
            imageUrl: "https://images.unsplash.com/photo-1628173432924-406a13dabbc6?auto=format&fit=crop&q=80&w=600&h=400",
            linkUrl: "#",
        },
        {
            id: 5,
            title: "Manuskrip Iluminasi Emas",
            description: "Kairo, Mesir",
            imageUrl: "https://images.unsplash.com/photo-1584824486509-112e4181f1ce?auto=format&fit=crop&q=80&w=600&h=400",
            linkUrl: "#",
        },
        {
            id: 6,
            title: "Astrolabe Klasik",
            description: "Baghdad, Irak",
            imageUrl: "https://images.unsplash.com/photo-1534080189033-68d7120eebea?auto=format&fit=crop&q=80&w=600&h=400",
            linkUrl: "#",
        },
        {
            id: 7,
            title: "Lampu Kaca Mamluk",
            description: "Damaskus, Suriah",
            imageUrl: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=600&h=400",
            linkUrl: "#",
        },
        {
            id: 8,
            title: "Karpet Anatolia",
            description: "Anatolia, Turki",
            imageUrl: "https://images.unsplash.com/photo-1541832069-e6ce2eb87af7?auto=format&fit=crop&q=80&w=600&h=400",
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
