import React from 'react';

import TitleBar from '../TitleBar/TitleBar';
import ContentDisplay from '../../containers/ContentDisplay/ContentDisplay';

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar />
        <ContentDisplay />
      </div>
    );
  }
}

export default App;
