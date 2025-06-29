# Node.js Blog Application

A simple blog application built with **Node.js**, **Express**, and **MongoDB**.

## Features

- Create, read, update, and delete blog posts
- Admin dashboard for managing posts
- User authentication for admin access
- Responsive design
- Search functionality

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nishtha01103/Blog-site.git
   cd Blog-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Visit in your browser:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
.
├── public/           # Static files (CSS, JS, images)
├── server/
│   ├── config/       # Database configuration
│   ├── helpers/      # Helper functions
│   ├── models/       # Mongoose models
│   └── routes/       # Express routes
├── views/            # EJS templates
├── app.js            # Main application file
└── package.json
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
