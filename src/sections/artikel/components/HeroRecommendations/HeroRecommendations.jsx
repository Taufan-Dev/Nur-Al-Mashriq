import React from "react";
import HeroRecommendationCard from "./HeroRecommendationCard";

const HeroRecommendations = () => {
    // Mock data of 8 foods
    const recommendations = [
        {
            id: 1,
            title: "Mihrab Masjid Agung Kordoba",
            description: "Kordoba, Andalusia, Spanyol",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cordoba_Mosque_Mihrab.jpg/800px-Cordoba_Mosque_Mihrab.jpg",
            linkUrl: "#",
        },
        {
            id: 2,
            title: "Seni Kaligrafi Arab",
            description: "Timur Tengah & Afrika Utara",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Arabic_calligraphy_at_Wazir_Khan_Mosque.jpg/800px-Arabic_calligraphy_at_Wazir_Khan_Mosque.jpg",
            linkUrl: "#",
        },
        {
            id: 3,
            title: "Mozaik Zellige Maroko",
            description: "Marrakech, Maroko",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Zellij_at_Bahia_Palace.jpg/800px-Zellij_at_Bahia_Palace.jpg",
            linkUrl: "#",
        },
        {
            id: 4,
            title: "Keramik Iznik Utsmani",
            description: "Iznik, Bursa, Turki",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Iznik_tile_panel_Louvre_OA3919_2.jpg/800px-Iznik_tile_panel_Louvre_OA3919_2.jpg",
            linkUrl: "#",
        },
        {
            id: 5,
            title: "Manuskrip Iluminasi Emas",
            description: "Kairo, Mesir",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Quran_manuscript_-_Brooklyn_Museum.jpg/800px-Quran_manuscript_-_Brooklyn_Museum.jpg",
            linkUrl: "#",
        },
        {
            id: 6,
            title: "Astrolabe Klasik",
            description: "Baghdad, Irak",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Astrolable_Persian_18th_century.png/800px-Astrolable_Persian_18th_century.png",
            linkUrl: "#",
        },
        {
            id: 7,
            title: "Lampu Kaca Mamluk",
            description: "Damaskus, Suriah",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mosque_lamp_Met_17.190.985_front.jpg/800px-Mosque_lamp_Met_17.190.985_front.jpg",
            linkUrl: "#",
        },
        {
            id: 8,
            title: "Karpet Anatolia",
            description: "Anatolia, Turki",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Anatolian_rug_-_Bergama_region_circa_1800.jpg/800px-Anatolian_rug_-_Bergama_region_circa_1800.jpg",
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
