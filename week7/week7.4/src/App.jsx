import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { networkAtom, notificationAtom, jobAtom, messagingAtom,totoalNotificatonSelector`` } from "./atoms"; 

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
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);
const totalNotificationCount=useRecoilValue(totoalNotificatonSelector);


  return (
    <>
      <button>Home</button>
      <button>Job ({jobCount})</button>
      <button>Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Message ({messagingCount})</button>
      <button>Notification ({notificationCount})</button>
      <button
      >
        Me ({totalNotificationCount})
      </button>
    </>
  );
}

export default App;
