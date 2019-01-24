import React from "react";

export interface User {
	_id: string;
	name: string;
	photoURL: string;
}

export interface UserProfile {
	displayName?: User["name"];
	photoURL?: User["photoURL"];
}

interface Authentication {
	user?: User;
	addUser?(name: string): Promise<boolean>;
}

const AuthenticationContext = React.createContext<Authentication>({});

export default AuthenticationContext;
