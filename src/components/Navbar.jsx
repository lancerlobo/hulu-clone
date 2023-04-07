import { useRouter } from "next/router";
import requests from "../../utils/requests";

function Navbar() {
  const router = useRouter();

  return (
    <navbar className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {/* returns requests with key and value. We destructure the value here */}
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-500
            last:pr-24"
          >
            {title}
          </h2>
        ))}
      </div>

      {/* to fade away the last element in the navbar component */}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </navbar>
  );
}

export default Navbar;
