import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import ProjectsData from '../../projectsdata';
import {
    ContainerProjects,
    SubContainerProjects,
    SubTitle,
    ButtonSeeMore,
    TextSeeMore,
    ContainerAllProjects,
    Project,
    BoxImage,
    Image,
    ContainerTitle,
    SubContainerTitle,
    TitleProject,
    Description,
    Tools,
    ModalOverlay,
    ModalContent,
    ModalClose,
    ModalImage,
    ModalTitle,
    ModalDesc,
    ModalTools,
    ModalGithub,
    fadeIn
} from './styles';

import Media from 'react-media';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import Downloader from '../../assets/imgs/projects/downloader.png';

interface Props {
    toggleTheme(): void;
}

// Styled Modal

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    if (!project) return null;
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalClose onClick={onClose} title="Fechar">×</ModalClose>
                <ModalImage src={project.img} alt={project.title} />
                <ModalTitle>{project.title}</ModalTitle>
                <ModalDesc>{project.description}</ModalDesc>
                <ModalTools><b>Ferramentas:</b> {project.tool}</ModalTools>   
                {project.details && (
                    <ModalDesc style={{ marginTop: '1rem', color: '#fff', fontWeight: 500 }}>
                        <b>Descrição detalhada:</b> {project.details}
                    </ModalDesc>
                )}
                <ModalGithub href={project.github} target="_blank" rel="noopener noreferrer">Ver no GitHub</ModalGithub>
            </ModalContent>
        </ModalOverlay>
    );
};

const Projects: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    AOS.init();
    const [controller, setController] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    function seeMore() {
        setController(!controller);
    }
    let teste;

    if (controller == true) {
        teste = Infinity;
    } else {
        teste = 3
    }

    return (
        <ContainerProjects id="projetos">
            <SubContainerProjects>
                <SubTitle>
                    Projetos pessoais
                </SubTitle>

                <ButtonSeeMore onClick={seeMore}>
                    <TextSeeMore>{controller ? "Ver menos" : "Ver mais"}</TextSeeMore>
                </ButtonSeeMore>
            </SubContainerProjects>

            <ContainerAllProjects>
                {ProjectsData.slice(0, teste).map((item) => {
                    const { id, img, title, description, tool, github } = item;
                    return (
                        <Project key={id} data-aos="zoom-in" onClick={() => setSelectedProject(item)} style={{ cursor: 'pointer' }}>
                            <BoxImage>
                                <Image src={img} />
                            </BoxImage>

                            <ContainerTitle>
                                <TitleProject>{title}</TitleProject>
                                <SubContainerTitle>
                                    <a target="blank" href={github}><AiFillGithub color={colors.text} size={25} /></a>
                                </SubContainerTitle>
                            </ContainerTitle>

                            <Description>{description}</Description>
                            <Tools>{tool}</Tools>
                        </Project>
                    )
                })}
            </ContainerAllProjects>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </ContainerProjects>
    );
}

export default Projects;

