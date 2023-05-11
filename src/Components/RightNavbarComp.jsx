import { Box, Button, FormControlLabel, Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
function RightNavbarComp() {
    return (
        <div>
            <Box sx={{ borderBottom: '1px solid #ccc', padding: '13px', display: 'flex', justifyContent: 'space-between' }}>
                <Typography fontWeight={600} fontSize={22}>Task List</Typography>
                <Stack direction='row' gap={1}>
                    <Button
                        size='small'
                        sx={{ borderColor: '#ccc', py: '6px', bgcolor: '#e65100', color: '#fff', px: '1px', fontSize: '12px' }}
                        startIcon={<AccessAlarmsIcon />}
                    >2</Button>
                    <FormControlLabel sx={{ border: '1px solid #ccc', borderRadius: '5px', mr: '1px', px: '7px' }} control={<Switch defaultChecked size='small' />} label={<Typography sx={{ textTransform: 'none', fontSize: '12px', }}>Show Completed Tasks</Typography>} labelPlacement="start" />

                    <Button
                        variant='outlined'
                        size='small'
                        sx={{ borderColor: '#ccc', p: '6px' }}
                    >
                        <AddRoadIcon sx={{ fontSize: '13px', mr: '5px', color: '#ccc' }} />
                        <Typography sx={{ fontSize: '12px', textTransform: 'none', color: "#000" }}>Everyone</Typography>
                        <KeyboardArrowDownIcon sx={{ fontSize: '15px', color: '#000', ml: '1rem' }} />
                    </Button>
                    <Button
                        variant='outlined'
                        size='small'
                        sx={{ borderColor: '#ccc', p: '6px' }}
                    >
                        <AddRoadIcon sx={{ fontSize: '13px', mr: '5px', color: '#ccc' }} />
                        <Typography sx={{ fontSize: '12px', textTransform: 'none', color: "#000" }}>Today</Typography>
                        <KeyboardArrowDownIcon sx={{ fontSize: '15px', color: '#000', ml: '1rem' }} />
                    </Button>
                    <Button
                        variant='outlined'
                        size='small'
                        sx={{ borderColor: '#ccc', p: '6px' }}
                    >
                        <AddRoadIcon sx={{ fontSize: '13px', mr: '5px', color: '#ccc' }} />
                        <Typography sx={{ fontSize: '12px', textTransform: 'none', color: "#000" }}>Filter Tasks</Typography>
                        <KeyboardArrowDownIcon sx={{ fontSize: '15px', color: '#000', ml: '1rem' }} />
                    </Button>
                </Stack>


                <Button startIcon={<AddIcon sx={{ fontSize: '13px' }} />} sx={{ bgcolor: '#009688', color: '#fff', p: '6px', px: "1rem", fontSize: '12px' }} size='small'>ADD TASK</Button>
            </Box>

        </div>

    )
}

export default RightNavbarComp