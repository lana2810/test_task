import { useState } from 'react';
import st from './Header.module.scss';
import { SelectedField } from '../SelectedField';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={
        isOpen ? `${st.header} ${st.move_up}` : `${st.header} ${st.move_down}`
      }
    >
      <div className={st.wrapper_titles}>
        <h1 className={st.title_main}>CAT</h1>
        <div className={st.sub_title}>currencies academic terms</div>
      </div>
      <div className={st.wrapper_select}>
        <SelectedField setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
