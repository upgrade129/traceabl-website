import firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.app();
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BNmjMyIMFVmK7V8GT2cRhsVpqzVRf3Qwp-x-95LtCtY43N1PMjOpqS9DC9l9sEvmZ7ybxm18JAnx9lHloDc-Bd8"
);
export { messaging };