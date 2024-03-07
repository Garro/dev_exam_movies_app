import { secrets } from './.keys';

export const environment = {
  production: true,

  domain: 'https://api.themoviedb.org/3',

  api: {
    key: secrets.keys,
    accessToken: secrets.accessToken,
  },
};
