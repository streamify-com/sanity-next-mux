const videoUpload = {
  title: 'Videos',
  name: 'videoUpload',
  type: 'document',
  fields: [
    {
      title: 'Title', 
      name: 'title', 
      type: 'string'
    },
    {
      title: 'Upload',
      name: 'video',
      type: 'mux.video',
    },
    {
      name: "slug",
      title: "Asset ID",
      type: "slug",
      options: { source: "title" }
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: "content",
      title: "Blog post",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
}

export default videoUpload;