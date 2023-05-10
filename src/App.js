import SlideBar from "./components/SlideBar";
import "./App.css";
import Main from "./components/Main";
import NewSlider from "./components/NewSlider";
import Detail from "./components/Detail";

const App = () => {
  return (
    <div style={{ height: "400px" }} className=" container">
       <div
        className="d-flex"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <div className="w-25" >
          <SlideBar />
        </div>
        <div className="justify-content-evenly">
          <Main />
        </div>
      </div> 

      {/* <Detail /> */}
    </div>
  );
};

export default App;
