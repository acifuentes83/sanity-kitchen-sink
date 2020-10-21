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
                  buildHookId: '5f9064a30a79c310e985786f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dro3p3eo',
                  apiId: 'ed51e54d-08ee-45e4-a135-e2e196271fda'
                },
                {
                  buildHookId: '5f9064a3e562b30c3678db0b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-exsvupqf',
                  apiId: '5e6d62b9-f49e-4a36-b337-1434f0b06ee8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/acifuentes83/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-exsvupqf.netlify.app', category: 'apps'}
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
