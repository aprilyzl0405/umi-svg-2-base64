import React from 'react';
import styles from './index.less';
import logo_png from '@/assets/logo.png'
import logo_svg from '@/assets/logo.svg';

export default () => {
  return (
    <div>
      <img alt="logo-png" src={logo_png} />
      <img alt="logo-1" src={logo_svg} />
      <img alt="logo-2" src={require("@/assets/logo.svg")} />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
