## CASE STUDY: convertor function

In this project, you can find a function that accepts an array of tickets, where ticket has format `{source: string,
destination: string}` and returns a string of comma separated cities.
You can find the function in folder **src/main.ts** of this project, along with some tests in **main.test.ts**.

# Setting up the project

To run this project, make sure you have Node.js and npm installed on your machine. You can download them from https://nodejs.org/.

At the time this project is wriiten using es2022, it's compatible with node v20.10.0, and npm version 10.2.3, so it is recommended to have the same versions installed to avoid further complications.

After having this requirements in place, you may run `npm install`.
Now feel free to use any of the implemented scripts that you can find further in this documentation.

## Available Scripts

In the project directory, you can run:

### `npm test`

Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase, and is used in this project for operating the tests to ensure that the solution function works as expected.

### `npm run format`

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
By running this command, you will format the code so that it's all the way syntactically consistant.
