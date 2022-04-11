import { Authenticator } from 'remix-auth';
import { Auth0Strategy } from 'remix-auth-auth0';
import { api } from './api';
import { sessionStorage } from './session.server';

export interface User {
  id?: string
  email?: string
  accessToken: string
}

if (process.env.BASE_URL == null) {
  throw new Error('Missing BASE_URL');
}
if (process.env.AUTH0_DOMAIN == null) {
  throw new Error('Missing AUTH0_DOMAIN');
}
if (process.env.AUTH0_CLIENT_ID == null) {
  throw new Error('Missing AUTH0_CLIENT_ID');
}
if (process.env.AUTH0_CLIENT_SECRET == null) {
  throw new Error('Missing AUTH0_CLIENT_SECRET');
}
if (process.env.AUTH0_AUDIENCE == null) {
  throw new Error('Missing AUTH0_AUDIENCE');
}

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator<User | null | undefined>(sessionStorage);

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: `${process.env.BASE_URL}/auth/auth0/callback`,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE,
  },
  async ({ accessToken, profile }) => {
    const query = await api.getUser({ id: profile.id }, { Authorization: `Bearer ${accessToken}` });
    const user = {
      ...query.users_by_pk,
      accessToken,
    };

    return user;
  }
);

authenticator.use(auth0Strategy);
