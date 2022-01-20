import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { BoxLoading } from 'react-loadingg';
import Link from '@mui/material/Link';
import { useRouter } from "next/router";
import Paper from '@mui/material/Paper';
import { Message } from 'rsuite';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head'
import { loginUser } from "../../state/actions/userLoginAction";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://quickfix-si.com/">
                Quickfix
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = React.useState({
        phone: '',
        password: '',
    });
    const [loginStatus, setLoginStatus] = React.useState({
        error: '',
        loading: false,
    });

    const loginSelector = useSelector(state => state.usersState);
    const { errorMessage, isLoading } = loginSelector;
    console.log(errorMessage);

    const handleUserLogin = e => {
        e.preventDefault();
        setLoginStatus(status => ({
            ...status,
            loading: true,
            error: '',
        }));
        e.preventDefault();
        const { phone, password } = loginDetails;

        const bodyData = {
            phone,
            password,
        };
        if (bodyData.phone !== "" && bodyData.password !== "") {
            loginUser(dispatch, bodyData).then(response => {
                console.log(response);
                if (response.status === 200) router.push('/dashboard/home', undefined, { shallow: true });
                setLoginStatus({
                    loading: false,
                    error: ''
                })
            });
        } else {
            setLoginStatus({
                loading: false,
                error: 'Make sure all fileld are filled'
            })
        }

    };

    const handleInputChange = e => {
        e.persist();
        setLoginDetails(details => ({
            ...details,
            [e.target.name]: e.target.value,
        }));
    };

    React.useEffect(() => {
        try {
            const user = localStorage?.currentUser && JSON.parse(localStorage?.currentUser);
            if (user) router.push('/dashboard/home');
        } catch (error) {
            console.log(error)
        }
    }, [dispatch, router]);
    return (
        <div>
            <Head>
                <title>Quickfix Admin</title>
            </Head>
            <main>
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={8}
                            sx={{
                                backgroundImage: `url(https://website-assets-fd.freshworks.com/attachments/ckdr5nfa8009u93fz534ft287-fsm-repair3.one-half.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <Box sx={{ ml: 5, color: '#1976D2', '@media only screen and (max-width: 600px)': { display: 'none' } }}>
                                <h3>Quickfix Admin</h3>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: '#1796D2' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    <center>
                                        Welcome to Quickfix Admin! 👋 <br />
                                        Sign in
                                    </center>
                                </Typography><br />
                                {isLoading ? (<BoxLoading />) : ""}
                                {errorMessage && (
                                    <Message closable style={{ width: "100%" }} type="error">{errorMessage}</Message>
                                )}
                                {loginStatus?.loading && (
                                    <BoxLoading />
                                )}
                                {loginStatus?.error && (
                                    <Message closable style={{ width: "100%" }} type="error">{loginStatus?.error}</Message>
                                )}
                                <Box component="form" noValidate onSubmit={handleUserLogin} sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone Number"
                                        name="phone"
                                        autoComplete="phone"
                                        autoFocus
                                        value={loginDetails.email}
                                        onChange={handleInputChange}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={loginDetails.password}
                                        onChange={handleInputChange}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                    <Copyright sx={{ mt: 5 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </main>
        </div>
    )
}
