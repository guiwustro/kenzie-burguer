import styled from "styled-components";

const Container = styled.div`
	display: flex;
	grid-area: search;
	justify-self: center;
	height: 50px;
	border: 2px solid var(--color-gray-50);
	border-radius: 8px;
	margin-top: 8px;
	max-width: 382px;
	width: 280px;
	background-color: var(--color-white);
	max-width: 600px;

	form {
		height: 100%;
		max-width: 382px;
		min-width: 280px;
		max-width: 600px;
		display: flex;
		justify-content: space-between;
		padding: 12px;
		align-items: center;
	}
	input {
		border: none;
		min-width: 120px;
		padding-left: 4px;
		font-size: 1rem;
		color: var(--color-gray-100);
		background-color: var(--color-white);
		max-width: 65%;
	}
	input::placeholder {
		font-size: 1rem;
		color: var(--color-gray-20);
	}
	button {
		background-color: var(--color-primary);
		color: var(--color-white);
		padding: 11.5px 20px;
		display: flex;
		align-items: center;
		border: var(--color-primary);
		border-radius: 8px;
		height: 35px;
		font-size: 0.875rem;
	}
	button:hover {
		background-color: var(--color-primary-50);
	}
	@media (min-width: 425px) {
		width: 100%;

		form {
			min-width: 350px;
			width: 100%;
		}
	}
	@media (min-width: 768px) {
		margin-top: 0px;
		padding: 0px;
	}
`;

export default Container;
