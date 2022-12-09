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
          sx={{ px: 12,borderRadius: 5,
          ml: 2 ,mr: 234 }}
          className="feyza">
          < GridViewIcon sx={{ fontSize: 50 }}
          color="success">
            
          </GridViewIcon>
        </IconButton> 
        <IconButton
           size="large"
           edge="start"
           color="inherit"
           aria-label="open drawer"
           sx={{ px: 6, py: 0.8,borderRadius: 5,
             mr: 1 }}
             className="feyza"> 
           <FilterListIcon 
             sx={{ fontSize: 55 }}
             color="success">
           </FilterListIcon> Sort
        </IconButton>
       
        <IconButton
           size="large"
           edge="start"
           color="inherit"
           aria-label="open drawer"
           
           className="feyza">
       
           <FilterAltIcon
            sx={{ fontSize: 50 }}
            color="success">
            </FilterAltIcon> Filter
        </IconButton>
        </div>
    )
}