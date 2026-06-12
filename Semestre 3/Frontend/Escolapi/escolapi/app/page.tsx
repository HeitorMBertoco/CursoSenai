"use client";
import { PT_Sans } from "next/font/google";
import { Listar } from "@/services/api";
import { IAluno } from "@/services/interface";
import { useEffect, useState, FormEvent } from "react";

const ptSans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const [alunos, setAlunos] = useState<IAluno[]>([]);
  const [buscaNome, setBuscaNome] = useState<string>(""); 
  const [buscaGenero, setBuscaGenero] = useState<string>(""); 
  const [carregando, setCarregando] = useState<boolean>(false);

  // Envia os filtros limpos e exatos para a função do Service
  const carregarAlunosFiltrados = async (nome: string, genero: string) => {
    setCarregando(true);
    try {
      const dadosAlunos = await Listar(nome, genero);
      setAlunos(dadosAlunos);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarAlunosFiltrados("", "");
  }, []);

  const handlePesquisar = (e: FormEvent) => {
    e.preventDefault();
    carregarAlunosFiltrados(buscaNome, buscaGenero);
  };

  const getGeneroBadgeClass = (genero: string) => {
    switch (genero?.toLowerCase()) {
      case 'masculino': return 'bg-blue-50 text-blue-700 ring-blue-700/10';
      case 'feminino': return 'bg-purple-50 text-purple-700 ring-purple-700/10';
      default: return 'bg-gray-50 text-gray-600 ring-gray-500/10';
    }
  };

  return (
    <div className={`flex flex-col bg-white items-center p-6 min-h-screen ${ptSans.className}`}>
      <h1 className="text-3xl text-black font-extrabold">Escola Senai</h1>
      <br />
      
      <form onSubmit={handlePesquisar} className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 items-end bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex-1 w-full">
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase mb-1">Nome</label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.601 10.601z" />
              </svg>
            </div>
            <input
              type="text"
              id="name"
              value={buscaNome}
              onChange={(e) => setBuscaNome(e.target.value)}
              placeholder="Ex: Hulda..."
              className="block w-full rounded-md border-0 py-2 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            />
          </div>
        </div>

        <div className="w-full sm:w-48">
          <label htmlFor="genero" className="block text-xs font-semibold text-gray-700 uppercase mb-1">Gênero</label>
          <select
            id="genero"
            value={buscaGenero}
            onChange={(e) => setBuscaGenero(e.target.value)}
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm bg-white"
          >
            <option value="">Todos</option>
            {/* Como seu backend usa strings exatas (findMany com equals), passamos os valores capitulares corretos aqui */}
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            
          </select>
        </div>

        <button
          type="submit"
          disabled={carregando}
          className="w-full sm:w-auto h-9 rounded-md bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 transition-colors disabled:bg-indigo-400 whitespace-nowrap"
        >
          {carregando ? "Buscando..." : "Filtrar"}
        </button>
      </form>
      <br />

      <section className="flex flex-col w-full max-w-5xl items-center m-2">
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full flex flex-col bg-white text-sm text-gray-600">
            <thead className="block bg-gray-50 border-b border-gray-200 font-semibold text-gray-700 uppercase tracking-wider">
              <tr className="flex w-full">
                <th className="min-w-24 flex-1 p-4 text-left">Nome</th>
                <th className="min-w-24 w-32 shrink-0 p-4 text-left">Idade</th>
                <th className="min-w-24 w-40 shrink-0 p-4 text-left">Gênero</th>
              </tr>
            </thead>

            <tbody className="block divide-y divide-gray-100">
              {carregando ? (
                <tr className="flex w-full p-8 justify-center text-gray-400 italic">
                  <td>Buscando dados no servidor...</td>
                </tr>
              ) : alunos.length > 0 ? (
                alunos.map((aluno) => (
                  <tr key={aluno.id} className="flex w-full hover:bg-gray-50 transition-colors">
                    <td className="min-w-24 flex-1 p-4 font-medium text-gray-900 truncate">{aluno.nome}</td>
                    <td className="min-w-24 w-32 shrink-0 p-4">{aluno.idade === 0 ? 'Recém-nascido' : `${aluno.idade} anos`}</td>
                    <td className="min-w-24 w-40 shrink-0 p-4">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getGeneroBadgeClass(aluno.genero)}`}>
                        {aluno.genero}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="flex w-full p-8 justify-center text-gray-400 italic">
                  <td>Nenhum aluno encontrado para essa combinação de filtros.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
