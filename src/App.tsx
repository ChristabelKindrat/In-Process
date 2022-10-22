import * as React from 'react';
import cn from 'classnames';
import css from './App.module.scss';

// toastify setup
import 'react-toastify/dist/ReactToastify.css';

import { ToastifyContainer } from 'components';
import { AppRoutes } from 'routes';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastifyContainer />
    </>
  );
}

export default App;
