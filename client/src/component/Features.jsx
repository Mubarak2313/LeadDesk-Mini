import { Zap, Users, BarChart3, Bell } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-8 h-8 text-blue-600" />,
        title: "Instant Lead Capture",
        description: "Every lead submitted from your website is captured in real-time, so you never miss a potential customer.",
    },
    {
        icon: <Users className="w-8 h-8 text-blue-600" />,
        title: "Centralized Dashboard",
        description: "Manage all your leads from one clean, easy-to-use admin panel — no more scattered spreadsheets.",
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
        title: "Track Lead Status",
        description: "Move leads through New, Contacted, and Closed stages so your team always knows what's next.",
    },
    {
        icon: <Bell className="w-8 h-8 text-blue-600" />,
        title: "Quick Actions",
        description: "Update status or remove leads instantly with one click — built for speed and simplicity.",
    },
];

function Features() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Why Choose LeadDesk
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Everything you need to capture, manage, and convert leads — all in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;