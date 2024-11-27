import { Box, Divider, Flex, Image, Spacer, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";



const Banner = () => {  

    return (
        <Flex alignItems='center' p={5}>
            <Divider orientation='vertical' borderColor={"#E1E2E3"} h={"200px"} />
            <Box h='100%' w="300px" opacity={.9} marginLeft={10} fontSize={"1.525rem"} marginRight={20}>
                Knows a little about everything that really matters
            </Box>


            <Stack boxSize='80px' direction={"row"} w={"100%"}>

                <Image src="images/js.png" alt='Javascript' />
                <Spacer />
                <Image src="images/React.png" alt='React' />
                <Spacer />
                <Image src="images/Angular.png" alt='Angular' />
                <Spacer />
                <Image src="images/java.png" alt='Java' />
                <Spacer />
                <Image src="images/postgree.png" alt='Postgree' />
                <Spacer />
                <Image src="images/C.png" alt='C' marginRight={5} />
            </Stack>
            <Divider orientation='vertical' borderColor={"#E1E2E3"} h={"200px"} />
        </Flex>
    );
}

export default Banner;