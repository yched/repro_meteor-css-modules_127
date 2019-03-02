import React from 'react';

import styles from './App.styles.scss';

const App = () => (
  <ul>
    <li className={styles['local-sass']}>If green background: local styles (with SASS) OK</li>
    <li className="global-sass">If green background: global styles (with SASS) OK</li>
    <li className="global-no-sass">If green background: global styles (plain CSS) OK</li>
  </ul>
);

export default App;
