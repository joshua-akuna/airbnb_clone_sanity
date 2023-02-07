export default {
    title: 'Property',
    name: 'property',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Location',
            name: 'location',
            type: 'geopoint',
        },
        {
            title: 'Property Type',
            name: 'propertyType',
            type: 'string',
            options: {
                list: [
                    {title: 'House', value: 'house'},
                    {title: 'Flat', value: 'flat'},
                    {title: 'Bed and Breakfast', value: 'bed-and-breakfast'},
                    {title: 'Boutique Hotel', value: 'boutique-hotel'},
                ],
                layout: 'radio',
            }
        },
        {
            title: 'Main Image',
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'Price Per Night',
            name: 'pricePerNight',
            type: 'number'
        },
        {
            title: 'Beds',
            name: 'beds',
            type: 'number'
        },
        {
            title: 'Bedrooms',
            name: 'bedrooms',
            type: 'number'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
        },
        {
            title: 'ID',
            name: 'id',
            type: 'number'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
    ]
}