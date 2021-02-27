export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603a172e79b14eb66a97147a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qnrubtwp',
                  apiId: 'e50611f8-ce44-406f-b8cc-87a5d559ed4b'
                },
                {
                  buildHookId: '603a172e060121b55e5367c7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a8x6f8ga',
                  apiId: 'dc1a7e3e-bf54-4a3e-84c4-3733a772a534'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krzysiok/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a8x6f8ga.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
