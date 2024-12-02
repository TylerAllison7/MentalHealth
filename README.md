# Dependencies

This React project utilises Tailwind CSS. In order to use this, you will need to follow these steps:

- Open your terminal or command prompt
- Enter npm install tailwindcss postcss autoprefixer
- Enter npx tailwind init -p
- Open the tailwind.config.js file
- In the content brackets, enter: "./src/**/*.{js,jsx,ts,tsx}"
- Add the following to your index.css file:
  - @tailwind base;
  - @tailwind components;
  - @tailwind utilities;
- Run the application by entering npm start into the vscode terminal
