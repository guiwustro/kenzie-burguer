import styled from "styled-components";

const Container = styled.header`
	grid-area: header;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 140px;
	width: 100vw;
	padding-left: 5vw;
	padding-right: 5vw;
	padding-top: 20px;
	justify-self: end;
	background-color: var(--color-gray-0);
	margin-bottom: 30px;
	@media (min-width: 768px) {
		justify-content: space-between;
		flex-direction: row;
		height: 80px;
		padding-bottom: 20px;
		/* padding: 0px 20px; */
	}
	@media (min-width: 1440px) {
		max-width: 1440px;

		&::after {
			content: "";
			background-color: var(--color-gray-0);
			position: absolute;
			left: 0;
			top: 0;
			height: 80px;
			width: 100vw;
			z-index: -1;
		}
	}
`;

export default Container;
