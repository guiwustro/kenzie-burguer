import styled from "styled-components";

const Container = styled.div`
	display: flex;
	height: 60px;
	border: 2px solid var(--color-gray-50);
	border-radius: 8px;
	margin-top: 8px;
	max-width: 382px;
	width: 280px;
	background-color: var(--color-white);
	form {
		height: 100%;
		max-width: 382px;
		display: flex;
		justify-content: space-between;
		padding: 12px;
		align-items: center;
		min-width: 280px;
	}
	input {
		border: none;
		min-width: 120px;
		padding-left: 4px;
		font-size: 1rem;
		color: var(--color-gray-100);
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
		height: 40px;
		font-size: 0.875rem;
	}
	button:hover {
		background-color: var(--color-primary-50);
	}
	@media (min-width: 425px) {
		min-width: 350px;
		form {
			min-width: 350px;
		}
	}
	@media (min-width: 768px) {
		margin-top: 0px;
		padding: 0px;
	}
`;

export default Container;
