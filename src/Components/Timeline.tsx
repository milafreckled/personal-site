import * as React from "react"
import { useInView } from 'react-intersection-observer';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import { isMobile } from 'react-device-detect';
import { styled, alpha } from '@mui/material/styles';
import { TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import myTheme from "../Theme/MyTheme"

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
const MyTable = styled(Table)(({theme=myTheme}) => ({
    position: 'relative',
    alignSelf: "center",
    backgroundColor: "#fff",
    border: `2px solid ${alpha(theme.palette.primary.main, 0.6)}`,
    height: '100%',
    width: 'calc(100% - 5vw)',
    marginInline: '2.5vw',
    overflowX: 'hidden',
    opacity: 0,
    transform: 'translateY(20vh)',
    visibility: 'hidden',
    transition: 'opacity 0.2s ease-out , transform 0.6s ease-out',
    willChange: 'opacity, visibility',
    '&.is-visible':{
      opacity: 1,
      transform: 'none',
      visibility: 'visible',
    },
    '& .MuiTableCell-head': {
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
        '&:nth-of-type(2n+1)': {
          fontWeight: '800',
        }
    },
    [theme.breakpoints.down('sm')]:{
      margin: '0',
      width: '100vw',
      '& th:nth-of-type(2n+1)':{
        borderBottom: `2px solid ${alpha(theme.palette.primary.main, 0.6)}`, 
      }
    }
}));

const Description = styled(TableCell)(({theme=myTheme})=> ({
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
      "&:nth-of-type(2n+1)":{
        border: 'none',
        height: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
      }
    }
}));


export default function CustomizedTables() {
  // React.useEffect(() => {
  //   console.log(isMobile);
  // }, []);
  const { ref, inView } = useInView({
    threshold: 0,
    trackVisibility: true,
    delay: 100
  });
  if (isMobile){ 
  return( 
  <TableContainer  sx={{ paddingBlock: '40px'}} component={'div'}>
    <Typography sx={{ typography: 'h2', py: '.5em', textAlign: "center", color: myTheme.palette.primary.main }}>Timeline</Typography>
     <MyTable ref={ref} className={inView ? 'is-visible' : ''} sx={{ }} aria-label="customized table">
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
   </TableContainer> 
   ) 
   }else{
      return( 
      <TableContainer ref={ref} className={inView ? 'is-visible' : ''} sx={{paddingBlock: '40px'}} component={'div'}>
         <Typography  sx={{ typography: 'h2', py: '.5em', textAlign: "center", color: myTheme.palette.primary.main }}>Timeline</Typography>
        <MyTable ref={ref} className={inView ? 'is-visible' : ''} aria-label="customized table">
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
