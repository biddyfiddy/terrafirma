import React from "react";
import "./App.css";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import logo from './img/logo-nav.png';
import stock from './img/stock-kitchen.png';
import Grid from '@mui/material/Grid';
import {Divider} from '@mui/material';
import Box from '@mui/material/Box';
import "@fontsource/frank-ruhl-libre";
import "@fontsource/montserrat";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import CopyrightIcon from '@mui/icons-material/Copyright';

const ColorButton = styled(Button)(({theme}) => ({
    color: "#183244",
    borderColor: "#183244",
    letterSpacing: "3px",
    '&:hover': {
        color: "#CA9328",
        borderColor: "#CA9328",
    }
}));

const DarkColorButton = styled(Button)(({theme}) => ({
    borderColor: "#F8F8F8",
    color: "#F8F8F8",
    letterSpacing: "3px",
    '&:hover': {
        color: "#CA9328",
        borderColor: "#CA9328",
    }
}));

const SubmitButton = styled(Button)(({theme}) => ({
    backgroundColor: "#CA9328",
    color: "#F8F8F8",
    letterSpacing: "3px",
    fontFamily: "Montserrat",
    '&:hover': {
        backgroundColor: "#183244",
    }
}));

const InputText = styled(TextField)({
    "& .MuiFormLabel-root.MuiInputLabel-root": {
        color: "#F8F8F8"
    },
    "& .MuiInputBase-root": {
        color: "#F8F8F8"
    },
    "& .MuiFormLabel-root.Mui-disabled": {
        color: "#F8F8F8"
    },
    '& label.Mui-focused': {
        color: "#F8F8F8",
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: "#F8F8F8",
    },
    '& .MuiOutlinedInput-root': {
        color: '#F8F8F8',
        '& fieldset': {
            borderColor: "#F8F8F8",
        },
        '&:hover fieldset': {
            borderColor: "#F8F8F8",
        },
        '&.Mui-focused fieldset': {
            borderColor: "#F8F8F8",
        },
    },
});

