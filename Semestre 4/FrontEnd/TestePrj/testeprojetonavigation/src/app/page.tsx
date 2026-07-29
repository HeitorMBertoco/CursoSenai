'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="container">
      <h1 className="title">The Shadow of The Wind</h1>
      <span className="subtitle">Carlos Ruiz Zafón</span>
      <div className="button-group">
        <button 
          className="btn btn-arrow" 
          onClick={() => router.push("/pages/Credits")}
        >
          Começar o Livro <span>→</span>
        </button>
      </div>
    </div>
  );
}
