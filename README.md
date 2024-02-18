# YaYa Wallet Transaction Dashboard ( coding test)  <img src="/public/Logo.png" alt="yaya" width="100">



This repository contains a solution for the Full-stack Engineer - Coding Test provided by YaYa Wallet. The task involves implementing a simple dashboard to display a list of transactions for a given account using React framework for the frontend. 

**You can see Preview deployed on** [Vercel Click here](https://yaya-wallet-transaction-dashboard.vercel.app/)

## ✨Solution Overview

The solution is implemented using React framework for the frontend. It provides a dashboard with the following features:

- Transaction List: Displays transaction details including Transaction ID ( Hover reviel because its long) , Sender, Receiver, Amount, Currency, Cause, and Created At.
- Search: Users can search for transactions by sender account name, receiver account name, cause, or ID.
- Visual Indication: Outgoing and incoming transactions are visually indicated in each row of the table. with green and red colors on the amount.
- Pagination: Users can navigate through multiple pages of transactions.
- Security: API credentials are securely handled using environment variables.
- Responsiveness: The dashboard is responsive, with the table becoming scrollable on smaller viewports. The sidebar collapses to a 3-bar menu icon for easier navigation, and the pagination adjusts its content to be responsive.
- Codebase: The codebase is readable, written in simple JSX without 3rd party libraries, with comments guiding the functionality.

## How to Test the Solution
--- 
There are 2 options to test 
1. **Using the deployed demo on vercel [ Click here](https://yaya-wallet-transaction-dashboard.vercel.app/) and jump to step 7**
2. **Or use Local machine installation guide starting from step 1**
--- 
To test the solution, follow these steps:


1. Clone the repository.`https://github.com/yeabsirahaile/YAYA-Wallet-Transaction-Dashboard-exam-.git`.
2. navigate directory (`cd YAYA-Wallet-Transaction-Dashboard-exam`)
3. Install dependencies `npm install`.
4. creating a `.env` file in the root directory and Set up environment variables for API key and secret.
    - `VITE_LOGGED_IN_USER= Logged in username you can use "Anteneh Gebeyaw" (for test)`
    - `VITE_Base_URL=https://yayawallet.com`
    - `VITE_YAYA_API_SECRET=your-api-secret`
    - `VITE_YAYA_API_KEY=your-api-key`

5. Run the application `npm run dev`.
6. Access the dashboard in your web browser using the provided URL (e.g., `http://localhost:5173`).

- **aditional step guide**
7. Use pagination to navigate transactions.
8. Search for transactions by sender, receiver, cause, or ID.
9. Verify correct visualization of transactions.
10. Test dashboard responsiveness by resizing the viewport.






## Assumptions Made

- The search functionality is implemented by sending the search query to the API, which returns all transactions including the searched term. The frontend then filters the results based on the searched term to display only relevant transactions by analysing from which input field is the search term coming from.

## Problem-Solving Approach

1. Analyzed the requirements and defined the necessary features.
2. Chose React framework for frontend development considering its efficiency and popularity.
3. Designed the UI/UX of the solution based on the brand colors of YaYa Wallet.
4. Implemented the dashboard with required features using React components and state management.
5. Integrated API calls to fetch transaction data and implemented pagination and search functionalities.
6. Styled the UI using Tailwind CSS to ensure a clean and modern look.
7. Ensured codebase readability with simple JSX and added comments to guide functionality.

## Security Measures

- API credentials are securely handled using environment variables to prevent exposure in the codebase.

## Deployment

The demo of the solution is deployed at [https://yaya-wallet-transaction-dashboard.vercel.app/](https://yaya-wallet-transaction-dashboard.vercel.app/).


---

