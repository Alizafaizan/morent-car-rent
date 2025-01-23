import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token:'sk6scgZqgwBdmDXX7hkd0i5iJSAYdX68zR0K64epwZ6u8yXKqMoG5Kbz9YYEb5zjiGrOnfuGfhvrA0TXM4wMnBhr14OPBKAMdu2rZWItqJFajjF1zxZbzOet0wXTdrajFqOqHn94Vut0iRcoXju6c5HvI7o9jTi0YXhsPAIVPpyaYoGki0RC' // Include if you need authenticated requests

})
