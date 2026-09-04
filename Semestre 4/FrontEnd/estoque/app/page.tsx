'use client'
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-800 gap-2 min-h-screen">
      
      <Button text="Operações Estoques" onClick="/crudpage?pg=operacoes" type="dark"/>
      <Button text="Unidade Medidas" onClick="/crudpage?pg=unidades" type="dark"/>
      <Button text="Categorias" onClick="/crudpage?pg=categorias" type="dark" />
      <Button text="Produtos" onClick="/crudpage?pg=produtos" type="dark"/>
    </div>
  );
}
