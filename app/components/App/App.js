import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const App = ({ children }) => {
  function isHeaderHidden() {
    return !window.location.hash.replace(/#\//, '');
  }

  return (
    <div id="app-container">
      <Header isHidden={isHeaderHidden} />
      <div className="content-container">
        { children }
      </div>
      <Footer isHidden={isHeaderHidden} />
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
