import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginApi } from '../../../apis/authApi';
import { User } from '../../../interfaces';
import { signOut } from 'next-auth/react';
import { type } from 'os';
export default NextAuth({
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Custom Login',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        //Http Petition
        const user = await loginApi({
          username: credentials?.username ?? '',
          password: credentials?.password ?? '',
        });
        //SOmething was wrong
        if (user.error) {
          return null;
        }
        return user;
      },
    }),
  ],

  //Custom pages
  pages: {
    signIn: '/auth/login',
    signOut: '',
    newUser: '/auth/register',
  },

  session: {
    maxAge: 86400, //1day
    strategy: 'jwt',
   
    updateAge: 86400, //1day
  },

  jwt: {
    secret:'secretjwt',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return Promise.resolve(token);
    },

    async session({ session, token }) {
      const data = token.user as any;
      session.token = data.token as string;
      if(data.user !== null){
      
        session.user = data.user as User;


      }
     
      return Promise.resolve(session);
    },
  },
});
