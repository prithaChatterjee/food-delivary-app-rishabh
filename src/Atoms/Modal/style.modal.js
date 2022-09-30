import styled from "styled-components";

export const StyleModal = styled.div`
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.5);
        max-height: 100vh;
        & > section {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            border-radius: 10px;
            position: fixed;
            background-color: white
        }
`
