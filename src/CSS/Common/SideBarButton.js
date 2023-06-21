import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

const SideBarButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    color: '#00008b',
    borderColor: 'transparent',
    lineHeight: '0',
    width: '90%',
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: "'Roboto Condensed', sans-serif",
    fontWeight: '600',
    paddingLeft: '5%',
    margin: '1%',
    marginTop: '2%',
    borderRadius: '5px',
    '&:active': {
        boxShadow: 'none',
        color: '#0a0a0a !important'
    },
    '&:hover': {
        backgroundColor:'#87888b !important;',
        boxShadow: 'none',
        color: '#0a0a0a !important',
    },
});

export default SideBarButton;
