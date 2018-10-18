import * as React from 'react';
import Routes from '../../routes/routes';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        {Routes}
      </div>
    );
  }
}

export default App;
