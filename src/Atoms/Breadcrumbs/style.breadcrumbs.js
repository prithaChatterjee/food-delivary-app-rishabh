import styled from "styled-components";

export const StyleBreadcrumbs = styled.nav`
    & > a{
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
            &:not(:last-child){
            ::after{
            content:' ${props => props.separator || "/"} ';
            }
        }
    }
`
