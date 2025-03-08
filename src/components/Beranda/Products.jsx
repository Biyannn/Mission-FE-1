import Card from "./Card";
const ProductPage = () => {
  return (
    <div className="w-full grid grid-cols-auto-fill gap-6 flex-col">
      <Card
        cardData={{
          image: "/images/bunga.jpg",
          title: "Big 4 Auditor Financial Analyst",
          description:
            "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
          photo: "/Avatar/Orang1.jpg",
          name: "Kim Jongkok",
          jabatan: "Senior Jongkok saat bekerja",
          count: "4",
          rate: "4.00 (85)",
          price: "Rp 669K",
        }}
      ></Card>

      <Card
        cardData={{
          image: "/images/kucing nyantai.jpg",
          title: "Big 4 Auditor Financial Analyst",
          description:
            "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
          photo: "/Avatar/Orang2.jpg",
          name: "Olivia",
          jabatan: "Pengusaha bunga di Dubai",
          count: "4",
          rate: "4.00 (85)",
          price: "Rp 669K",
        }}
      ></Card>

      <Card
        cardData={{
          image: "/images/bunga.jpg",
          title: "Big 4 Auditor Financial Analyst",
          description:
            "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
          photo: "/Avatar/Orang3.jpg",
          name: "Udin",
          jabatan: "Senior",
          count: "4",
          rate: "4.00 (85)",
          price: "Rp 669K",
        }}
      ></Card>

      <Card
        cardData={{
          image: "/images/kucing nyantai.jpg",
          title: "Big 4 Auditor Financial Analyst",
          description:
            "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
          photo: "/Avatar/Orang4.jpg",
          name: "Zen",
          jabatan: "Senior",
          count: "4",
          rate: "4.00 (85)",
          price: "Rp 669K",
        }}
      ></Card>

      <Card
        cardData={{
          image: "/images/bunga.jpg",
          title: "Big 4 Auditor Financial Analyst",
          description:
            "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
          photo: "/Avatar/Orang5.jpg",
          name: "Ken",
          jabatan: "Senior",
          count: "4",
          rate: "4.00 (85)",
          price: "Rp 669K",
        }}
      ></Card>

      <Card
        cardData={{
          image: "/images/kucing nyantai.jpg",
          title: "Big 4 Auditor Financial Analyst",
          description:
            "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
          photo: "/Avatar/Orang6.jpg",
          name: "Yan",
          jabatan: "Senior",
          count: "4",
          rate: "4.00 (85)",
          price: "Rp 669K",
        }}
      ></Card>
    </div>
  );
};

export default ProductPage;
