function Footer() {
  const sections = [
    {
      title: "Main Services",
      items: [
        "Custom Web Design",
        "Branding Services",
        "eCommerce Design",
        "Shopify Website Design",
        "WordPress Web Design",
      ],
    },
    {
      title: "Apps & Development",
      items: [
        "Website Cost Calculator",
        "Conversion Rate Calculator",
        "Custom Web Development",
        "Magento Development",
        "eCommerce Development",
        "WooCommerce Development",
      ],
    },
    {
      title: "Location Services",
      items: [
        "NYC Web Design",
        "California Web Design",
        "Miami Web Design",
        "Los Angeles Web Design",
        "Denver Web Design",
        "San Francisco Web Design",
      ],
    },
    {
      title: "Company",
      items: [
        "About Us",
        "Case Studies",
        "Digital Trends",
        "Top Companies",
        "Reviews",
        "Sitemap",
        "Locations",
        "Contact Us",
      ],
    },
  ];
  return (
    <div className="text-black bg-gradient-to-r from-violet-200 to-pink-200 py-10 px-5">
      <div className="text-center p-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-start text-purple-900">
          Let's Grow Your Brand
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-10">
        {sections.map((section, index) => (
          <div key={index} className="border-l-2 border-white pl-4 text-start">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-sm hover:text-gray-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex gap-10 cursor-pointer pl-10">
        <img
          className="rounded-full h-[70px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLesy_ocUv947-gaVOy4_lNkXRdB9p5YUTyw&s"
          alt=""
        />
        <img
          onClick={() => window.open("https://www.instagram.com/dizimaindia/")}
          className="rounded-full h-[70px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21SRtolNjDeiw3_iqTw3bKfGcN0TGIpChug&s"
          alt=""
        />
        <img
          className="rounded-full h-[70px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToXRLt-PeOJjWUvDncMfzLy3NkpveAiGXr7A&s"
          alt=""
        />
      </div>
      <div className="mt-10">©2024 Dizima. All rights reserved</div>
    </div>
  );
}
export default Footer;