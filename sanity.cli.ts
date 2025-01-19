/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'your_project_id',  // replace with your project ID
    dataset: 'production',         // replace with your dataset name
    useCdn: true,                  // set to false if you need to fetch fresh data
  });
  
  export default client;
  
