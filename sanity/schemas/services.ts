export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service title',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'ImageURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
