import styled from "styled-components";

export const ContainerC = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 5px;
    
    .wrapper-image-logo{
        background-color:#abbbcc;
        height:160px;
        width:100%;
        display: flex;
        justify-content:center;
        align-items:center;
        border-radius:5px 5px 0 0;
    }
    .container-items{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        width:100%;
        padding:20px; 
        
        .wrapper-items{
            h3 {
                font-size:18px;
                font-weight:600;
                margin-bottom:8px;
                height:54px;
            }
        }

        .wrapper-award{
           display:flex;
           align-items:center;
           justify-content:space-between;
           margin:14px;
           
           p{
            font-size:14px;
           }
        }
        .wrapper-budget{
            display:flex;
            justify-content:center;
            gap:40px;

            h4{
                font-weight:600;
            }
        }
    }



`