import imgKitten from '../../assets/images/Kitten.png';

import st from './ImageCat.module.scss';

export const ImageCat = () => {
  return <img alt="logo" src={imgKitten} className={st.image} />;
};
