# Movie Explorer

A modern web application for discovering and exploring movies. Find your next favorite film, see what's trending, and keep track of movies you want to watch.

## 🚀 Features

- **Movie Discovery**: Browse through a vast collection of movies
- **Advanced Search**: Find specific movies using the powerful search functionality
- **Responsive Design**: Perfectly optimized for all devices
- **Modern UI**: Sleek and intuitive user interface with smooth animations
- **Movie Details**: Comprehensive information about each movie
- **Watchlist**: Save movies you want to watch later

## 🛠 Technologies

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Hooks
- **Routing**: React Router
- **Icons**: React Icons
- **API**: [TMDB API](https://www.themoviedb.org/documentation/api)

## 🚀 Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file and add your TMDB API key:
```env
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

5. Open http://localhost:5173 in your browser

## 📁 Project Structure

```
movie-explorer/
├── public/              # Static files
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Common components
│   │   ├── layout/      # Layout components
│   │   └── ui/          # UI components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Application entry point
├── .env                 # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 📝 Dependencies

- React 18
- React DOM
- React Router DOM
- Tailwind CSS
- React Icons
- Axios (for API requests)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x",
    "tailwindcss": "^3.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "vite": "^4.x"
  }
}
```


