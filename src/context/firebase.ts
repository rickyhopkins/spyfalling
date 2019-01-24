import React from "react";
import Firebase from "../config/firebase";

const FirebaseContext = React.createContext<Firebase>((undefined as any) as Firebase);

export default FirebaseContext;
