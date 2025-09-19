export type User = {
    id: string; 
    name: string;
    email: string;
    phone?: string,
    job: string;
    image: string;
    relationship?: string;
    birthday: string;
    role: "ADMIN" | "MEMBER"
}

export type Actions = {
    id: string
    userId: string
    activity: string; 
    mood: string; 
    location?: string;
    timestamp: string;
}

export type Status = {
    userId: string  
    job_status: string;
    health_status: string;
    money_status: string;
    social_status: string;
    contacts: string[];
    lastUpdate: string;
}