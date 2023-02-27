import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

root.render(
    <Root />
);
