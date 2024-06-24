import { DONATE_URL } from "@/config";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Donate() {
  return (
    <div className="fixed bottom-0 left-0 p-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
      <Popover>
        <PopoverTrigger>
          <img src="/sponsor.svg" alt="Sponsor Logo" className="w-16 h-auto" />
        </PopoverTrigger>
        <PopoverContent align="start">
            <p className="text-sm"> 
                This is a hobby project made in free time. If the site has helped you, please consider donating!
            </p>
            <a href={DONATE_URL} className="text-sm text-pink-300 hover:underline">
                Click here
            </a>
        </PopoverContent>
      </Popover>
    </div>
  );
}
