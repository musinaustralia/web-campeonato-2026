import { getDictionary } from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col items-center">
      {/* Imagen del campeonato */}
      <div className="w-full max-h-[500px] overflow-hidden">
        <img 
          src="/Torneo-Australia-Mus-2026.jpg" 
          alt="Mus 2026" 
          className="w-full object-cover"
        />
      </div>

      <div className="p-10 text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">{dict.hero.title}</h2>
        <p className="text-lg text-gray-700">
          {dict.hero.description}
        </p>
      </div>
      <div className="p-10 text-center max-w-2xl">
        <h3 className="text-3xl font-bold mb-4">{dict.info.title}</h3>
        <ul className="text-lg text-gray-700">
          <li>{dict.info.location}</li>
          <li>{dict.info.date}</li>
          <li>{dict.info.time}</li>

        </ul>
      </div>
    </div>
  );
}