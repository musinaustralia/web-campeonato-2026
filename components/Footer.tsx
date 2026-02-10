// components/Footer.tsx

export default function Footer({ dict }: { dict: any }) {
  // 1. Verificación de seguridad: si dict no existe o no tiene footer, 
  // definimos unos valores por defecto para que la web no explote.
  const footerDict = dict?.footer || { associations: "Asociaciones" };

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Columna Izquierda */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold border-b-2 border-red-600 inline-block mb-4">
              {footerDict.associations} {/* <-- Usamos la variable segura */}
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://guretxoko.com.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:text-red-400 transition"
                >
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs group-hover:scale-110 transition">➜</span>
                  Gure Txoko Sydney
                </a>
              </li>
              <li>
                <a 
                  href="https://tassca.com.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:text-red-400 transition"
                >
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs group-hover:scale-110 transition">➜</span>
                  TASSCA
                </a>
              </li>
              <li>
                <a 
                  href="https://www.basqueclubnq.org.au/" 
                  className="group flex items-center gap-3 hover:text-red-400 transition"
                >
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs group-hover:scale-110 transition">➜</span>
                  Basque Club of North Queensland
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-slate-400 text-sm">
            <p className="font-bold text-slate-200">Gure Txoko Sydney</p>
            <p>344 Liverpool St, Darlinghurst NSW 2010</p>
          </div>
        </div>

        {/* Columna Derecha: Mapa de Google */}
        <div className="relative h-64 md:h-full min-h-[250px] rounded-xl overflow-hidden shadow-2xl border border-slate-700">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6624.8878209977875!2d151.21992007644042!3d-33.878219519548104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae0e19880c93%3A0x8fd6581938fcb08!2sGure%20Txoko!5e0!3m2!1ses!2sau!4v1770715067639!5m2!1ses!2sau"
                width="100%"
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            </iframe>
        </div>
      </div>

      {/* Copyright inferior
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-slate-800 text-center text-slate-500 text-xs tracking-widest uppercase">
        <p>© 2026 Australia Mus Tournament • Gure Txoko Sydney</p>
      </div> */}
    </footer>
  );
}