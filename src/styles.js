import styled from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-areas:
		"header "
		"products "
		"cart ";
	max-width: 1440px;
	@media (min-width: 1024px) {
		grid-template-columns: auto 400px;
		grid-template-areas:
			"header header"
			"products cart";
		column-gap: 20px;
	}
`;

export default Container;
