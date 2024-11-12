import styled from '@emotion/styled';
import { KosScreenPlayer } from '@kosdev-code/kos-cms-sdk/ui/components';
import { kosComponent, KosLog } from '@kosdev-code/kos-ui-sdk';
import HelloWorld from './HelloWorld';

const log = KosLog.createLogger({ name: 'main-view' });
log.debug('main-view component loaded');

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* Apilar los componentes uno encima del otro */
  height: 100vh; /* Ocupa toda la altura de la ventana */
  overflow: hidden;
  background-color: white; /* Fondo blanco para el contenedor principal */
  background: white;
`;

export const MainView: React.FunctionComponent = kosComponent(() => {
  return (
    <Main>
      
      <KosScreenPlayer></KosScreenPlayer>
  
    </Main>
  );
});