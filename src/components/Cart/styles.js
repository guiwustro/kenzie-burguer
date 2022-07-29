import styled from "styled-components";

const Container = styled.aside`
	grid-area: cart;
	display: flex;
	flex-direction: column;
	justify-self: center;
	width: 90%;
	margin-top: 20px;
	h1 {
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.5rem;
		letter-spacing: 0em;
		text-align: left;
		color: var(--color-default-white);
		background-color: var(--color-primary);
		height: 65px;
		padding-left: 20px;
		padding-top: 20px;
		border-radius: 5px 5px 0px 0px;
	}
	.cart--bgc-grey {
		background-color: var(--color-gray-0);
		border-radius: 0px 0px 5px 5px;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 15px;
		height: 323px;
		overflow-y: auto;
		padding: 10px;
	}
	@media (min-width: 1024px) {
		width: 325px;

		margin-top: 0;
		margin-right: 5vw;
		margin-left: 0;
		justify-self: end;
	}
`;

export default Container;
