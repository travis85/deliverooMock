import {defineCliConfig} from 'sanity/cli'
import { SANITY_PROJECTID,  SANITY_DATASET } from "@env"

export default defineCliConfig({
  api: {
    projectId: `${SANITY_PROJECTID}`,
    dataset: `${SANITY_DATASET}`
  }
})
