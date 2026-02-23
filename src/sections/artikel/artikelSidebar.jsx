const ArtikelSidebar = () => {
  const sidebarArticles = [
    {
      category: "Teknologi",
      title: "Masa Depan AI dan Dampaknya pada Dunia Kerja",
    },
    {
      category: "Inovasi",
      title: "Startup Lokal yang Mendorong Ekonomi Digital",
    },
    {
      category: "Gaya Hidup",
      title: "Cara Hidup Seimbang di Era Teknologi",
    },
  ];

  return (
    <div className="sticky top-24 space-y-6">
      <div className="relative h-[230px] rounded-xl overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/14/ad/31/14ad3171038b99261210a9fbe6785d41.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      {sidebarArticles.map((item, index) => (
        <div key={index} className="space-y-2 cursor-pointer group">
          <p className="text-prestige-gold text-sm font-semibold">
            {item.category}
          </p>

          <h4 className="text-gray-800 dark:text-white font-semibold leading-snug group-hover:text-prestige-gold transition">
            {item.title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ArtikelSidebar;
