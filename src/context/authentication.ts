import React from "react";

export interface User {
	_id: string;
	name: string;
	avatar: string;
}

export interface UserProfile {
	displayName?: User["name"];
	avatar?: User["avatar"];
}

interface Authentication {
	user?: User;
	addUser?(name: string): Promise<boolean>;
}

const AuthenticationContext = React.createContext<Authentication>({});

export default AuthenticationContext;
