import logo from "./logo.svg";
import "./App.css";
import menus from "./components/tree-view/data";

import Accordian from "./components/accordian/index";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModelTest from "./components/custom-model-popup/model-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flags/context";
import FeatureFlags from "./components/feature-flags";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

function App() {
  return (
    <div className="App">
      <Accordian/>

      {/* <RandomColor/> */}

      {/* <StarRating noOfStars={10}/> */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load More Products */}

      {/* <LoadMoreData/> */}

      {/* tree view component */}

      {/* <TreeView menus={menus}/> */}

      {/* <QRCodeGenerator/> */}

      {/* <LightDarkMode/> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* <TabTest/> */}

      {/* <ModelTest /> */}
      {/* <GithubProfileFinder /> */}

      {/* <SearchAutoComplete /> */}

      {/* <TicTacToe /> */}

      {/* featuredFlags */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}

      {/* <UseFetchHookTest/> */}

      {/* Use OnClick Outside Hook Test*/}

      {/* <UseOnClickOutsideTest/> */}

      {/* use window resize hook test */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to to and bottom */}

      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll to a particular section */}

      {/* <ScrollToSection/> */}


    </div>
  );
}

export default App;
