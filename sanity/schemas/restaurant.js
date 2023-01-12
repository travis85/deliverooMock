import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) =>Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) =>Rule.max(200)
    },
    {
      name: "image",
      type: "image",
      title: "image of the restaurant"
    },
    {
      name: "lat",
      type: "number",
      title: "latitude of the restaurant"
    },
    {
      name: "long",
      type: "number",
      title: "longitude of the restaurant"
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant Address",
      validation: (Rule) =>Rule.required()
    },
    {
      name: "rating",
      type: "number",
      title: "Enter rating from (1-5 stars)",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Please enter value between 1 - 5")
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to:[{type: "category"}]
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [
        { type: "reference", to: [{ type: "dish" }]}
      ],
      
    },
    
  ],

})
