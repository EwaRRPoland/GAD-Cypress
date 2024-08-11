# GAD-Cypress

# Local Deployment Requirements:

## Regarding the environment setup for Cypress tests in your project, here are a few steps you should follow:

1. Install `Node.js`: Make sure you have `Node.js` installed on your system. If not, download it from the `Node.js` website and install it.

2. Check the `Node.js` version: Ensure that you're using either version 18 or 20 of `Node.js`, as the project has been tested with these versions.

3. Install `Git`: If you haven't already, install `Git` on your computer. You can download it from the `Git` website.

4. Open the project directory: Navigate to the main directory of your project using the command line or terminal.

5. Clone the repository: Clone the project repository using the command `git clone <repository-address>`.

6. Install local modules: In the project directory, run the command `npm init -y` to install the modules defined in the `package.json` file.

7. Add Cypress to the project locally: Run `npm install cypress --save-dev`.

8. Run tests: To execute tests, use the command `npx cypress open` for the initial setup.

9. In the Cypress startup window, choose `E2E Testing`.

10. You'll be presented with 4 test files, which will be automatically downloaded when you click `continue`.

11. Select the default browser (suggested: `Google Chrome`) and click `Start E2E Testing in Chrome`.

12. After opening the Cypress web interface, choose `Create new spec`.

13. ## For subsequent runs, use the command in VScode/terminal: `npx cypress open`.

# 2. CI/CD Actions

- ## Configuring GitHub Actions Workflow:

  - Navigate to your repository on GitHub.

  - Select the "Actions" tab.

  - Click the "Set up a workflow yourself" button to configure your custom workflow.

  - Create a YAML file, e.g., `main.yml`, in the `.github/workflows` folder.

- ## Validating the YAML File:

  - Open the `main.yml` file and ensure it contains correct task (jobs) and step (steps) definitions.

  - Customize the configuration according to your needs.

- ## Testing the Workflow:

  - After saving the YAML file, upload it to GitHub.

  - The workflow will automatically run on the next push to the main branch.

- ## Checking Results in the Actions Tab:

  - Go to the "Actions" tab and select your workflow.

  - Verify that everything is functioning correctly.

  - If adjustments are needed, modify the YAML file or code.

# Where to Find Initial Tests?

## Directory and File Structure:

![](https://github.com/EwaRRPoland/GAD-Cypress/blob/32b680ca26bfad77d17925b69239eec8d606d80a/assets/file_structure.jpg)

## Test File:

# Applying the Page Object Pattern in Tests.

1. Tests using the `Page Object Pattern` - `login.cy.js`.

2. Each page has its own file in the `pages` folder:

   a. For the login page, there is a file named `Login.js`.

   b. For the home page, there is a file named `HomePage.js`.
