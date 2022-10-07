import styled from "styled-components";

export const StyleDishes = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;
    & > div{
        display: flex;
        gap: 10px;
        align-items: flex-start;
        & > div.itemDetails h3, & > div.itemDetails p, & > div.itemDetails div{
            margin-bottom: 0.375rem
<<<<<<< HEAD
        };
        & > div.numbering{
            color: green
        }
    };
    & > div:last-child{
        flex-direction: column;
        align-items: flex-end;
=======
        }
>>>>>>> 26325bf54b52688035fb05d2998724b00a3581a0
    }
`
