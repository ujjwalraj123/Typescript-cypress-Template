# Template and instaLation Guide
This is complete **Cypress+TS+AllureReporting** Template .  

### **Core Highlights**

- **TypeScript:** Full type safety for tests, custom commands, and Page Objects.
- **Allure 2 Reporting:** Generates rich, interactive dashboards with step-by-step logs, screenshots on failure, and execution trends.
- **Strict Linting (ESLint):** Automates code quality by enforcing consistent **spacing** and preventing technical debt through the detection of **unused variables** and **unused imports**.

## How To Use This Template ?

### github
#### Package Manager -> Yarn

    ```
    git clone <Repo-Url>
    ```
    ```
    yarn install --frozen-lockfile
    ```
    ```
    yarn UR
    ```


## File Structure 
```
├── allure-report/                # Generated Allure HTML report files
│   ├── data/                     # Test execution data (JSON/CSV)
│   │   ├── attachments/          # Screenshots and traces
│   │   └── test-cases/           # Individual test result details
│   ├── export/                   # Data for InfluxDB/Prometheus/Mail
│   ├── history/                  # Trend data for historical execution
│   ├── widgets/                  # JSON data for dashboard charts
│   └── index.html                # Main report entry point
├── cypress/
│   ├── e2e/                      # Test scripts (Spec files)
│   │   └── ohrm-login-ui.cy.ts
│   ├── fixtures/                 # Static test data
│   │   └── example.json
│   ├── Pages/                    # Page Object Model (POM) files
│   │   └── oHrm-login.ts
│   ├── helper/                   # Utility scripts and constants
│   │   └── users.ts
│   ├── support/                  # Global configuration and custom commands
│   │   ├── commands.ts
│   │   └── e2e.ts
│   └── tsconfig.json             # TypeScript config for Cypress
├── .gitignore                    # Files to exclude from Git
├── .prettierrc                   # Code formatting rules
├── README.md                     # Project documentation
├── customiseAllureReports.ts     # Logic for modifying Allure output
├── cypress.config.ts             # Cypress main configuration
├── cypress.env.json              # Environment variables
├── eslint.config.js              # Linting rules
├── package.json                  # Project dependencies and scripts
├── split-runner.js               # Script for parallel/split execution
├── tsconfig.json                 # Root TypeScript configuration
└── yarn.lock                     # Yarn dependency lockfile
```