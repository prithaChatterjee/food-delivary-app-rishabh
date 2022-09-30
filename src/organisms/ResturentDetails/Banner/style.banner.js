import styled from 'styled-components'

export const StyleBanner = styled.section`
    display: grid;
    gap: 10px;
    grid-template-columns: auto auto auto auto auto;
    & figure {
        overflow: hidden;
        cursor: pointer;
        &:first-child {
            grid-column: 1 / span 3;
            grid-row: 1 / span 2;
        }
    & img:hover{
        transform: scale(1.05);
        filter: brightness(1.05);
        object-fit: cover;
    }
}
`
