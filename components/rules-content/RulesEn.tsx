import React from 'react';

export const RulesEn = () => (
  <article className="max-w-none text-gray-800 leading-relaxed space-y-12">
    
    {/* INTRODUCCIÓN Y FORMATO */}
    <section className="bg-green-50 rounded-2xl p-6 border border-green-100 shadow-sm">
      <h2 className="text-2xl font-black text-[#1a5e3a] mb-4 flex items-center gap-2">
        🎯 Objective and Tournament Format
      </h2>
      <div className="space-y-4 text-lg">
        <p>
          The tournament will be played in a direct elimination knockout format, facing two pairs in each match. The winning pair will advance to the next round.
          Round of 16, Quarter-finals, Semi-finals, and Final.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-600 shadow-sm">
            <h4 className="font-bold text-gray-900">Match Format</h4>
            <p className="text-sm text-gray-600 mt-1">
              Each match is played to the <strong>best of 5 games</strong> (first to win 3).
              Each game is won by reaching <strong>8 hamarrakos (40 stones/points)</strong>.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-[#1a5e3a] shadow-sm">
            <h4 className="font-bold text-gray-900">Limits and Draw</h4>
            <p className="text-sm text-gray-600 mt-1">
              Max capacity: 32 pairs. Random draw. Eliminated pairs can continue playing friendly matches.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CARTAS Y VALORES */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
        Card Values (Spanish Deck)
      </h3>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <p className="mb-4">There are no trumps or suits distinctions. It is played with <strong>4 Kings and 4 Aces</strong> (3s count as a 3, and 2s count as a 2). Scoring is as follows:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
            <span className="block font-bold text-xl text-red-600">10 pts</span>
            King / Horse / Jack (Sota)
          </div>
          
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
            <span className="block font-bold text-xl text-slate-800">Face Value</span>
            7, 6, 5, 4, 3, 2, 1
          </div>
        </div>
      </div>
    </section>

    {/* DINÁMICA DEL JUEGO */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
        Dynamics: Mus and Discard
      </h3>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
        <li>The player to the right of the dealer is the <strong>"mano" (hand)</strong>.</li>
        <li>To speak, you say <strong>"Por mi parte, Mus"</strong> (I want Mus) or <strong>"No hay mus"</strong> (No Mus).</li>
        <li>If anyone cuts the Mus, no one can discard cards, and the betting begins.</li>
      </ul>

      <div className="bg-red-50 p-5 rounded-xl border border-red-200">
        <h4 className="font-black text-red-700 uppercase text-sm tracking-wider mb-2">
          ⚠️ Special Rule: "Corrida / Running Mus"
        </h4>
        <p className="text-gray-800 text-sm">
          In the <strong>first hand</strong> of every game, if Mus is desired, the deck is passed to the right. 
          The player who finally cuts the Mus becomes the "mano" for that round.
        </p>
      </div>
    </section>

    {/* LAS JUGADAS Y PUNTUACIÓN */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
        3. Plays and Scoring
      </h3>
      
      <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm mb-8">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 uppercase text-xs font-bold text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left">Play</th>
              <th className="px-4 py-3 text-left">Definition</th>
              <th className="px-4 py-3 text-right">Value (Stones)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Grande</td>
              <td className="px-4 py-3">Highest cards</td>
              <td className="px-4 py-3 text-right font-mono">1 (in passing)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Chica</td>
              <td className="px-4 py-3">Lowest cards</td>
              <td className="px-4 py-3 text-right font-mono">1 (in passing)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Pares</td>
              <td className="px-4 py-3">2 equal cards</td>
              <td className="px-4 py-3 text-right font-mono">1</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Medias</td>
              <td className="px-4 py-3">3 equal cards</td>
              <td className="px-4 py-3 text-right font-mono">2</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Duples</td>
              <td className="px-4 py-3">Two pairs</td>
              <td className="px-4 py-3 text-right font-mono">3</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Juego (31)</td>
              <td className="px-4 py-3">Sum 31 or more (31 is best)</td>
              <td className="px-4 py-3 text-right font-mono">3</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Juego (Other)</td>
              <td className="px-4 py-3">32, 40, 37...</td>
              <td className="px-4 py-3 text-right font-mono">2</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="px-4 py-3 font-bold text-red-600">The "No" / Deje</td>
              <td className="px-4 py-3">When a bet is refused</td>
              <td className="px-4 py-3 text-right font-mono font-bold text-red-600">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* SEÑAS */}
    <section>
      <div className="bg-slate-900 text-slate-100 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">👀</div>
        <h3 className="text-xl font-bold mb-6 text-red-400 uppercase tracking-widest">
          Official Signs
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Lying about signs is forbidden. Allowed only when holding 4 cards.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium">
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">👄</span> <span>2 Kings: Bite lower lip</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😛</span> <span>2 Aces: Show tongue tip</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">👄</span> <span>3 Kings: Bite lower lip to side</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😋</span> <span>3 Aces: Tongue tip to side</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😏</span> <span>Medias: Twist lips</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">🤨</span> <span>Duples: Raise eyebrows</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😉</span> <span>Juego (31): Wink eye</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😉</span> <span>Punto (30): Wink eye (for Point, if no game)</span>
          </div>
        </div>
      </div>
    </section>

    {/* VOCABULARIO RÁPIDO */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Basic Vocabulary</h3>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Envido:</span> I bet 2 stones.
        </div>
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Órdago:</span> I bet the whole game (all-in).
        </div>
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Adentro/Barru/Ikastola:</span> Warning that a pair has 35 stones or more.
        </div>
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Piedra/Harri/Tanto:</span> Scoring unit (bean, coin...).
        </div>
      </div>
    </section>

    {/* PENALIZACIONES Y CASOS ESPECIALES */}
    <section className="bg-orange-50 border-l-8 border-orange-500 p-6 rounded-r-lg">
      <h3 className="text-lg font-black text-orange-800 uppercase mb-4">
        ⚠️ Penalties and Infractions
      </h3>
      <div className="space-y-4 text-sm text-orange-900">
        <p>
          <strong>Calling PARES without having them:</strong><br/>
          If your partner does NOT have them, the whole hand is void. Opponents take the "No" and their points.
          If your partner DOES have them, yours are void but your partner's still count.
        </p>
        <p>
          <strong>Calling JUEGO without having it:</strong><br/>
          If no one else has it, opponents take the "No" and the point.
          If your partner has it, their game counts.
        </p>
        <div className="mt-4 pt-4 border-t border-orange-200 text-xs uppercase font-bold tracking-wider">
          Note: In any conflict not resolved here, the organisation's decision is final.
        </div>
      </div>
    </section>

    <div className="text-center pt-8">
      <p className="text-xl font-handwriting text-[#1a5e3a]">
        Ready to enjoy and... may the best team win!
      </p>
    </div>

  </article>
);