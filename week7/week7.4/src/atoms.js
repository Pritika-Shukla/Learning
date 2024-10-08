import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 400,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 40,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 4,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 9,
});

export const totoalNotificatonSelector = selector({
    key:"totoalNotificatonSelector",
    get:({get} )=>{
        const networknCount=get(networkAtom);
        const jobCount=get(jobAtom);
        const messagingCount=get(messagingAtom);
        const notificationCount=get(notificationAtom);
        return networknCount+jobCount+messagingCount+notificationCount;
    }}
)