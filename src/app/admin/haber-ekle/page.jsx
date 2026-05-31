"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import AdminGuard from "@/components/admin/AdminGuard";
import { supabase } from "@/lib/supabase";

export default function HaberEklePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title_tr: "",
    title_en: "",
    title_ar: "",
    description_tr: "",
    description_en: "",
    description_ar: "",
    content_tr: "",
    content_en: "",
    content_ar: "",
    image_url: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImage = async () => {
    if (!imageFile) return "";

    const fileExt = imageFile.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `news/${fileName}`;

    const { error } = await supabase.storage
      .from("news-images")
      .upload(filePath, imageFile);

    if (error) {
      throw error;
    }

    const { data } = supabase.storage
      .from("news-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = await uploadImage();

      const { error } = await supabase.from("news").insert([
        {
          ...form,
          image_url: imageUrl,
        },
      ]);

      if (error) {
        alert("Haber eklenirken hata oluştu.");
        setLoading(false);
        return;
      }

      alert("Haber başarıyla eklendi.");
      router.push("/admin/haberler");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <AdminGuard>
      <main className="container py-5">
        <h1 className="mb-4">Yeni Haber Ekle</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="title_tr"
            className="form-control mb-3"
            placeholder="Başlık TR"
            onChange={handleChange}
            required
          />
          <input
            name="title_en"
            className="form-control mb-3"
            placeholder="Başlık EN"
            onChange={handleChange}
          />
          <input
            name="title_ar"
            className="form-control mb-3"
            placeholder="Başlık AR"
            onChange={handleChange}
          />

          <textarea
            name="description_tr"
            className="form-control mb-3"
            placeholder="Kısa Açıklama TR"
            onChange={handleChange}
            required
          />
          <textarea
            name="description_en"
            className="form-control mb-3"
            placeholder="Kısa Açıklama EN"
            onChange={handleChange}
          />
          <textarea
            name="description_ar"
            className="form-control mb-3"
            placeholder="Kısa Açıklama AR"
            onChange={handleChange}
          />

          <textarea
            name="content_tr"
            className="form-control mb-3"
            placeholder="Detay İçerik TR"
            rows="6"
            onChange={handleChange}
            required
          />
          <textarea
            name="content_en"
            className="form-control mb-3"
            placeholder="Detay İçerik EN"
            rows="6"
            onChange={handleChange}
          />
          <textarea
            name="content_ar"
            className="form-control mb-3"
            placeholder="Detay İçerik AR"
            rows="6"
            onChange={handleChange}
          />

          <label className="form-label">Haber Görseli</label>
          <input
            type="file"
            className="form-control mb-4"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Kaydediliyor..." : "Haberi Kaydet"}
          </button>
        </form>
      </main>
    </AdminGuard>
  );
}
