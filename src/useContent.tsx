import { createContext, useContext, useState } from 'react';
import { OptionType } from './constans';

type ContentContextType = {
  current: OptionType;
  setCurrent: (current: OptionType) => void;
};

interface Children {
  children: JSX.Element;
}

export const ContentContext = createContext<ContentContextType>(
  {} as ContentContextType
);

export const ContentProvider = ({ children }: Children) => {
  const [current, setCurrent] = useState<OptionType>({
    value: 'Russian Ruble',
    label: 'RUB',
  });
  return (
    <ContentContext.Provider value={{ current, setCurrent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  return useContext(ContentContext);
};
