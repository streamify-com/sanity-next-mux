const videoUpload = {
  title: 'Video Upload',
  name: 'videoUpload',
  type: 'document',
  fields: [
    {title: 'Title', name: 'title', type: 'string'},
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    },
  ]
}

export default videoUpload;