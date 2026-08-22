import { useEffect, useState } from "react";
import { getLeads, updateLeads, deleteLeads } from "../services/api";
import { toast } from "react-toastify";
import Loading from "../component/Loading";

function Admin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    try {
      const response = await getLeads();
      setLeads(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateLeads(id, status);
      fetchLeads();
      toast.success("Status Updated")
    } catch (error) {
        toast.error("Failed to update status")
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this lead?");

    if (!confirmDelete) return;

    try {
      await deleteLead(id);
      fetchLeads();
      toast.success("Status Updated")
    } catch (error) {
         toast.error("Failed to update status")
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

     
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            LeadDesk Dashboard
          </h1>
          <p className="text-gray-500">
            Manage your business leads efficiently
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {loading ? (
               <Loading/>
      ) : (
        <>
         
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
            <div className="bg-blue-600 text-white p-5 rounded-lg shadow">
              <h3>Total Leads</h3>
              <h2 className="text-3xl font-bold">{leads.length}</h2>
            </div>

            <div className="bg-yellow-500 text-white p-5 rounded-lg shadow">
              <h3>New</h3>
              <h2 className="text-3xl font-bold">
                {leads.filter((lead) => lead.status === "New").length}
              </h2>
            </div>

            <div className="bg-blue-500 text-white p-5 rounded-lg shadow">
              <h3>Contacted</h3>
              <h2 className="text-3xl font-bold">
                {leads.filter((lead) => lead.status === "Contacted").length}
              </h2>
            </div>

            <div className="bg-green-600 text-white p-5 rounded-lg shadow">
              <h3>Closed</h3>
              <h2 className="text-3xl font-bold">
                {leads.filter((lead) => lead.status === "Closed").length}
              </h2>
            </div>
          </div>

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by Name or Email..."
              className="w-full border rounded-lg p-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full border">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Budget</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {leads.filter((lead) => {
                    return (
                      lead.name.toLowerCase().includes(search.toLowerCase()) ||
                      lead.email.toLowerCase().includes(search.toLowerCase())
                    );
                  }).length === 0 ?(
                    <tr>
                    <td colSpan={6} className="text-center p-6 text-gray-500">
                        No Leads Found
                    </td>
                    </tr>
                  ) : (
                leads.filter((lead) => {
                    return (
                      lead.name.toLowerCase().includes(search.toLowerCase()) ||
                      lead.email.toLowerCase().includes(search.toLowerCase())
                    );
                  })
                  .map((lead) => (
                <tr key={lead._id} className="text-center border-t hover:bg-gray-100 transition">
                      <td className="p-3">{lead.name}</td>
                      <td className="p-3">{lead.email}</td>
                      <td className="p-3">{lead.budget}</td>
                      <td className="p-3">{lead.message}</td>

                      <td className="p-3">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            handleStatusChange(lead._id, e.target.value)
                          }
                          className={`px-3 py-2 rounded-lg text-white font-semibold
                          ${
                            lead.status === "New"
                              ? "bg-yellow-500"
                              : lead.status === "Contacted"
                              ? "bg-blue-600"
                              : "bg-green-600"
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>

                      <td className="p-3">
                        <button
                          onClick={() => handleDelete(lead._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;