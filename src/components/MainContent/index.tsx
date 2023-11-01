import { useEffect } from 'react';
import { fetchCurrency } from '../../redux/currencySlice';
import { useAppDispatch, useCurrencySelector } from '../../redux/store';

import st from './MainContent.module.scss';

export const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const { activeCurrency, loadingCurrency, errorCurrency } =
    useCurrencySelector();

  if (loadingCurrency) return <div className={st.main}>...Loading</div>;

  if (errorCurrency)
    return <div className={st.main}>Ошибка загрузки данных</div>;

  return <div className={st.main}>{activeCurrency.name}</div>;
};
