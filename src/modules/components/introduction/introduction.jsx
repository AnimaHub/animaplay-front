import {React} from 'react'
import styled from 'styled-components'


const Introduction = ({title, contentList}) => {
    const Introduction = styled.div`
      font-family: 'Ubuntu', sans-serif;
      background: linear-gradient(to right, #f0804c, #a01745, #5d388d);
      padding: 2rem 1rem 3rem 1rem;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
    `

    const IntroductionTitle = styled.h1`
      font-weight: 500;
      font-size: 1.5rem;
      color: #FFF;
      text-transform: uppercase;
    `

    const ContentBox = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
    `

    const IntroductionContent = styled.span`
      font-size: 0.7rem;
      color: #FFF;
      display: inline-block;
    `

    return (
        <Introduction>
            <IntroductionTitle>{title}</IntroductionTitle>
            <ContentBox>
                {contentList.map((content) => (
                    <IntroductionContent>{content}</IntroductionContent>
                ))}
            </ContentBox>
        </Introduction>
    )
}

export default Introduction