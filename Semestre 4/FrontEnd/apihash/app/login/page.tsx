"use client";

import { useState } from "react";
import { apiDoMal } from "../../api";

export default function LoginPorCpf() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [sucesso, setSucesso] = useState<boolean | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMensagem("");
    setSucesso(null);
    setCarregando(true);

    try {
      const resultado = await apiDoMal.validar({
        nome,
        cpf: cpf.replace(/\D/g, ""),
        senha,
      });

      setSucesso(true);
      setMensagem(resultado || "Login realizado com sucesso!");
    } catch (error) {
      setSucesso(false);
      setMensagem(
        error instanceof Error
          ? error.message
          : "Erro inesperado ao validar login."
      );
    } finally {
      setCarregando(false);
    }
  }

  const lidarComCpf = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, "");
    const valorMascarado = apenasNumeros
      .replace(/(\d{3})(\d)/, "\$1.\$2")
      .replace(/(\d{3})(\d)/, "\$1.\$2")
      .replace(/(\d{3})(\d{1,2})\$/, "\$1-\$2");
    setCpf(valorMascarado.substring(0, 14));
  };

  return (
    <main
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Acessar Sistema</h1>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        Insira seus dados cadastrais para validar sua credencial de acesso.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <label htmlFor="nome" style={{ fontWeight: "bold" }}>Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome completo"
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          required
        />

        <label htmlFor="cpf" style={{ fontWeight: "bold" }}>CPF</label>
        <input
          id="cpf"
          type="text"
          value={cpf}
          onChange={(e) => lidarComCpf(e.target.value)}
          placeholder="000.000.000-00"
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          required
        />

        <label htmlFor="senha" style={{ fontWeight: "bold" }}>Senha</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          required
        />

        <button 
          type="submit" 
          disabled={carregando}
          style={{
            padding: "10px",
            backgroundColor: carregando ? "#ccc" : "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: carregando ? "not-allowed" : "pointer",
            fontWeight: "bold",
            marginTop: "8px"
          }}
        >
          {carregando ? "Autenticando..." : "Entrar"}
        </button>
      </form>

      {mensagem && (
        <div 
          role="status" 
          style={{ 
            marginTop: "20px", 
            padding: "12px", 
            borderRadius: "4px",
            backgroundColor: sucesso ? "#e6f4ea" : "#fce8e6",
            color: sucesso ? "#137333" : "#c5221f",
            border: `1px solid ${sucesso ? "#dadce0" : "#fad2cf"}`,
            fontWeight: "500"
          }}
        >
          {mensagem}
        </div>
      )}
    </main>
  );
}
