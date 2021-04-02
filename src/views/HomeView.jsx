import React from "react";
import styled from "styled-components";

const ContainerImg = styled.div`
	img {
		width: 100%;
		height: 50%;
	}
`;

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
