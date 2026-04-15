
import styles from "../card.module.css"



export default function ListaCat() {



  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardcriar} >Criar +</div>
        <div className={styles.card}>Metro (m)</div>
        <div className={styles.card}>Centímetro (cm)</div>
        <div className={styles.card}>Milímetro (mm)</div>
        <div className={styles.card}>Quilograma (kg)</div>
        <div className={styles.card}>Grama (g)</div>
        <div className={styles.card}>Litro (L)</div>
        <div className={styles.card}>Mililitro (mL)</div>
        <div className={styles.card}>Unidade (un)</div>
        <div className={styles.card}>Volt (V)</div>
        <div className={styles.card}>Columb (C)</div>
        <div className={styles.card}>Watts (W)</div>
        
      </div>
    </>
  );
}