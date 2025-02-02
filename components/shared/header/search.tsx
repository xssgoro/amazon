import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";
const categories = ['men', 'women', 'kids', 'accessories']
export default function Search() {
    return (
        <form className="flex items-stretch h-10" method='GET' action='/search'>
            <Select name="category">
                <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black broder-r rounded-r-none rounded-l-md">
                    <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent position='popper'>
          <SelectItem value='all'>All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
        </Select>

        <Input type="search" name="q" placeholder={`Search Site ${APP_NAME}`}  className='flex-1 rounded-none dark:border-gray-100 text-black text-base h-full' />
        <button type="submit" className="bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2">
            <SearchIcon className="w-6 h-6"/>
            </button>
        </form>
    )
}