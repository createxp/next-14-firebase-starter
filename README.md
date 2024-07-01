# Next 14 Starter with Firebase Auth and Private Routes

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm run dev
# or
yarn dev
``` 

## It has the following pre installed packages
    
    - Next.js
    - Tailwind CSS
    - Firebase
    - Shadcn UI
    - React Icons
    - React Hot Toast


## To Get Started with Auth
    Uncomment the lines in the firebaseConfig file and comment out the lines in the FirebaseConfig file, the private route will not work without the auth. Wrap the admin layout around the private route and the admin page will not be accessible without auth.