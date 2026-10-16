import { apiDoMal } from "../api";

export default function Home() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const nome = formData.get("nome")?.toString() ?? "";
    const cpf = formData.get("cpf")?.toString() ?? "";
    const senha = formData.get("senha")?.toString() ?? "";

    try {
      await apiDoMal.post({
        nome,
        cpf,
        senha,
      });

      console.log("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      throw error;
    }
  };

  return (
    <div className="flex w-full h-[100vh] items-center-safe justify-center bg-white">
      <form action={handleSubmit} className="bg-white flex gap-2 items-center  justify-center p-24 h-[50vh] flex-col">
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          required 
          className="text-black border rounded-2xl p-2"
        />

        <input
          type="text"
          name="cpf"
          placeholder="Digite seu CPF"
          required 
          className="text-black border rounded-2xl p-2"
        />

        <input
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          required 
          className="text-black border rounded-2xl p-2"
        />

        <button type="submit" className="text-black border rounded-2xl">Cadastrar</button>
      </form>
    </div>
  );
}