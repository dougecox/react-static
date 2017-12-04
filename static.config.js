import axios from 'axios'

export default {
  getSiteProps: () => ({
    title: 'developer douggie',
  }),
  paths: {
    src: './src/', // The source directory. Must include an index.js entry file.
    dist: 'https://dougecox.github.io/static-site', // The production output directory.
    devDist: 'dist', // The development scratch directory.
    public: './dist', // The public directory (files copied to dist during build)
  },
  siteRoot: 'https://dougecox.github.io/static-site',
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
