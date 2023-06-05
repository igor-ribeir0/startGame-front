import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './assets/GlobalStyle';
import { AuthProvider } from './providers/auth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>

    <AuthProvider>
      <App />
    </AuthProvider>

  </React.StrictMode>
);
