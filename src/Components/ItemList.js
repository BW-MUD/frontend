import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.grey.A700,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  li: {
      cursor:'pointer',
      '&:hover':{
          backgroundColor: '#2e7d32'
      }
  }
}));

export default function ItemList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
          <ul className={classes.ul}>
            {props.items.map(item => (
              <ListItem key={item} className={classes.li}>
                <ListItemText primary={`${item}`} />
              </ListItem>
            ))}
          </ul>
    </List>
  );
}