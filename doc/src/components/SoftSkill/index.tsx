import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerAbout, SubtitleContainer, SubTitle, ContainerTech, BoxTech, TextTech } from './styles';

import SoftSkillData from '../../softskill';

import photo from '../../assets/photo.png';

import { FiArrowRight } from "react-icons/fi";
import { ImRadioChecked } from "react-icons/im";

interface Props {
    toggleTheme(): void;
}

const Softskill: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout>
            <SubtitleContainer>
                <SubTitle>
                    Soft Skills
                </SubTitle>
            </SubtitleContainer>
            <ContainerTech>
                {SoftSkillData.map((item)=>{
                    const { id, name } = item;
                    return(
                        <BoxTech key={id}>
                            <ImRadioChecked color="#37D892" size={30}/>
                            <TextTech>{name}</TextTech>
                        </BoxTech>
                    );
                })}        
            </ContainerTech>
        </ContainerAbout>
    );
}

export default Softskill;