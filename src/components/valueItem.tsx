export default function ValueItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between">
            <span className="text-md whitespace-nowrap text-text-secondary">
               {label}
            </span>
            <span className="text-md font-medium whitespace-nowrap dark:text-gray-300">
                {value}
            </span>
        </div>
    );
}