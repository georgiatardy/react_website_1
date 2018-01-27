import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageTitle from './PageTitle';
const StyledHeader = styled.div`
  margin-left: 180px;
  margin-top: 1rem;
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 180px);
`;
const PageHeader = props => (
  <StyledHeader>
    <Fragment>
      <PageTitle title={props.title} />
      {props.children}
    </Fragment>
  </StyledHeader>
);
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};
PageHeader.defaultProps = {
  children: ''
};
export default PageHeader;
