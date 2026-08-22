import axios from "axios"

const api = axios.create({baseURL: "https://lead-production-331f.up.railway.app/api",});

export const createLead = (leadData) =>{
    return api.post("leads",leadData)
}

export const getLeads = ()=>{
    return api.get("leads")
}

export const updateLeads = (id, status)=>{
    return api.put(`/leads/${id}`,{ status })
}

export const deleteLeads = (id) =>{
return api.delete(`/leads/${id}`)
}

export const loginAdmin = (loginData) =>{
    return api.post("auth/login", loginData)
}

export default api;