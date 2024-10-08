// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import "./App.css";
// import { networkAtom, notificationAtom, jobAtom, messagingAtom,totoalNotificatonSelector`` } from "./atoms"; 

// function App() {
//   return (
//     <RecoilRoot>
//       <Main />
//     </RecoilRoot>
//   );
// }

// function Main() {
//   // Accessing the Recoil state
//   const networkCount = useRecoilValue(networkAtom);
//   const notificationCount = useRecoilValue(notificationAtom);
//   const jobCount = useRecoilValue(jobAtom);
//   const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);
// const totalNotificationCount=useRecoilValue(totoalNotificatonSelector);


//   return (
//     <>
//       <button>Home</button>
//       <button>Job ({jobCount})</button>
//       <button>Network ({networkCount >= 100 ? "99+" : networkCount})</button>
//       <button>Message ({messagingCount})</button>
//       <button>Notification ({notificationCount})</button>
//       <button
//       >
//         Me ({totalNotificationCount})
//       </button>
//     </>
//   );
// }

// export default App;






import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get("http://localhost:3000/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App