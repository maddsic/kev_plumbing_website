export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the about section',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle of the about section',
    },
    {
      name: 'description',
      type: 'array',
      title: 'description of the about section',
      of: [{type: 'block'}],
    },
    {
      name: 'listContent',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'listDescription',
      type: 'array',
      title: 'List description of the about section',
      of: [{type: 'block'}],
    },
    {
      name: 'profileImg',
      type: 'image',
      title: 'ProfileImg',
      options: {
        hotspot: true,
      },
    },
  ],
}
