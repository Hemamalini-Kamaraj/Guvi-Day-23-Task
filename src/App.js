import "./App.css";
import MenuBar from "./Components/MenuBar";
import SearchBar from "./Components/SearchBar";
import Title from "./Components/Title";
import { StatusCardList } from "./Components/StatusCard";
import OverViewChart from "./Components/OverViewChart";
import { ProjectsList } from "./Components/Projects";
import Illustrations from "./Components/Illustrations";
import { ColoredCardsList } from "./Components/ColoredCards";
import DevelopmentApproach from "./Components/DevelopmentApproach";
import Copyright from "./Components/Copyright"


function App() {
  return (
    <>
        <div className="App">
            <div className="main1">
                <MenuBar />
            </div>
            <div className="main2">
                <SearchBar />
             </div>
             <div className="main3">
                <Title />
                <StatusCardList />
                <OverViewChart />
                <div className="main4">
                  <ProjectsList />
                  <Illustrations />
                </div>
                <div className="main5">
                  <ColoredCardsList />
                  <DevelopmentApproach />
                </div>
                <Copyright />
              </div>
        </div>
    </>
  )
}

export default App;