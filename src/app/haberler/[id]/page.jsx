import Image from "next/image";
import { newsData } from "@/data/news";

export default function NewsDetailPage({ params }) {
  const news = newsData.find((item) => item.id === Number(params.id));

  if (!news) {
    return (
      <main className="container py-5">
        <h1>Haber bulunamadı.</h1>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <Image
        src={news.image}
        alt={news.title.tr}
        width={1200}
        height={600}
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
        }}
      />

      <div style={{ marginTop: "30px", maxWidth: "900px" }}>
        <p style={{ color: "#b00000", fontWeight: "700" }}>{news.date}</p>

        <h1 style={{ color: "#062b6f", fontWeight: "800" }}>{news.title.tr}</h1>

        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>{news.content.tr}</p>
      </div>
    </main>
  );
}
