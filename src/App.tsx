import './App.scss';
import './select.scss';
import { ContentProvider } from './useContent';
import { Header } from './components/Header';
import { ImageCat } from './components/ImageCat';
import { Main } from './components/MainContent';

function App() {
  return (
    <ContentProvider>
      <div className="container">
        <ImageCat />
        <Header />
        <Main />
      </div>
    </ContentProvider>
  );
}

export default App;
