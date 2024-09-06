const Nav = () => {
  return (
    <nav className="bg-orange-400 flex justify-between items-center p-4">
      <div className="text-[whitesmoke] mx-4 text-4xl">
        User <span className="text-black">X</span>
      </div>
      <div className="flex gap-4 mx-4 justify-center items-center">
        <a href="#" className="text-xl">About</a>
        <a href="#" className="text-xl">Contact</a>
      </div>
    </nav>
  )
}

export default Nav
