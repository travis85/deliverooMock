import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { SANITY_PROJECTID,  SANITY_DATASET } from "@env"

export default defineConfig({
  name: 'default',
  title: 'deliveroo-clone',

  projectId: `${SANITY_PROJECTID}`,
  dataset: `${SANITY_DATASET}`,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
