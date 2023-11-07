import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/CounterContext';
import { FavoritesProvider } from './context/FavoritesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesProvider>
        <CounterProvider>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </CounterProvider>
    </FavoritesProvider>


);