const states = [
    { abrv: "AK", name: "Alaska"},
    { abrv: "AL", name: "Alabama"},
    { abrv: "AR", name: "Arkansas"},
    { abrv: "AZ", name: "Arizona"},
    { abrv: "CA", name: "California"},
    { abrv: "CO", name: "Colorado"},
    { abrv: "CT", name: "Connecticut"},
    { abrv: "DC", name: "District of Columbia"},
    { abrv: "DE", name: "Delaware"},
    { abrv: "FL", name: "Florida"},
    { abrv: "GA", name: "Georgia"},
    { abrv: "HI", name: "Hawaii"},
    { abrv: "IA", name: "Iowa"},
    { abrv: "ID", name: "Idaho"},
    { abrv: "IL", name: "Illinois"},
    { abrv: "IN", name: "Indiana"},
    { abrv: "KS", name: "Kansas"},
    { abrv: "KY", name: "Kentucky"},
    { abrv: "LA", name: "Louisiana"},
    { abrv: "MA", name: "Massachusetts"},
    { abrv: "MD", name: "Maryland"},
    { abrv: "ME", name: "Maine"},
    { abrv: "MI", name: "Michigan"},
    { abrv: "MN", name: "Minnesota"},
    { abrv: "MO", name: "Missouri"},
    { abrv: "MS", name: "Mississippi"},
    { abrv: "MT", name: "Montana"},
    { abrv: "NC", name: "North Carolina"},
    { abrv: "ND", name: "North Dakota"},
    { abrv: "NE", name: "Nebraska"},
    { abrv: "NH", name: "New Hampshire"},
    { abrv: "NJ", name: "New Jersey"},
    { abrv: "NM", name: "New Mexico"},
    { abrv: "NV", name: "Nevada"},
    { abrv: "NY", name: "New York"},
    { abrv: "OH", name: "Ohio"},
    { abrv: "OK", name: "Oklahoma"},
    { abrv: "OR", name: "Oregon"},
    { abrv: "PA", name: "Pennsylvania"},
    { abrv: "PR", name: "Puerto Rico"},
    { abrv: "RI", name: "Rhode Island"},
    { abrv: "SC", name: "South Carolina"},
    { abrv: "SD", name: "South Dakota"},
    { abrv: "TN", name: "Tennessee"},
    { abrv: "TX", name: "Texas"},
    { abrv: "UT", name: "Utah"},
    { abrv: "VA", name: "Virginia"},
    { abrv: "VT", name: "Vermont"},
    { abrv: "WA", name: "Washington"},
    { abrv: "WI", name: "Wisconsin"},
    { abrv: "WV", name: "West Virginia"},
    { abrv: "WY", name: "Wyoming"}
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.contactReference = React.createRef()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            canText: "",
            description: "",
            timeline: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    navigateToInstagram() {
        window.open('https://www.instagram.com/terrafirmacabinetry/', '_blank');
    }

    handleChange(e) {
        let stateKey = e.target.id
        let stateValue = e.target.value
        this.setState({
            [stateKey]: stateValue
        })
    }

    submit() {
        const {firstName, lastName, email, phone, address, city, state, zip, canText, description, timeline} = this.state;
        console.log(this.state);

    }

    executeScroll = () => this.contactReference.current.scrollIntoView()

    render() {
        const {firstName, lastName, email, phone, address, city, state, zip, canText, description, timeline} = this.state;

        return (
            <div>
                <AppBar position="sticky" style={{backgroundColor: "#F8F8F8", marginBottom: "40px"}}>
                    <Toolbar>
                        <Typography component="div">
                            <ColorButton variant="outlined" onClick={this.executeScroll}>Contact</ColorButton>
                        </Typography>
                        <Typography variant="h6" component="div" align="center" sx={{flexGrow: 1}}>
                            <img src={logo} class="logo"/>
                        </Typography>
                        <ColorButton variant="h6" component="div"
                                     onClick={this.navigateToInstagram}>Instagram</ColorButton>
                    </Toolbar>
                </AppBar>
                <div class="main">

                    <Grid container>
                        <Grid item xs={6}>

                            <h1 class="header">Terra Firma’s Full Website is Coming Soon.</h1>
                            <div class="subtext">For questions, quotes, services and more, please fill out the contact
                                form below.
                            </div>

                            <DarkColorButton variant="outlined">Contact</DarkColorButton>

                            <Divider class="divider"/>

                            <div class="subdiv">
                                <div class="marysweirdbar"><Divider class="divider-2"/></div>
                                <h2 class="header-2"> What can Terra Firma do for you?</h2>
                                <div className="subtext">
                                    Cabinetry, Flooring, Tile, Handyman, Welding, Door Installation, Trim Molding,
                                    Painting,
                                    Installing fixtures, Drywall, Texturing & Much More
                                </div>
                            </div>
                            <Divider class="divider"/>

                            <div ref={this.contactReference}>
                                <h2 class="header-2">Contact Terra Firma</h2>

                                <div class="line-spacing">
                                    Please fill out the form below to get an estimate. For any other
                                    questions, please email: Contact@TerraFirmaCabinetry.com.
                                </div>
                                <div className="subtext"> * required fields.</div>

                            </div>

                        </Grid>
                        <Grid item xs={6}>
                            <img src={stock} class="stock"/>

                        </Grid>

                    </Grid>
                    <Box component="form"
                         noValidate
                         autoComplete="off"
                    >

                        <div class="input-container">
                            <InputText
                                required
                                style={{width: "25%", marginRight: "20px"}}
                                label="First Name"
                                id="firstName" value={firstName} onChange={this.handleChange}
                            />
                            <InputText
                                required
                                style={{width: "25%", marginRight: "20px"}}
                                label="Last Name"
                                id="lastName" value={lastName} onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <InputText
                                required
                                style={{width: "25%", marginRight: "20px"}}
                                id="email" value={email} onChange={this.handleChange}
                                label="Email"
                            />
                            <InputText
                                required
                                style={{width: "25%", marginRight: "20px"}}
                                id="phone" value={phone} onChange={this.handleChange}
                                label="Phone Number"
                            />
                            <div style={{display: "inline"}}>Can We Text You? Yes<Checkbox
                                style={{color: "#F8F8F8"}}></Checkbox> No<Checkbox
                                style={{color: "#F8F8F8"}}></Checkbox>
                            </div>
                        </div>
                        <div className="input-container">
                            <InputText
                                required
                                style={{width: "25%", marginRight: "20px"}}
                                id="address" value={address} onChange={this.handleChange}
                                label="Address"
                            />
                            <InputText
                                required
                                style={{width: "25%", marginRight: "20px"}}
                                id="city" value={city} onChange={this.handleChange}
                                label="City"
                            />
                            <InputText
                                required
                                style={{width: "10%", marginRight: "20px"}}
                                id="state" value={state} onChange={this.handleChange}
                                label="State"
                            />
                            <InputText
                                required
                                style={{width: "10%", marginRight: "20px"}}
                                id="zip" value={zip} onChange={this.handleChange}
                                label="Zip Code"
                            />
                        </div>
                        <div className="input-container">
                            <div class="div-container">Please write a detailed description of the work you would like
                                done.
                            </div>
                            <InputText
                                required
                                style={{width: "100%", height: "100%", marginRight: "20px"}}
                                id="description" value={description} onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <div class="div-container">When would you like this project done by?</div>
                            <InputText
                                required
                                style={{width: "100%", height: "100%", marginRight: "20px"}}
                                id="timeline" value={timeline} onChange={this.handleChange}
                            />
                        </div>

                        <SubmitButton variant="contained" onClick={this.submit}>Submit Form</SubmitButton>

                        <Divider class="divider"/>
                    </Box>
                    <div>
                        <div style={{textAlign: "center", fontSize: "10px", fontFamily: "Frank Ruhl Libre"}}>TERRA FIRMA
                            CABINETRY & HANDY MAN SERVICES <CopyrightIcon fontSize="5px"/> 2022
                        </div>
                        <div style={{textAlign: "center", fontSize: "10px", marginTop: "10px", marginBottom: "10px"}}>
                            <span class="nostyle" onClick={this.executeScroll}>Contact</span><span
                            style={{marginLeft: "10px", marginRight: "10px"}}>•</span><a class="nostyle" target="_blank"
                                                                                         href="https://www.instagram.com/terrafirmacabinetry/">Instagram</a>
                        </div>
                        <div style={{textAlign: "center", fontSize: "8px"}}>Copyright Terra Firma Cabinetry 2022. All
                            editorial content and graphics on this site are protected by U.S. copyright and
                            international treaties and may not be copied without the express permission Terra Firma
                            Cabinetry, which reserves all rights. Re-use of any of Terra Firma Cabinetry’s editorial
                            content and graphics online for any purpose is strictly prohibited. The materials from Terra
                            Firms Cabinetry’s site is available for informational only. All copyright and other notices
                            on any copy are retained, and permission is granted by Terra Firms Cabinetry.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
