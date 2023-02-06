import { BiCheck } from "react-icons/bi";

export default function Bug({ msg }) {
  return (
    <div className="container success mx-auto">
      <div className="flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
        {msg} <BiCheck size={25} color={"rgb(34 197 94 )"}></BiCheck>
      </div>
    </div>
  );
}
