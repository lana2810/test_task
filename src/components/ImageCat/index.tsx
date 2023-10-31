import st from './ImageCat.module.scss';
import imgKitten from '../../assets/images/Kitten.png';

export const ImageCat = () => {
  return <img alt="logo" src={imgKitten} className={st.image} />;
};
