import { MdFavoriteBorder, MdOutlineSearch } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [toggle, setToggle] = useState(false);
  const contents = useSelector((state) => state.fav.contents);

  const navigate = useNavigate();
  const [search, setSearch] = useState(true);
  const [query, setQuery] = useState("");

  const searchQueryHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleMobileCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <nav className="w-full h-full bg-gray flex justify-between items-center gap-10 py-5">
        <main className="w-full max-w-7xl mx-auto flex items-center justify-between gap-10 px-10">
          <section className="w-full flex items-center justify-start gap-10 sm:gap-14">
            <section className="font-bold text-2xl flex items-center gap-2">
              <Link to="/">MovieDB</Link>
            </section>
            
            {/* mobile view */}
            <section className="w-full relative flex sm:hidden justify-end items-end">
              {toggle ? (
                <AiOutlineClose
                  className="text-2xl font-bold cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              ) : (
                <AiOutlineMenu
                  className="text-2xl font-bold cursor-pointer"
                  onClick={() => setToggle(true)}
                />
              )}
              {toggle && (
                <>
                  <div className="w-64 h-fit absolute bg-black top-10 -right-20 z-50 py-0 px-4 flex items-start flex-col gap-2">
                    <div className="w-full h-full">
                      <span className="font-semibold text-lg cursor-pointer ">
                        <Link to="/movie/popular">Popular</Link>
                      </span>
                    </div>
                    <div className="w-full h-full">
                      <span className="font-semibold text-lg cursor-pointer ">
                        <Link to="/movie/top-rated">Top Rated</Link>
                      </span>
                    </div>
                    <div className="w-full h-full">
                      <span className="font-semibold text-lg cursor-pointer ">
                        <Link to="/movie/upcoming">Upcoming</Link>
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    {search ? (
                      <section className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Search for a movie...."
                          className="px-2 py-1 rounded-3xl outline-none border-none text-gray-400 text-sm sm:text-base"
                          onChange={(e) => setQuery(e.target.value)}
                          onKeyUp={searchQueryHandler}
                        />
                      </section>
                    ):(null)}
                  </div>
                </>
              )}
            </section>
          </section>

          <section className="hidden sm:flex items-center justify-center gap-5">
            <div className="hidden sm:flex items-center justify-center gap-5 sm:gap-10 font-semibold text-sm">
              <div className="relative cursor-pointer">
                <span><Link to="/movie/popular">Popular</Link></span>
              </div>
              <div className="relative cursor-pointer">
                <span><Link to="/movie/top-rated">TopRated</Link></span>
              </div>
              <div className="relative cursor-pointer">
                <span><Link to="/movie/upcoming">Upcoming</Link></span>
              </div>
            </div>
            <div className="relative">
              {search ? (
                <section className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search for a movie...."
                    className="px-2 py-1 rounded-3xl outline-none border-none text-gray-400 text-sm sm:text-base"
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                  />
                </section>
              ) : (
                <MdOutlineSearch
                  className="w-6 h-6 font-semibold cursor-pointer"
                  onClick={() => setSearch(true)}
                />
              )}
            </div>
          </section>
        </main>
      </nav>
    </>
  );
};

export default Navbar;
