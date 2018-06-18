import React from 'react';
import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
import FullWidthGrid from './Layout'
function App() {
  return (
    <div>
      <FullWidthGrid />
    </div>
    
    // <Button variant="contained" color="primary">
    //   Hello World
    // </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

module.hot.accept();