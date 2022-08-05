# build-time



## To run catalog mfe

- `cd cart`

- `npm install`

- `npm start`

This will start the webpack dev server at 8081 port.

## To run cart mfe

- `cd cart`

- `npm install`

- `npm start`

This will start the webpack dev server at 8082 port.

## To run container app

- `cd container`

- `npm install`

- `npm start`


This will install the catalog and cart mfes as npm dependencies and start the webpack dev server at 8080.

## To run container app with lazy loading mfes

- `cd containerWithLazyLoadingMicroFrontends`

- `npm install`

- `npm start`


This will install the catalog and cart mfes as npm dependencies and start the webpack dev server at 9090. The catalog and cart micro frontends will be lazily loaded when the use routes to the respective pages.