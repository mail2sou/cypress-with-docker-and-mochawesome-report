<B>Pre-requisites to this solution include</B>

1. Download and install Node.js: https://nodejs.org/en/download/
2. It is recommended to update your npm to the latest version.
3. Download and install Visual Studio Code: https://code.visualstudio.com/download
4. Download and install Docker Desktop: https://www.docker.com/products/docker-desktop

<B>Project Specification</B>

1. Framework: Cypress.io (with Cypress Testing Library)
2. Node.JS version: v16.10.0
3. NPM version: 8.0.0
4. IDE used: VS Code 1.61.0
5. Docker version used: Docker for windows (latest)

<B>Steps to run this project</B>

1. This project is containerised using Docker, so to run the project run the following command from terminal: <I><B>docker-compose run e2e-chrome</I></B> or <I><B>docker-compose run e2e-electron</I></B>
2. Once the execution is completed, the reports will be saved in the following folder: <I><B>\cypress-docker-with-report\cypress\reports\mochareports\report.html</I></B>
3. If you don't have the docker image, then you can build the docker image by running the following command in terminal (from inside your app directory i.e. where package.json is located): <I><B>docker build -t cyp-dock-mocha-report .</I></B>
4. After Step 3, repeat step 1 and 2 to execute and view reports.
5. In case you want to execute the test cases using npm and from CLI (not using docker), then install the dependencies by running the following command in terminal (from inside your automation folder directory i.e. where package.json is located): <I><B>npm install</I></B>
6. Once all dependencies are installed successfully, you can run the spec files using your playground or through command line.
7. To run from the command line, go to the root folder and use the command: <I><B>npm run scripts</I></B> to run all spec files within the project. This will run the test in a headless mode and once the execution is completed you can generate the HTML report by running the following command from the terminal: <I><B>npm run posttest</I></B>
8. Report will be saved in the following folder: <I><B>\cypress-docker-with-report\cypress\reports\mochareports\report.html</I></B>
8. While developing the automated tests, you can also run the tests by using playground. From the command line use the command: <I><B>npx cypress open</I></B> and click the spec file to run.

<B>Pre-requisites to use and modify this framework</B>

1. Download or clone this repo.
2. Install dependencies by running the following command in terminal (from inside your app directory i.e. where package.json is located): <I><B>npm install</I></B>