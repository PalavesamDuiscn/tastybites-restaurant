# TastyBites Restaurant Website

A responsive static restaurant website built with HTML, CSS, and vanilla JavaScript. No build step or backend is required for the demo.

## Features
- Responsive navigation with mobile menu
- Menu cards rendered from JavaScript data
- Category filtering
- Add-to-cart demo feedback
- About, gallery, testimonials, and contact sections
- Interactive testimonial carousel
- Client-side reservation form validation
- Accessible labels and responsive layouts

## Run locally
1. Open this folder in VS Code.
2. Use the Live Server extension, or any static HTTP server.
3. Open the local URL shown by the server.

## Deploy to Vercel using GitHub
1. Create a repository at https://github.com/new.
2. Upload the files in this folder to the repository root and commit them.
3. Visit https://vercel.com/new and import the GitHub repository.
4. Select `Other` as the framework preset if prompted.
5. Leave the build command empty and use the project root as the output directory.
6. Click Deploy. Vercel will provide a public URL.

## Deploy with the Vercel CLI
1. Install Node.js if you don't already have it.
2. Open a terminal in this folder.
3. Run `npm install -g vercel`.
4. Run `vercel` and follow the prompts.
5. For production deployment, run `vercel --prod`.

## Important demo limitations
- Menu images are loaded from Unsplash and therefore need an internet connection.
- Menu prices, address, phone number, and email are example content. Replace them with the real restaurant's details.
- The “Add to Cart” buttons only show demo feedback; no order is stored or paid for.
- The reservation form validates fields in the browser only. It does not send, store, or confirm a real booking. To support real reservations, connect a backend or a form service and store requests securely.
