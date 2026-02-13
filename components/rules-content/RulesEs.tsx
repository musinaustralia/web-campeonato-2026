import React from 'react';

export const RulesEs = () => (
  <article className="max-w-none text-gray-800 leading-relaxed space-y-12">
    
    {/* INTRODUCCIÓN Y FORMATO */}
    <section className="bg-green-50 rounded-2xl p-6 border border-green-100 shadow-sm">
      <h2 className="text-2xl font-black text-[#1a5e3a] mb-4 flex items-center gap-2">
        🎯 Objetivo y Formato del Torneo
      </h2>
      <div className="space-y-4 text-lg">
        <p>
          El torneo se jugará en formato de eliminación directa, enfrentando a dos parejas en cada partida. La pareja ganadora de la partida será la que pase a la suiguiente ronda.
          Octavos de final, Cuartos de final, Semifinales y Final.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-600 shadow-sm">
            <h4 className="font-bold text-gray-900">Formato de Partidas</h4>
            <p className="text-sm text-gray-600 mt-1">
              Cada partida de este campeonato se jugará al <strong>mejor de 5 juegos</strong> (gana la pareja que llegue antes a 3).
          Cada juego se gana consiguiendo <strong>8 hamarrakos (40 piedras)</strong>.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-[#1a5e3a] shadow-sm">
            <h4 className="font-bold text-gray-900">Límite y Cruces</h4>
            <p className="text-sm text-gray-600 mt-1">
              Cupo máx: 32 parejas. Cuadro aleatorio. Las parejas eliminadas podrán seguir jugando partidas amistosas.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CARTAS Y VALORES */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
        Valor de las Cartas (Baraja Española)
      </h3>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <p className="mb-4">No hay triunfo ni distinción de palos. Se juega con <strong>4 Reyes y 4 Ases</strong> (Los 3s valen 3, y los 2s valen 2). El puntaje para el juego y el punto será el sguiente</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
            <span className="block font-bold text-xl text-red-600">10 pts</span>
            Rey / Caballo / Sota
          </div>
          
          <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
            <span className="block font-bold text-xl text-slate-800">Valor natural</span>
            7, 6, 5, 4, 3, 2, 1
          </div>
        </div>
      </div>
    </section>

    {/* DINÁMICA DEL JUEGO */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
        Dinámica: Mus y Descarte
      </h3>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
        <li>El jugador a la derecha del dador es la <strong>"mano"</strong>.</li>
        <li>Se habla diciendo <strong>"Por mi parte, Mus"</strong> o <strong>"No hay mus"</strong>.</li>
        <li>Si se corta el mus, nadie puede descartarse y comienza el juego.</li>
      </ul>

      <div className="bg-red-50 p-5 rounded-xl border border-red-200">
        <h4 className="font-black text-red-700 uppercase text-sm tracking-wider mb-2">
          ⚠️ Regla Especial: "Corrida y sin señas"
        </h4>
        <p className="text-gray-800 text-sm">
          En la <strong>primera mano</strong> de cada juego, si se quiere Mus, se pasa la baraja a la derecha. 
          El jugador que corte el Mus será el "mano" para esa ronda.
        </p>
      </div>
    </section>

    {/* LAS JUGADAS Y PUNTUACIÓN */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
        3. Las Jugadas y Puntuación
      </h3>
      
      <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm mb-8">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 uppercase text-xs font-bold text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left">Jugada</th>
              <th className="px-4 py-3 text-left">Definición</th>
              <th className="px-4 py-3 text-right">Valor (Piedras)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Grande</td>
              <td className="px-4 py-3">Cartas más altas</td>
              <td className="px-4 py-3 text-right font-mono">1 (en paso)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Chica</td>
              <td className="px-4 py-3">Cartas más bajas</td>
              <td className="px-4 py-3 text-right font-mono">1 (en paso)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Pares</td>
              <td className="px-4 py-3">2 cartas iguales</td>
              <td className="px-4 py-3 text-right font-mono">1</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Medias</td>
              <td className="px-4 py-3">3 cartas iguales</td>
              <td className="px-4 py-3 text-right font-mono">2</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Duples</td>
              <td className="px-4 py-3">Dos parejas</td>
              <td className="px-4 py-3 text-right font-mono">3</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Juego (31)</td>
              <td className="px-4 py-3">Suma 31 o más (31 es la mejor)</td>
              <td className="px-4 py-3 text-right font-mono">3</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-[#1a5e3a]">Juego (Otro)</td>
              <td className="px-4 py-3">32, 40, 37...</td>
              <td className="px-4 py-3 text-right font-mono">2</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="px-4 py-3 font-bold text-red-600">El "No" / Deje</td>
              <td className="px-4 py-3">Cuando no se acepta un envite</td>
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
          Señas Oficiales
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Prohibido mentir sobre las señas. Solo permitidas cuando se tienen las 4 cartas.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium">
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">👄</span> <span>2 Reyes: Morder labio inferior</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😛</span> <span>2 Ases: Sacar punta lengua</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">👄</span> <span>3 Reyes: Morder labio inferior hacia un lado</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😋</span> <span>3 Ases: Sacar punta lengua</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😏</span> <span>Medias: Torcer labios</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">🤨</span> <span>Duples: Elevar cejas</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😉</span> <span>Juego (31): Guiñar ojo</span>
          </div>
          <div className="flex items-center gap-3 border-b border-slate-700 pb-2">
            <span className="text-2xl">😉</span> <span>Punto (30): Guiñar ojo (al punto), despues de que nadie tenga juego</span>
          </div>
        </div>
      </div>
    </section>

    {/* VOCABULARIO RÁPIDO */}
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Vocabulario Básico</h3>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Envido:</span> Apuesto 2 piedras.
        </div>
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Órdago:</span> Apuesto el juego entero (todas las piedras).
        </div>
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Adentro/Barru/Ikastola:</span> Aviso de que una pareja tiene 35 piedras o más.
        </div>
        <div className="bg-white p-3 border border-slate-100 rounded shadow-sm">
          <span className="font-bold text-[#1a5e3a]">Piedra/Harri/Tanto:</span> Unidad de tanteo (garbanzo, moneda...).
        </div>
      </div>
    </section>

    {/* PENALIZACIONES Y CASOS ESPECIALES */}
    <section className="bg-orange-50 border-l-8 border-orange-500 p-6 rounded-r-lg">
      <h3 className="text-lg font-black text-orange-800 uppercase mb-4">
        ⚠️ Penalizaciones e Infracciones
      </h3>
      <div className="space-y-4 text-sm text-orange-900">
        <p>
          <strong>Cantar PARES no teniendo:</strong><br/>
          Si tu compañero NO tiene, se invalida todo. Si los contrarios tienen, se apuntan el deje y sus puntos. 
          Si tu compañero SÍ tiene, se invalidan tus pares pero valen los de tu compañero.
        </p>
        <p>
          <strong>Cantar JUEGO no teniendo:</strong><br/>
          Si nadie más tiene, los contrarios se anotan el deje y punto. 
          Si tu compañero tiene, su juego cuenta.
        </p>
        <div className="mt-4 pt-4 border-t border-orange-200 text-xs uppercase font-bold tracking-wider">
          Nota: Ante cualquier conflicto no resuelto aquí, la palabra de la organización será ley.
        </div>
      </div>
    </section>

    <div className="text-center pt-8">
      <p className="text-xl font-handwriting text-[#1a5e3a]">
        ¡Todos listos para disfrutar y... que gane el mejor!
      </p>
    </div>

  </article>
);