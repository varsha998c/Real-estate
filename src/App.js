import "./App.css";
import "../src/assets/css/style.css";

import Spotlight from "./components/screens/landingpage/Spotlight";
import Service from "./components/screens/landingpage/Service";
import Report from "./components/screens/landingpage/Report";
import Target from "./components/screens/landingpage/Target";
import Manage from "./components/screens/landingpage/Manage";
import Lead from "./components/screens/landingpage/Lead";
import Explore from "./components/screens/landingpage/Explore";
import LetUsHelp from "./components/screens/landingpage/LetUsHelp";
import Footer from "./components/general/Footer";

function App() {
    return (
        <>
            <Spotlight />
            <Service />
            <Report />
            <Target />
            <Manage />
            <Lead />
            <Explore />
            <LetUsHelp />
            <Footer />
        </>
    );
}

export default App;
