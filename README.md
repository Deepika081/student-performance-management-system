Student Performance Management System (FastAPI)

A simple FastAPI project to manage student details, marks, weak areas, and guardian information.
This project uses Pydantic validation and stores data in a JSON file.

🚀 How to Run
1. Create and activate virtual environment

Windows:
python -m venv venv
venv\Scripts\activate

2. Install dependencies

pip install fastapi uvicorn

3. Run the server

uvicorn main:app --reload

4. Open API docs

Swagger UI → http://127.0.0.1:8000/docs

ReDoc → http://127.0.0.1:8000/redoc

📌 API Endpoints
Method	Endpoint	Description
GET	/	Welcome message
GET	/about	About the project
GET	/view	View all students
GET	/student/{student_id}	Get a student by ID
GET	/sort?sort_by=name&order=asc	Sort students

📁 Project Structure
main.py
students.json
README.md

📌 Features (Current)
- Fetch all students
- Fetch student by ID
- Sort student data
- Input validation using Pydantic models

📌 In Progress
- Add new students
- Update/delete students
- Analytics for student performance
- Replace JSON with actual database