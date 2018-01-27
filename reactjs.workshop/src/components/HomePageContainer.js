import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from './PageTemplate';
import Table from './Table';
const HomePageContainer = props => (
  <PageTemplate title={props.title}>
    <Table title={props.title} />
  </PageTemplate>
);
HomePageContainer.propTypes = {
  title: PropTypes.string.isRequired
};
export default HomePageContainer;
