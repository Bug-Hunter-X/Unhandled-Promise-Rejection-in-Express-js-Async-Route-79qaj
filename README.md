# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications where an unhandled promise rejection in an asynchronous route handler leads to unexpected server crashes.  The example showcases how to properly handle errors in async routes to prevent such issues.

## Bug Description

The bug arises when an asynchronous operation within a route handler throws an error. If this error is not caught using a `.catch()` block or a `try...catch` statement within the async function, it leads to an unhandled promise rejection. This results in a silent crash without clear error messages, making debugging challenging.

## Solution

The solution involves either using a `.catch()` block within the promise chain or wrapping the async operation in a `try...catch` block. This ensures that any errors thrown are caught and handled gracefully, preventing the application from crashing.