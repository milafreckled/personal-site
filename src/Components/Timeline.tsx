import * as React from "react"
import Divider from "@mui/material/Divider"
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import { isMobile } from 'react-device-detect';
import { styled, alpha } from '@mui/material/styles';
import { TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import myTheme from "../Theme/MyTheme"
//const useStyles = makeStyles({

//})
function createData(
    date: string,
    event: string,
  ) {
    return { date, event };
  }
  const rows = [
      createData("October 2019 - currently", "Computer Science student in Lublin Technology University"),
      createData("November 2021 - currently", "Junior React developer in NC-ONE company (remote)"),
      createData("September-November 2021", "Google Tech Mentorship for Women in Poland"),
      createData("September 2017-June 2019", "Student in Starokostiantyniv Gymnasium, math&informatics profile"),
  ]
const MyTable = styled(Table)(({theme}) => ({
    position: 'relative',
    alignSelf: "center",
    backgroundColor: "#fff",
    border: `2px solid ${alpha(theme.palette.primary.main, 0.6)}`,
    height: '100%',
    width: 'calc(100% - 5vw)',
    marginInline: '2.5vw',
    overflowX: 'hidden',
    '& .MuiTableHead-root': {
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        border: 'none',
        variant: 'h2',
        borderBottom: `2px dashed ${alpha(theme.palette.primary.main, 0.6)}`,
        
    },
    '& .MuiTableRow-root': {
      border: 'none',
      'th':{
        color: alpha(theme.palette.primary.main, 0.6),
        fontSize: '2rem',
        textAlign: 'center',
      }
    },
    '& .MuiTableCell-root': {
        paddingLeft: "7%",
        paddingRight: "7%",
        
    },
    [theme.breakpoints.down('sm')]:{
      margin: '0',
      width: '100vw',
    }
}));

const Description = styled(TableCell)(({theme})=> ({
    width: 'auto',
    height: '10vw',
    color: theme.palette.text.secondary,
    padding: "2rem",
    borderBottom: `2px dashed ${alpha(theme.palette.primary.main, 0.6)}`,
    "&:nth-of-type(2n+1)":{
    borderRight: `2px dashed ${alpha(theme.palette.primary.main, 0.6)}`,
    width: "35%",
    },
    [theme.breakpoints.down('sm')]:{
      "&:nth-child(2n+1)":{
        border: 'none',
        height: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
      }
    }
}));


export default function CustomizedTables() {
  React.useEffect(() => {
    console.log(isMobile);
  }, [])
  if (isMobile){ 
  return( <TableContainer sx={{paddingBlock: '40px'}} component={'div'}>
    <Typography  sx={{ typography: 'h2', py: '.5em', textAlign: "center", color: myTheme.palette.primary.main }}>Timeline</Typography>
     <MyTable sx={{ }} aria-label="customized table">
       <TableBody>
         {rows.map((row) => (
           <>
           <TableRow key={row.date}>
             <Description align="center">
               {row.date}
             </Description>
             <Description align="center">{row.event}</Description >
             </TableRow>
         </>
         ))}
       </TableBody>
     </MyTable>
   </TableContainer> )
   }else{
      return( <TableContainer sx={{paddingBlock: '40px'}} component={'div'}>
         <Typography  sx={{ typography: 'h2', py: '.5em', textAlign: "center", color: myTheme.palette.primary.main }}>Timeline</Typography>
        <MyTable aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Event</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.date}>
                <Description align="left">
                  {row.date}
                </Description>
                <Description align="left">{row.event}</Description >
              </TableRow>
            ))}
          </TableBody>
        </MyTable>
      </TableContainer>
    )
    }
 }
