// import { atom, selector } from "recoil";

// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 400,
// });

// export const jobAtom = atom({
//   key: "jobAtom",
//   default: 40,
// });

// export const messagingAtom = atom({
//   key: "messagingAtom",
//   default: 4,
// });

// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: 9,
// });

// export const totoalNotificatonSelector = selector({
//     key:"totoalNotificatonSelector",
//     get:({get} )=>{
//         const networknCount=get(networkAtom);
//         const jobCount=get(jobAtom);
//         const messagingCount=get(messagingAtom);
//         const notificationCount=get(notificationAtom);
//         return networknCount+jobCount+messagingCount+notificationCount;
//     }}
// )


import { atom, selector,axios } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });

//Asynchronous Dats Queries
export const notifications=atom({
key:"notificationAtom",
get: async()=>{
    const res=await axios.get("http://localhost:3000/notifications")
    return res.data;
}
});
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})