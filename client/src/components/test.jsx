import * as Avatar from "@radix-ui/react-avatar";

export default function Ters() {
  return (
    <div className="flex items-center justify-center gap-x-10">
      <button>
        <Avatar.Root className="flex items-center gap-3">
          <Avatar.Image
            src="https://randomuser.me/api/portraits/women/79.jpg"
            className="w-12 h-12 rounded-full object-cover"
          />
          <Avatar.Fallback
            delayMs={600}
            className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-sm"
          >
            CT
          </Avatar.Fallback>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Avatar.Root>
      </button>
    </div>
  );
}
