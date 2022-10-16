import { useEffect, useState } from "react";
import Tracks from "./Tracks";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "874c5b0ab4mshbfd251a2ccd75c0p1ea939jsnef844372ca6e",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

function Home() {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMusic = async (title) => {
    const response = await fetch(
      `https://spotify23.p.rapidapi.com/search/?q=${title}&type=multi&offset=0&limit=30&numberOfTopResults=5`,
      options
    );
    const data = await response.json();
    console.log(data.tracks.items);
    setTracks(data.tracks.items);
  };
  // https://open.spotify.com/track/5F4OfeowSReF93KcH2eUcG?si=22a1f21be5734959

  useEffect(() => {
    searchMusic("");
  }, []);
  return (
    <div className="Home">
      <div className="flex md:flex-row flex-col py-5 md:px-20 px-5 md:justify-between justify-center md:space-y-0 space-y-5 play-btn fixed top-0 w-full z-[44]">
        <h1 className="uppercase text-5xl font-bold md:text-left text-center">
          Musify
        </h1>

        <div className="card flex items-center space-x-2 rounded justify-between">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search ..."
            value={searchTerm}
            className="bg-transparent focus:outline-none px-2"
          />
          <span
            onClick={() => searchMusic(searchTerm)}
            className="bg-white font-bold md:px-2 px-5 py-2 cursor-pointer card rounded"
          >
            <SearchIcon />
          </span>
        </div>
      </div>
      {/* <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>Tab 1</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>{tracks.totalCount}</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
      {tracks?.length > 0 ? (
        <div className="md:mt-32 mt-44">
          <p className="md:mx-20 text-lg my-5 mx-10">
            Search Results for
            <span className="font-bold uppercase"> {searchTerm}</span>
          </p>
          <div className="flex justify-center md:mx-20 mx-10">
            <div className="container grid md:grid-cols-4 grid-cols-1 gap-5">
              {tracks.map((track) => (
                <Tracks track={track} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h2 className="text-center text-2xl font-bold">No track available</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
