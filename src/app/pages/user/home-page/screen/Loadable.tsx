/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/loading-indicator';

export const HomePage = lazyLoad(
  () => import('./index'),
  (module) => module.HomePage,
  {
    fallback: <LoadingIndicator />,
  }
);
