```
# SmartPlay

**SmartPlay** is an interactive quiz website built using **React** and **Tailwind CSS**. The website fetches questions from the **Open Trivia DB API**, providing users with various trivia questions. The app is fully **mobile-responsive**, ensuring a seamless experience on all devices.

## Features

- **Responsive Design**: Built with **Tailwind CSS**, the quiz is fully responsive and works well on mobile devices.
- **Multiple Question Categories**: Users can choose from a variety of trivia categories.
- **Timed Quiz**: Each question has a time limit, adding an element of excitement.
- **No Back Navigation**: Once a question is answered, users can't go back to previous questions.
- **Passing Criteria**: A minimum of **40%** correct answers is required to pass the quiz.
- **User-Friendly Interface**: Easy navigation and simple design for users of all ages.

## Tech Stack

- **Frontend**:
  - **React.js**: A JavaScript library for building user interfaces.
  - **Tailwind CSS**: A utility-first CSS framework for styling.
- **API**:
  - **Open Trivia DB**: An open-source trivia API to fetch quiz questions.
- **Deployment**:
  - Deployed on [Netlify](https://www.netlify.com/) or your preferred hosting platform.

## Setup and Installation

To run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/quiz-io.git
```

### 2. Navigate to the Project Folder
```bash
cd quiz-io
```

### 3. Install Dependencies
Run the following command to install all necessary dependencies:
```bash
npm install
```

### 4. Start the Development Server
Once the dependencies are installed, you can start the local development server:
```bash
npm start
```

This will start the React app on `http://localhost:3000`. Open this URL in your browser to see the quiz website in action.

## Features in Detail

### 1. **Timed Quiz**
   - Each question comes with a **3-minute timer**. Users need to answer within the time frame to move forward.

### 2. **Question Navigation**
   - The quiz does not allow users to go back to previous questions once they have proceeded. 
   - Each question can only be answered once. After submission, users cannot change their answers.

### 3. **Passing Score**
   - Users must score at least **40%** of the questions correctly to pass the quiz.

### 4. **Mobile Responsiveness**
   - The layout is fully optimized for mobile devices. The design automatically adjusts to fit various screen sizes, providing an optimal user experience on both desktop and mobile.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the UI.
- **Open Trivia DB API**: A free API for fetching trivia questions.
- **JavaScript (ES6)**: For building interactive and dynamic functionality.

## Contributing

We welcome contributions! If you have suggestions, improvements, or bug fixes, feel free to create a pull request or submit an issue.

### To Contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Open a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

