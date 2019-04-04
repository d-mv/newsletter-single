import React from 'react';

import DateTime from '../DateTime';
import styles from './TitleBar.module.scss';

export default class TitleBar extends React.Component {
  render() {
    return (
      <header className={styles.newsletterHead}>
        <div className={styles.title}>The Newsletter</div>
        <time className={styles.timeStamp}>
          <DateTime />
        </time>
      </header>
    );
  }
}
