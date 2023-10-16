import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Navbar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Function;
}) {
  return (
    <nav className="w-full bg-white z-10 flex items-center justify-between px-4 py-3 shadow-md sticky top-0">
      {/* logo */}
      <div className="font-semibold text-xl cursor-pointer">Image Gallery</div>

      {/* search */}
      <div className="flex items-center justify-center w-[340px] px-4 py-2 text-sm text-black rounded-md  bg-secondary border-2">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search Images"
          className="w-full focus:outline-none bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
}
