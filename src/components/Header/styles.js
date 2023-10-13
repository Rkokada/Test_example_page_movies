import styled from "styled-components";

export const TopHeader = styled.div`
    background:#4c16c9;
    height:56px;
    width: 100vw;
    display:flex;
    align-items:center;
    padding: 0 18px;
    justify-content:space-between;

    p {
        color: #ffffff
    }
`

export const Container = styled.div`
    width:100%;
    max-width:1008px;
    display:flex;
    justify-content: space-between;
    flex-direction:column;
    margin:40px 0;
    border-bottom: 2px solid #f0f0f0;

.ave-values{
    display:flex;
    justify-content:space-between;

    input{
        height:40px;
        width:200px;
        border: 2px solid #f0f0f0;
        padding-left:5px;
    }
}
`
