import React, {useEffect, useState} from "react"
import styled from 'styled-components'
import {useHistory} from "react-router"
import Introduction from "../../components/introduction/introduction"
import ProjectCard from "../../components/projectCard/projectCard"

const ProjectsAbout = () => {
    const [Laboratory, setLaboratory] = useState([])
    const history = useHistory()

    const title = '2022.1'
    const contentList = ['Clique em "Conheça a nossa equipe" e faça a sua inscrição para participar de um dos projetos']

    const handleClick = (value) => {
        history.push(`/projeto/${value}`)
    };

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(
                `https://raw.githubusercontent.com/MateusCastro2203/jsonRapositorys/master/animaflix/jsonProjetos.json`
            ).then((response) => response.json())
            setLaboratory(result)
        }

        fetchData()
    }, [])

    const Content = styled.div`
      background: linear-gradient(to right, #df735d, #f4d0c9);
    `

    const ProjectBox = styled.div`
      border-bottom: rgba(0, 0, 0, 0.20) solid 1px;
    `

    const ProjectTitle = styled.div`
      font-family: 'Ubuntu', sans-serif;
      background: #FFF;
      color: #c0663d;
      font-size: 1.5rem;
      padding: 1rem 3rem;
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      font-weight: 400;
    `

    return (
        <Content>
            <Introduction title={title} contentList={contentList}/>
            <ProjectTitle>Projetos</ProjectTitle>
            {Laboratory.map((value) => (
                <ProjectBox>
                    <ProjectCard project={value} handleClick={handleClick}/>
                </ProjectBox>
            ))}
        </Content>
    )
}

export default ProjectsAbout
