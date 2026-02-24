import React from "react";
import HeroRecommendationCard from "./HeroRecommendationCard";

const HeroRecommendations = () => {
    // Mock data of 8 foods
    const recommendations = [
        {
            id: 1,
            title: "Gudeg",
            description: "Gudeg adalah makanan khas Provinsi Daerah Istimewa Yogyakarta dan Jawa Tengah yang terbuat dari nangka muda yang dimasak dengan santan.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gudeg_komplit.JPG/800px-Gudeg_komplit.JPG",
            linkUrl: "#",
        },
        {
            id: 2,
            title: "Karedok",
            description: "Karedok adalah salah satu makanan khas Sunda di Indonesia. Karedok sekilas mirip dengan lotek dengan bahan-bahan sayuran mentah.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Karedok_Sunda.JPG/800px-Karedok_Sunda.JPG",
            linkUrl: "#",
        },
        {
            id: 3,
            title: "Kerak Telor",
            description: "Kerak telor adalah makanan asli daerah Jakarta (Betawi), dengan bahan-bahan beras ketan putih, telur ayam atau bebek ebi.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Kerak_telor_1.jpg/800px-Kerak_telor_1.jpg",
            linkUrl: "#",
        },
        {
            id: 4,
            title: "Mie Aceh",
            description: "Mi Aceh adalah masakan mi pedas khas Aceh di Indonesia. Mi kuning tebal dengan irisan daging sapi, daging kambing atau hidangan laut.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mi_aceh_goreng.jpg/800px-Mi_aceh_goreng.jpg",
            linkUrl: "#",
        },
        {
            id: 5,
            title: "Pempek",
            description: "Pempek atau empek-empek adalah makanan khas Palembang terbuat dari olahan daging ikan yang digiling lembut dicampur tepung kanji.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pempek_Kapal_Selam_Palembang.jpg/800px-Pempek_Kapal_Selam_Palembang.jpg",
            linkUrl: "#",
        },
        {
            id: 6,
            title: "Rendang",
            description: "Rendang adalah masakan daging kaya rempah dengan daging sapi sebagai bahan utamanya, masakan khas Minangkabau.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rendang_Daging_Sapi_Asli_Padang.JPG/800px-Rendang_Daging_Sapi_Asli_Padang.JPG",
            linkUrl: "#",
        },
        {
            id: 7,
            title: "Sate Lilit",
            description: "Sate Lilit adalah sate khas perpaduan yang sangat digemari dari Pulau Dewata, Bali. Terbuat dari udang atau ayam cincang.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Sate_Lilit_Bali.jpg/800px-Sate_Lilit_Bali.jpg",
            linkUrl: "#",
        },
        {
            id: 8,
            title: "Coto Makassar",
            description: "Coto Makassar adalah makanan tradisional dari Makassar, Sulawesi Selatan. Berupa kuah kaldu daging lezat dengan bumbu racikan lokal.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Coto_Makassar_1.jpg/800px-Coto_Makassar_1.jpg",
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
