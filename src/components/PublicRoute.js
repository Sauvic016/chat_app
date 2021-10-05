import React from 'react';
import { Route, Redirect } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routeprops }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (profile && !isLoading) {
    return <Redirect to="/" />;
  }
  return <Route {...routeprops}> {children}</Route>;
};

export default PublicRoute;
