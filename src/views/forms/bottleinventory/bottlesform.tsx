import React from 'react'
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

function Bottlesform() {
    const theme = useTheme();

  return (
   <>
       <Stack spacing={4}>
                            <Box>
                                <Stack spacing={2}>
                                    <Grid item>
                                        <Typography variant="h4"> Bottles</Typography>
                                    </Grid>
                                    <Grid container xs={12} columnSpacing={2}>
                                        <Grid item xs={2}>
                                            <Box sx={{  background: theme.palette.grey[200] , alignItems: 'center', borderRadius: 2, p: 1}}>
                                                <Typography  variant="h2" textAlign='center'>
                                                    -
                                                </Typography >
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Box> <TextField  fullWidth sx={{py: 1}}> </TextField> </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                        <Box sx={{  background: theme.palette.grey[200] , alignItems: 'center', borderRadius: 2, p: 1}}>
                                                <Typography  variant="h2" textAlign='center'>
                                                    +
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container xs={12} columnSpacing={2}>
                                        <Grid item xs={12}>
                                            <Stack direction='row' spacing={2}>
                                                <Button size="small" fullWidth variant="outlined" color="secondary">
                                                    +0.1
                                                    </Button>
                                                    <Button size="small" fullWidth variant="outlined" color="secondary">
                                                    +0.25
                                                    </Button>
                                                    <Button size="small" fullWidth variant="outlined" color="secondary">
                                                    +0.5
                                                    </Button>
                                                    <Button size="small" fullWidth variant="outlined" color="secondary">
                                                    +6
                                                    </Button>
                                                    <Button size="small" fullWidth variant="outlined" color="secondary">
                                                    +12
                                                    </Button>
                                                   
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Stack>

                            </Box>
                            <Box>
                                <Stack spacing={2}>
                                    <Grid item>
                                        <Typography variant="h4"> Cases</Typography>
                                    </Grid>
                                    <Grid container xs={12} columnSpacing={2}>
                                        <Grid item xs={2}>
                                            <Box sx={{  background: theme.palette.grey[200] , alignItems: 'center', borderRadius: 2, p: 1}}>
                                                <Typography  variant="h2" textAlign='center'>
                                                    -
                                                </Typography >
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Box> <TextField  fullWidth sx={{py: 1}}> </TextField> </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                        <Box sx={{  background: theme.palette.grey[200] , alignItems: 'center', borderRadius: 2, p: 1}}>
                                                <Typography  variant="h2" textAlign='center'>
                                                    +
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container xs={12} columnSpacing={2}>
                                        <Grid item xs={12}>
                                            <Stack direction='row' spacing={2}>
                                                <Button size="small" fullWidth variant="outlined" color="secondary">
                                                    +5
                                                    </Button>
                                                    <Button size="small" fullWidth variant="outlined" color="secondary">
                                                    +6
                                                    </Button>
                                                    <Button size="small" fullWidth variant="outlined" color="secondary">
                                                    +10
                                                    </Button>
                                                    <Button size="small" fullWidth variant="outlined" color="secondary">
                                                    +12
                                                    </Button>
                                                  
                                                   
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Stack>

                            </Box>
                        </Stack>
   </>
  )
}

export default Bottlesform