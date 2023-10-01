import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function CategoryList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const subSubCategory = [
    {
      id: 1 - 1,
      name: "Computers & Tablets",
    },
    {
      id: 1 - 2,
      name: "Cameras & Photo",
    },
    {
      id: 1 - 3,
      name: "TV, Audio & Free porn",
    },
    {
      id: 1 - 4,
      name: "Cell phones & Accessories",
    },
    {
      id: 1 - 5,
      name: "Smart Homes ",
    },
  ];

  function Categories(props) {
    <ListItem button key={props.key} sx={{ pl: 4 }}>
      <ListItemText primary={props.name} />
    </ListItem>;
  }

  function createSubSubCategory() {
    return (
      <Categories>
        key={subSubCategory.id}
        name={subSubCategory.name}
      </Categories>
    );
  }

  return (
    <List component="nav">
      <ListItem button sx={{ width: "355px" }} onClick={handleClick}>
        <ListItemText primary="Main Category" />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Electronics" />
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>{subSubCategory.map(createSubSubCategory)}</List>
          </Collapse>
        </List>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Collectibles & Art" />
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Fashion & Style" />
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Sporting goods" />
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Setproduct" />
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Home & Garden" />
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Toys & Hobbies" />
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Auto Parts & Accessories" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

/* <List component="div" disablePadding>
{[1, 2, 3, 4].map((subSubCategory) => (
  <ListItem button key={subSubCategory} sx={{ pl: 4 }}>
    <ListItemText
      primary={`Sub Subcategory ${subSubCategory}`}
    />
  </ListItem>
))}
</List> */
