function Navbar() {
  return (
    <nav className="text-gray-800 py-2 px-4">
        <div className="flex">
      <div className="mx-auto w-full flex justify-between items-center">
        <h1 className="text-gray-800 text-2xl font-extrabold italic">tailly*</h1>
      </div>
        <div className="mx-auto flex justify-end text-sm font-semibold">
            <button className="text-gray-600 px-4 py-2 mr-2 whitespace-nowrap">Pricing</button>
            <button className="text-gray-600 px-4 py-2 mr-2 whitespace-nowrap">Log in</button>
            <button className="text-gray-600 px-4 py-2 mr-2 whitespace-nowrap">Sign up</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-xl whitespace-nowrap">Create form</button>
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
