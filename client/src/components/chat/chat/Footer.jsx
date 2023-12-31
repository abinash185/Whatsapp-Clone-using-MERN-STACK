import { useState } from "react";
import { Box , InputBase , styled} from "@mui/material";
import { EmojiEmotionsOutlined , AttachFile , Mic} from '@mui/icons-material';


const Container = styled(Box)`
 height : 42px;
 background : #ededed;
 display : flex;
 width : 100%;
 aligh-items : center;
 padding : o 15px;
 & > * {
    margin : 5px;
    color : #919191;
 }
`;

const Search = styled(Box)`
 background-color : #FFFFFF;
 border-radius : 18px;
 width : calc(94% - 100px);
`;

const InputField = styled(InputBase)`
 width : 100%;
 padding : 20px;
 height : 20px;
 padding-left : 30px;
 font-size : 14px;
`;

const ClipIcon = styled(AttachFile)`
 transform : rotate(40deg);
`



const Footer = ({sendText}) => {

    const [text , setText] = useState('');
    return(
        <Container>
            <EmojiEmotionsOutlined/>
            <ClipIcon/>
            <Search>
                <InputField
                    placeholder='Type a message'
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => sendText(e) }
                />
            </Search>
            <Mic/>

        </Container>
    )
}

export default Footer;