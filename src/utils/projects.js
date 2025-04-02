const projects = [
    {
      "title": "CoralSense",
      "language": "JavaScript, Python",
      "description": "Analyze coral health using deep learning. Upload an image and get real-time predictions.",
      "longDescription": "A deep learning-based application designed to assess coral reef health. Users can upload images, and the system provides real-time predictions using YOLOv11. The backend is powered by Flask, with image processing handled through Roboflow.",
      "githubUrl": "https://github.com/yourusername/coralsense",
      "liveUrl": "https://coral-sense.netlify.app/",
      "category": "ai",
      "techStack": ["React", "Flask", "YOLOv11", "Roboflow"],
      "image": "/coralsense.png"
    },
    {
      "title": "Expense Tracker",
      "language": "JavaScript",
      "description": "Helps users track their spending, categorize expenses, and view their overall balance.",
      "longDescription": "A personal finance management tool that allows users to log expenses, categorize them, and monitor their financial health. The application supports real-time updates using Firebase Firestore and provides visual insights through charts.",
      "githubUrl": "https://github.com/yourusername/expense-tracker",
      "liveUrl": "https://your-expense-tracker.netlify.app/",
      "category": "fullstack",
      "techStack": ["React", "Firebase", "Firestore"],
      "image": "/coralsense.png"
    },
    {
      "title": "Contact Management Backend System",
      "language": "JavaScript, Node.js",
      "description": "CRUD backend system with authentication using JWT tokens.",
      "longDescription": "Developed a backend system using Node.js and Express for managing contacts. Implemented RESTful APIs with MongoDB as the database and secured authentication using JWT tokens. The project helped me grasp backend development concepts such as API creation, routing, and database integration.",
      "githubUrl": "https://github.com/yourusername/contact-management",
      "liveUrl": "", 
      "category": "backend",
      "techStack": ["Node.js", "Express", "MongoDB", "JWT"],
      "image": "/coralsense.png" 
    },
    {
      "title": "Lane Detection System",
      "language": "Python, OpenCV",
      "description": "Lane detection system for identifying lane boundaries in video datasets.",
      "longDescription": "A computer vision project that applies edge detection, Hough line transform, and region of interest masking to identify lane boundaries in video streams. Implemented preprocessing techniques to improve accuracy and applied lane line drawing to highlight detected lanes.",
      "githubUrl": "https://github.com/yourusername/lane-detection",
      "liveUrl": "", 
      "category": "computer-vision",
      "techStack": ["Python", "OpenCV", "Computer Vision"],
      "image": "/coralsense.png"
    },
    {
      "title": "Tic Tac Toe AI Game",
      "language": "HTML, CSS, JavaScript",
      "description": "Classic Tic Tac Toe game with an unbeatable AI opponent using Minimax.",
      "longDescription": "A web-based Tic Tac Toe game where players compete against an AI opponent powered by the Minimax algorithm. The AI dynamically adapts to player moves, ensuring a challenging experience. The UI is designed with vanilla HTML, CSS, and JavaScript.",
      "githubUrl": "https://github.com/yourusername/tic-tac-toe-ai",
      "liveUrl": "https://tic-tac-toe-ai.netlify.app/",
      "category": "game",
      "techStack": ["HTML", "CSS", "JavaScript", "Minimax Algorithm"],
      "image": "/coralsense.png"
    },
    {
      "title": "Space Invaders Game",
      "language": "Python, Pygame",
      "description": "Classic Space Invaders game with smooth controls, enemy movements, and scoring system.",
      "longDescription": "A recreation of the classic Space Invaders arcade game using Python and Pygame. Features include dynamic enemy movement, collision detection, sound effects, and an interactive scoring system. Designed an engaging UI with smooth player controls.",
      "githubUrl": "https://github.com/yourusername/space-invaders",
      "liveUrl": "", 
      "category": "game",
      "techStack": ["Python", "Pygame"],
      "image": "/coralsense.png"
    }
];

export default projects;
