import API20241 from './assets/mock/API20241.jpeg';
import API20232 from './assets/mock/API20232.jpeg';
import API20231 from './assets/mock/API20231.jpeg';
import API20242 from './assets/mock/API20242.jpeg';
import PetLovers from './assets/mock/PetLovers.jpeg';
import Atlantis from './assets/mock/Atlantis.jpeg';
import AutoBots from './assets/mock/AutoBots.jpeg';
import Downloader from './assets/mock/Downloader.jpeg'
import EGS from './assets/mock/EGS.png'

const ProjectsData = [
    {
        "id": 1,
        "img": Downloader,
        "title": "Downloader",
        "description": "Projeto desenvolvido por mim, com o intuito de fazer download de arquivos mp3 e mp4 de várias plataformas, por enquanto está funcionando apenas para vídeos do YouTube mas futuramente estará em outras plataformas.",
        "tool": "Python · Flask · JavaScript",
        "github": "https://github.com/Pedryn/Downloader",
         "details": "Este projeto utiliza Flask para criar uma API que faz scraping de vídeos do YouTube, convertendo para mp3/mp4 e permitindo o download. Futuramente será expandido para outras plataformas e terá integração com uma interface web."
    },
    {
        "id": 2,
        "img": API20231,
        "title": "API - Covidinho",
        "description": "Projeto desenvolvido por mim e pela minha equipe em 2023 para a vanguarda, com o intuito de visualizar dados relacionados a Covid-19, seus efeitos e seus sintômas prolongados, ou Covid longa de acordo com a Organização Mundial da Saúde (OMS) .",
        "tool": "Flask · JavaScript · MySQL",
        "github": "https://github.com/Equipe-CodeLand/API-2023.1",
        "details": "Nosso projeto consiste em um site focado em dados relacionados a Covid-19, seus efeitos e seus sintômas prolongados, ou Covid longa de acordo com a Organização Mundial da Saúde (OMS). Este projeto é destinado à usuários jornalistas da rede Vanguarda com a necessidade de um site de fácil acesso à dados e informações sobre a Covid longa na região do Vale do Paraíba, visando criar novas matérias para o jornal."
    },
    {
        "id": 3,
        "img": API20232,
        "title": "API - CallNet",
        "description": "Projeto desenvolvido por mim e pela minha equipe em 2023 é uma empresa ficticia chamada CallNet, com o intuito de gerenciar chamadas de serviço de uma empresa de internet.",
        "tool": "React · TypeORM · MySQL",
        "github": "https://github.com/Equipe-CodeLand/API-2023.2",
        "details": "O sistema desenvolvido, chamado CallNet, é focado em fornecer auxílio aos problemas relacionados a Internet Fixa, e busca aprimorar o sistema de Gerenciamento de Chamadas de Serviço. Nosso objetivo é que nossos clientes tenham acesso à soluções de seus problemas sobre Internet, de forma mais rápida e eficaz."
    },
    {
        "id": 4,
        "img": API20242,
        "title": "API - TECSUS",
        "description": "Projeto desenvolvido por mim e pela minha equipe em 2024 para a Tecsus, com o intuito de visualizar dados emitidos de uma estação meterelógica e caso o dado seja alarmente, emitir um alerta para alertar a população e um guia para alunos do ensino médio aprenderem sobre como são feitas as mudanças climáticas.",
        "tool": "React · TypeScript · Arduíno · C · Firebase",
        "github": "https://github.com/Equipe-CodeLand/API-2024.1"
    },
    {
        "id": 5,
        "img": API20241,
        "title": "API - Youtan",
        "description": "Projeto desenvolvido por mim e pela minha equipe em 2024 para a vanguarda, com o intuito de gerenciar ativos da uma empresa. A plataforma deve conter informações detalhadas sobre ativos, cadastro e histórico de manutenções dos ativos e dashboard com indicativos relevantes sobre os ativos.",
        "tool": "React · TypeScript · Java",
        "github": "https://github.com/Equipe-CodeLand/API-2024.1"
    },
    {
        "id": 6,
        "img": PetLovers,
        "title": "Pet-Lover",
        "description": "Projeto desenvolvido por mim, o PetLovers é um sistema abrangente projetado para ajudar petshops na organização e gerenciamento de suas operações diárias. Desde o acompanhamento de clientes e animais de estimação até o controle de estoque e agendamento de serviços, o PetLovers visa facilitar a vida dos profissionais que trabalham no setor.",
        "tool": "React · TypeScript",
        "github": "https://github.com/Pedryn/Pet-Lovers"
    },
    {
        "id": 7,
        "img": Atlantis,
        "title": "Atlantis",
        "description": "Projeto desenvolvido por mim, O Sistema desenvolvido para o Atlantis é um sistema abrangente projetado para ajudar o Atlantis na organização e gerenciamento das suas operações diárias, gerenciando e criando clientes.",
        "tool": "React · TypeScript",
        "github": "https://github.com/Pedryn/Atlantis"
    },
    {
        "id": 8,
        "img": AutoBots,
        "title": "AutoBots",
        "description": "Projeto desenvolvido por mim, o Sistema desenvolvido para o AutoBots é um sistema projetado para gestão de lojas especializadas em manutenção veicular e vendas de autopeças.",
        "tool": "SpringBoot · Java",
        "github": "https://github.com/Pedryn/AutoBots"
    },
    {
        "id": 9,
        "img": EGS,
        "title": "EGS - Eco Green Shop",
        "description": "Projeto mobile desenvolvido por mim, o Sistema desenvolvido  chamado Eco Green Shop ou somente EGS é uma loja projetada para vendas de produtos sustentáveis. Com foco no mundo green, o EGS vende produtos Reciclados, Reutilizaveis, Artezanatos ou Biodegradaveis.",
        "tool": "React Native · TypeScript",
        "github": "https://github.com/Pedryn/EGS"
    }
]

export default ProjectsData;