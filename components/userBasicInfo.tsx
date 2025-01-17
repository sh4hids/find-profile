import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { UseAppSelector } from '../store';
import { getUserState } from '../store/user/basicInfo';

const UserBasicInfo = () => {
    const {
        name = '',
        email = '',
        mobile = '',
        country = '',
        profilePic = '',
        dob = '',
    } = UseAppSelector(getUserState);

    return (
        <Box mb={4} mt={4}>
            <Paper elevation={3} sx={{ padding: '10px' }}>
                <Typography variant='h5' py={1}>
                    About
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12}>
                        <Typography variant='body1' mb={1}>
                            <span>Name:</span> <span>{name ? name : '-'}</span>
                        </Typography>
                        <Typography variant='body1' mb={1}>
                            <span>Email:</span> <span>{email ? email : '-'}</span>
                        </Typography>
                        <Typography variant='body1' mb={1}>
                            <span>Mobile:</span> <span>{mobile ? mobile : '-'}</span>
                        </Typography>
                        <Typography variant='body1' mb={1}>
                            <span>Country:</span> <span>{country ? country : '-'}</span>
                        </Typography>
                        <Typography variant='body1' mb={1}>
                            <span>Date of Birth:</span> <span>{dob ? dob : '-'}</span>
                        </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img src={profilePic} width={150} height={150} />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default UserBasicInfo;
