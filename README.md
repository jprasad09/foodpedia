# Foodpedia

Foodpedia website offers diverse recipes and cooking inspiration for home cooks, empowering them to create delicious meals with detailed instructions and visual aids.


![Logo](https://iili.io/HspDsNs.png)


## Demo

https://foodpedia-zeta.vercel.app


https://github.com/jprasad09/foodpedia/assets/79163539/3c500d85-ef0c-464b-88ab-29147941c717



## Screenshots

![App Screenshot](https://iili.io/Hsp8mWg.png)

![App Screenshot](https://iili.io/Hsp8bzF.png)

![App Screenshot](https://iili.io/Hsp8psa.png)

![App Screenshot](https://iili.io/Hsp8tb1.png)


## Installation

Create a folder - "example-folder". Open this folder in cmd and run 

```bash
git clone https://github.com/jprasad09/foodpedia.git .
```
After that run
```bash
npm install
```
To run this project
```bash
npm run dev
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_REACT_APP_AUTH0_DOMAIN`

`VITE_REACT_APP_AUTH0_CLIENTID`

You can get this two keys from Auth0.

Another environment variable is for Recipes API

`VITE_REACT_APP_API_BASE_URL`="https://www.themealdb.com/api/json/v1/1/"


## Deployment

To deploy your project on Vercel, make sure it has been pushed to a Git repository.

Import the project into Vercel using the Import Flow. During the import, you will find all relevant options preconfigured.

After your project has been imported, all changes made to the Production Branch (commonly "master" or "main") will result in a Production Deployment.

Once deployed, you will get a URL to see your app live, such as - https://foodpedia-zeta.vercel.app

To learn more about other hosting platform, visit - https://create-react-app.dev/docs/deployment/ 

