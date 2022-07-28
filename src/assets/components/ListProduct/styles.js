import styled from "styled-components";

const Container = styled.main`
	display: flex;
	grid-area: products;
	justify-content: center;
	max-width: 1440px;
	align-items: start;

	ul {
		display: flex;
		overflow-x: auto;
		width: 100%;
		justify-content: flex-start;
		column-gap: 1.5%;
		row-gap: 15px;
		padding-left: 5vw;
		padding-right: 5vw;
		padding-bottom: 10px;
	}
	button:hover {
		background-color: var(--color-primary-50);
		border-color: var(--color-primary-50);
	}
	@media (min-width: 1024px) {
		ul {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			max-width: 100vw;
			padding-right: ${({ showCart }) => (showCart ? `0` : `5vw`)};
		}
	}
`;

export default Container;
