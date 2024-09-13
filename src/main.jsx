import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme()}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>
)
