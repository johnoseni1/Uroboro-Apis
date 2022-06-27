# Uroboro

Full-featured starter for Typescript Node & Mongo Rest API server featuring NestJS!

## Getting started

1. Install packages with `yarn install`
2. Create env file `cp .env.example .env`
   1. Configure mongo db URL (e.g. one pointing to Mongo Atlas)
3. Develop app `yarn start:dev` 


#### Features:
- user signup
- user activation
- user login
- user relogin
- password reset
- forgotten password



This project uses modular swagger configuration. Each feature has it's own swagger document.
Follow these steps to add new feature:

1. In feature folder create `feature.swagger.ts` file.
2. Call `setupSwaggerDocument` and export the returned function.
3. Register feature module in `feature.module.ts` by calling the exported function from step 2.
4. Access your document at `/docs/:featurePath`.

After successful run, check out the output at [http://localhost:3001/docs/auth/](http://localhost:3001/docs/auth/)


