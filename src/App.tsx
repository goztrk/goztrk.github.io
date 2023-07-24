import { HashRouter } from 'react-router-dom';
import Routes from '~/Routes';
import Footer from '~components/Footer';
import Header from '~components/Header';

function App() {
  return (
    <div className="h-screen dark:bg-black dark:text-white flex flex-col">
      <HashRouter basename="/">
        <Header />
        <Routes />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
