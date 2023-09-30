import { Dialog, Box, Typography , List , ListItem , styled} from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import {GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const dialogstyle = {
  height: '96%',
  marginTop: '12%',
  width: '70%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden'
};

const Component = styled(Box)`
 display: flex;
`;

const Container = styled(Box)`
 padding: 56px 0 56px 56px;
`;

const Qrcode = styled('img')({
  height: 264,
  width : 264,
  margin : '50px 0 0 50px'
})

const Title = styled(Typography)`
 font-size: 26px;
 color : #525252;
 font-weight: 300;
 font-family: inherit;
 margin-bottom: 25px;
`;

const StyledList = styled(List)`
 & > li {
  padding: 0;
  margin-top: 15px;
  font-size: 18px;
  line-height: 28px;
  color: #4a4a4a;
 }
`;

const LoginDialog = () => {

  const {setAccount} = useContext(AccountContext);

  const onLoginSuccess = async (res) =>{
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  }

  const onLoginError = (res) => {
    console.log('Login-Failed' , res);

  }


  return (
    <Dialog 
      open={true}
      PaperProps={{ sx: dialogstyle }}
      hideBackdrop = {true}
    >
      <Component>
        <Container>
            <Title>Use WhatsApp on your computer</Title>
            <StyledList>
                <ListItem>1. Open WhatsApp on your phone</ListItem>
                <ListItem>2. Tap Menu ︙or Settings ⚙️ and select Whatsapp web</ListItem>
                <ListItem>3. Tap on Link a device </ListItem>
                <ListItem>4. Point your phone to this screen to capture the QR code</ListItem> 
            </StyledList>
          </Container>  
           <Box style = {{position : 'relative' }}>
               <Qrcode src={qrCodeImage} alt="qr code" />
               <Box style = {{ position: "absolute", top:'50%' , transform: 'translateX(25%)'}}>
                 <GoogleLogin 
                 onSuccess = {onLoginSuccess}
                 onError = {onLoginError}
                 />
               </Box>
           </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;

