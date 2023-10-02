import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import subCategory from "../subCategory";

export default function CategoryList() {
  const [open, setOpen] = React.useState(false);
  const [subOpen, setSubOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open);
  };


  const handleSubClick = (subCategoryId) => {
    setSubOpen((prev) => ({
      ...prev,
      [subCategoryId]: !prev[subCategoryId],
    }));
  };



  function Categories(props) {
    return(

        <ListItem button key={props.key} sx={{ pl: 4 }}>
          <ListItemText primary={props.name} />
        </ListItem>
    );
  }


  function createSubSubCategory(selectedSubCategoryId) {
    const selectedSubCategory = subCategory.find(category => category.id === selectedSubCategoryId);
    if (!selectedSubCategory) return null;

    return selectedSubCategory.subSubCategory.map(subItem => (
        <Categories key={subItem.id} name={subItem.name} />
    ));
  }

  return (
      <List component="nav">
        <ListItem button sx={{ width: "355px" }} onClick={handleClick}>
          <ListItemText primary="Main Category" />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            <ListItem button onClick={() => handleSubClick(1)}>
              <ListItemText primary="Electronics" />
            </ListItem>
            <Collapse in={subOpen[1]} timeout="auto" unmountOnExit>
              <List>
                {createSubSubCategory(1)}
              </List>
            </Collapse>
          </List>
          <List>
            <ListItem button onClick={() => handleSubClick(2)}>
              <ListItemText primary="Collectibles & Art" />
            </ListItem>
            <Collapse in={subOpen[2]} timeout="auto" unmountOnExit>
              <List>
                {createSubSubCategory(2)}
              </List>
            </Collapse>
          </List>
          <List>
            <ListItem button onClick={() => handleSubClick(3)}>
              <ListItemText primary="Fashion & Style" />
            </ListItem>
            <Collapse in={subOpen[3]} timeout="auto" unmountOnExit>
              <List>
                {createSubSubCategory(3)}
              </List>
            </Collapse>
          </List>
          <List>
            <ListItem button onClick={() => handleSubClick(4)}>
              <ListItemText primary="Sporting goods" />
            </ListItem>
            <Collapse in={subOpen[4]} timeout="auto" unmountOnExit>
              <List>
                {createSubSubCategory(4)}
              </List>
            </Collapse>
          </List>
          <List>
            <ListItem button onClick={() => handleSubClick(5)}>
              <ListItemText primary="Setproduct" />
            </ListItem>
            <Collapse in={subOpen[5]} timeout="auto" unmountOnExit>
              <List>
                {createSubSubCategory(5)}
              </List>
            </Collapse>
          </List>
          <List>
            <ListItem button onClick={() => handleSubClick(6)}>
              <ListItemText primary="Home & Garden" />
            </ListItem>
            <Collapse in={subOpen[6]} timeout="auto" unmountOnExit>
              <List>
                {createSubSubCategory(6)}
              </List>
            </Collapse>
          </List>
          <List>
            <ListItem button onClick={() => handleSubClick(7)}>
              <ListItemText primary="Toys & Hobbies" />
            </ListItem>
            <Collapse in={subOpen[7]} timeout="auto" unmountOnExit>
              <List>
                {createSubSubCategory(7)}
              </List>
            </Collapse>
          </List>
          <List>
            <ListItem button onClick={() => handleSubClick(8)}>
              <ListItemText primary="Auto Parts & Accessories" />
            </ListItem>
            <Collapse in={subOpen[8]} timeout="auto" unmountOnExit>
              <List>
                {createSubSubCategory(8)}
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
  );
}


