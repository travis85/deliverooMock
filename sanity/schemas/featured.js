export default {
    name: "featured",
    title: "Featured Menu Catagories",
    type: "document",
    fields: [
        { 
            name: "name",
            type: "string",
            title: "Featured Catagory Name",
            validation: (Rule) => Rule.required()
        },
        { 
            name: "short_description",
            type: "string",
            title: "Short Description",
            validation: (Rule) => Rule.max(200)
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
    ]
}