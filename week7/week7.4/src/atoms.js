import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: "400",
});

export const jobAtom = atom({
  key: "jobAtom",
  default: "40",
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: "4",
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: "9",
});
