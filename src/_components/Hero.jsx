import { useState } from "react";
import { Progress } from "../components/ui/progress";
import { Checkbox } from "../components/ui/checkbox";
import { Bot, Globe, FileSearch } from "lucide-react";

export default function Hero() {
  const checkboxContent = [
    "Start a New Conversation with AI",
    "Start a New Conversation with AI",
    "Add your files to Knowledge base",
    "Add your files to Knowledge base",
    "Write a SEO Article",
    "Write a SEO Article"
  ];

  const [checkedItems, setCheckedItems] = useState(new Array(checkboxContent.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const checkedCount = checkedItems.filter(Boolean).length;
  const progressValue = (checkedCount / checkboxContent.length) * 100;

  return (
    <>
      <div className="border-2 border-gray-400 rounded-lg h-[14rem] w-[45rem] mt-5">
        <div className="mt-4 flex items-center gap-5">
          <div className="font-semibold ml-16">Let's get Started</div>
          <div className="w-2/3 mt-4">
            <Progress value={progressValue} className="bg-gray-300" />
            <div className="text-sm text-gray-500 flex justify-end">{checkedCount}/6 completed</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 ml-16">
          {checkboxContent.map((item, index) => (
            <label key={index} className="flex items-center space-x-2">
              <Checkbox
                type="checkbox"
                className="h-4 w-4"
                checked={checkedItems[index]}
                onClick={() => handleCheckboxChange(index)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="bg-gray-200 mt-5 w-[45rem] py-5 px-5 rounded-lg">
        <div className="font-medium mx-10">Recent Activities</div>
        <div className="mx-10">
            <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2">
                    <FileSearch size={18} color="gray" className="mt-1" />
                    <div>Reasearch</div>
                </div>
                <div>14 December 2024</div>
            </div>
            <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2">
                    <Bot size={18} color="gray" className="mt-1" />
                    <div>SEO Agent</div>
                </div>
                <div>14 December 2024</div>
            </div>
            <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2">
                    <Globe size={18} color="gray" className="mt-1" />
                    <div>New Article</div>
                </div>
                <div>14 December 2024</div>
            </div>
        </div>
      </div>
    </>
  );
}
