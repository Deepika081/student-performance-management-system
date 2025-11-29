from fastapi import FastAPI, Path, HTTPException
from models import Products
import json

app = FastAPI()

def load_data():
    with open('students.json','r') as f:
        data = json.load(f)

    return data

@app.get('/')
def greet():
    return {'message':'Student Management System API'}

@app.get('/about')
def about():
    return {'message':'A fully functional API to manage your student performance'}

@app.get('/view')
def view():
    data = load_data()
    return data

@app.get('/student/{student_id}')
def get_student(student_id: str = Path(..., description='ID of student in DB', example='S001')):
    data = load_data()
    if student_id in data:
        return data[student_id]
    raise HTTPException(status_code=404, detail="Student ID not found in DB")