import { makeStyles } from '@mui/styles';
import Tab from "@mui/material/Tab";


const StyledTab = makeStyles(Tab)(({ theme }) => ({
    iconWrapper: { color: theme.palette.primary.main },
}));

export default  StyledTab;