export default {
  name: 'banner',
  type: 'document',
  title: 'Banner',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'hero title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'hero subtitle',
    },
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
