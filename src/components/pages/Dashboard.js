import React from 'react';
import Header from '../header/Header';
import Sidebar from '../usuarios/Sidebar';
import FormCrearProducto from '../usuarios/FormCrearProducto';

export const Dashboard = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <FormCrearProducto />
        </>
    );
  };