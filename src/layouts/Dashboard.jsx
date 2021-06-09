import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid, GridColumn, GridRow} from "semantic-ui-react";
import { Route } from 'react-router';
import ProductDetail from '../pages/ProductDetail';

export default function Dashboard() {
    return (
      <div>
        <Grid>
          <GridRow>
            <Grid.Column width={4}>
              <Categories />
            </Grid.Column>
            <Grid.Column width={12}>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/products/:id" component={ProductDetail} />
            </Grid.Column>
          </GridRow>
        </Grid>
      </div>
    );
}
