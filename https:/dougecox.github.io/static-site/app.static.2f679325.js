(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(4);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(6);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'span',
          { style: { padding: '1em', margin: '2em' } },
          ' Douglas Eldon Cox '
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { className: 'navLink', to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { className: 'navLink', to: '/about' },
          'About'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { className: 'navLink', to: '/blog' },
          'Blog'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'content', style: { margin: '0', padding: '0' } },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _Home = __webpack_require__(8);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(10);

var _About2 = _interopRequireDefault(_About);

var _ = __webpack_require__(11);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var templateMap = {
  t_0: _Home2.default,
  t_1: _About2.default,
  t_2: _2.default
};
var templateTree = { c: { "404": { t: "t_2" }, "/": { t: "t_0" }, "about": { t: "t_1" } } };

var getTemplateForPath = function getTemplateForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Template = getTemplateForPath(props.location.pathname);
          if (!Template) {
            Template = getTemplateForPath('404');
          }
          return Template && _react2.default.createElement(Template, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _logo = __webpack_require__(9);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


// import { Projectss } from './Projects.js'
var hrprojects = [{ title: 'Toss.it!',
  description: 'A blind bidding auction site based on donations. a progressive web application with micro-services chron jobs setup with docker, and authentication',
  link: 'http://bit.ly/toss-it-io',
  linkSource: 'aws'
}, { title: 'Viator',
  description: 'Travel assistand and organization application. fetch geoLocation data, Material-UI card component layout with travel info',
  link: 'viator-production.herokuapp.com',
  linkSource: 'heroku'
}, { title: 'Simply Recipes Application',
  description: 'Reciepe app finder based on current ingredients. api calls to, material-ui layouts, and json to html rendering',
  link: 'infamousfrogs75-production.herokuapp.com',
  linkSource: 'heroku'
}];
var projects = [{ title: 'Promises',
  description: 'Example of promises understanding, asyc file reading and url request',
  link: 'https://github.com/dougecox/promises/blob/master/exercises/bare_minimum/promiseConstructor.js',
  linkSource: 'Github',
  category: 'server'
}, { title: 'Knex',
  description: 'Example from Toss It! Application of populating database with profiles',
  link: 'https://github.com/dougecox/PoisedPlates/blob/master/db/seeds/05_profile_bids.js',
  linkSource: 'Github',
  category: 'database'
}, { title: 'Api Code',
  description: 'Sample code written to interact with React Router to interact with api and database updates',
  link: 'https://github.com/dougecox/PoisedPlates/blob/master/server/routes/api.js#L27-L68',
  linkSource: 'Github',
  category: 'server'
}, { title: 'React and Redux',
  description: 'Made an account page to display users auctions and bids, with Material UI.',
  link: 'https://github.com/dougecox/PoisedPlates/blob/master/client/src/containers/AuctionPage.js',
  linkSource: 'Github',
  category: 'client'
}, { title: 'Api Call',
  description: 'Request for users GeoCoordinates',
  link: 'https://github.com/infamousfrogs/Viator/blob/master/server/index.js#L111-L123',
  linkSource: 'Github',
  category: 'server'
}, { title: 'React Logic',
  description: 'Code written to encapsulate logical progression to ensure user filled in all fields before continuing. Prior the user could skip a step and then cards in the ui wouldn’t work',
  link: 'https://github.com/infamousfrogs/Viator/blob/master/react-client/src/components/NewTrip.jsx#L69-L86',
  linkSource: 'Github',
  category: 'client'
}, { title: 'React component',
  description: 'A grid list of recipes',
  link: 'https://github.com/dougecox/infamousfrogs/blob/master/react-client/src/components/RecipesView.jsx',
  linkSource: 'Github',
  category: 'client'
}, { title: 'Database Schema design',
  description: 'Layout for the blind auction and its database schema',
  link: 'https://drive.google.com/file/d/0B3E9RuEFVYICYjc2TEt5ZmlXV0U/view?usp=sharing',
  linkSource: 'googleDrive',
  category: 'database'
}, { title: 'Wireframe',
  description: 'Sample of the wire frame used for the photo upload ',
  link: 'https://drive.google.com/file/d/0BwdSEWNDnxC8ajVCd3NhVjFVdVk/view?usp=sharing',
  linkSource: 'googleDrive',
  category: 'other'
}];
var icons = [{

  img: 'img1',
  imgUrl: 'https://linkedin.com/in/dougecox',
  name: 'LinkedIn' }, {
  img: 'img2',
  imgUrl: 'https://github.com/dougecox',
  name: 'GitHub' }, {
  img: 'img3',
  imgUrl: 'http://appanda.co',
  name: 'appanda' }];

var Projects = function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects(props) {
    _classCallCheck(this, Projects);

    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

    _this.state = {
      title: _this.props.title,
      link: _this.props.link,
      description: _this.props.description,
      image: _this.props.image,
      style: _this.props.style };
    return _this;
  }

  _createClass(Projects, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'cards',
          style: {
            border: '1px solid black',
            margin: '2%',
            padding: 'auto',
            color: 'black',
            borderRadius: '8px' }
        },
        _react2.default.createElement(
          'a',
          { href: this.state.link, target: '_blank', rel: 'nofollow' },
          _react2.default.createElement(
            'span',
            {
              className: 'title',
              style: {
                color: 'white',
                padding: '1em' }
            },
            this.state.title
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            {
              className: 'description',
              style: { margin: 'auto',
                background: '#1fc4a0',
                padding: '3%',
                borderRadius: '13px',
                color: 'darkslategrey' }
            },
            'Description: ',
            this.state.title,
            _react2.default.createElement('br', null),
            this.state.description
          )
        )
      );
    }
  }]);

  return Projects;
}(_react2.default.Component);

