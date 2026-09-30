'use client'
import { useState, useEffect } from "react";

interface HistoricoItem {
  nome: string;
  hora: string;
  estado: "ligado" | "desligado";
}

export default function Home() {
  const [lampada, alternarlamp] = useState<"ligado" | "desligado">("desligado");
  const [listaHistorico, setListaHistorico] = useState<HistoricoItem[]>([]);
  const [formdata, setFormdata] = useState({
    nome: '',
    hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    estado: lampada
  });

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('historico');
    if (dadosSalvos) {
      try {
        const parseado = JSON.parse(dadosSalvos);
        setListaHistorico(Array.isArray(parseado) ? parseado : [parseado]);
      } catch {
        localStorage.removeItem('historico');
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev, [name]: value
    }));
  };

  const toggleLamp = () => {
    const newState = lampada === "ligado" ? "desligado" : "ligado";
    alternarlamp(newState);
    setFormdata(prev => ({ ...prev, estado: newState }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const novaHora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const novoIt
    em: HistoricoItem = { 
      ...formdata, 
      hora: novaHora,
      estado: lampada 
    };
    
    const novaLista = [novoItem, ...listaHistorico];
    setListaHistorico(novaLista);
    localStorage.setItem('historico', JSON.stringify(novaLista));
    
    setFormdata(prev => ({ ...prev, nome: '' }));
    alert('ronaldo');
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans p-6 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <button 
        type="button" 
        onClick={toggleLamp}
        className="mb-8 px-4 py-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 font-medium rounded-lg shadow-sm transition-colors"
      >
        Lampada esta: {lampada === "ligado" ? "Ligada" : "Desligada"}
      </button>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm mb-8">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Nome</label>
          <input 
            type="text" 
            id="nome"
            name="nome" 
            value={formdata.nome}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors shadow-sm"
        >
          Submit
        </button>
      </form>

      <div className="w-full max-w-md overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
              <th className="p-3">Nome</th>
              <th className="p-3">Hora</th>
              <th className="p-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {listaHistorico.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-4 text-center text-zinc-400 dark:text-zinc-500">
                  Nenhum registro encontrado
                </td>
              </tr>
            ) : (
              listaHistorico.map((item, index) => (
                <tr key={index} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="p-3 font-medium">{item.nome}</td>
                  <td className="p-3 text-zinc-500 dark:text-zinc-400">{item.hora}</td>
                  <td className="p-3">
                    <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                      item.estado === 'ligado' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400'
                    }`}>
                      {item.estado}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}