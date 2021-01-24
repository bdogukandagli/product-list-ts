import React, {
  ReactElement,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';
import { Box, makeStyles } from '@material-ui/core';
import ProductCard from '../../../components/productCard/index';
import FilterCard from '../../../components/filterCard/index';
import FilterSliderCard from '../../../components/filterSliderCard/index';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  getAllProductsStart,
  getProductFiltersStart,
  getFilteredProductsStart,
  addToCartStart,
} from '../../../actions/productAction';
import { IProduct, IFilter } from '../../../utils/interfaces';
import { ProductState } from '../../../actions/types';
import { RootState } from '../../../reducers/index';

interface IPropTypes {
  cartProducts: IProduct[];
  setCartProducts: Dispatch<SetStateAction<any>>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Listing = (props: IPropTypes): ReactElement => {
  const classes = useStyles();
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

  const products: IProduct[] = useSelector(
    (storage: RootState) => storage.products.products,
    shallowEqual
  );

  const filters: IFilter = useSelector(
    (storage: RootState) => storage.products.filters,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsStart());
    dispatch(getProductFiltersStart());
  }, []);

  useEffect(() => {
    if (selectedPrice || selectedSizes || selectedCategories || selectedColors) {
      dispatch(
        getFilteredProductsStart(
          selectedSizes,
          selectedCategories,
          selectedColors,
          selectedPrice
        )
      );
    }
  }, [selectedPrice, selectedSizes, selectedColors, selectedCategories]);

  useEffect(() => {
    if (props.cartProducts.length > 0) {
      dispatch(addToCartStart(props.cartProducts));
    }
  }, [props.cartProducts]);

  const renderFilters = (): ReactElement => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="left"
        className={classes.root}
      >
        <Box>
          <FilterCard
            accordionTitle="Colors"
            filterObject={filters.colors}
            selectedFilters={selectedColors}
            setSelectedFilters={setSelectedColors}
          />
        </Box>
        <Box my="1em">
          <FilterCard
            accordionTitle="Sizes"
            filterObject={filters.sizes}
            selectedFilters={selectedSizes}
            setSelectedFilters={setSelectedSizes}
          />
        </Box>
        <Box>
          <FilterCard
            accordionTitle="Categories"
            filterObject={filters.categories}
            selectedFilters={selectedCategories}
            setSelectedFilters={setSelectedCategories}
          />
        </Box>
        <Box my="1em">
          <FilterSliderCard
            accordionTitle="Price"
            filterObject={filters.priceInfo}
            selectedFilters={selectedPrice}
            setSelectedFilters={setSelectedPrice}
          />
        </Box>
      </Box>
    );
  };

  const renderCards = (): ReactElement => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
        flexWrap="wrap"
      >
        {products.map((product) => (
          <Box key={product.id} mx="1em" mb="1em">
            <ProductCard
              name={product.name}
              priceText={`${product.price}$`}
              photoUrl={product.photoUrl}
              color={product.color}
              size={product.size}
              category={product.category}
              product={product}
              setCartProducts={props.setCartProducts}
              cartProducts={props.cartProducts}
            />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box py="3em" px="1em">
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="top"
        justifyContent="center"
      >
        <Box width={{ xs: '100%', md: '25%' }} mr="3em" mb="2em">
          <Box>{renderFilters()}</Box>
        </Box>
        <Box width={{ xs: '100%', md: '75%' }}>
          <Box>{renderCards()}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Listing;
