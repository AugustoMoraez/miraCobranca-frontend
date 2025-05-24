import styled from 'styled-components';

type Prop = {
	isOpen: boolean;
};
export const Content = styled.div`
    background-color: #0A4634;
	height: 100vh;
`;
export const Container = styled.aside<Prop>`
	width: ${({ isOpen }) => (isOpen ? '220px' : '60px')};
	background-color: #0A4634;
	color: white;
	transition: width 0.3s ease;
	overflow: hidden;
	flex-shrink: 0;
`;

export const ToggleButton = styled.button<Prop>`

    width: ${({ isOpen }) => (isOpen ? '220px' : '60px')};
    transition: ease-in-out 0.2s;
	background-color: #0A4634;
	color: white;
	border: none;
	padding: 10px;
	cursor: pointer;
`;

export const Menu = styled.ul`
	list-style: none;
	padding: 0;
	margin: 20px 0 0 0;
`;

export const MenuItem = styled.li`
	a {
		display: flex;
		align-items: center;
		padding: 12px 16px;
		color: white;
		text-decoration: none;
		transition: background 0.2s ease;

		&:hover {
			background-color: #087354;
		}

		&.active {
			background-color: #06543d;
		}
	}
`;

export const IconWrapper = styled.span`
	margin-right: 12px;
	display: flex;
	align-items: center;
`;

export const MenuText = styled.span`
	font-size: 16px;
	white-space: nowrap;
`;
