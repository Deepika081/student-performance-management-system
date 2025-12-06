# Student Performance Management System
**Full-stack application to manage student performance data**
- A simple FastAPI project to manage student details, marks, weak areas, and guardian information.
- This project uses Pydantic validation and stores data in a JSON file.

## 🛠️ Tech Stack
- **Backend:** FastAPI, Python, Pydantic
- **Frontend:** React, TypeScript, Vite, Axios
- **Data Storage:** JSON file (temporary)

## 🚀 How to Run

### Backend (FastAPI)
1. Create and activate virtual environment
   - Windows: `python -m venv venv` → `venv\Scripts\activate`
2. Install dependencies: `pip install fastapi uvicorn`
3. Run server: `uvicorn main:app --reload`
4. API docs: http://127.0.0.1:8000/docs

### Frontend (React)
1. Navigate to frontend: `cd frontend`
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Open browser: http://localhost:5173

## 📌 API Endpoints
| Method | Endpoint                       | Description         |
| ------ | ------------------------------ | ------------------- |
| GET    | `/`                            | Welcome message     |
| GET    | `/about`                       | About the project   |
| GET    | `/view`                        | View all students   |
| GET    | `/student/{student_id}`        | Get a student by ID |
| GET    | `/sort?sort_by=name&order=asc` | Sort students       |
| POST   | `/add`                         | Adds new students   |
| PUT    | `/edit/{student_id}`           | Edits existing student |
| DELETE | `/delete/{student_id}`         | Deletes existing student |


## 📁 Project Structure
```
FASTAPI/
├── frontend/         
├── main.py           
├── students.json     
└── README.md         
```

## 📌 Features (Completed)
**Backend:**
- All CRUD operations for students
- Input validation using Pydantic
- Sort functionality
- CORS enabled for frontend

**Frontend:**
- Display all students in a styled table
- API integration with Axios
- TypeScript interfaces for type safety

## 📌 In Progress
- Analytics for student performance
- Replace JSON with actual database
