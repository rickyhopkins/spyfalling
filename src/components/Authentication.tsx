import * as React from "react";
import AuthenticationContext, { User } from "../context/authentication";
import { useMutation } from "react-apollo-hooks";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Mutations } from "../gql";

export const Authentication: React.FunctionComponent = ({ children }) => {
	const [user, setUser] = useState<User | undefined>(undefined);
	const addUserMutation = useMutation(Mutations.ADD_USER);

	useEffect(() => {
		const token = localStorage.getItem("token");
		console.log(token);
		if (token) {
			setUser(jwtDecode<{ user: User }>(token).user);
		}
	}, []);

	const addUser = async (name: string) => {
		try {
			const {
				data: { addUser: token },
			} = await addUserMutation({
				variables: { name },
			});

			localStorage.setItem("token", token);

			setUser(jwtDecode<{ user: User }>(token).user);

			return true;
		} catch (err) {
			return false;
		}
	};

	return <AuthenticationContext.Provider value={{ user, addUser }}>{children}</AuthenticationContext.Provider>;
};
