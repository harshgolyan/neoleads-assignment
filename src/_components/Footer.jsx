import { useState } from "react";
import Box from "./Box";

export default function Footer() {
    const [activeTab, setActiveTab] = useState("Agent");

    const boxText = activeTab === "Agent" ? "SEO Agent" : "SEO Tools"

    return (
        <>
            <div className="mt-5 flex gap-2 border border-black rounded-full bg-gray-100">
                <button
                    onClick={() => setActiveTab("Agent")}
                    className={`rounded-full px-6 py-2 transition ${
                        activeTab === "Agent" ? "bg-black text-white" : "bg-transparent text-black"
                    }`}
                >
                    Agent
                </button>
                <button
                    onClick={() => setActiveTab("Tools")}
                    className={`rounded-full px-6 py-2 transition ${
                        activeTab === "Tools" ? "bg-black text-white" : "bg-transparent text-black"
                    }`}
                >
                    Tools
                </button>
            </div>
            <div className="flex gap-5 justify-between mt-5 mb-5">
                <Box text={boxText} />
                <Box text={boxText} />
                <Box text={boxText} />
            </div>
        </>
    );
}


