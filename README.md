# YaYa Wallet Transaction Dashboard ( coding test)  <img src="/public/Logo.png" alt="yaya" width="100">



This repository contains a solution for the Full-stack Engineer - Coding Test provided by YaYa Wallet. The task involves implementing a simple dashboard to display a list of transactions for a given account using React framework for the frontend. 

You can see Preview deployed on Vercel [Click here](https://yaya-wallet-transaction-dashboard.vercel.app/)

## ✨Solution Overview

The solution is implemented using React framework for the frontend. It provides a dashboard with the following features:

- Pagination: Users can navigate through multiple pages of transactions.
- Search: Users can search for transactions by sender account name, receiver account name, cause, or ID.
- Transaction List: Displays transaction details including Transaction ID ( Hover reviel because its long) , Sender, Receiver, Amount, Currency, Cause, and Created At.
- Visual Indication: Outgoing and incoming transactions are visually indicated in each row of the table. with green and red colors on the amount.
- Security: API credentials are securely handled using environment variables.
- Responsiveness: The dashboard is responsive, with the table becoming scrollable on smaller viewports. The sidebar collapses to a 3-bar menu icon for easier navigation, and the pagination adjusts its content to be responsive.

- Codebase: The codebase is readable, written in simple JSX without 3rd party libraries, with comments guiding the functionality.

## How to Test the Solution

1. Clone this repository to your local machine.
2. Install the necessary dependencies.
3. Set up environment variables for API key and secret.
4. Run the application.
5. Access the dashboard through the provided URL.
6. Use pagination to navigate through different pages of transactions.
7. Use the search functionality to find specific transactions based on sender, receiver, cause, or ID.
8. Verify that incoming and outgoing transactions are visually indicated correctly.
9. Test the responsiveness of the dashboard by resizing the viewport.

## Assumptions Made

- The search functionality is implemented by sending the search query to the API, which returns all transactions including the searched term. The frontend then filters the results based on the searched term to display only relevant transactions by analysing from which input field is the search term coming from.
- The color palette used in the UI is based on the brand colors of YaYa Wallet.

## Problem-Solving Approach

1. Analyzed the requirements and defined the necessary features.
2. Chose React framework for frontend development considering its efficiency and popularity.
3. Designed the UI/UX of the solution, focusing on simplicity and user-friendliness.
4. Implemented the dashboard with required features using React components and state management.
5. Integrated API calls to fetch transaction data and implemented pagination and search functionalities.
6. Styled the UI using Tailwind CSS to ensure a clean and modern look.
7. Ensured codebase readability with simple JSX and added comments to guide functionality.

## Security Measures

- API credentials are securely handled using environment variables to prevent exposure in the codebase.
- Data protection measures are implemented to ensure sensitive information is not compromised.

## Deployment

The demo of the solution is deployed at [https://yaya-wallet-transaction-dashboard.vercel.app/](https://yaya-wallet-transaction-dashboard.vercel.app/).


---

