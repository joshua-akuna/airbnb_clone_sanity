export default {
    title: 'Review',
    name: 'review',
    type: 'object',
    fields: [
        {   
            name: 'reviewDescription',
            title:'Review Description',
            type: 'string',
        },
        // {
        //     title:'Traveller',
        //     name: 'traveller',
        //     type: 'traveller',
        // },
        {
            title:'Rating',
            name: 'rating',
            type: 'string',
            options: {
                list: [
                    {title: '5 stars', value: '5-stars'},
                    {title: '4 stars', value: '4-stars'},
                    {title: '3 stars', value: '3-stars'},
                    {title: '2 stars', value: '2-stars'},
                    {title: '1 stars', value: '1-stars'},
                ],
                layout: 'radio',
            }
        },
    ],
}