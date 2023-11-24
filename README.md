This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all dependencies:

```
npm install
# or
pnpm install
```

Second, configure the [.env](./.env) by filling all th necessary field

Third, run the migration tool:
```
npx prisma migrate dev --name init
# or
pnpm exec prisma migrate dev --name init
```

Lastly, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
