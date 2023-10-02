import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import subCategory from "../subCategory";

export default function CategoryListTest() {
    const [open, setOpen] = React.useState(false);
 const [subOpen, setSubOpen] = React.useState(false)
    const handleClick = () => {
        setOpen(!open);
    };

 const handleSubClick = () => {
     setSubOpen(!subOpen);
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
                    <ListItem button onClick={handleSubClick}>
                        <ListItemText primary="Electronics" />
                    </ListItem>
                    <Collapse in={subOpen} timeout="auto" unmountOnExit>
                        <List>
                            {createSubSubCategory(1)}
                        </List>
                    </Collapse>
                </List>
                <List>
                    <ListItem button onClick={handleSubClick}>
                        <ListItemText primary="Collectibles & Art" />
                    </ListItem>
                    <Collapse in={subOpen} timeout="auto" unmountOnExit>
                        <List>
                            {createSubSubCategory(2)}
                        </List>
                    </Collapse>
                </List>
                <List>
                    <ListItem button onClick={handleSubClick}>
                        <ListItemText primary="Fashion & Style" />
                    </ListItem>
                    <Collapse in={subOpen} timeout="auto" unmountOnExit>
                        <List>
                            {createSubSubCategory(3)}
                        </List>
                    </Collapse>
                </List>
                <List>
                    <ListItem button onClick={handleSubClick}>
                        <ListItemText primary="Sporting goods" />
                    </ListItem>
                    <Collapse in={subOpen} timeout="auto" unmountOnExit>
                        <List>
                            {createSubSubCategory(4)}
                        </List>
                    </Collapse>
                </List>
                <List>
                    <ListItem button onClick={handleSubClick}>
                        <ListItemText primary="Setproduct" />
                    </ListItem>
                    <Collapse in={subOpen} timeout="auto" unmountOnExit>
                        <List>
                            {createSubSubCategory(5)}
                        </List>
                    </Collapse>
                </List>
                <List>
                    <ListItem button onClick={handleSubClick}>
                        <ListItemText primary="Home & Garden" />
                    </ListItem>
                    <Collapse in={subOpen} timeout="auto" unmountOnExit>
                        <List>
                            {createSubSubCategory(6)}
                        </List>
                    </Collapse>
                </List>
                <List>
                    <ListItem button onClick={handleSubClick}>
                        <ListItemText primary="Toys & Hobbies" />
                    </ListItem>
                    <Collapse in={subOpen} timeout="auto" unmountOnExit>
                        <List>
                            {createSubSubCategory(7)}
                        </List>
                    </Collapse>
                </List>
                <List>
                    <ListItem button onClick={handleSubClick}>
                        <ListItemText primary="Auto Parts & Accessories" />
                    </ListItem>
                    <Collapse in={subOpen} timeout="auto" unmountOnExit>
                        <List>
                            {createSubSubCategory(8)}
                        </List>
                    </Collapse>
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
