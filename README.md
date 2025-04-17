# Playwright Test for Huel Quiz Navigation

This is an automation test script built using Playwright, which simulates navigating the Huel homepage, taking the quiz, and validating the results. The test is designed to ensure that the webpage behaves as expected and at least one Huel product is shown in the results after completing the quiz.

# Test Description

# Test Flow:

- Launch a headless browser (Chromium by default).

- Navigate to the Huel homepage: https://uk.huel.com/.

- Accept the cookie consent to allow interaction with the page.

- Click on the "Take the quiz" link to start the quiz.

- Answer the quiz questions by interacting with available options:

- Select a fitness goal.

- Select a meal preference.

- Select preferred meal time.

- Skip the sign-up prompt and view the recommendations.

- Validate that at least one product is shown as a result of the quiz.

- Handle any errors through a try/catch and print helpful messages if something goes wrong.


# Error Handling:

- If a button is not found, if quiz loading fails, or if the results are not displayed, the script will catch and log the error.

- The test will be marked as failed if any part of the process encounters an issue.

# Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 12 or higher)

- Playwright for automating the browser.

# Installation

- Clone this repository: git@github.com:Nas1010/huel.git
- cd huel 
- Install Playwright and dependencies: npm install playwright

# Running the Test

- Run the test: npx playwright test