import { twMerge } from "tailwind-merge";
import Lucide, { Icons } from "./lucide"

interface MethodItemProps {
    icon: Icons | "Pix";
    title: string;
    selected?: boolean;
    onSelect?: () => void;
    discount?: string;
}

export default function MethodItem({ icon, title, selected, onSelect, discount }: MethodItemProps) {
    return (
        <button
            className={twMerge([
                "flex-1 flex flex-col min-h-28 text-left bg-secondary-background border-border-background border rounded-xl p-4 box-border cursor-pointer hover:bg-secondary-background/80",
                selected ? "border-2 border-primary" : "",
            ])}
            onClick={() => {
                if (onSelect) {
                    onSelect();
                }
            }}
        >
            {
                icon === "Pix" ? (
                    <div className="mt-0.5">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.59935 5.63592C5.50809 5.63592 5.46239 5.52558 5.52692 5.46105L8.27602 2.71191C9.22885 1.7627 10.7708 1.7627 11.7237 2.71191L14.4728 5.46105C14.5373 5.52558 14.4916 5.63592 14.4004 5.63592C13.8185 5.63592 13.2693 5.8614 12.8584 6.276L10.3853 8.73813C10.1708 8.9527 9.82892 8.9527 9.61435 8.73813L7.14134 6.276C6.73039 5.8614 6.18124 5.63592 5.59935 5.63592Z" fill="currentColor"></path><path d="M14.4004 14.3652C14.4916 14.3652 14.5373 14.4755 14.4728 14.5401L11.7237 17.2892C10.7708 18.2384 9.22885 18.2384 8.27602 17.2892L5.52692 14.5401C5.46239 14.4755 5.50809 14.3652 5.59935 14.3652C6.18124 14.3652 6.73039 14.1397 7.14134 13.7251L9.61435 11.263C9.82892 11.0484 10.1708 11.0484 10.3853 11.263L12.8584 13.7251C13.2693 14.1397 13.8185 14.3652 14.4004 14.3652Z" fill="currentColor"></path><path d="M17.2881 11.724L16.0643 12.9477C15.6231 13.389 15.0246 13.6369 14.4005 13.6369C14.0114 13.6369 13.6477 13.4842 13.3713 13.2114L10.8983 10.7457C10.4037 10.251 9.59632 10.251 9.10172 10.7457L6.62871 13.2114C6.35231 13.4842 5.98864 13.6369 5.5995 13.6369C4.97544 13.6369 4.37694 13.389 3.93566 12.9477L2.7119 11.724C1.7627 10.7711 1.7627 9.2291 2.7119 8.27625L3.93566 7.05247C4.37694 6.61119 4.97544 6.36328 5.5995 6.36328C5.98864 6.36328 6.35231 6.51603 6.62871 6.78879L9.10172 9.25456C9.34902 9.50186 9.67633 9.62551 10 9.62551C10.3237 9.62551 10.651 9.50186 10.8983 9.25456L13.3713 6.78879C13.6477 6.51603 14.0114 6.36328 14.4005 6.36328C15.0246 6.36328 15.6231 6.61119 16.0643 7.05247L17.2881 8.27625C18.2373 9.2291 18.2373 10.7711 17.2881 11.724Z" fill="currentColor"></path></svg>
                    </div>
                )
                    :
                    <Lucide icon={icon} className=" w-6 h-6 stroke-2 dark:fill-transparent fill-black stroke-white" />
            }
            <p className="text-md font-semibold mt-3">{title}</p>
            {discount && <p className="text-sm text-primary font-semibold ">Economize {discount}!</p>}
        </button>
    )

}