import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

function LeadForm() {
    const [formData, setFormData] = useState({ name: "", email: "", budget: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post("/leads", formData);
            toast.success("Lead Submitted Successfully!");
            setFormData({ name: "", email: "", budget: "", message: "" });
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-16 p-8 shadow-lg rounded-lg bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <form onSubmit={handleSumbit} className="space-y-4">
                <input className="w-full border p-3 rounded" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input className="w-full border p-3 rounded" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input className="w-full border p-3 rounded" type="text" name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} required />
                <textarea className="w-full border p-3 rounded" rows="4" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
                <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded disabled:opacity-50">
                    {loading ? "Submitting..." : "Submit Lead"}
                </button>
            </form>
        </div>
    );
}

export default LeadForm;