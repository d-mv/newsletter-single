import React from 'react';

import TitleBar from '../TitleBar/TitleBar';
import ContentDisplay from '../../containers/ContentDisplay/ContentDisplay';

class App extends React.Component {
  render() {
    return (
      <main>
        <TitleBar />
        <ContentDisplay />
      </main>
    );
  }
}

export default App;
