import *as contentful from 'contentful';

export const Client = contentful.createClient({
    accessToken: import.meta.env.VITE_accessToken,
  space: import.meta.env.VITE_space
})