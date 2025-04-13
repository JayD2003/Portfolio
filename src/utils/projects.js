const projects = [
  {
    title: "CoralSense",
    language: "JavaScript, Python",
    description: "Analyze coral health using deep learning. Upload an image and get real-time predictions.",
    longDescription: "CoralSense is a deep learning-based application designed to assess coral reef health. Users can upload images of corals, and the system uses YOLOv11 for image classification to predict if the coral is healthy or bleached. The backend, built with Flask, handles image uploads and real-time predictions. Image preprocessing and augmentation are managed via Roboflow, improving the dataset for better model accuracy. The application aims to aid coral reef conservation efforts by leveraging artificial intelligence for health monitoring.",
    githubUrl: "https://github.com/JayD2003/Final-Year-Project",
    liveUrl: "https://coral-sense.netlify.app/",
    category: "ai",
    techStack: ["React", "Flask", "YOLOv11", "Roboflow"],
    image: "./Projects/coralsense.png"
  },
  {
    title: "TimePensieve",
    language: "JavaScript",
    description: "A platform to send letters to your future self with scheduled email delivery.",
    longDescription: "TimePensieve is a unique platform that allows users to write letters to their future selves, preserving memories and emotions for a future date. The letters are scheduled for email delivery using Firebase Firestore for real-time data management and EmailJS for seamless email integration. Built during a 48-hour hackathon, this project leverages Firebase Authentication for secure sign-ins and offers users the option to add photos or videos to their letters. TimePensieve combines nostalgia with technology, enabling users to send messages to their future selves.",
    githubUrl: "https://github.com/JayD2003/BUILD-A-SITE-Hackthon",
    liveUrl: "https://time-capsule-45314.web.app/",
    category: "fullstack",
    techStack: ["React", "Firebase", "Firestore", "EmailJS"],
    image: "./Projects/time.png"
  },
  {
    title: "Expense Tracker",
    language: "JavaScript",
    description: "Helps users track their spending, categorize expenses, and view their overall balance.",
    longDescription: "The Expense Tracker is a personal finance management tool that helps users track their income and expenses. The app supports categorizing transactions and provides a real-time balance overview. Firebase Firestore is used for real-time updates and data persistence, while Firebase Authentication handles secure user sign-ins. With custom JavaScript hooks, the application effectively manages transactions, offering users a clear overview of their financial health and spending habits.",
    githubUrl: "https://github.com/JayD2003/Expense-Tracker",
    liveUrl: "https://expense-tracker-dab29.web.app/",
    category: "fullstack",
    techStack: ["React", "Firebase", "Firestore"],
    image: "./Projects/expense.png"
  },
  {
    title: "Contact Management System",
    language: "JavaScript, Node.js",
    description: "CRUD backend system with authentication using JWT tokens.",
    longDescription: "The Contact Management System is a backend-focused project built with Node.js, Express, and MongoDB. It offers CRUD operations to manage contact data and provides secure user authentication with JWT tokens. The project uses RESTful APIs to interact with MongoDB, making it easy to manage contacts, update details, and delete records. This project helped me enhance my understanding of backend development, API creation, and secure authentication mechanisms.",
    githubUrl: "https://github.com/JayD2003/Contact-Manager-Backend",
    liveUrl: "",
    category: "backend",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    image: "./Projects/contact.png"
  },
  {
    title: "Lane Detection System",
    language: "Python, OpenCV",
    description: "Lane detection system for identifying lane boundaries in video datasets.",
    longDescription: "The Lane Detection System applies computer vision techniques to detect lane boundaries in video footage. Using OpenCV, I implemented edge detection, the Hough line transform, and region-of-interest masking to highlight lanes in driving videos. Preprocessing techniques were used to improve the accuracy of the lane detection, which can be applied to self-driving cars or driver-assistance systems. The project strengthened my skills in computer vision and real-time image processing.",
    githubUrl: "https://github.com/JayD2003/Lane-Detection-using-OpenCV",
    liveUrl: "",
    category: "computer-vision",
    techStack: ["Python", "OpenCV", "Computer Vision"],
    image: "./Projects/lanedetection.png"
  },
  {
    title: "Tic Tac Toe AI Game",
    language: "HTML, CSS, JavaScript",
    description: "Classic Tic Tac Toe game with an unbeatable AI opponent using Minimax.",
    longDescription: "This web-based Tic Tac Toe game features an AI opponent powered by the Minimax algorithm, ensuring that the AI always plays optimally. The game dynamically adapts to the player's moves, offering an unbeatable challenge. I built the user interface with HTML and CSS, while JavaScript handles the game logic and AI decision-making. This project allowed me to explore game development and AI algorithms, particularly the Minimax algorithm for decision-making in games.",
    githubUrl: "https://github.com/JayD2003/Tic-Tac-Toe-AI",
    liveUrl: "https://jayd2003.github.io/Tic-Tac-Toe-AI/",
    category: "game",
    techStack: ["HTML", "CSS", "JavaScript", "Minimax Algorithm"],
    image: "./Projects/tictactoe.png"
  },
];

export default projects;
