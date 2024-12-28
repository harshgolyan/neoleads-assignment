import { Button } from "../components/ui/button";
import { Bot } from "lucide-react";

export default function Box ({ text }) {
    return (
        <>
            <div className="border-2 border-gray-500 rounded-lg h-[10rem] w-[14rem]">
                <div className="flex mt-3 ml-3 gap-3 ">
                    <Bot />
                    <div className="font-medium">{text}</div>
                </div>
                <div className="ml-12 text-gray-600 mt-2">Description</div>
                <div className="flex mt-12 gap-1 mx-1">
                   <Button className="flex-1 bg-white text-gray-800 border-2">Clone & Edit</Button>
                   <Button className="flex-1">Try it out</Button>
                </div>
            </div>
        </>
    )
}