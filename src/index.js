import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './pages/App';
import { BrowserRouter } from 'react-router-dom';
// con react query  las pelis se guardan en la cache y ya
// al volver a la peli no hace ninguna peticion :)
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* nos abre una ventana para ver
        las cosas que tengams en la cache */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
