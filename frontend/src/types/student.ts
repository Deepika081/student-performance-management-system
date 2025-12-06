
export interface Marks {
    math: number;
    science: number;
    social: number;
}

export interface WeakAreas {
    math: string[];
    science: string[];
    social: string[];
}

export interface Guardian {
    name: string;
    relation: string;
    contact: string;
}

export interface Student {
    roll_no: string;
    name: string;
    gender: "Male" | "Female" | "Other";
    marks?: Marks;
    weak_areas?: WeakAreas;
    guardian: Guardian;
}

export interface StudentUpdate {
    name?: string;
    gender?: "Male" | "Female" | "Other";
    marks?: Marks;
    weak_areas?: WeakAreas;
    guardian?: Guardian;
}