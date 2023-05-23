/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { muxInput } from 'sanity-plugin-mux-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, projectId } from './sanity/env'
import schemaTypes from './sanity/schema/'


export default defineConfig({
  basePath: '/studio',
  title: 'Streamify Studio',
  projectId: "zduri0t6",
  dataset: "production",
  apiVersion: "2023-05-22",
  // Add and edit the content schema in the './sanity/schema' folder
  schema: { types: schemaTypes },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    muxInput({mp4_support: 'standard'})
  ],
})
