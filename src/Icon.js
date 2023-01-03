import GridViewIcon from '@mui/icons-material/GridView';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton } from "@mui/material";

export default function SearchAppBar() {
   
    return (
        <div>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          
        sx={{
          borderRadius: 5,
          ml: 46 ,mr: 1 ,
          "&:hover": {
            backgroundColor: "transparent",
            cursor: "default",
            
          }}}
          
         >
          < GridViewIcon sx={{ fontSize: 50 }}
          color="success">
            
          </GridViewIcon>
        </IconButton> 
        <IconButton
           size="large"
           edge="start"
           color="inherit"
           aria-label="open drawer"

           sx={{
          px:1,
            borderRadius: 5,
            ml: 46 ,mr: 0 ,
            "&:hover": {
              backgroundColor: "transparent",
              cursor: "default",
              
            }}}
           
             > 
           <FilterListIcon 
             sx={{ fontSize: 50 }}
             color="success">
           </FilterListIcon> Sort
        </IconButton>
       
        <IconButton
           size="large"
           edge="start"
           color="inherit"
           aria-label="open drawer"

           sx={{
          
            borderRadius: 5,
            ml: 0 ,mr: 0 ,
            "&:hover": {
              backgroundColor: "transparent",
              cursor: "default",
              
            }}}
           
           >
       
           <FilterAltIcon
            sx={{ fontSize: 50 }}
            color="success">
            </FilterAltIcon> Filter
        </IconButton>
        </div>
    )
}