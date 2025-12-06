import axios from "axios";
import type { Student } from "../types/student";

const URL = "http://localhost:8000"
const getStudentData = async (): Promise<Record<string, Student>> => {
    const response = await axios.get(URL + '/view')
    return response.data
}

export default getStudentData