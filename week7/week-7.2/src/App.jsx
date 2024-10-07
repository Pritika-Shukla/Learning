import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  return (
    <div>
      <RecoilRoot>
        <CountRenderer />
        <Buttons />
      </RecoilRoot>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);

  return (
    <>
      <div>Count: {count}</div>
      <div>Status: {isEven ? "even" : "odd"}</div>
    </>
  );
}
function EvenCount() {
  const count = useRecoilValue(evenSelector);
  return <div>{isEven ? "even" : "odd"}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  console.log("CountRenderer");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
