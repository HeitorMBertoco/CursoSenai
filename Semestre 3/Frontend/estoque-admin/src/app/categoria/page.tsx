'use client'

import { useRouter } from "next/navigation";
import styles from "../card.module.css"
export default function ListaCat() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div onClick={() => router.push("./categoria/cadastro")} className={styles.cardcriar} >Criar +</div>
        <div className={styles.card}>Liquidificador</div>
        <div className={styles.card}>Saleiro</div>
        <div className={styles.card}>Airfrier</div>
        <div className={styles.card}>Pratos</div>
        <div className={styles.card}>Copos</div>
        <div className={styles.card}>Ralador Queijo</div>
        <div className={styles.card}>Furador de Coco</div>
        <div className={styles.card}>Espremedor de alho</div>
        <div className={styles.card}>Telhados</div>
        <div className={styles.card}>Garfos</div>
        <div className={styles.card}>Facas</div>
    
      </div>
    </>
  );
}
