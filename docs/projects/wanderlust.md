# Wander1ust

**Category:** Personal Portfolio Project
**URL:** https://wander1ust.vercel.app
**GitHub:** https://github.com/kr1shnac/Wander1ust

## Description
Wander1ust is a full-stack, Airbnb-inspired digital platform designed for discovering, listing, and reviewing unique properties globally. It provides a seamless user experience for both hosts and guests, featuring a dynamic regex-powered search engine, secure session-based authentication, cloud-powered media management, and community-driven reviews. Built end-to-end using the MVC architecture, it serves as a robust application demonstrating real-world backend proficiency, scalable data modeling, and modern web application design.

## Why I Built It
Wander1ust was developed as a hands-on technical endeavor to master real-world backend complexities and transition beyond simple CRUD applications. The core motivation was to tackle the challenges of implementing secure session-based authentication, integrating scalable cloud media storage pipelines, and managing complex relational data within a NoSQL database. It exists to showcase the ability to design multi-layered authorization logic and maintain referential integrity—skills that are critical for modern, production-grade software development.

## Key Features
- **Dynamic Property Discovery**: Browse a diverse catalog of listings with a regex-powered search engine that queries across titles, locations, and countries for instant, relevant results.
- **Listing Creation & Cloud Media**: Hosts can create detailed property listings and upload high-resolution photos directly to Cloudinary, featuring dynamic image transformations for optimized thumbnail previews.
- **Community Reviews & Ratings**: Guests can leave detailed reviews and ratings on any property, backed by cascading deletion hooks that automatically clean up associated reviews when a listing is removed.
- **Secure Authentication**: Persistent login and signup powered by Passport.js, with sessions stored securely in MongoDB via connect-mongo, ensuring reliable user state across requests.
- **Multi-Level Authorization**: Robust ownership and authorship verification middleware ensures users can only modify their own listings and reviews, preventing unauthorized data manipulation.

## What I Built
- **Architected a robust MVC backend** using Express.js and Node.js, ensuring clean separation of concerns, modular route handling, and highly maintainable codebase.
- **Hardened platform security** by persisting user sessions in MongoDB using `connect-mongo`, with encrypted secrets, 7-day cookie expiry, and `httpOnly` protection against XSS attacks.
- **Engineered a scalable cloud media pipeline** integrating Multer and Cloudinary, allowing for seamless image uploads and dynamic URL transformations for optimized previews.
- **Enforced data integrity** with dual-layer validation using Joi schemas on both client and server sides to prevent malformed inputs and ensure clean database entries.
- **Designed smart redirect flow middleware** that preserves the user's intended URL before authentication, smoothly redirecting them back after a successful login.
- **Configured cascading data cleanup** using Mongoose `post('findOneAndDelete')` hooks to automatically remove associated reviews when a listing is deleted, maintaining strict referential integrity.

## Tech Stack
**Summary:** Node.js, Express.js, MongoDB Atlas, Mongoose, Passport.js, Cloudinary, EJS, Bootstrap 5, Joi
- **Frontend:** EJS (Embedded JavaScript templates), ejs-mate (for layouts), Bootstrap 5
- **Backend & Database:** Node.js, Express.js (v5), MongoDB Atlas, Mongoose ODM
- **Security & Middleware:** Passport.js (Local Strategy), express-session, connect-mongo, connect-flash, Joi (schema validation), custom authorization middleware
- **Services & Integrations:** Cloudinary, multer-storage-cloudinary
- **Testing & Quality:** Express centralized error handling, Mongoose middleware hooks, deployed on Vercel
