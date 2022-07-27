import styled from "styled-components";

const Container = styled.li`
	display: grid;
	grid-template-columns: 80px auto 60px;
	grid-template-areas:
		"figure productName removeBtn"
		"figure productCategory none"
		"figure productPrice none"
		"figure amount none";

	width: 100%;
	height: 80px;
	figure {
		grid-area: figure;
		align-self: center;
		border-radius: 8px;
		width: 70px;
		height: 70px;
		background-color: var(--color-gray-20);
		img {
			max-width: 100%;
		}
	}

	h3 {
		grid-area: productName;
		font-style: normal;
		font-weight: 700;
		font-size: 0.8rem;
		color: var(--color-gray-100);
		align-self: center;
		height: 20px;
	}

	.item__category {
		grid-area: productCategory;
		font-weight: 400;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-gray-50);
	}
	.item__price {
		grid-area: productPrice;
		font-weight: 400;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-gray-50);
	}

	.button__remove {
		grid-area: removeBtn;
		background-color: transparent;
		border-color: transparent;
		text-align: end;
		color: var(--color-gray-50);
		font-family: "Inter";
		font-style: normal;
		font-weight: 500;
		font-size: 0.7rem;
		line-height: 1rem;
		height: 20px;
		align-self: center;
	}

	.buttons__amount {
		grid-area: amount;
		display: flex;
		flex-direction: row;
		gap: 5px;
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 15px;
			background-color: var(--color-gray-30);
			color: var(--color-gray-100);
			border-color: transparent;
			border-radius: 50%;
			width: 15px;
			font-weight: 700;
		}
		p {
			font-size: 0.8rem;
			color: var(--color-gray-100);
		}
	}
`;

export default Container;
