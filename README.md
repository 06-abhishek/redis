# Redis Setup Guide

## 📌 Prerequisites
Make sure you have the following installed:  
- [Node.js](https://nodejs.org/) (LTS version recommended)  
- [Redis](https://redis.io/download) (Ensure Redis is running)  

## 🚀 Installation Steps

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies  
```bash
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a `.env` file in the project root and add:  
```plaintext
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### 4️⃣ Start Redis Server (If not already running)  
#### **For Windows**  
Run this in **PowerShell**:  
```powershell
cd "C:\Program Files\Redis"
.\redis-server.exe
```
#### **For macOS/Linux**  
```bash
redis-server
```

### 5️⃣ Verify Redis Connection  
Open a new terminal and run:  
```bash
redis-cli
```
Then type:  
```redis
PING
```
If Redis is working, you should see:  
```plaintext
PONG
```

### 6️⃣ Start the Project  
```bash
npm start
```

Now, your Redis setup is **ready to go!** 🎉🚀
