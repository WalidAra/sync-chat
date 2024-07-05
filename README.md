# Sync-chat

## Description
Sync-chat is a full-stack chat application designed to facilitate real-time communication using Socket.io. This project serves as a learning tool for understanding Socket.io and collaborative coding. It allows users to chat with anyone on the platform, functioning as an alternative to popular messaging apps like Messenger and Viber.

## Features
- Real-time group chat
- User authentication and authorization
- Responsive design for both web and mobile
- Persistent message storage

## Installation

### Prerequisites
- Node.js and npm installed
- Git installed

### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/sync-chat.git
    cd sync-chat/backend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Set up the environment variables:
    - Create a `.env` file in the `backend` directory and add your variables (e.g., database connection string, secret keys).

4. Start the backend server:
    ```bash
    npm start
    ```

### Client
1. Navigate to the client directory:
    ```bash
    cd ../client
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the client application:
    ```bash
    npm run dev
    ```

## Usage
1. Start both the backend and the client as mentioned in the installation section.
2. Open your browser and navigate to the client application's URL (typically `http://localhost:3000`).
3. Register or log in to start chatting.

## Technologies Used
- **Backend**: Node.js, Express.js, Socket.io
- **Frontend**: React, Vite, Socket.io-client

## Project Structure

```bash 
    
sync-chat/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── utils/
│ ├── .env
│ ├── package.json
│ └── server.js
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── utils/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
└── README.md

```

## Contributing
Contributions are welcome! Currently, the project is being developed by [xyzRihab](https://github.com/xyzRihab) and myself. If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License.

## Authors
- **xyzRihab** - [GitHub Profile](https://github.com/xyzRihab)
- **Your Name** - [GitHub Profile](https://github.com/WalidAra)

## Acknowledgments
- Inspiration from popular chat applications like Messenger and Viber.
- Special thanks to the open-source community for providing useful tools and libraries.

