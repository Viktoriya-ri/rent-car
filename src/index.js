import React from 'react';
import ReactDOM from 'react-dom/client';
import {CarsList} from '../src/pages/CarsList';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CarsList />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


