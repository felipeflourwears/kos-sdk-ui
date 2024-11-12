import { CmsModelRegistry } from '@kosdev-code/kos-cms-sdk/models';

import { initKosProvider } from '@kosdev-code/kos-ui-sdk';

CmsModelRegistry.cms.models();

const { KosCoreContextProvider } = initKosProvider();

export { KosCoreContextProvider };
