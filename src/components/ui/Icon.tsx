import * as React from "react";
import { IconVector } from "./icon/styles";

export type IconNames = "loading";

interface IProps {
	name: IconNames;
	loading?: boolean;
}

export const Icon = ({ name, loading }: IProps) => (
	<IconVector viewBox="0 0 50 50" loading={Boolean(loading)}>
		<use xlinkHref={`#icon-${name}`} />
	</IconVector>
);
