import React from "react";
import styled from "styled-components";
/* import { zoomOutUp } from "react-animations"; */

/* const ContainerImg = styled.div`
	background: url("./img/batman.svg") no-repeat center;
	height: 100%;
	width: 100%;
`;
 */

const ContainerImg = styled.div`
	img {
		width: 100%;
		height: 50%;
	}
`;

{
}

const HomeView = () => {
	return (
		<ContainerImg>
			<ContainerImg>
				<img src='./img/batman.svg' alt='Home' />
			</ContainerImg>
		</ContainerImg>
	);
};

export { HomeView };
