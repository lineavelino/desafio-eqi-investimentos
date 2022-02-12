import styles from "./styles.module.scss"

export function Results() {
    return (
        <main>
            <h2>Resultado da Simulação</h2>

            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <strong>Valor final Bruto</strong>
                    <p>R$ 15.509,27</p>
                </div>

                <div className={styles.card}>
                    <strong>Alíquota do IR</strong>
                    <p>20%</p>
                </div>

                <div className={styles.card}>
                    <strong>Valor Pago em IR</strong>
                    <p>R$ 1.509,27</p>
                </div>

                <div className={styles.card}>
                    <strong>Valor Final Líquido</strong>
                    <p>R$ 56.509,27</p>
                </div>

                <div className={styles.card}>
                    <strong>Valor Total Investido</strong>
                    <p>R$ 9.509,27</p>
                </div>

                <div className={styles.card}>
                    <strong>Ganho Líquido</strong>
                    <p>R$ 47.000,00</p>
                </div>
            </div>
        </main>
    )
}