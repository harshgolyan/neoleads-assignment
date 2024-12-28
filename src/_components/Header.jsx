import {Input} from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, CirclePlus, MessageSquare, Pencil } from "lucide-react";

export default function Header () {
    return (
        <>
            <div>
                <div className="flex justify-start mt-10 mb-5">Hey (name), welcome to your workspace</div>
                <div className="bg-gray-200 px-12 py-10 rounded-lg w-[45rem]">
                    <div className="font-medium mb-5">Explore what you can achieve with Neoleads</div>
                    <div className="relative">
                        <Input className="bg-white pl-10" placeholder="Search the platform"/>
                        <div className="absolute top-[0.5rem] ml-2"><Search color="gray" size={20} /></div>
                    </div>
                </div>
                <div className="mt-5 flex justify-between relative">
                    <Button className="pl-8">Create a New Agent</Button>
                    <div className="absolute top-[0.7rem] ml-3"><CirclePlus color="white" size={15} /></div>
                    <Button className="pl-8">Start a Conversation</Button>
                    <div className="absolute top-[0.7rem] left-[17.5rem] ml-2"><MessageSquare color="white" size={15} /></div>
                    <Button className="pl-8">Write a SEO Article</Button>
                    <div className="absolute top-[0.7rem] left-[34.5rem] ml-3"><Pencil color="white" size={15} /></div>
                </div>
            </div>
        </>
    )
}