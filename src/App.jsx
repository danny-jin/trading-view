import React, { useState } from 'react'

import { TradingView } from './components/trading-view-chart-container/trading-view';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className={ 'App' }>
        <header className={ 'App-header' }></header>
        <TradingView/>
      </div>
    );
  }

}

export default App;
