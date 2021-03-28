import styled from "styled-components";

export const AlignAxis = {
	Start: "flex-start",
	End: "flex-end",
	Center: "center",
	Between: "space-between",
	Around: "space-around",
};

/* align-content: center;
align-items: ${({ alignItems = AlignAxis.Start }) => alignItems}; */

const Align = styled.div`
	display: flex;
	justify-content: ${({ justify = AlignAxis.Start }) => justify};
`;

export { Align };
