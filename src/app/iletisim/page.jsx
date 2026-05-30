"use client";

import PageHeader from "@/components/common/PageHeader/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { contactData } from "@/data/contact";

export default function IletisimPage() {
  const { language } = useLanguage();

  return (
    <>
      <PageHeader
        title={contactData.title[language]}
        subtitle={contactData.title[language]}
      />

      <main className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="bg-white shadow-sm p-4 h-100">
              <h3 style={{ color: "#062b6f", fontWeight: "800" }}>
                {contactData.title[language]}
              </h3>

              <p style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>
                {contactData.address[language]}
              </p>

              <p>
                <strong>Telefon: </strong>
                <a href="tel:+903220000000">{contactData.phone}</a>
              </p>

              {contactData.emails.map((email, index) => (
                <p key={index}>
                  <strong>E-posta: </strong>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <iframe
              title="Harita"
              src="https://www.google.com/maps?q=Kocavezir%20Mah.%2032062%20Sk.%20No%204%20Seyhan%20Adana&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
