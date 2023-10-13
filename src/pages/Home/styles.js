import styled from "styled-components";

export const ContainerH = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContainerItems = styled.div`
    display: grid;
    grid-template-columns:repeat(4, 240px);
    gap:16px;
`