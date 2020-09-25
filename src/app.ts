import { appPromise } from './index';
import { envConfig } from './config';

appPromise().then((app) => {
  app.listen(envConfig.PORT, () => {
    console.log(`Server listened on port ${envConfig.PORT}`);
  });
});
