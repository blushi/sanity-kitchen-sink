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
                  buildHookId: '60f6add3dc00e6d19cfc5c04',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jvvd7uzp',
                  apiId: 'de6e5f37-53de-4a19-93a5-a8091a4bcf86'
                },
                {
                  buildHookId: '60f6add31181e0c63ca3725a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-155ei6mo',
                  apiId: '145254d1-84b5-4a24-a665-bd3eff95424f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blushi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-155ei6mo.netlify.app', category: 'apps'}
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
