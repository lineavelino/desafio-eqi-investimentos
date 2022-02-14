import styles from './styles.module.scss';

type Indicators = {
    nome: string;
    valor: number;
}

export function Simulator() {
    return (
        <main className={styles.container}>
            <h2>Simulador</h2>
            <form className={styles.formContainer}>
                <label htmlFor="yield">
                    Rendimento <br />
                    <input type="button" value="Bruto" />
                    <input type="button" value="Líquido" />
                </label>

                <label htmlFor="indexingTypes">
                    Tipos de indexação<br />
                    <input type="button" value="PRÉ" />
                    <input type="button" value="POS" />
                    <input type="button" value="FIXADO" />
                </label>

                <label htmlFor="initialDeposit">
                    Aporte Inicial<br />
                    <input type="number" />
                </label>

                <label htmlFor="monthlyDeposit">
                    Aporte Mensal<br />
                    <input type="number" />
                </label>

                <label htmlFor="deadline">
                    Prazo (em meses)<br />
                    <input type="number" />
                </label>

                <label htmlFor="profitability">
                    Rentabilidade<br />
                    <input type="number" />
                </label>

                <label htmlFor="ipca">
                    IPCA (ao ano)<br />
                    <input type="number" />
                </label>

                <label htmlFor="cdi">
                    CDI (ao ano)<br />
                    <input type="number" />
                </label>
            </form>
        </main>
    )
}