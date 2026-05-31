"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import AdminGuard from "@/components/admin/AdminGuard";
import { supabase } from "@/lib/supabase";

export default function HaberDuzenlePage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const getNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setForm(data);
      }

      setLoading(false);
    };

    getNews();
  }, [id]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("news")
      .update({
        title_tr: form.title_tr,
        title_en: form.title_en,
        title_ar: form.title_ar,
        description_tr: form.description_tr,
        description_en: form.description_en,
        description_ar: form.description_ar,
        content_tr: form.content_tr,
        content_en: form.content_en,
        content_ar: form.content_ar,
        image_url: form.image_url,
      })
      .eq("id", id);

    if (error) {
      alert("Güncelleme başarısız.");
      return;
    }

    alert("Haber güncellendi.");
    router.push("/admin/haberler");
  };

  if (loading) {
    return (
      <AdminGuard>
        <main className="container py-5">
          <p>Yükleniyor...</p>
        </main>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <main className="container py-5">
        <h1 className="mb-4">Haberi Düzenle</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="title_tr"
            value={form.title_tr}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Başlık TR"
          />

          <textarea
            name="description_tr"
            value={form.description_tr}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Açıklama TR"
          />

          <textarea
            name="content_tr"
            value={form.content_tr}
            onChange={handleChange}
            rows="8"
            className="form-control mb-3"
            placeholder="İçerik TR"
          />

          <button className="btn btn-success">Güncelle</button>
        </form>
      </main>
    </AdminGuard>
  );
}
