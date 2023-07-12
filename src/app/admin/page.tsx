"use client"
import * as React from "react";
import { useEffect, useState } from "react";
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminApp = () => {
  const [Admin, setAdmin] = useState<React.JSX.Element | undefined>(undefined);

  useEffect(() => {
    const loadAdmin = async () => {
      const { Admin, Resource, ListGuesser, EditGuesser } = await import('react-admin');
      setAdmin(() => (
        <Admin dataProvider={dataProvider}>
          <Resource name="users" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
          <Resource name="posts" list={ListGuesser} edit={EditGuesser} recordRepresentation="title" />
          <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
        </Admin>
      ));
    };

    if (typeof document !== 'undefined') {
      loadAdmin();
    }
  }, []);

  return <>{Admin}</>;
};

export default AdminApp;
