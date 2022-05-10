# NodeJS-Backend / FTC-Project

If you wanna see full documentations from API Rest Server please go to notion.so (Only developers).

## Project Idea

Build nice website where people that don't know write one line of code can create own website just a few clicks away

## How to run the project

Notes for run this project in local repository

1. Install nodejs 16.14.2 in your OS.
2. Go to project root directory.
3. Run `npm install` for downloads dependencies defined in package.json file and generate a node_modules folder with the installed modules.
4. Need configure .env file with PORT, DOMAIN, MONGO_CONNECTION AND JWT_SECRET_KEY.
5. Run `tsc --watch` to convert typescript code to JavaScript code.
6. Run `npm start` to initializate server in local repository.
7. If you wanna try this API Rest Server we recommended use [Postman]: https://www.postman.com/downloads/ .
8. We recomment modify the archive `/etc/hosts` `linux` and add subdomains in your localhost (Only for Test)
   ![hosts example](https://i.ibb.co/4MFXyPR/image.png)

### Dependencies

1. Express

- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- https://expressjs.com/

2. Express Validator

- Express-validator is a set of express.js middlewares that wraps validator.js validator and sanitizer functions.
- https://express-validator.github.io/docs/

3. Mongoose
   -Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
   - https://mongoosejs.com/
4. Cors

- CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- https://github.com/expressjs/cors#readme

5. Dotenv

- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
- https://github.com/motdotla/dotenv#readme

6. Express Helmet

- Helmet helps you secure your Express apps by setting various HTTP headers
- https://github.com/helmetjs/helmet

7. Bcryptjs

- Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power
- https://github.com/dcodeIO/bcrypt.js#readme

8. Jsonwebtoken

- JSON Web Token (JWT) is a compact, URL-safe means of representing
  claims to be transferred between two parties. The claims in a JWT
  are encoded as a JSON object that is used as the payload of a JSON
  Web Signature (JWS) structure or as the plaintext of a JSON Web
  Encryption (JWE) structure, enabling the claims to be digitally
  signed or integrity protected with a Message Authentication Code
  (MAC) and/or encrypted.
- https://github.com/auth0/node-jsonwebtoken#readme

9. Typescript

- TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
- https://www.typescriptlang.org/

### Dev dependencies

1. Nodemon (Global)

- Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- https://www.npmjs.com/package/nodemon
