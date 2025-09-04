import Home from "./pages/Home";
import { Routes, Route} from 'react-router-dom';
import RoyalGardenFrame from "./components/RoyalGardenFrame";
import BlogTopGames from "./components/BlogTopGames";
import AnimalBlockPopPuzzle from "./components/SquidGameGreenLightRedLightHints";
import AventadorViceCrimeCity from "./components/TomAndJerryRunGame";
import BigBlockBlast from "./components/BigBlockBlast";
import CapybaraGo from "./components/CapybaraGo";
import ColorCargoPuzzleRush from "./components/ColorCargoPuzzleRush";
import HyperNurseHospitalGames from "./components/HyperNurseHospitalGames";
import NSRStreetCarRacing from "./components/NSRStreetCarRacing";
import SoccerTournament from "./components/SuperMarioRunGame";
import SquidGameGreenLightRedLightHints from "./components/SquidGameGreenLightRedLightHints";
import TomAndJerryRunGame from "./components/TomAndJerryRunGame";
import SuperMarioRunGame from "./components/SuperMarioRunGame";

export default function App() {
  return (
    <div>
      {/* It's good practice to have your navigation links outside the Routes
      <nav>
        <Link to="/">Go to Home</Link> | {" "}
        <Link to="/games/royal-garden-match">Play Royal Garden Match</Link>
      </nav>
      
      <hr /> */}

      {/* The Routes component will now switch between your pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/top-10-games" element={<BlogTopGames />} />
        <Route path="/game/royal-garden-match" element={<RoyalGardenFrame />} />
        <Route path="/game/animal-block-pop-puzzle" element={<AnimalBlockPopPuzzle />} />
        <Route path="/game/tom-jerry-run" element={<TomAndJerryRunGame />} />
        <Route path="/game/big-block-blast" element={<BigBlockBlast />} />
        <Route path="/game/capybara-go" element={<CapybaraGo />} />
        <Route path="/game/color-cargo-puzzle-rush" element={<ColorCargoPuzzleRush />} />
        <Route path="/game/squid-game-green-light-red-light-hints" element={<SquidGameGreenLightRedLightHints />} />
        <Route path="/game/hyper-nurse-hospital-games" element={<HyperNurseHospitalGames />} />
        <Route path="/game/nsr-street-car-racing" element={<NSRStreetCarRacing />} />
        <Route path="/game/super-mario-run" element={<SuperMarioRunGame />} />
      </Routes>
    </div>
  );
}