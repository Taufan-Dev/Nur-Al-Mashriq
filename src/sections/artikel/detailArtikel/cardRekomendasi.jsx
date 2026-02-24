import React from "react";
import { RecommendationCard } from "../../../components/Cards/RecommendationCard";

const CardRekomendasi = () => {
  // Mock data to match the screenshot provided (8 items)
  const recommendations = [
    {
      id: 1,
      title: "Gudeg",
      location: "DIY Yogyakarta",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gudeg_komplit.JPG/800px-Gudeg_komplit.JPG",
      linkUrl: "#",
    },
    {
      id: 2,
      title: "Karedok",
      location: "Jawa Barat",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Karedok_Sunda.JPG/800px-Karedok_Sunda.JPG",
      linkUrl: "#",
    },
    {
      id: 3,
      title: "Kerak Telor",
      location: "DKI Jakarta",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Kerak_telor_1.jpg/800px-Kerak_telor_1.jpg",
      linkUrl: "#",
    },
    {
      id: 4,
      title: "Mie Aceh",
      location: "Aceh Darussalam",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mi_aceh_goreng.jpg/800px-Mi_aceh_goreng.jpg",
      linkUrl: "#",
    },
    {
      id: 5,
      title: "Pempek",
      location: "Sumatera Selatan",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pempek_Kapal_Selam_Palembang.jpg/800px-Pempek_Kapal_Selam_Palembang.jpg",
      linkUrl: "#",
    },
    {
      id: 6,
      title: "Rendang",
      location: "Sumatera Barat",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rendang_Daging_Sapi_Asli_Padang.JPG/800px-Rendang_Daging_Sapi_Asli_Padang.JPG",
      linkUrl: "#",
    },
    {
      id: 7,
      title: "Sate Lilit",
      location: "Bali",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Sate_Lilit_Bali.jpg/800px-Sate_Lilit_Bali.jpg",
      linkUrl: "#",
    },
    {
      id: 8,
      title: "Coto Makassar",
      location: "Sulawesi Selatan",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Coto_Makassar_1.jpg/800px-Coto_Makassar_1.jpg",
      linkUrl: "#",
    }
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardRekomendasi;
