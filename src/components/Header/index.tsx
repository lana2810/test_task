import { SelectedField } from '../SelectedField';

import st from './Header.module.scss';

export const Header = () => {
  return (
    <div className={st.header}>
      <div className={st.wrapper_titles}>
        <h1 className={st.title_main}>CAT</h1>
        <div className={st.sub_title}>currencies academic terms</div>
      </div>
      <div className={st.wrapper_select}>
        <SelectedField />
      </div>
    </div>
  );
};
