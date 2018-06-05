(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" main-container\">\n  <app-home></app-home>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div id=\"carouselExampleIndicators\" class=\"carousel slide animated fadeIn fast\" data-ride=\"carousel\" >\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100 h-50\" src=\"assets/img/muestra.jpg\" alt=\"logoSello\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100 h-50\" src=\"assets/img/eventos.png\" alt=\"eventosRecogidas\">\n      <div class=\"carousel-caption d-md-block\" >\n          <h5 class=\"alpha60\">Pulsa <a href=\"#eventos\" style=\"color:#a1cd9b\">aquí</a> para informarte sobre nuestros eventos</h5>\n        </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/img/suela.png\" alt=\"Third slide\">\n      <div class=\"carousel-caption d-md-block\">\n          <h5 class=\"alpha60\">Pulsa <a href=\"#info\" style=\"color:#a1cd9b\">aquí</a> para ver las consecuencias del consumo de plástico</h5>\n\n        </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"logos\" style=\"margin-top:1%;\">\n  <img class=\"logo1\" src=\"assets/img/twitter.png\"  alt=\"...\">\n  <img class=\"logo1\" src=\"assets/img/insta.png\"  alt=\"...\">\n  <img class=\"logo1\" src=\"assets/img/email.png\"  alt=\"...\">\n</div>\n\n\n\n<div class=\"row top-m animated fadeIn fast\" >\n  <div class=\"col align-self-center text-center eco quien\">\n    <h2>¿Quiénes somos?</h2>\n  </div>\n  <div class=\"col def\">\n    <p class=\"text-center\">Somos la conexión entre el problema mediomental en el mar y el mundo empresarial como solución.</p>\n  </div>\n</div>\n\n  <div class=\"row top-m\">\n\n    <div class=\"col defizq\">\n      <p class=\"text-center\">Uno de los materiales que mas contaminan en la actualidad es el plástico, las pruebas están a disposición de cualquiera: Islas de plástico, animales atrapados en piezas de este material o incluso que mueren tras ingerirlos. </p>\n\n    </div>\n    <div class=\"col align-self-center text-center eco quiender\">\n      <h2>¿Por qué?</h2>\n    </div>\n</div>\n\n<div class=\"row top-m\">\n  <div class=\"col align-self-center text-center eco quien\">\n    <h2>¿Cómo?</h2>\n  </div>\n  <div class=\"col def\">\n    <p class=\"text-center\">Ofrecemos a las empresas una herramienta para que puedan involucrarse en esta causa. Conectamos este problema con marcas dispuestas a incorporar en su cadena productiva componentes hechos con plástico reciclado. Como bonificación se les concede el sello “Save the Sea” que les diferencia como marcas eco friendly.</p>\n\n  </div>\n</div>\n\n<div class=\"marginsLateral animated fadeIn fast\">\n<h2 class=\"text-center top-5\">Marcas <img src=\"assets/img/SAVE THE SAVE.png\" alt=\"\" style=\"width:4%\"> Certificadas</h2>\n<hr>\n<div class=\"row text-center top-m\">\n  <div class=\"col\">\n    <img src=\"assets/img/barqet.png\" alt=\"\" style=\"width:40%\">\n  </div>\n  <div class=\"col\">\n    <img src=\"assets/img/muroexe.png\" alt=\"\" style=\"width:40%\">\n  </div>\n  <div class=\"col\">\n    <img src=\"assets/img/pompeii.png\" alt=\"\" style=\"width:40%\">\n  </div>\n\n</div>\n\n</div>\n\n\n<div class=\"marginsLateral animated fadeIn fast\" >\n<h1 class=\"text-center top-5 verde\" id=\"eventos\">Eventos</h1>\n<hr>\n</div>\n\n<div class=\"row\" style=\"margin-left: 3%;margin-right: 3%;\">\n\n<div class=\"col-sm-4 bottom1 animated fadeIn fast\" *ngFor=\"let item of listadoEventosfotos;let i =index;\">\n  <div class=\"card text-center\">\n    <div class=\"card-header\">\n      <img [src]=\"listadoEventosfotos[i]\" alt=\"fotoplaya\" style=\"width:100%;\">\n    </div>\n    <div class=\"card-body\">\n      {{listadoEventosDescripcion[i]}}\n    </div>\n    <div class=\"card-footer text-muted\" >\n      {{listadoEventosFechas[i]}}\n    </div>\n  </div>\n\n</div>\n</div>\n\n<div class=\"marginsLateral\">\n  <h1 class=\"text-center top-5 verde\" id=\"info\">Sumergete en el problema</h1>\n  <hr>\n  <div class=\"text-center\">\n    <iframe class=\"video\" src=\"https://www.youtube.com/embed/WhEFRNrvDjI\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.listadoEventosDescripcion = [
            "El ayuntamiento de Avilés, Asturias, ha organizado una batida para limpiar sus playas antes del Long Board Festival. Esta iniciativa intenta concienciar a los asistentes para que estos, reciclen los residuos durante el evento.",
            "Escuela en la playa de Vizcaya. Animamos a los colegios a contactar con nosotros para organizar talleres de concienciación ecológica.",
            "Programa de implantación de contenedores de reciclaje en las playas."
        ];
        this.listadoEventosfotos = [
            "assets/img/Playa_de_Salinas_desde_Pinos_Altos.jpg",
            "assets/img/playas-de-vizcaya.jpg",
            "assets/img/gandia-valencia--575x323.jpg"
        ];
        this.listadoEventosFechas = [
            "29/07/2018",
            "14/08/2018",
            "09/09/2018"
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saul/Documents/GitHub/savethesea/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map