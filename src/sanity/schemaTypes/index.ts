import { type SchemaTypeDefinition } from 'sanity'
import cars from './cars'
import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars,category],
}
