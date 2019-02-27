## react-start-app

### React scaffolding based on Ant Design, out of the box

> A React start project


## Technology stack

*  React16
*  Webpack 4.x

## characteristic
*  :gem: based on React，Ant Design，dva Best practices such as enterprise-level back-end management systems.
*  :nail_care: based on CSS Module Style solution.
*  :airplane: based on Dynamically load models and routes, loaded on demand.
*  :rocket: based on webpack4.x Local debugging and build.
*  :iphone: Responsive design.
*  :triangular_ruler: Eslint && husky Uniform code specification.

## Extra libs
* enquire-js : http://wicky.nillia.ms/enquire.js/
    - enquire.js is a lightweight, pure JavaScript library for responding to CSS media queries.
* lodash-decorators : https://github.com/steelsojka/lodash-decorators#readme
    - Decorators using lodash functions.
* omit.js : https://github.com/DamonOehlman/omit
    - Efficient ommission of object data based on keys, values and evaluator functions 
* rc-drawer : https://github.com/react-component/drawer
    - Drawer (collapsible) component in React
* react-container-query : https://github.com/d6u/react-container-query 
    - True modularity in styling responsive component.
* react-document-title : https://github.com/gaearon/react-document-title
    - Provides a declarative way to specify document.title in a single-page app. This component can be used on server side as well.    
* react-loadable : https://github.com/jamiebuilds/react-loadable
    - A higher order component for loading components with promises.

### dev tools
* Husky : https://github.com/typicode/husky#readme
    - Git hooks made easy
* redbox-react : https://github.com/commissure/redbox-react
    - The red box (aka red screen of death) renders an error in this “pretty” format:
* speed-measure-webpack-plugin : https://github.com/stephencookdev/speed-measure-webpack-plugin
    - See how fast (or not) your plugins and loaders are, so you can optimise your builds 
* thread-loader : https://github.com/webpack-contrib/thread-loader
    - 
* webpack-merge : https://github.com/survivejs/webpack-merge
    - provides a merge function that concatenates arrays and merges objects creating a new object. If functions are encountered, it will execute them, run the results through the algorithm, and then wrap the returned values within a function again.      

## Development and construction

### Directory Structure

```bash
├── /dist/           # Project output directory
├── /src/            # Project source directory
│ ├── /assets/       # Image resource
│ ├── /common/       # Public profile, menu, routing
│ │ ├── munu.js      # Sidebar menu configuration
│ │ └── router.js    # Routing configuration
│ ├── /components/   # UI component
│ ├── /layouts/      # Layout component
│ ├── /routes/       # Page component
│ ├── /models/       # Data model
│ ├── /services/     # Data interface
│ ├── /utils/        # Tool function
│ │ ├── authority.js # Permission tool function
│ │ ├── Authorized.js # Rights Profile
│ │ ├── utils.js     # Tool function
│ │ ├── request.js   # Asynchronous request function
│ │ └── utils.less   # Tool style
│ ├── route.js       # Routing entry
│ ├── index.js       # Entry file
│ ├── themes.js      # Custom antd theme variable
│ └── index.html
├── postcss.config.js # Postcss configuration
├── package.json     # Project dependence
├── .eslintrc        # ESlint configuration
└── .babelrc         # Babel configuration
```

### Quick start

Clone project file:

```bash
git clone https://github.com/jyotirmaybanerjee/alibaba.git
```
Recommended Use[react-start-cli](https://github.com/jyotirmaybanerjee/alibaba)Initialization project：

```bash
npm install react-start-cli -g

react-start-cli init [projectName]
```


Enter directory to install dependencies:

```bash
#For Personal uses recommend yarn or cnpm
npm i or yarn install
```

Development：

```bash
npm start
```

Construct：

```bash
npm run build
```
