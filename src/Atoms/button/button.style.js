import styled from 'styled-components';

export const Button = styled.button`
  width: ${props => props.fullWidth ? "100%" : "auto"};
  text-transform: uppercase;
  font-size: ${props => props.fontSize || "15px"};
  cursor: pointer;
  color: ${props => props.variant !== "contained" ? props.color || "palevioletred" : "white"};
  padding: 0.375rem 0.75rem;
  background: ${props => props.variant === "contained" ? props.color || "palevioletred"
    : "transparent"};
  border: ${props => props.variant === "outlined" ? `1px solid ${props.color}` ||
    "palevioletred" : `none`};
  border-radius: 10px;
  position: relative;
  overflow:hidden;
  transition: color 0.5s; 
  &::before{
    width: 100%;
    background: ${props => props.color || "palevioletred"};
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    right: 0;
    bottom: 0;
    visibility: hidden;
    z-index:-1;
    transition: visibility 0.5s, left 0.5s; 
  };
  &:hover {
    color: ${props => props.variant === "outlined" && "#ffffff"};
    box-shadow: ${props => props.variant === "contained" &&
    `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`};
    &::before{
        left: ${props => props.variant === "outlined" && "0"};
        visibility: ${props => props.variant === "outlined" && "visible"};
    }
  }
`;

export const StyleIconButton = styled(Button)`
  font-size: ${props => props.fontSize || "20px"};
  color: ${props => props.color || "black"};
`;