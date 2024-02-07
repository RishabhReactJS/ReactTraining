import "./App.css";
import Home from "./Components/Home";
import ClassBased from "./Components/VariousComponents/ClassBased";
import FunctionalComponent from "./Components/VariousComponents/FunctionalComponent";
import ErrorBoundary from './ErrorBoundry';
import LifecycleExample from './Components/Hooks&LifeCycles/LifeCycles'

function App() {
  return (
    <ErrorBoundary>

      {/* <Home /> */}
      {/* <ClassBased /> */}
      <FunctionalComponent />
      {/* <LifecycleExample /> */}
    </ErrorBoundary>
  );
}

export default App;
