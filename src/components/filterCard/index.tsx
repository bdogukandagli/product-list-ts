import React, { ReactElement, SetStateAction, Dispatch } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Checkbox,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ICategory, IColor, ISize } from '../../utils/interfaces';

interface IPropTypes {
  accordionTitle: string;
  filterObject: ICategory[] | IColor[] | ISize[];
  selectedFilters: string[];
  setSelectedFilters: Dispatch<SetStateAction<any>>;
}

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const FilterCard = (props: IPropTypes): ReactElement => {
  const handleFiltersArray = (text: string) => {
    if (props.selectedFilters.includes(text)) {
      props.setSelectedFilters(props.selectedFilters.filter((t) => t != text));
    } else {
      props.setSelectedFilters(props.selectedFilters.concat([text]));
    }
  };

  const classes = useStyles();
  return (
    <Box>
      <Accordion color="gray">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.accordionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column" alignItems="center">
            {props.filterObject.map((item) => {
              return (
                <Box
                  key={item.id}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="left"
                >
                  <Box minWidth="50px">
                    <Typography>{item.text}</Typography>
                  </Box>
                  <Box ml="1em">
                    <Checkbox
                      color="primary"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                      onClick={() => handleFiltersArray(item.text)}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterCard;
