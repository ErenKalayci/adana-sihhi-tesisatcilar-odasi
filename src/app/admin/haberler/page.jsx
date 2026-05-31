"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import AdminGuard from "@/components/admin/AdminGuard";
import { supabase } from "@/lib/supabase";

export default function AdminHaberlerPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setNews(data);
      }
    };

    getNews();
  }, []);
  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Bu haberi silmek istediğinize emin misiniz?",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("news").delete().eq("id", id);

    if (error) {
      alert("Silme işlemi başarısız.");
      return;
    }

    setNews((prev) => prev.filter((item) => item.id !== id));

    alert("Haber silindi.");
  };
  return (
    <AdminGuard>
      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Haberler</h1>

          <Link href="/admin/haber-ekle" className="btn btn-primary">
            Yeni Haber Ekle
          </Link>
        </div>

        {news.length === 0 ? (
          <p>Henüz haber eklenmemiş.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Başlık</th>
                  <th>Tarih</th>
                  <th>İşlemler</th>
                </tr>
              </thead>

              <tbody>
                {news.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>

                    <td>{item.title_tr}</td>

                    <td>
                      {new Date(item.created_at).toLocaleDateString("tr-TR")}
                    </td>

                    <td>
                      <div className="d-flex gap-2">
                        <Link
                          href={`/admin/haber-duzenle/${item.id}`}
                          className="btn btn-warning btn-sm"
                        >
                          Düzenle
                        </Link>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </AdminGuard>
  );
}
