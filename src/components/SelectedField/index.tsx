import { FC } from 'react';
import Select, { SingleValue } from 'react-select';
import { useContent } from '../../useContent';
import { options, OptionType } from '../../constans';

type SelectedFieldProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export const SelectedField: FC<SelectedFieldProps> = ({ setIsOpen }) => {
  const { current, setCurrent } = useContent();
  const onChange = (newValue: SingleValue<OptionType>) => {
    if (newValue !== null) {
      setCurrent(newValue);
    }
  };
  const handleMenuOpen = () => {
    setIsOpen(true);
  };
  const handleMenuClose = () => {
    setIsOpen(false);
  };
  return (
    <Select
      value={current}
      options={options}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      onChange={onChange}
      classNamePrefix="custom-select"
    />
  );
};
