import './App.scss';
import './select.scss';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { ImageCat } from './components/ImageCat';
import { Main } from './components/MainContent';
import { fetchCurrency } from './redux/currencySlice';
import { useAppDispatch } from './redux/store';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);
  return (
    <div className="container">
      <ImageCat />
      <Header />
      <Main />
    </div>
  );
}

export default App;
