import { Grid, GridItem } from "@chakra-ui/react";
import { TravelTypes } from "./TravelTypes";

export default function Caracteristicas(){
    return(
        <Grid 
            templateColumns={['1fr 1fr','1fr 1fr','1fr 1fr','repeat(5, 1fr)',]}
            w='100%'
            justifyContent='space-between'
            alignItems='center'
            mt={['10', '32']}
            mx='auto'
            maxW='1160px'
            gap={['1', '5']}
        
        >
            <GridItem>
                <TravelTypes icon='cocktail' text='vida noturna' />
            </GridItem>
            <GridItem>
                <TravelTypes icon='surf' text='praia' />
            </GridItem>
            <GridItem>
                <TravelTypes icon='building' text='moderno' />
            </GridItem>
            <GridItem>
                <TravelTypes icon='museum' text='clássico' />
            </GridItem>
            <GridItem colSpan={[2,2,2,1]}>
                <TravelTypes icon='earth' text='e mais...' />
            </GridItem>
        </Grid>
    )
}