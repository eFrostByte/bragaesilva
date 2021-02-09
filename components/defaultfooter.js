import styled from 'styled-components';
const Footer = styled.footer`
    margin-top: 40px;
    width: 100%;
    background-color: #1c2626;
    height: 200px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin: 20px;
        font-family: 'Space Mono', monospace;
        font-size: 1.5rem;
    }
`
export default function DefaultFooter(){
    return(
        <div>
            <Footer>
                <p>Criado por Vinícius Braga e Silva</p>
                <p>Criado por Vinícius Braga e Silva</p>
                <p>Criado por Vinícius Braga e Silva</p>
            </Footer>
        </div>
    )
}