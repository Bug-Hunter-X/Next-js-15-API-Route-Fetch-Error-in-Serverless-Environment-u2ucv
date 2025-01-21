# Next.js 15 API Route Fetch Error in Serverless Environment

This repository demonstrates a common error encountered when using the `fetch` API within Next.js 15 API routes in a serverless function environment.  The `fetch` API is not directly available within the serverless context.

## Problem
The provided `pages/api/data.js` attempts to fetch data from an external API using `fetch`. When deployed, this will result in an error because the serverless environment lacks a browser-like environment that supports `fetch` directly.

## Solution
The solution utilizes the Node.js `node-fetch` library. This library provides the `fetch` functionality within a Node.js environment, resolving the incompatibility issue.

## Setup
1. Clone the repository.
2. Install dependencies: `npm install node-fetch`
3. Run the development server: `npm run dev`

