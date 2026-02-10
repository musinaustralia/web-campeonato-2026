import "../globals.css";
import { getDictionary } from "./dictionaries";
import Header from "@/components/Header"; // Asegúrate de que la ruta sea correcta
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 1. Extraemos el locale de los params (Next.js 15 requiere await)
  const { locale } = await params;
  
  // 2. Cargamos el diccionario correspondiente al idioma
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        
        {/* 3. Integramos el Header pasándole el diccionario y el locale */}
        <Header dict={dict} locale={locale} />
        
        {/* 4. El contenido principal de cada página */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 5. Integramos el Footer */}
        <Footer dict={dict} />
        
      </body>
    </html>
  );
}