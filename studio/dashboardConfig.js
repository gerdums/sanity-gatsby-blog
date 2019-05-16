export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5cdcc9994ef470bd93872b6c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yjebr5v7',
                  apiId: '21fad3ee-f9d5-4a0f-bfbb-e12e58a2c488'
                },
                {
                  buildHookId: '5cdcc9995c68ba772e66255e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wmvt25du',
                  apiId: 'd2894eee-4029-40b2-ba99-629e51dc7c72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gerdums/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wmvt25du.netlify.com', category: 'apps'}
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
