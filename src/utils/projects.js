const projects = [
  {
    title: "CoralSense",
    language: "JavaScript, Python",
    description: "Analyze coral health using deep learning. Upload an image and get real-time predictions.",
    longDescription: "A deep learning-based application designed to assess coral reef health. Users can upload images, and the system provides real-time predictions using YOLOv11. The backend is powered by Flask, with image processing handled through Roboflow.",
    githubUrl: "https://github.com/JayD2003/Final-Year-Project",
    liveUrl: "https://coral-sense.netlify.app/",
    category: "ai",
    techStack: ["React", "Flask", "YOLOv11", "Roboflow"],
    image: "./Projects/coralsense.png"
  },
  {
      "title": "TimePensieve",
      "language": "JavaScript",
      "description": "A platform to send letters to your future self with scheduled email delivery.",
      "longDescription": "TimePensieve is a creative platform that allows users to write heartfelt letters to their future selves, preserving memories and emotions for a specific future date. Users can schedule email delivery and optionally attach photos or videos. Built during a 48-hour hackathon, it leverages Firebase Firestore, Firebase Authentication, and EmailJS for seamless functionality.",
      "githubUrl": "https://github.com/JayD2003/BUILD-A-SITE-Hackthon",
      "liveUrl": "https://time-capsule-45314.web.app/",
      "category": "fullstack",
      "techStack": ["React", "Firebase", "Firestore", "EmailJS"],
      "image": "./Projects/time.png"
  },
  {
    title: "Expense Tracker",
    language: "JavaScript",
    description: "Helps users track their spending, categorize expenses, and view their overall balance.",
    longDescription: "A personal finance management tool that allows users to log expenses, categorize them, and monitor their financial health. The application supports real-time updates using Firebase Firestore and provides visual insights through charts.",
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
    longDescription: "Developed a backend system using Node.js and Express for managing contacts. Implemented RESTful APIs with MongoDB as the database and secured authentication using JWT tokens. The project helped me grasp backend development concepts such as API creation, routing, and database integration.",
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
    longDescription: "A computer vision project that applies edge detection, Hough line transform, and region of interest masking to identify lane boundaries in video streams. Implemented preprocessing techniques to improve accuracy and applied lane line drawing to highlight detected lanes.",
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
    longDescription: "A web-based Tic Tac Toe game where players compete against an AI opponent powered by the Minimax algorithm. The AI dynamically adapts to player moves, ensuring a challenging experience. The UI is designed with vanilla HTML, CSS, and JavaScript.",
    githubUrl: "https://github.com/JayD2003/Tic-Tac-Toe-AI",
    liveUrl: "https://jayd2003.github.io/Tic-Tac-Toe-AI/",
    category: "game",
    techStack: ["HTML", "CSS", "JavaScript", "Minimax Algorithm"],
    image: "./Projects/tictactoe.png"
  },
];

export default projects;
