This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### this is a nextjs template bootstraped with eslint rules, husky pre-commit, msw api mocking and jest for testing.

## Folder Structure Example

```
src/
└───modules/
│   └───auth/
|   |   └───components/
|   |   |    └───LoginContainer/
|   |   |        └───Desk
|   |   |        |    └───index.tsx
|   |   |        |    └───InnerComponents.tsx
|   |   |        |    └───InnerComponents.module.scss
|   |   |        |    └───....
|   |   |        └───Mobile
|   |   |               └───index.tsx
|   |   |               └───InnerComponents.tsx
|   |   |               └───InnerComponents.module.scss
|   |   |
|   |   |
|   |   └───  services/
|   |   └───  __test__/
|   |   └───  feature/
|   |   └───  hooks/
|   |   └───  helpers/
|   |   └───  assets/
|   |
|   |
|   └───another-module/
|       └─── components/
|       └─── services/
|       └─── __test__/
|       └─── feature/
|       └─── hooks/
|       └─── helpers/
|       └─── assets/
└───pages/
│   └───api/
|	      └─── auth/
|	      └─── another-endpoint/
```

## Getting Started

First, run the development server:

```bash
npm install && npm run dev
# or
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Testing

```bash
npm run test
# or
yarn test
```
