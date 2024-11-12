import {
  ErrorBoundaryWithFallback,
  KosTranslationProvider,
  LoadingMessage,
  getLogLevel,
} from '@kosdev-code/kos-ui-sdk';
import log from 'loglevel';
import { Suspense } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './app.css';
import { MainView } from './components/main-view';
import { KosCoreContextProvider } from './registration';

import { KosScreenProvider } from '@kosdev-code/kos-cms-sdk/ui/contexts';
const level = getLogLevel();

log.setLevel(level);

const App = () => (
  <ErrorBoundaryWithFallback>
    <Suspense fallback={<LoadingMessage></LoadingMessage>}>
      <KosCoreContextProvider>
        <KosTranslationProvider>
          <KosScreenProvider>
            <div>
              <Router window={window}>
                <Routes>
                  <Route index element={<MainView />} />
                  <Route path="/main" element={<MainView />} />
                </Routes>
              </Router>
            </div>
          </KosScreenProvider>
        </KosTranslationProvider>
      </KosCoreContextProvider>
    </Suspense>
  </ErrorBoundaryWithFallback>
);

export default App;
