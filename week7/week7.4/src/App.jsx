import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import { networkAtom, notificationAtom, jobAtom, messagingAtom } from "./atoms"; 

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

function Main() {
  // Accessing the Recoil state
  const networkCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobCount = useRecoilValue(jobAtom);
  const messageCount = useRecoilValue(messagingAtom);

  return (
    <>
      <button>Home</button>
      <button>Job ({jobCount})</button>
      <button>Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Message ({messageCount})</button>
      <button>Notification ({notificationCount})</button>
      <button>Me</button>
    </>
  );
}

export default App;
