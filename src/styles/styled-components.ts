import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";
import { Theme } from "@material-ui/core";

const styled = {
	default: styledComponents.default,
	css: styledComponents.css,
	createGlobalStyle: styledComponents.createGlobalStyle,
	keyframes: styledComponents.keyframes,
	ThemeProvider: styledComponents.ThemeProvider,
} as ThemedStyledComponentsModule<Theme>;

const { css, createGlobalStyle, keyframes, ThemeProvider } = styled;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled.default;
