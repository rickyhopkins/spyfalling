import { Avatar } from "@material-ui/core";
import * as React from "react";

import clown from "../../assets/Clown.png";
import dealer from "../../assets/Dealer.png";
import death from "../../assets/Death.png";
import devil from "../../assets/Devil.png";
import director from "../../assets/Director.png";
import dracula from "../../assets/Dracula.png";
import elf from "../../assets/Elf.png";
import enforcer from "../../assets/Enforcer.png";
import engineer from "../../assets/Engineer.png";
import frankenstein from "../../assets/Frankenstein.png";
import lego from "../../assets/Lego.png";
import leprechaun from "../../assets/Leprechaun.png";
import magician from "../../assets/Magician.png";
import mummy from "../../assets/Mummy.png";
import nativeAmerican from "../../assets/Native-American.png";
import pilgrimMan from "../../assets/Pilgrim-Man.png";
import pilgrimWoman from "../../assets/Pilgrim-Woman.png";
import priest from "../../assets/Priest.png";
import santaClaus from "../../assets/Santa-Claus.png";
import scream from "../../assets/Scream.png";
import { User } from "../../context/authentication";

interface IProps {
	user: Pick<User, "name" | "avatar">;
}

export enum Avatars {
	CLOWN = "CLOWN",
	DEALER = "DEALER",
	DEATH = "DEATH",
	DEVIL = "DEVIL",
	DIRECTOR = "DIRECTOR",
	DRACULA = "DRACULA",
	ELF = "ELF",
	ENFORCER = "ENFORCER",
	ENGINEER = "ENGINEER",
	FRANKENSTEIN = "FRANKENSTEIN",
	LEGO = "LEGO",
	LEPRECHAUN = "LEPRECHAUN",
	MAGICIAN = "MAGICIAN",
	MUMMY = "MUMMY",
	NATIVE_AMERICAN = "NATIVE_AMERICAN",
	PILGRIM_MAN = "PILGRIM_MAN",
	PILGRIM_WOMAN = "PILGRIM_WOMAN",
	PRIEST = "PRIEST",
	SANTA_CLAUS = "SANTA_CLAUS",
	SCREAM = "SCREAM",
}

const getSrc = (avatar: string | null) => {
	switch (avatar) {
		case Avatars.CLOWN:
			return clown;
		case Avatars.DEALER:
			return dealer;
		case Avatars.DEATH:
			return death;
		case Avatars.DEVIL:
			return devil;
		case Avatars.DIRECTOR:
			return director;
		case Avatars.DRACULA:
			return dracula;
		case Avatars.ELF:
			return elf;
		case Avatars.ENFORCER:
			return enforcer;
		case Avatars.ENGINEER:
			return engineer;
		case Avatars.FRANKENSTEIN:
			return frankenstein;
		case Avatars.LEGO:
			return lego;
		case Avatars.LEPRECHAUN:
			return leprechaun;
		case Avatars.MAGICIAN:
			return magician;
		case Avatars.MUMMY:
			return mummy;
		case Avatars.NATIVE_AMERICAN:
			return nativeAmerican;
		case Avatars.PILGRIM_MAN:
			return pilgrimMan;
		case Avatars.PILGRIM_WOMAN:
			return pilgrimWoman;
		case Avatars.PRIEST:
			return priest;
		case Avatars.SANTA_CLAUS:
			return santaClaus;
		case Avatars.SCREAM:
			return scream;
		default:
			return avatar || lego;
	}
};

export const UserAvatar = ({ user }: IProps) => {
	return <Avatar alt={user.name || "Anonymous"} src={getSrc(user.avatar)} />;
};
