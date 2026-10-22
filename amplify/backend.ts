import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

/**
 * AWS Amplify Gen 2 Backend Definition
 * @see https://docs.amplify.aws/react/build-a-backend/
 */
export const backend = defineBackend({
  data,
});

