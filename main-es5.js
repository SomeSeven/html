(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Domenico\Desktop\Dropper\Sviluppo\Dropper_Dashboard\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "47Jg":
    /*!**********************************************!*\
      !*** ./src/app/sidebar/sidebar.component.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES, SidebarComponent */

    /***/
    function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "zvoc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'nc-bank',
        "class": ''
      }, {
        path: '/icons',
        title: 'Live',
        icon: 'nc-watch-time',
        "class": ''
      }, {
        path: '/maps',
        title: 'Analytics',
        icon: 'nc-chart-bar-32',
        "class": ''
      }, {
        path: '/notifications',
        title: 'Reports',
        icon: 'nc-chart-pie-36',
        "class": ''
      }, {
        path: '/user',
        title: 'My places',
        icon: 'nc-layout-11',
        "class": ''
      }, {
        path: '/table',
        title: 'Settings',
        icon: 'nc-settings-gear-65',
        "class": ''
      }, {
        path: '/typography',
        title: 'Typography',
        icon: 'nc-caps-small',
        "class": ''
      }];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuItems = ROUTES.filter(function (menuItem) {
              return menuItem;
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SidebarComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AK6u":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AK6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: env */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "env", function () {
        return env;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var env = {
        production: false,
        host: "localhost",
        protocol: "http://",
        port: 3000
      };
      /***/
    },

    /***/
    "CpO+":
    /*!************************************************!*\
      !*** ./src/app/shared/navbar/navbar.module.ts ***!
      \************************************************/

    /*! exports provided: NavbarModule */

    /***/
    function CpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
        return NavbarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar.component */
      "EtQq");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NavbarModule = function NavbarModule() {
        _classCallCheck(this, NavbarModule);
      };

      NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
      })], NavbarModule);
      /***/
    },

    /***/
    "EtQq":
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function EtQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "zRkE");
      /* harmony import */


      var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar.component.css */
      "cIR/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, renderer, element, router) {
          _classCallCheck(this, NavbarComponent);

          this.renderer = renderer;
          this.element = element;
          this.router = router;
          this.isCollapsed = true;
          this.location = location;
          this.nativeElement = element.nativeElement;
          this.sidebarVisible = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(function (listTitle) {
              return listTitle;
            });
            var navbar = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
            this.router.events.subscribe(function (event) {
              _this.sidebarClose();
            });
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(1);
            }

            for (var item = 0; item < this.listTitles.length; item++) {
              if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
              }
            }

            return 'Dashboard';
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            if (this.sidebarVisible === false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            html.classList.add('nav-open');

            if (window.innerWidth < 991) {
              mainPanel.style.position = 'fixed';
            }

            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];

            if (window.innerWidth < 991) {
              setTimeout(function () {
                mainPanel.style.position = '';
              }, 500);
            }

            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            html.classList.remove('nav-open');
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
            var navbar = document.getElementsByTagName('nav')[0];
            console.log(navbar);

            if (!this.isCollapsed) {
              navbar.classList.remove('navbar-transparent');
              navbar.classList.add('bg-white');
            } else {
              navbar.classList.add('navbar-transparent');
              navbar.classList.remove('bg-white');
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            sessionStorage.clear();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      NavbarComponent.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["navbar-cmp", {
            "static": false
          }]
        }]
      };
      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], NavbarComponent);
      /***/
    },

    /***/
    "GPE2":
    /*!************************************************************!*\
      !*** ./src/app/interceptors/authentication.interceptor.ts ***!
      \************************************************************/

    /*! exports provided: AuthenticationInterceptor */

    /***/
    function GPE2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationInterceptor", function () {
        return AuthenticationInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AuthenticationInterceptor = /*#__PURE__*/function () {
        function AuthenticationInterceptor(router) {
          _classCallCheck(this, AuthenticationInterceptor);

          this.router = router;
        }
        /**
         * Add an authorization header with basic authorization credentials to every
         * request.
         */


        _createClass(AuthenticationInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this2 = this;

            if (!localStorage.getItem('auth-token')) {
              this.router.navigate(['login']);
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              if (error.status === 401) {
                _this2.router.navigate(['login']);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
              } else if (error.status === 403) {
                _this2.router.navigate(['login']);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return AuthenticationInterceptor;
      }();

      AuthenticationInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AuthenticationInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AuthenticationInterceptor);
      /***/
    },

    /***/
    "HwRG":
    /*!***************************************************!*\
      !*** ./src/app/services/fetch-from-db.service.ts ***!
      \***************************************************/

    /*! exports provided: FetchFromDBService */

    /***/
    function HwRG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FetchFromDBService", function () {
        return FetchFromDBService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");
      /* harmony import */


      var _layouts_login_layout_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../layouts/login-layout/user.model */
      "y6iV");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FetchFromDBService = /*#__PURE__*/function () {
        function FetchFromDBService(http) {
          _classCallCheck(this, FetchFromDBService);

          this.http = http; //questo url andrà poi nascosto

          this.login_api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["env"].protocol + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["env"].host + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["env"].port + "/api/user/login";
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["env"].protocol + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["env"].host + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["env"].port + "/posts";
          this.items = [];
          this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        } //map


        _createClass(FetchFromDBService, [{
          key: "getConfig",
          value: function getConfig() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
            });
            return this.http.get(this.url, {
              headers: headers
            });
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this3 = this;

            return this.http.post(this.login_api_url, {
              email: username,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resData) {
              var user = new _layouts_login_layout_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](resData.authToken);

              _this3.user.next(user);

              localStorage.setItem('auth-token', resData.authToken);
            }));
          }
        }]);

        return FetchFromDBService;
      }();

      FetchFromDBService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      };

      FetchFromDBService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], FetchFromDBService);
      /*getConfig() : Observable<Occupancy[]> {
      
            return this.http.get<Occupancy[]>(this.url);*/

      /***/
    },

    /***/
    "IUb6":
    /*!******************************************************************!*\
      !*** ./src/app/layouts/login-layout/login-layout.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function IUb6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body {\n  background: #0F4C81;\n  overflow: hidden;\n  color: white;\n  height: 100%;\n}\n\nform {\n  width: 24vw;\n  margin: 100px auto 0;\n  text-align: center;\n  padding: 1vw;\n  background: #ffffff60;\n  border-radius: 1vw;\n}\n\nimg {\n  width: 10vw;\n  margin: 1vw;\n}\n\n.form-control {\n  margin: 15px 0;\n}\n\n.btn {\n  margin-top: 25px;\n}\n\n.wrapper {\n  height: 77vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9sb2dpbi1sYXlvdXQvbG9naW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFDRSxrQkFBQTtFQUNGLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBRUksZ0JBQUE7QUFBSjs7QUFFQTtFQUVJLFlBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbG9naW4tbGF5b3V0L2xvZ2luLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzBGNEM4MTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBcclxufVxyXG5mb3Jte1xyXG4gICAgd2lkdGg6IDI0dnc7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG8gXHJcbiAgICAwO3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDF2dztcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY2MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDF2dztcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBtYXJnaW46IDF2dztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uYnRuXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLndyYXBwZXJcclxue1xyXG4gICAgaGVpZ2h0OiA3N3ZoO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "P6kD":
    /*!****************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
      \****************************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function P6kD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "AK6u");
      /* harmony import */


      var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-layout.component.scss */
      "vtrx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent() {
          _classCallCheck(this, AdminLayoutComponent);
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminLayoutComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_fetch_from_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/fetch-from-db.service */
      "HwRG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sidebar/sidebar.module */
      "wCP4");
      /* harmony import */


      var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/footer/footer.module */
      "cNqA");
      /* harmony import */


      var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/navbar/navbar.module */
      "CpO+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./layouts/login-layout/login-layout.component */
      "hMFs");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _interceptors_authentication_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./interceptors/authentication.interceptor */
      "GPE2");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"], _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_13__["LoginLayoutComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_11__["AppRoutes"]
        /*,{
        useHash: true
        }*/
        ), _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(), _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_authentication_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthenticationInterceptor"],
          multi: true
        }, _services_fetch_from_db_service__WEBPACK_IMPORTED_MODULE_1__["FetchFromDBService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutes */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layouts/login-layout/login-layout.component */
      "hMFs");

      var AppRoutes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [{
          path: '',
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }]
      }, {
        path: 'login',
        component: _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_1__["LoginLayoutComponent"]
      }, {
        path: '**',
        redirectTo: 'dashboard' //Redirects 404

      }];
      /***/
    },

    /***/
    "cIR/":
    /*!****************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.css ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function cIR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".navbar-img{\r\n    width: 50px;\r\n    border-radius: 100%;\r\n}\r\n\r\n#collapseExample > *{\r\n\tmargin-right: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1pbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbiNjb2xsYXBzZUV4YW1wbGUgPiAqe1xyXG5cdG1hcmdpbi1yaWdodDogMWVtO1xyXG59Il19 */";
      /***/
    },

    /***/
    "cNqA":
    /*!************************************************!*\
      !*** ./src/app/shared/footer/footer.module.ts ***!
      \************************************************/

    /*! exports provided: FooterModule */

    /***/
    function cNqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer.component */
      "jQpT");

      var FooterModule = function FooterModule() {
        _classCallCheck(this, FooterModule);
      };

      FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
      })], FooterModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports, __webpack_require__) {
      var map = {
        "./layouts/admin-layout/admin-layout.module": ["IqXj", "layouts-admin-layout-admin-layout-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "crnd";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "hMFs":
    /*!****************************************************************!*\
      !*** ./src/app/layouts/login-layout/login-layout.component.ts ***!
      \****************************************************************/

    /*! exports provided: LoginLayoutComponent */

    /***/
    function hMFs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function () {
        return LoginLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login-layout.component.html */
      "x/op");
      /* harmony import */


      var _login_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-layout.component.scss */
      "IUb6");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_fetch_from_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/fetch-from-db.service */
      "HwRG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginLayoutComponent = /*#__PURE__*/function () {
        function LoginLayoutComponent(authService, router) {
          _classCallCheck(this, LoginLayoutComponent);

          this.authService = authService;
          this.router = router;
          this.error = null;
        }

        _createClass(LoginLayoutComponent, [{
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this4 = this;

            if (!form.valid) return;
            var user = form.value.username;
            var password = form.value.password;
            this.authService.login(user, password).subscribe(function (res) {
              _this4.error = null;
              console.log(res);

              _this4.router.navigate(['/dashboard']);
            }, function (error) {
              _this4.error = error.error;
              console.log(error);
            });
            form.reset();
          }
        }]);

        return LoginLayoutComponent;
      }();

      LoginLayoutComponent.ctorParameters = function () {
        return [{
          type: _services_fetch_from_db_service__WEBPACK_IMPORTED_MODULE_4__["FetchFromDBService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      LoginLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-login-layout',
        template: _raw_loader_login_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_fetch_from_db_service__WEBPACK_IMPORTED_MODULE_4__["FetchFromDBService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], LoginLayoutComponent);
      /***/
    },

    /***/
    "jGP6":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function jGP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.doc.dropper.ai\">\n                        Documentation\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://blog.dropper.ai\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://dropper.ai/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"https://www.dropper.ai\">Dropper</a> -  All Rights Reserved.\n        </div>\n    </div>\n</footer>\n";
      /***/
    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "jGP6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.test = new Date();
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "vtrx":
    /*!******************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function vtrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wCP4":
    /*!*******************************************!*\
      !*** ./src/app/sidebar/sidebar.module.ts ***!
      \*******************************************/

    /*! exports provided: SidebarModule */

    /***/
    function wCP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
        return SidebarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar.component */
      "47Jg");

      var SidebarModule = function SidebarModule() {
        _classCallCheck(this, SidebarModule);
      };

      SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
      })], SidebarModule);
      /***/
    },

    /***/
    "x/op":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/login-layout/login-layout.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Login - Dropper</title>\r\n</head>\r\n        <body>\r\n            <div class=\"wrapper\">\r\n            <form #authForm = \"ngForm\" (ngSubmit)=\"onSubmit(authForm)\">\r\n                <img src=\"../../../assets/img/Logo_dropper_nobg.png\" alt=\"Dropper Logo\">\r\n                <div class = \"alert alert-danger \" *ngIf=\"error\">\r\n                    {{error}}\r\n                </div>\r\n                <input class=\"form-control\"  \r\n                type=\"text\" \r\n                id=\"inputUsername\" \r\n                placeholder=\"Username\"\r\n                ngModel\r\n                name=\"username\" \r\n                required/>\r\n                <input class=\"form-control\"  \r\n                type=\"password\" \r\n                id=\"inputPassword\"\r\n                placeholder=\"Password\"\r\n                ngModel\r\n                name=\"password\" \r\n                required\r\n                minlength=\"6\"\r\n                 />\r\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" \r\n                [disabled]=\"!authForm.valid\">\r\n                Log in</button>\r\n            </form>\r\n            </div>\r\n        </body> \r\n        <footer-cmp></footer-cmp> \r\n</html>\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "y6iV":
    /*!****************************************************!*\
      !*** ./src/app/layouts/login-layout/user.model.ts ***!
      \****************************************************/

    /*! exports provided: User */

    /***/
    function y6iV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = /*#__PURE__*/function () {
        function User(_token) {
          _classCallCheck(this, User);

          this._token = _token;
        }

        _createClass(User, [{
          key: "token",
          get: function get() {
            //if (this._token) se non è già scaduto.
            return this._token;
          }
        }]);

        return User;
      }();
      /***/

    },

    /***/
    "zRkE":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function zRkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-toggle\">\r\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n      </div>\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n    </div>\r\n    \r\n    <!--Bisogna allineare questo p a destra quando lo schermo è in dimensione lg o maggiore-->\r\n\r\n    <!--Fine-->\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n<!--       <form>\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <div class=\"input-group-append\">\r\n            <div class=\"input-group-text\">\r\n              <i class=\"nc-icon nc-zoom-split\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form> -->\r\n      <ul class=\"navbar-nav\">\r\n        \r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\r\n            <i class=\"nc-icon nc-layout-11\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Stats</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\" >\r\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\r\n            <i class=\"nc-icon nc-bell-55\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n            </p>\r\n          </a>\r\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Action</a>\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Another action</a>\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Something else here</a>\r\n          </div>\r\n        </li>\r\n\r\n        <li class =\"nav-item \" ngbDropdown placement =\"bottom-left\">\r\n          <div>\r\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbar\" >\r\n            <div style=\"float:left; padding-right:10px;\">        \r\n              \r\n                <p class=\"text-muted\">\r\n                  Welcome Back,\r\n                </p>\r\n                <div class=\"typography-line\">\r\n                  <h6>TWENTYMILES</h6>\r\n                </div>\r\n              </div>\r\n           <img src=\"../../../assets/img/mike.jpg\" class=\"navbar-img\" style=\"width: 40px; \"alt=\"\">\r\n          \r\n           </a>\r\n          </div>\r\n           <div ngbDropdownMenu aria-labelledby=\"navbar\" class=\"dropdown-menu dropdown-menu-right\">\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Dashboard</a>\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Profile</a>\r\n            <a ngbDropdownItem (click)=\"logout()\" routerLink=\"/login\">Logout</a>\r\n          </div>\r\n        </li>\r\n<!--         <li class=\"nav-item\">\r\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\r\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Account</span>\r\n            </p>\r\n          </a>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /*!
      
      =========================================================
      * Paper Dashboard Angular - v2.1.0
      =========================================================
      
      * Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
      * Copyright 2019 Creative Tim (https://www.creative-tim.com)
      * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)
      
      * Coded by Creative Tim
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["env"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    "zvoc":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function zvoc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a href=\"https://www.dropper.ai\" class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\">\n        <img src=\"assets/img/dropperlogo.png\">\n      </div>\n    </a>\n    <a href=\"https://www.dropper.ai\" class=\"simple-text logo-normal\">\n      Dropper\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map