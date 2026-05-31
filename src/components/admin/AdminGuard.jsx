"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function AdminGuard({ children }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/admin/login");
        return;
      }

      setChecking(false);
    };

    checkUser();
  }, [router]);

  if (checking) {
    return (
      <main className="container py-5">
        <p>Kontrol ediliyor...</p>
      </main>
    );
  }

  return children;
}
