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
                        <input type="radio" id="bruto" name="yield" value="Bruto" checked readOnly />
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

                        <input type="radio" id="pos" name="indexingTypes" value="PÓS" checked readOnly />
                        <label htmlFor="pos">PÓS</label>

                        <input type="radio" id="fixado" name="indexingTypes" value="FIXADO" />
                        <label htmlFor="fixado" className={styles.borderRight}>FIXADO</label>
                    </div>
                </label>

                <label htmlFor="initialDeposit">
                    <p>Aporte Inicial</p>
                    <input type="number" />
                </label>

                <label htmlFor="monthlyDeposit">
                    <p>Aporte Mensal</p>
                    <input type="number" />
                </label>

                <label htmlFor="deadline">
                    <p>Prazo (em meses)</p>
                    <input type="number" />
                </label>

                <label htmlFor="profitability">
                    <p>Rentabilidade</p>
                    <input type="number" />
                </label>

                <label htmlFor="ipca">
                    <p>IPCA (ao ano)</p>
                    <input type="text" value={ipca?.valor + "%"} readOnly />
                </label>

                <label htmlFor="cdi">
                    <p>CDI (ao ano)</p>
                    <input type="text" value={cdi?.valor + "%"} readOnly />
                </label>
            </form>

            <div className={styles.buttons}>
                <button type="submit">Limpar campos</button>
                <button type="submit" className={styles.simular}>Simular</button>
            </div>
        </main>
    )
}