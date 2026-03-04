"use client";

import "../main.css";
import { ObterCartaoPorId, CriarCartao, AtualizarCartao, DeletarCartao  } from "../api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ICartao from "../InterfaceCartao";

export default function Cadastrar() {
  const nomeRef = useRef<HTMLInputElement>(null);
  const rmRef = useRef<HTMLInputElement>(null);
  const unidadeRef = useRef<HTMLInputElement>(null);
  const cursoRef = useRef<HTMLInputElement>(null);
  const nascimentoRef = useRef<HTMLInputElement>(null);
  const urlFotoRef = useRef<HTMLInputElement>(null);

  const params = useSearchParams();
  const id = params.get("id");
  const [cartao, setCartao] = useState<ICartao | null>(null);

  // quando cartão é carregado, preenche os refs para edição
  useEffect(() => {
    if (!id) return;
    ObterCartaoPorId(id).then((cartao) => {
      setCartao(cartao);
      if (cartao) {
        nomeRef.current!.value = cartao.nome;
        rmRef.current!.value = String(cartao.rm);
        unidadeRef.current!.value = cartao.unidade;
        cursoRef.current!.value = cartao.curso;
        nascimentoRef.current!.value = cartao.nascimento;
        urlFotoRef.current!.value = cartao.urlFoto;
      }
    });
  }, [id]);

  let texto;
  if (id === null) {
    texto = (
      <>
        <h1>Cadastrar</h1>
        <input
          className="inputForm"
          type="text"
          id="nome"
          placeholder="nome"
          ref={nomeRef}
        />
        <input
          className="inputForm"
          type="number"
          id="rm"
          placeholder="rm"
          ref={rmRef}
        />
        <input
          className="inputForm"
          type="text"
          id="unidade"
          placeholder="unidade"
          ref={unidadeRef}
        />
        <input
          className="inputForm"
          type="text"
          id="curso"
          placeholder="curso"
          ref={cursoRef}
        />
        <input
          className="inputForm"
          type="date"
          id="nascimento"
          placeholder="nascimento"
          ref={nascimentoRef}
        />
        <input
          className="inputForm"
          type="text"
          id="urlFoto"
          placeholder="urlFoto"
          ref={urlFotoRef}
        />
        <button
          className="buttonForm"
          onClick={() =>
            CriarCartao({
              rm: parseInt(rmRef.current?.value || "0"),
              nome: nomeRef.current?.value || "",
              unidade: unidadeRef.current?.value || "",
              curso: cursoRef.current?.value || "",
              nascimento: nascimentoRef.current?.value || "",
              urlFoto: urlFotoRef.current?.value || "",
            })
          }
        >
          Criar Cartão
        </button>
      </>
    );
  } else {
    texto = (
      <>
        <h1>Cadastro {id}</h1>
        <input
          className="inputForm"
          type="text"
          id="nome"
          ref={nomeRef}
          defaultValue={cartao?.nome}
        />
        <input
          className="inputForm"
          type="number"
          id="rm"
          ref={rmRef}
          defaultValue={cartao?.rm?.toString()}
        />
        <input
          className="inputForm"
          type="text"
          id="unidade"
          ref={unidadeRef}
          defaultValue={cartao?.unidade}
        />
        <input
          className="inputForm"
          type="text"
          id="curso"
          ref={cursoRef}
          defaultValue={cartao?.curso}
        />
        <input
          className="inputForm"
          type="date"
          id="nascimento"
          ref={nascimentoRef}
          defaultValue={cartao?.nascimento}
        />
        <input
          className="inputForm"
          type="text"
          id="urlFoto"
          ref={urlFotoRef}
          defaultValue={cartao?.urlFoto}
        />
        <button
          className="buttonForm"
          onClick={() =>
            AtualizarCartao(id, {
              id: id,
              rm: parseInt(rmRef.current?.value || "0"),
              nome: nomeRef.current?.value || "",
              unidade: unidadeRef.current?.value || "",
              curso: cursoRef.current?.value || "",
              nascimento: nascimentoRef.current?.value || "",
              urlFoto: urlFotoRef.current?.value || "",
            })
          }
        >
          Atualizar Cartão
        </button>
        <button className="buttonForm" onClick={() => DeletarCartao(id)} style={{backgroundColor: "red"}}>
          Deletar Cartão
        </button>
      </>
    );
  }

  return (
    <>
      <div className="main">
        {texto}
        <br />
      </div>
    </>
  );
}
