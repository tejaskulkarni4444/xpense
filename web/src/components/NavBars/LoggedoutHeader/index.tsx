import { Image, Flex, Button, HStack, chakra } from '@chakra-ui/react';
import Link from 'next/link';
// import {Link} from 'react-scroll'
// import data from './header.data';

const CTA = "Get Started"
export default function LoggedOutHeader() {
  return (
    // <chakra.header id="header">
      <Flex
        w="100%"
        px="3"
        py="3"
        align="center"
        justify="space-between"
        sx={{
          // background: '#a844ff',
          position: 'absolute',
          top: '0'
        }}
      >
        <Image sx={{ borderRadius: '15px'}} src='https://placekitten.com/100/100' h="50px" />

        <HStack as="nav" spacing="5">
          {['one', 'two', 'three'].map((item, i) => (
            <Link key={i} href={item}>
              <Button variant="nav"> {item} </Button>
            </Link>
          ))}
        </HStack>

        <HStack>
          <Button>
            {CTA}
          </Button>
        </HStack>

      </Flex>
    // </chakra.header>
  );
}