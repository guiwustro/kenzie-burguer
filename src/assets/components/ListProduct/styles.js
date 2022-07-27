import styled from "styled-components";

const Container = styled.main`
	display: flex;
	grid-area: products;
	align-items: center;
	justify-content: center;
	padding-left: 5vw;
	padding-right: 5vw;
	ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}
	button:hover {
		background-color: var(--color-primary-50);
		border-color: var(--color-primary-50);
	}
	@media (min-width: 1024px) {
		padding-right: 0;
	}
`;

export default Container;
