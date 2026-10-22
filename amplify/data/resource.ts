import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
El siguiente bloque define el modelo de datos FestivalEvent para DynamoDB / AppSync.
Reglas de autorización: acceso público mediante API Key para demostración.
=========================================================================*/
const schema = a.schema({
  FestivalEvent: a
    .model({
      artist: a.string().required(),
      space: a.string().required(),
      time: a.string().required(),
      status: a.enum(['CONFIRMED', 'DELAYED', 'CANCELLED']),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    // Clave de API válida por 30 días para pruebas y demostración
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

