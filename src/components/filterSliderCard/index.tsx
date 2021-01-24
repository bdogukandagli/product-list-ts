import React, { ReactElement, useState, SetStateAction, Dispatch } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Slider,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IPrice } from '../../utils/interfaces';

interface IPropTypes {
  accordionTitle: string;
  filterObject: IPrice;
  selectedFilters: number[];
  setSelectedFilters: Dispatch<SetStateAction<any>>;
}

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  root: {
    minWidth: 300,
  },
}));

const FilterSliderCard = (props: IPropTypes): ReactElement => {
  const [value, setValue] = useState([
    props.filterObject.minPrice,
    props.filterObject.maxPrice,
  ]);
  const classes = useStyles();
  return (
    <Box>
      <Accordion color="gray">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.accordionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.root}>
            <Slider
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue as number[]);
                props.setSelectedFilters(newValue as number[]);
              }}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={() => {
                return `${value}`;
              }}
            />
            <Box textAlign="center">
              <Typography
                variant="h6"
                color="textSecondary"
                gutterBottom
              >{`${value[0]}$ - ${value[1]}$`}</Typography>
            </Box>
          </div>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterSliderCard;
