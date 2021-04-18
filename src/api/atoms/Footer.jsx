import styled from "styled-components";

const FooterStyle = styled.footer`
	bottom: 0;
	padding: 1rem;
	position: absolute;
	text-align: center;
	width: 100%;
	font-size: 0.7rem;
`;

const Img = styled.img`
	width: 1.3rem;
	height: 1.3rem;
`;

const Footer = () => {
	return (
		<FooterStyle>
			<Img src='img/ins.svg' alt='instagram' />
		</FooterStyle>
	);
};

export { Footer };
