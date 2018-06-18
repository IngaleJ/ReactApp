import React from 'react';
import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
import FullWidthGrid from './Layout'
function App() {
  return (
    <div>
      <FullWidthGrid />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

module.hot.accept();