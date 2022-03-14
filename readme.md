# Automobile Full Stack Web Application

A full stack application using the node environment in the backend serving API requests to a React front end website.

The purpose of this web applications is to manage automobile inventory. Users can perform CRUD operations on documents, if it meets requirements checked by the back end in an effort to keep persistent data.

### Built Using:

**Front End**

- [React Framework](https://reactjs.org/)
  - useEffect, useState, functional components
- Axios
  - hits API endpoints to perform CRUD operations on a mongo database
- SASS Preprocessor
  - SCSS Stylesheets
- HTML, CSS, Javascript

**Back End**

- Node JS
  - Express JS
- MongoDB
  - Mongoose data schemes
  - Data validation performed by express-validator

#### Directory Guide

./inventory-api : contains the server that runs on the node environment and uses express and various other libraries to serve as the backend

./inventory-client : contains the react front end web client that dynamically renders inventory information that is served from the backend
