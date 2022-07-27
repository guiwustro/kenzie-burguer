import styled from "styled-components";

const Container = styled.main`
	display: flex;
	grid-area: products;
	align-items: center;
	justify-content: center;

	ul {
		display: flex;
		overflow-x: auto;
		width: 100%;
		justify-content: flex-start;
		column-gap: 1.5%;
		row-gap: 15px;
		padding-left: 5vw;
		padding-right: 5vw;
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
			padding-right: 0;
		}
	}
	@media (min-width: 1440px) {
		ul {
			padding-right: 5vw;
		}
	}
`;

export default Container;
