import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category name",
      validation: (rule) => rule.required()
    },
    {
      name: "image",
      type: "image",
      title: "Image of category"
    },
    { 
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{
        type: "reference", to: [{
          type: "restaurant"
        }]
      }]
    }
  ],
})
