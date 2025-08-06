# NeuroFlow Project

NeuroFlow is a web application designed to help users track their mood and provide feedback. The project consists of a backend server built with Node.js and Express, and a frontend application developed using React.

## Project Structure

```
NeuroFlow
├── backend
│   ├── server.js          # Main entry point for the backend server
│   └── routes
│       ├── mood.js       # Routes for mood tracking
│       └── feedback.js   # Routes for feedback submission
├── frontend
│   ├── index.html        # Main HTML file for the frontend application
│   ├── vite.config.js    # Configuration for Vite build tool
│   └── src
│       ├── App.jsx       # Main React component
│       ├── main.jsx      # Entry point for the React application
│       └── components
│           ├── MoodCheckin.jsx  # Component for mood check-in
│           ├── Dashboard.jsx     # Component for displaying mood history and feedback
│           └── FeedbackBox.jsx   # Component for submitting feedback
├── .gitignore             # Files and directories to be ignored by Git
├── README.md              # Documentation for the project
└── package.json           # Configuration file for npm
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd NeuroFlow
   ```

2. **Install backend dependencies:**
   Navigate to the `backend` directory and run:
   ```bash
   npm install
   ```

3. **Install frontend dependencies:**
   Navigate to the `frontend` directory and run:
   ```bash
   npm install
   ```

4. **Run the backend server:**
   From the `backend` directory, start the server:
   ```bash
   node server.js
   ```

5. **Run the frontend application:**
   From the `frontend` directory, start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Access the frontend application in your browser at `http://localhost:3000`.
- Use the mood check-in component to log your mood.
- View your mood history and submit feedback through the respective components.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.