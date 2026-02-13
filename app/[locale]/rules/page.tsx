import { RulesEs } from "@/components/rules-content/RulesEs";
import { RulesEn } from "@/components/rules-content/RulesEn";
import { RulesEu } from "@/components/rules-content/RulesEu";
import { getDictionary } from "../dictionaries";

export default async function RulesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const getContent = () => {
    switch (locale) {
      case 'es': return <RulesEs />;
      case 'en': return <RulesEn />;
      case 'eu': return <RulesEu />;
      default: return <RulesEs />;
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-black text-[#1a5e3a] mb-8 uppercase italic border-b-4 border-red-600 inline-block">
        {dict.nav.rules}
      </h1>
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        {getContent()}
      </div>
    </div>
  );
}