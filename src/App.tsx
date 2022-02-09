import { Results } from "./components/Results";
import { Simulator } from "./components/Simulator";
import styles from "./App.module.scss";

export function App() {
  return (
    <>
      <header>
        <h1>Simulador de Investimentos</h1>
      </header>
      <main className={styles.container}>
        <Simulator />
        <Results />
      </main>
    </>
  )
}
