import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { SANITY_PROJECTID, SANITY_USECDN, SANITY_DATASET } from "@env"

// BACKEND CONNECTION
const client = sanityClient({
    projectId: `${SANITY_PROJECTID}`,
    dataset: `${SANITY_DATASET}`,
    useCdn: `${SANITY_USECDN}`,
    apiVersion: "2021-10-21"
})

//HELPER FUNCTION FOR IMAGE
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

//sanity cors add http://localhost3000
export default client

