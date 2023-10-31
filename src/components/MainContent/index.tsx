import st from './MainContent.module.scss';
import { useContent } from '../../useContent';

export const Main = () => {
  const { current } = useContent();

  return <div className={st.main}>{current.value}</div>;
};
