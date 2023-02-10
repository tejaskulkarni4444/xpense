import { Container, Text } from '@chakra-ui/react'
import { StyledBanner } from './styles'

export default function Banner() {
    return (
        <StyledBanner>
            <Container>
                <Text fontSize='3xl' as='b'>Xpense</Text><br />
                <Text fontSize='1xl' as='b'>The all in once Finance Application</Text>
            </Container>
        </StyledBanner>
    )
}
