import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <main>
        <section>
          <div className={styles.container}>
            <header>
              <nav>
                <a href="/#">logo</a>

                <ul>
                  <li>
                    <a href="/#">Inspirasion</a>
                  </li>
                  <li>
                    <a href="/#">Component Library</a>
                  </li>
                  <li>
                    <a href="/#">Templates</a>
                  </li>
                  <li>
                    <a href="/#">Learn</a>
                  </li>
                  <li>
                    <a href="/#">Tools</a>
                  </li>
                  <li>
                    <a href="/#">Pricing</a>
                  </li>
                </ul>
                <a href="/#">Support</a>
              </nav>
            </header>
            sectoin1
          </div>
        </section>
        <section>Canvas</section>
        <section>sectoin3</section>
      </main>

      <footer>footer</footer>
    </>
  );
}
