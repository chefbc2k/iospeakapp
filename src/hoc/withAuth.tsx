import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../hooks/useAuth';

export const withAuth = (WrappedComponent: React.ComponentType, allowedRoles: string[]) => {
  return (props: any) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
      return <View><Text>Loading...</Text></View>;
    }

    if (!user || !allowedRoles.includes(user.role)) {
      return <View><Text>You are not authorized to view this page.</Text></View>;
    }

    return <WrappedComponent {...props} />;
  };
};