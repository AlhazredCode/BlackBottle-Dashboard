'use client';

import { useState } from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import MainCard from "components/MainCard";
import { Main } from "next/document";
import { useTheme } from "@mui/material";
import {Button} from "@mui/material";
import {CardMedia} from "@mui/material";
import Bottlesform from "./bottlesform";
import Image from "next/image";
const Bottle = '/assets/InventoryBottle.svg';
export default function BottleInventory() {



    return (

        <>
            <MainCard>
                <Grid container spacing={4} >
                    <Grid item xs={8}>
                    <Bottlesform/>
                    </Grid>
                    <Grid item xs={4}>
                    <Box   sx={{ '.flagImg': { objectFit: 'contain' , justifySelf: 'center'} ,m:2, position: 'relative', height: 320,  alignContent: 'center'}}>
      
      <Image className="flagImg" src={Bottle} alt='image'  fill={true}    />

</Box>                   
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12} sx={{px: 2}}><Button fullWidth size="large" color="secondary" variant='contained' > Update inventory</Button></Grid>
                    </Grid>


                </Grid>
            </MainCard>
        </>
    );

}