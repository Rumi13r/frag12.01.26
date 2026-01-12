import RegistrationForm from "./components/Registerform";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>useState Hook Демонстрация</h1>
        <p className="subtitle">
          Примери за използване на useState в React с TypeScript
        </p>
      </header>
      <main className="app-main">
        <RegistrationForm />
      </main>
      <footer className="app-footer">
        <p>Примери за React useState Hook</p>
      </footer>
    </div>
  );
};

export default App;
