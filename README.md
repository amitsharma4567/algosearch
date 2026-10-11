# AlgoSearch

AlgoSearch is a web app for finding LeetCode problems by searching for keywords in their descriptions. It ranks matching problems with a TF-IDF-based search and shows each problem's title, difficulty, and link.

## Tech stack

- **Frontend and API:** Next.js 13 and React 18
- **Styling:** Tailwind CSS and custom CSS
- **Search:** JavaScript TF-IDF implementation using the included preprocessed problem data
- **Search data:** Preprocessed problem descriptions and lookup files included in the repository

## Run locally

Requirements: Node.js and npm.

1. Clone this repository and open a terminal in the project root.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

The frontend sends searches to the local Next.js API route at `/api/hello`. That route calls the search implementation in `Helper/TF-IDF-implimentation-main/index.js` and reads the prepared data files in that helper directory. The frontend and API run together in the Next.js development server.

## Project structure

- `pages/` - Next.js pages and API routes
- `pages/api/hello.js` - local search API endpoint
- `components/` - reusable interface components
- `styles/` - global styles and custom CSS
- `Helper/TF-IDF-implimentation-main/index.js` - search implementation
- `Helper/TF-IDF-implimentation-main/` - search implementation and its prepared data files
- `public/` - static assets

## Notes

- Search uses the local data files included in the repository; it does not fetch or scrape new problems during each search.
- Scraping and search-index generation scripts are not included; the app runs from the preprocessed data files.