exports.default = (0, _reactStatic.getSiteProps)(function () {
  return _react2.default.createElement(
    'div',
    { className: 'main' },
    _react2.default.createElement(
      'div',
      { className: 'title' },
      _react2.default.createElement(
        'h1',
        { style: { textAlign: 'left',
            fontSize: '5em',
            margin: 'auto',
            padding: '0.5em',
            animationName: 'fadeInleft',
            color: 'grey',
            display: 'flex', //
            height: 'auto',
            backgroundImage: 'url("https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?auto=format&fit=crop&w=967&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover' }
        },
        _react2.default.createElement(
          'span',
          { className: 'fullStack' },
          'Full Stack ',
          _react2.default.createElement('br', null),
          ' Developer '
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'pageTwo', style: { background: 'grey', margin: '0', padding: '3%', width: 'auto', display: 'flex' } },
      'Projects:',
      _react2.default.createElement('br', null),
      _react2.default.createElement('hr', null),
      _react2.default.createElement('br', null),
      hrprojects.map(function (project) {
        return _react2.default.createElement(Projects, {
          key: project.title,
          title: project.title,
          img: project.image,
          link: project.link,
          description: project.description,
          style: {
            margin: '30%',
            padding: '20%',
            color: 'white',
            backgroundColor: '#1fc4a0' }
        });
      })
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'sectionThree',
        style: {
          background: 'grey',
          width: 'auto',
          padding: '7px' }
      },
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'span',
        {
          className: 'category',
          onClick: function onClick() {
            var e = document.getElementsByClassName('client')[0];
            if (e.style.display == 'block') {
              e.style.display = 'none';
            } else {
              e.style.display = 'block';
            }
          } },
        'ClientSide Javascript'
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'div',
        { className: 'client', style: { display: 'block' } },
        projects.filter(function (project) {
          return project.category === 'client';
        }).map(function (project) {
          return _react2.default.createElement(
            'a',
            { href: project.link, key: project.title, style: { color: 'black', lineHeight: '1', float: 'left', position: 'relative', left: '30px', padding: '1%' } },
            project.title,
            ': \xA0',
            _react2.default.createElement(
              'span',
              { className: 'description', style: { color: '#1fc4a0' } },
              'description: ',
              project.description
            ),
            _react2.default.createElement('br', null)
          );
        })
      )
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'sectionThree',
        style: {
          background: 'grey',
          width: 'auto',
          padding: '7px',
          clear: 'left' }
      },
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'span',
        {
          className: 'category',
          onClick: function onClick() {
            var e = document.getElementsByClassName('server')[0];
            if (e.style.display == 'block') {
              e.style.display = 'none';
            } else {
              e.style.display = 'block';
            }
          } },
        'Serverside Javascript'
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'span',
        { className: 'server', style: { display: 'block' } },
        projects.filter(function (project) {
          return project.category === 'server';
        }).map(function (project) {
          return _react2.default.createElement(
            'a',
            { href: project.link, key: project.title, style: { color: 'black', lineHeight: '1', float: 'left', position: 'relative', left: '30px', padding: '1%' } },
            project.title,
            ': \xA0',
            _react2.default.createElement(
              'span',
              { className: 'description', style: { color: '#1fc4a0' } },
              'description: ',
              project.description
            ),
            _react2.default.createElement('br', null)
          );
        })
      )
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'sectionThree',
        style: {
          background: 'grey',
          width: 'auto',
          padding: '7px',
          clear: 'left' }
      },
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'span',
        {
          className: 'category',
          onClick: function onClick() {
            var e = document.getElementsByClassName('data')[0];
            if (e.style.display == 'block') {
              e.style.display = 'none';
            } else {
              e.style.display = 'block';
            }
          } },
        'Database and Wireframes'
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'span',
        { className: 'data', style: { display: 'block' } },
        projects.filter(function (project) {
          return project.category === 'other' || project.category === 'database';
        }).map(function (project) {
          return _react2.default.createElement(
            'a',
            { href: project.link, key: project.title, style: { color: 'black', lineHeight: '1', float: 'left', position: 'relative', left: '30px', padding: '1%' } },
            project.title,
            ': \xA0',
            _react2.default.createElement(
              'span',
              { className: 'description', style: { color: '#1fc4a0' } },
              'description: ',
              project.description
            ),
            _react2.default.createElement('br', null)
          );
        })
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      {
        className: 'footer',
        style: {
          clear: 'left',
          backgroundColor: 'grey',
          margin: 'auto',
          display: 'flex',
          padding: '2%',
          flex: '1',
          marginTop: '-50px' }
      },
      icons.map(function (icon) {
        return _react2.default.createElement(
          'a',
          { className: 'icons', key: icon.name, href: icon.imgUrl, target: '_blank', rel: 'nofollow' },
          ' ',
          _react2.default.createElement(
            'i',
            { className: icon.iconClass, id: icon.name, 'aria-hidden': 'true' },
            '  ',
            icon.name,
            '      \xA0| \xA0 '
          )
        );
      })
    )
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.5b9a7a21.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _profile = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../static-site/site/profile.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      {
        className: 'meDescription',
        style: {
          width: '65%',
          float: 'left',
          margin: '4%',
          padding: '0' }
      },
      _react2.default.createElement(
        'p',
        null,
        'I\'m a full stack developer and entrepreneur based in San Francisco, California. As a military brat i\'ve spend time in other countries, but consider my self raised in the mid-west. My past career experience was in ad tech, doing ad operations for agencies most recently. Where i would work with complex systems and try to fit coding into my where possible, automation, scrapping, fun and learning. Recently i graduated from Hack Reactor a full stack software immersive boot camp focus on javascript. I\'m a full stack developer and entrepreneur based in San Francisco, California. As a military brat i\'ve spend time in other countries, but consider my self raised in the mid-west. My past career experience was in ad tech, doing ad operations for agencies most recently. Where i would work with complex systems and try to fit coding into my where possible, automation, scrapping, fun and learning. Languages and Frameworks: Javascript, HTML5, CSS3, jQuery, AngularJS'
      )
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'meImage',
        style: {
          width: '25%',
          float: 'left' }
      },
      _react2.default.createElement('img', { src: _profile2.default, alt: '' })
    )
  );
};
//

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.2f679325.js.map