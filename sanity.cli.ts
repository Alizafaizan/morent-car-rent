/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'gmtdx99w',  // replace with your project ID
    dataset: 'production',  
    apiVersion: '2024-01-21', // Use current date dataset name
    useCdn: true,                  // set to false if you need to fetch fresh data
  });
  
  export { client };

  
