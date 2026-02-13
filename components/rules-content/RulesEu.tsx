import React from 'react';

export const RulesEu = () => (
  <article className="max-w-none text-gray-800 leading-relaxed space-y-12">
    
    {/* SARRERA ETA FORMATUA */}
    <section className="bg-green-50 rounded-2xl p-6 border border-green-100 shadow-sm">
      <h2 className="text-2xl font-black text-[#1a5e3a] mb-4 flex items-center gap-2">
        🎯 Txapelketaren Helburua eta Formatua
      </h2>
      <div className="space-y-4 text-lg">
        <p>
          Txapelketa kanporaketa zuzeneko formatuan jokatuko da, partida bakoitzean bi bikote aurrez aurre jarriz. Partida irabazten duen bikotea hurrengo fasera pasako da.
          Final-zortzirenak, Final-laurdenak, Finalerdiak eta Finala.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-600 shadow-sm">
            <h4 className="font-bold text-gray-900">Partiden Formatua</h4>
            <p className="text-sm text-gray-600 mt-1">
              Txapelketako partida bakoitza <strong>5 jokoko onenera</strong> jokatuko da (3 irabazten dituenak irabaziko du).
              Joko bakoitza <strong>8 hamarreko (40 tanto)</strong> lortuz irabazten da.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-[#1a5e3a] shadow-sm">
            <h4 className="font-bold text-gray-900">Mugak eta Gurutzaketak</h4>
            <p className="text-sm text-gray-600 mt-1">
              Gehienez: 32 bikote. Zozketa bidez. Kanporatutako bikoteek lagunarteko partidak jokatzen jarraitu ahal izango dute.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* KARTAK ETA BALIOAK */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
        Karten Balioa (Karta Espainiarrak)
      </h3>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <p className="mb-4">Ez dago triunfo edo palu berezirik. <strong>4 Errege eta 4 Batekorekin</strong> jokatzen da (3ek hiru balio dute, eta 2ek bi). Jokoa eta punturako balioak honako hauek dira:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
            <span className="block font-bold text-xl text-red-600">10 tanto</span>
            Errege / Zaldi / Sota
          </div>
          
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
            <span className="block font-bold text-xl text-slate-800">Balio naturala</span>
            7, 6, 5, 4, 3, 2, 1
          </div>
        </div>
      </div>
    </section>

    {/* JOKOAREN DINAMIKA */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
        Dinamika: Musa eta Baztertu
      </h3>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
        <li>Banatzailearen eskuinean dagoen jokalaria <strong>"eskua"</strong> da.</li>
        <li>Hitz egiteko, <strong>"Nire aldetik, Mus"</strong> edo <strong>"Ez dago musik"</strong> esaten da.</li>
        <li>Inork musa mozten badu, ezin da kartarik baztertu eta jokoa hasten da.</li>
      </ul>

      <div className="bg-red-50 p-5 rounded-xl border border-red-200">
        <h4 className="font-black text-red-700 uppercase text-sm tracking-wider mb-2">
          ⚠️ Arau Berezia: "Mus iheslaria (seinarik gabe)"
        </h4>
        <p className="text-gray-800 text-sm">
          Joko bakoitzeko <strong>lehenengo eskuan</strong>, Musa nahi bada, karta-sorta eskuinera pasatzen da. 
          Musa mozten duen jokalaria izango da txanda horretako "eskua".
        </p>
      </div>
    </section>

    {/* JOKALDIAK ETA PUNTUAZIOA */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
        3. Jokaldiak eta Puntuazioa
      </h3>
      
      <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm mb-8">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 uppercase text-xs font-bold text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left">Jokaldia</th>
              <th className="px-4 py-3 text-left">Definiziora</th>
              <th className="px-4 py-3 text-right">Balioa (Tantoak)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Handia</td>
              <td className="px-4 py-3">Karta altuenak</td>
              <td className="px-4 py-3 text-right font-mono">1 (pasean)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Txikia</td>
              <td className="px-4 py-3">Karta baxuenak</td>
              <td className="px-4 py-3 text-right font-mono">1 (pasean)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Pareak</td>
              <td className="px-4 py-3">2 karta berdin</td>
              <td className="px-4 py-3 text-right font-mono">1</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Mediak</td>
              <td className="px-4 py-3">3 karta berdin</td>
              <td className="px-4 py-3 text-right font-mono">2</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Dupleak</td>
              <td className="px-4 py-3">Bi bikote</td>
              <td className="px-4 py-3 text-right font-mono">3</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Jokoa (31)</td>
              <td className="px-4 py-3">31 edo gehiago (31 onena)</td>
              <td className="px-4 py-3 text-right font-mono">3</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Jokoa (Besteak)</td>
              <td className="px-4 py-3">32, 40, 37...</td>
              <td className="px-4 py-3 text-right font-mono">2</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="px-4 py-3 font-bold text-red-600">"Ezetz" / Ukoa</td>
              <td className="px-4 py-3">Inbidatua onartzen ez denean</td>
              <td className="px-4 py-3 text-right font-mono font-bold text-red-600">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* SEINUAK */}
    <section>
      <div className="bg-slate-900 text-slate-100 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">👀</div>
        <h3 className="text-xl font-bold mb-6 text-red-400 uppercase tracking-widest">
          Seinu Ofizialak
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Debekatua dago seinuei buruz gezurra esatea. 4 kartak eskuan direnean bakarrik egin daitezke.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium">
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">👄</span> <span>2 Errege: Ezpainari hozka egin</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😛</span> <span>2 Bateko: Mihia atera</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">👄</span> <span>3 Errege: Ezpainari hozka albo batera</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😋</span> <span>3 Bateko: Mihia albo batera atera</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😏</span> <span>Mediak: Ezpainak okertu</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">🤨</span> <span>Dupleak: Bekainetako bat jaso</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😉</span> <span>Jokoa (31): Begi kliska</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😉</span> <span>Puntua (30): Begi kliska (punturako, inork jokorik ez badu)</span>
          </div>
        </div>
      </div>
    </section>

    {/* HIZTEGIA */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Oinarrizko Hiztegia</h3>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Enbido:</span> 2 tanto apostu egitea.
        </div>
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Hordago:</span> Joko osoa apostu egitea (harri guztiak).
        </div>
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Adentro/Barru/Ikastola:</span> Bikote batek 35 tanto edo gehiago dituela abisatzea.
        </div>
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Harria/Tantoa:</span> Puntuazio unitatea.
        </div>
      </div>
    </section>

    {/* ZIGORRAK */}
    <section className="bg-orange-50 border-l-8 border-orange-500 p-6 rounded-r-lg">
      <h3 className="text-lg font-black text-orange-800 uppercase mb-4">
        ⚠️ Zigorrak eta Arau-hausteak
      </h3>
      <div className="space-y-4 text-sm text-orange-900">
        <p>
          <strong>PAREAK kantatu ez daukazunean:</strong><br/>
          Zure kideak EZ badauka, dena baliogabetzen da. Aurkariek ere badaukatene, "ukoa" eta euren puntuak apuntatzen dituzte.
          Zure kideak BAI badauka, zureak baliogabetzen dira baina kidearenak balio dute.
        </p>
        <p>
          <strong>JOKOA kantatu ez daukazunean:</strong><br/>
          Beste inork ez badauka, aurkariek "ukoa" eta puntua apuntatzen dute.
          Zure kideak badauka, bere jokoak balio du.
        </p>
        <div className="mt-4 pt-4 border-t border-orange-200 text-xs uppercase font-bold tracking-wider">
          Oharra: Hemen agertzen ez den edozein gatazkatan, antolakuntzaren hitza izango da lege.
        </div>
      </div>
    </section>

    <div className="text-center pt-8">
      <p className="text-xl font-handwriting text-[#1a5e3a]">
        Dena prest gozatzeko eta... onenak irabaz dezala!
      </p>
    </div>

  </article>
);