import styled, { keyframes } from "styled-components";
import "@fontsource/space-grotesk";

export const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(30px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const ContainerProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 150px 0px;
`;

export const SubContainerProjects = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 630px){    
        flex-direction: column;
        
        align-items: baseline;
    }
`;

export const SubTitle = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 40px;

    @media screen and (max-width: 468px){    
        font-size: 35px;
    }
`;

export const ButtonSeeMore = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.text};
    height: 30px;
    border-radius: 5px;

    &:hover, :focus{
        background-color: #37D89220;
        border: 1px solid #37D892;
    }
`;

export const TextSeeMore = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 15px;
`;

export const ContainerAllProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`;

export const Project = styled.div`
    display: flex;
    background: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.colors.shadow};
    flex-direction: column;
    border-radius: 20px;
`;

export const BoxImage = styled.div`
    display: flex;
    background: #E6E9F0;
    height: 200px;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
`;

export const Image = styled.img`
    display: flex;
    height: 70%;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`;

export const SubContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const TitleProject = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    font-size: 25px;
`;

export const Description = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.secundary};
    margin: 0 30px;
    text-align: justify;
    height: 175px;
    hyphens: auto;
    -webkit-hyphens: auto;
    word-spacing: -0.05em;
`;

export const Tools = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${props => props.theme.colors.secundary};
    margin: 20px 30px 30px 30px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: ${fadeIn} 0.2s ease;
`;

export const ModalContent = styled.div`
    background: #222;
    color: #fff;
    padding: 2.5rem 2rem 2rem 2rem;
    border-radius: 22px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    max-width: 650px;
    width: 98%;
    position: relative;
    animation: ${fadeIn} 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.25rem;
    @media (max-width: 800px) {
        padding: 1.2rem;
        max-width: 99vw;
        font-size: 1.1rem;
    }
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 12px;
    right: 16px;
    background: #444;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 1.3rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: #e74c3c;
    }
`;

export const ModalImage = styled.img`
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.12);
`;

export const ModalTitle = styled.h2`
    font-size: 2.2rem;
    margin: 0.7rem 0 0.3rem 0;
    text-align: center;
`;

export const ModalDesc = styled.p`
    font-size: 1.15rem;
    color: #ccc;
    text-align: center;
`;

export const ModalTools = styled.p`
    font-size: 1.1rem;
    color: #aaa;
    margin-bottom: 0.7rem;
`;

export const ModalGithub = styled.a`
    display: inline-block;
    background: #24292f;
    color: #fff;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    font-weight: 500;
    text-decoration: none;
    margin-top: 0.5rem;
    box-shadow: 0 2px 8px rgba(36,41,47,0.12);
    transition: background 0.2s;
    &:hover {
        background: #0366d6;
    }
`;

