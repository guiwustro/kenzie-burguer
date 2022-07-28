import styled from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-areas:
		"header "
		"products "
		"cart ";
	grid-template-columns: 100vw;
	max-width: 1440px;

	&::before {
		content: "";
		background-color: var(--color-background);
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		max-width: 100%;
		position: fixed;
		z-index: -1;
	}

	@media (min-width: 1024px) {
		grid-template-columns: auto max-content;

		grid-template-areas: ${({ showCart }) =>
			showCart
				? `	"header header"
		"products cart"	`
				: `	"header header"
		"products products"	`};

		column-gap: 20px;
	}
`;

export default Container;
