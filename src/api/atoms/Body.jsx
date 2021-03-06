import { BACKGROUND_BLACK, BACKGROUND_WHITE } from "../style/base/colors";
import { TEXT_FONTS } from "../style/base/fonts";
import styled from "styled-components";

const Body = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	min-height: 100vh;
	width: 100%;
	background: ${BACKGROUND_BLACK};
	color: ${BACKGROUND_WHITE};
	text-rendering: optimizeLegibility;
	font-family: ${TEXT_FONTS};
`;

export { Body };
