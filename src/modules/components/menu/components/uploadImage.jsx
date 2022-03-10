import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import {Card, Button} from 'react-bootstrap'

export const UploadImage = ({handleImage}) => {

    const [profileImg, setProfileImg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')

    const imageHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])

        let base64 = profileImg
        base64 = base64.replace('data:image/jpeg;base64,', '') || base64.replace('data:image/png;base64,', '')
        handleImage(base64)
    }

    const Input = styled.input`
      color: #fff;
      background-color: transparent;
      max-width: 100%;
    `

    return (<Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={profileImg}/>
        <Card.Body>
            <Card.Title>Adicione o logo</Card.Title>
            <Card.Text>
                Para uma melhor experiência adicione uma imagem sem fundo.
            </Card.Text>
            <Button style={{maxWidth: '100%'}} variant="primary">
                <Input type="file" accept="image/jpeg, image/png" name="image-upload" id="input" onChange={imageHandler}/>
            </Button>
        </Card.Body>
    </Card>)
}

export default UploadImage