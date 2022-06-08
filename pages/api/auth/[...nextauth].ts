import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginApi } from '../../../apis/authApi';
import { User } from '../../../interfaces';
import { signOut } from 'next-auth/react';
export default NextAuth({
  // Configure one or more authentication providers
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
        console.log(user);
        //SOmething was wrong
        if (user.error) {
          console.log("error")
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

  jwt: {},
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.type === 'credentials') {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }) {
      const data = token.user as any;
      session.token = data.token as string;
      session.user = data.user as User;
      return session;
    },
  },
});
