import { Client, Account, Databases, ID, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('67f254860035cee87312'); 

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export { ID };
