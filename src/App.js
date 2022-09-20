import React from 'react';
import './App.css';
import { AppRouter, Header, Footer, CallSection } from './components';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store'


function App() {

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
            <Header />
            <main>
                <AppRouter/>
                <CallSection />
                <Footer />
            </main>
        </div>
      </Provider>
    </Router>
    
  );
}

export default App;
