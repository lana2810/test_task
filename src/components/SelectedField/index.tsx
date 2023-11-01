// @ts-nocheck
import Select, { SingleValue } from 'react-select';
import { useCurrencySelector, useAppDispatch } from '../../redux/store';
import { setActiveCurrency } from '../../redux/currencySlice';

export const SelectedField = () => {
  const dispatch = useAppDispatch();
  const { allCurrency, activeCurrency } = useCurrencySelector();

  const options = allCurrency.map((item) => {
    return { value: item.name, label: item.id };
  });
  const onChange = (newValue: SingleValue<string>) => {
    if (newValue !== null) {
      const newCurrentCurrency = allCurrency.find(
        (item) => item.id === newValue.label
      );
      dispatch(setActiveCurrency(newCurrentCurrency));
    }
  };
  return (
    <Select
      defaultValue={activeCurrency.id}
      options={options}
      onChange={onChange}
      classNamePrefix="custom-select"
    />
  );
};
