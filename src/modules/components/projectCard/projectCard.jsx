import {React} from 'react'
import styled from 'styled-components'

const ProjectCard = ({project, handleClick}) => {

    const Section = styled.section`
      font-family: 'Ubuntu', sans-serif;
      padding: 1.2rem 0 1.5rem;
      color: #421e16;
    `

    const TopContent = styled.div`
      max-width: 90%;
      padding: 0 1.6rem;
      margin: 0 auto;
    `

    const Cta = styled.div`
      display: flex;
      //box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.25);
      border-radius: 11px;
      max-height: 10rem;

      overflow: hidden;
    `

    const CtaText = styled.div`
      padding: 1rem 1rem;
    `

    const Text = styled.div`
      font-size: 0.5rem;
      line-height: 1.8;
    `

    const Title = styled.h1`
      font-weight: 700;
      letter-spacing: -0.5px;
      font-size: 1rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    `

    const CtaButton = styled.button`
      font-family: 'Ubuntu', sans-serif;
      color: #000;
      white-space: nowrap;
      font-size: 0.5rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: 50;
      
      align-self: center;
      justify-self: center;
      border: #000 solid 1px;
      transition: background-color 0.5s ease;
      
      background-color: transparent;
      border-radius: 0.3rem;
      padding: 0.2rem 2rem;
      width: 95%;

      &:hover {
        background-color: #e2826f;
      }
    `

    const CtaImg = styled.img`
      max-width: 20%;
      background-size: cover;
      background-position: center;
    `

    return (
        <Section>
            <TopContent>
                <Cta>
                    <CtaText>
                        <Title>
                            {project.title}
                        </Title>
                        <Text>{project.description}</Text>
                        <CtaButton onClick={() => handleClick(project.id)}>Conheça a Equipe</CtaButton>
                    </CtaText>
                    <CtaImg src={project.imgLink}/>
                </Cta>
            </TopContent>
        </Section>
    )
}

export default ProjectCard