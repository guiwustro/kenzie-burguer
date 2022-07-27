import styled from "styled-components";
import Sun from "../../img/sun.svg";
import Moon from "../../img/moon.svg";

const Toogle = styled.div`
	/* Inspiração para o botão dark-mode... https://www.instagram.com/p/CgMOk9lF8A3/
 */

	box-shadow: -8px -8px 15px #ffffff 8px 8px 25px rgba(0, 0, 0, 0.15);
	border-radius: 30px;
	justify-self: flex-end;

	#toggle {
		display: none;
	}
	.switch {
		position: relative;
		display: flex;
		align-items: center;
		width: 70px;
		height: 28px;
		outline: 5px solid #eaeef9;
		background-color: #ffffff;
		cursor: pointer;
		border-radius: inherit;
		overflow: hidden;
	}
	.switch::before {
		content: "";
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to right, #27ae60, #93d7af, #afd9c0);
		/* background-image: linear-gradient(to right, #e0c3c3, #ce4747, #6f4e4e); */
		opacity: 0;
		transition: opacity 0.5s;
	}
	&& > img {
		width: 20px;
		height: 20px;
	}
	.switch::after {
		content: "";
		background-image: url(${Moon});
		background-position: center;
		background-repeat: no-repeat;
		display: grid;
		place-items: center;
		position: absolute;
		left: 0;
		transform: translateX(5px);
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background-color: #eaeef0;
		transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	#toggle:checked ~ .switch::before {
		opacity: 1;
	}
	#toggle:checked ~ .switch::after {
		content: "";
		background-image: url(${Sun});
		transform: translateX(42px);
	}
`;

export default Toogle;
