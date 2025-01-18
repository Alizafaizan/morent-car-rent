
Rental Car E-Commerce Marketplace Technical Foundation


 ****** MORENT ******

Welcome to the Website!
This project was created as part of the Hackathon Assignment 2 and showcases a fully functional and responsive car rental platform.


****** Technical Documentation ******

____Overview____
The Rental Car E-Commerce Marketplace allows users to search, book, and pay for car rentals. Built with Next.js, Sanity CMS, and third-party APIs, the platform ensures fast performance, dynamic content management, and secure transactions.

=====Technology Stack=====
   
Frontend: Next.js, Tailwind CSS
Backend: Next.js API Routes, Sanity CMS
Database: PostgreSQL (via Prisma ORM)
Third-Party APIs:
Stripe: Payment processing
Shippo: Shipment tracking

_____Key Features_____
User Features:
Search and filter cars by type, location, and price
Real-time booking system with payment integration
Shipment tracking for car deliveries

Admin Features:
Add/update car listings via Sanity CMS
Manage bookings and monitor performance

=====API Endpoints=====

Endpoint	              Method       Description
/api/auth/register    	POST         Register a new user
/api/cars	GET         	Fetch        all available cars
/api/bookings	          POST	       Create a new booking
/api/payments	          POST	       Process a payment

=====Deployment=====

Frontend Hosting: Vercel
CMS Hosting: Sanity Studio
Database: Hosted on Supabase

=====Security=====

HTTPS for secure communication
auth for user authentication
Password hashing using bcrypt
                  This document provides a concise summary of the platform's technical foundation. For further details, refer to the full project documentation.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
