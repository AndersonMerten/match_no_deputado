
import { Menubar } from 'primereact/menubar';
import React from 'react'; 
import "primereact/resources/themes/viva-dark/theme.css";
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

const Header = () =>{

    const itens = [
        {
            label: "hello",
            icon: "pi pi-home"
        },
        {
            label: "hello",
            icon: "pi pi-star"
        },
        {
            label: "hello",
            icon: "pi pi-search"
        },
        {
            label: "hello",
            icon: "pi pi-bolt"
        },
        {
            label: "hello",
            icon: "pi pi-server"
        },
    ];

    const start = <img src="images/logo_olho_branco.png" alt='logo' height="70" className="mr-2"/>

    const end =<Button label="Mais sobre o projeto" severity="secondary" raised />

    return(
        <div className='card'>  
        <Menubar model={itens} start={start} end={end}/>


       {/*  <Flex  h={100} p={5}  alignItems='center' marginBottom={"10px"}>
            <Divider  orientation='vertical' borderColor={"#E1E2E3"} h={"100px"} />
                <Box boxSize='100'marginLeft={5}marginTop={5}>
                    <Image src="images/logo2.png" alt='logo'/>
                </Box>
                <Spacer/>
                <Stack direction={"row"} spacing={10} color={"#888888"}>
                    <Link href="#"  _hover={{ textDecoration: "none" }}> Link1 <PhoneIcon /> </Link>
                    <Link href="#" _hover={{ textDecoration: "none" }}> Link2 <AddIcon /> </Link>
                    <Link href="#" _hover={{ textDecoration: "none" }}> Link3 <WarningIcon /> </Link>
                    <Link href="#" _hover={{ textDecoration: "none" }}> Link4 <BellIcon /> </Link>
                </Stack>
                <Spacer/>
                <Button marginRight={5} colorScheme={"blackAlpha"}>About me</Button>
            <Divider orientation='vertical' borderColor={"#E1E2E3"} h={"100px"}/>
        </Flex >*/}
        </div>
    )
}

export default Header;