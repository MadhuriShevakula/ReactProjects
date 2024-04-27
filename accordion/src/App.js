import logo from "./logo.svg";
import "./App.css";
import menus from './components/tree-view/data'

import Accordian from "./components/accordian/index";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import QRCodeGenerator from "./components/qr-code-generator";

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}

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

      <QRCodeGenerator/>

    </div>
  );
}

export default App;
