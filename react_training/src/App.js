import "./App.css";
import Home from "./Components/Home";
import ClassBased from "./Components/VariousComponents/ClassBased";
import FunctionalComponent from "./Components/VariousComponents/FunctionalComponent";
import ErrorBoundary from "./ErrorBoundry";
import LifecycleExample from "./Components/Hooks&LifeCycles/LifeCycles";
import Prodcuts from './Components/Prodcuts';
import { UserProvider } from "./Context";
import ClassComponentWithContext from "./Components/VariousComponents/UsingContextClass";
import FunctionalComponentWithContext from "./Components/VariousComponents/UsingContextFunctional";

function App() {
  return (
    <ErrorBoundary>
      <UserProvider>
        {/* <Home /> */}
        {/* <ClassBased /> */}
        {/* <FunctionalComponent /> */}
        {/* <LifecycleExample /> */}
        <Prodcuts />
        {/* <ClassComponentWithContext /> */}
        {/* <FunctionalComponentWithContext /> */}
      </UserProvider>
    </ErrorBoundary>
  );
}

export default App;
