import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.scss';

type Indicators = {
    nome: string;
    valor: number;
}

export function Simulator() {
    const [cdi, setCdi] = useState<Indicators>()
    const [ipca, setIpca] = useState<Indicators>()

    useEffect(() => {
        api.get<Indicators[]>('indicadores').then(response => {
            setCdi(response.data[0])
            setIpca(response.data[1])
        });
    }, []);

    return (
        <main className={styles.container}>
            <h2>Simulador</h2>
            <form className={styles.formContainer}>
                <label htmlFor="yield">
                    <p>Rendimento</p>
                    <div className={styles.options}>
                    <input type="radio" id="bruto" name="yield" value="Bruto" checked />
                    <label htmlFor="bruto" className={styles.borderLeft}>Bruto</label>

                    <input type="radio" id="liquido" name="yield" value="Líquido" />
                    <label htmlFor="liquido" className={styles.borderRight}>Líquido</label>
                    </div>
                </label>

                <label htmlFor="indexingTypes">
                    <p>Tipos de indexação</p>
                    <div className={styles.options}>
                    <input type="radio" id="pre" name="indexingTypes" value="PRÉ" />
                    <label htmlFor="pre" className={styles.borderLeft}>PRÉ</label>

                    <input type="radio" id="pos" name="indexingTypes" value="PÓS" checked />
                    <label htmlFor="pos">PÓS</label>

                    <input type="radio" id="fixado" name="indexingTypes" value="FIXADO" />
                    <label htmlFor="fixado" className={styles.borderRight}>FIXADO</label>
                    </div>
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
                    <input type="text" value={ipca?.valor + "%"} readOnly />
                </label>

                <label htmlFor="cdi">
                    CDI (ao ano)<br />
                    <input type="text" value={cdi?.valor + "%"} readOnly />
                </label>

                <div>
                    <button type="submit">Limpar campos</button>
                    <button type="submit">Simular</button>
                </div>
            </form>
        </main>
    )
}