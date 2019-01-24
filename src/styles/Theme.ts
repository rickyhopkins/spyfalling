import { css } from "styled-components";

const sizes: { [key: string]: number } = {
	desktop: 992,
	laptop: 768,
	tablet: 576,
	phone: 0,
};

type media = { [P in keyof typeof sizes]: (literals: TemplateStringsArray, ...placeholders: any[]) => string };

const media: media = Object.keys(sizes).reduce((acc, label) => {
	return {
		...acc,
		[label]: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
			@media (min-width: ${sizes[label] / 16}em) {
				${css(literals, ...placeholders)};
			}
		`,
	};
}, {});

const colors = {
	primary: {
		base: "#A64AC9",
		dark: "#689F38",
		light: "#DCEDC8",
	},
	secondary: {
		base: "#FCCD04",
		variant: "#17E9E0",
	},
	variants: {
		primary: "#A64AC9",
		secondary: "#A0A0A0",
		success: "#8BC34A",
		warning: "#FF9800",
		danger: "#F44336",
		info: "#03A9F4",
	},
	gray: {
		light: "#E6E6E6",
	},
	text: {
		base: "#212121",
		secondary: "#757575",
		light: "#BDBDBD",
		white: "#FFF",
	},
};

const variants = {
	default: {
		backGround: colors.gray.light,
		color: colors.text.base,
	},
	primary: {
		backGround: colors.primary.base,
		color: colors.text.light,
	},
	success: {
		backGround: colors.variants.success,
		color: colors.text.white,
	},
	warning: {
		backGround: colors.variants.warning,
		color: colors.text.light,
	},
	danger: {
		backGround: colors.variants.danger,
		color: colors.text.light,
	},
	info: {
		backGround: colors.variants.info,
		color: colors.text.light,
	},
};

const borders = {
	radius: "3px",
};

const font = {
	weight: {
		regular: "400",
		semiBold: "600",
	},
	size: {
		micro: "11px",
	},
};

const shadows = [
	"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
	"0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)",
	"0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",
	"0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2)",
	"0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)",
];

export const Theme = {
	media,
	colors,
	variants,
	borders,
	font,
	shadows,
};

export type Theme = typeof Theme;
export type ThemeType = keyof Theme["variants"];
