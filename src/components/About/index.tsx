import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerAbout, Image, SubContainerAbout, SubTitle, Description, ContainerButtons, ContactButton, TextButton } from './styles';

import photo from '../../assets/eu.jpg';

import { FiArrowRight } from "react-icons/fi";
interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout id="sobre">
            <Image src={photo} alt="Pedro Henrique de Souza" />

            <SubContainerAbout>
                <SubTitle>
                    Sobre mim
                </SubTitle>

                <Description>
                    Comecei minha jornada na programação em 2022, quando me interessei por pyton no final do meu ensino médio, de lá pra cá descobri sou um apaixonado por tecnologia e por desenvolvimento de software.
                </Description>
                <Description>
                    Atualmente estou estudando Tecnologias como: React Native, C, Arduíno, Firebase entre outras tecnologias que uso para criar aplicações web e Back End de alto nível e valor.
                </Description>
                <Description>
                    Meu foco é aprender novas coisas e aprimorar ainda mais as habilidades que possuo, gosto sempre de estar em constante aprendizado e evoluindo dia após dia, e agregando muito valor.
                </Description>
                <Description>
                    Curiosidades: Eu pratico Kung-fu desde 2017 e sou faixa marrom, gosto de assistir e joga basquete, gosto muito de ler e meu livro favorito é Hobbit, atualmente estou com o hobby de fotografia com câmeras analógicas.
                </Description>
                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;