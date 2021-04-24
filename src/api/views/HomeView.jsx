import React from "react";
import styled from "styled-components";

const ContainerImg = styled.div`
	img {
		width: 40%;
		height: 40%;
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
