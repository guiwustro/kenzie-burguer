import styled from "styled-components";

const Item = styled.li`
	display: flex;

	width: 300px;
	min-width: 200px;

	height: 350px;
	justify-content: space-between;
	flex-direction: column;
	border: 2px solid var(--color-gray-0);
	border-radius: 5px;
	h3 {
		font-style: normal;
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 24px;
		color: var(--color-gray-100);
		padding-left: 20px;
	}

	figure {
		height: 150px;
		width: 100%;
		background-color: var(--color-gray-0);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	figure img {
		height: 150px;
	}

	.item__category {
		font-family: Inter;
		font-size: 0.8rem;
		font-weight: 500;
		line-height: 1rem;
		letter-spacing: 0em;
		padding-left: 20px;
		text-align: left;
		color: var(--color-primary);
	}

	.item__price {
		font-family: Inter;
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1.5rem;
		letter-spacing: 0em;
		text-align: left;
		color: var(--color-gray-50);
		padding-left: 20px;
	}

	button {
		background-color: var(--color-primary);
		border: 2px solid var(--color-primary);
		border-radius: 8px;
		height: 40px;
		width: 106px;
		color: var(--color-white);

		margin-bottom: 23px;
		margin-left: 20px;
	}
	@media (min-width: 1024px) {
		width: max-content;
		width: auto;
		min-width: max-content;

		/* flex-basis: ${({ showCart }) => (showCart ? `30.3333%` : `32.3333%`)}; */
		/* ! A minha condição não está funcionando... Pq??? Ela não está sendo atualizadaa */
		flex-basis: ${({ showCart }) => (showCart ? `30.3333%` : `30.3333%`)};
	}
	@media (min-width: 1440px) {
		flex-grow: 0;
		flex-basis: ${({ showCart }) => (showCart ? `33.333%` : `23.875%`)};
	}
`;

export default Item;
