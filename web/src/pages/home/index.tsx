import Banner from '@/components/Banner'
import LoggedInHeader from '@/components/NavBars/LoggedInHeader'
import LoggedOutHeader from '@/components/NavBars/LoggedoutHeader'
import { Card, Container, Flex } from '@chakra-ui/react'

export default function HomePage() {
    return (
        <Container maxW='100%' height='100vh' padding='0'>
            <LoggedOutHeader/>
            <Banner />
            <Container background='#000'>
                <Flex>
                    <Card>
                        Card One
                    </Card>
                    <Card>
                        Card Two
                    </Card>
                    <Card>
                        Card Three
                    </Card>
                </Flex>
            </Container>
        </Container>
    )
}
