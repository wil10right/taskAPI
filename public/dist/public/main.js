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

module.exports = "body{\n    background-color: aliceblue;\n    font-family: sans-serif;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  body{\n    background-color: black;\n    color: aquamarine;\n  }\n  div{\n    /* outline: dotted red 1px; */\n    margin: 5px;\n    padding: 10px;\n  }\n\n  .showall{\n    margin: 10px;\n  }\n  .single-task{\n    border: 5px black solid;\n    margin: 5px;\n  }\n\n</style>\n\n<h1>Restful Tasks API!</h1>\n\n<button (click)='getTasksFromService()'>Click for All Tasks</button><br>\n\n<div *ngIf='showAll'> \n  <button (click)='hideAll()'>Hide All Tasks</button>\n  <div *ngFor=\"let task of allTasks\" class=\"single-task\">\n    <h3>{{task.title}}</h3>\n      <a href=\"#editTask\">\n        <button (click)='getTaskById(task._id)'>Show Info</button>\n      </a>\n      <button (click)='deleteTaskById(task._id)'>Delete</button>\n  </div>\n  \n  <app-task *ngIf='oneTask' [taskToShow]='oneTask' id=\"editTask\"></app-task>\n\n</div>\n  <hr>\n    <!-- use the json pipe to see how newTask changes in real time -->\n<h2>Add a new task below!</h2>\n<form (submit)=\"createTask()\">\n  Title: <input type=\"text\" name=\"newTask.title\" [(ngModel)]=\"newTask.title\" /><br>\n  Description: <input type=\"text\" name=\"newTask.desc\" [(ngModel)]=\"newTask.desc\" /><br>\n  <input type=\"submit\" value=\"Create Task\"/>\n</form>\n<!-- <p> {{ newTask | json }} </p> -->"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// this page is the controller!!!!
var AppComponent = /** @class */ (function () {
    // showInfo:boolean;
    // showEdit:boolean;
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('***ngOnInit***');
        this.newTask = {
            title: "",
            desc: ""
        };
        this.oldTask = {
            title: "",
            desc: ""
        };
        this.showAll = false;
    };
    AppComponent.prototype.hideAll = function () {
        // this.getTasksFromService();
        this.showAll = !this.showAll;
    };
    AppComponent.prototype.getTasksFromService = function () {
        var _this = this;
        // this._httpService.getTasks();
        this.showAll = true;
        var obs = this._httpService.getTasks();
        obs.subscribe(function (data) {
            // console.log("Thank you for your subscription!",data);
            _this.allTasks = data;
            console.log(_this.allTasks);
        });
    };
    AppComponent.prototype.getTaskById = function (id) {
        var _this = this;
        // if(this.showInfo == true){
        //   this.showInfo = true;
        // }else if(this.showInfo == false){
        //   this.showInfo = true;
        // }
        this._httpService.getTasks();
        // this.showInfo = !this.showInfo
        var obs = this._httpService.getTaskById(id);
        obs.subscribe(function (data) {
            // console.log("Thank you for your subscription!",data);
            _this.oneTask = data;
            _this.oldTask = data;
        });
        console.log("LOOK AT THIS ONE", this.oneTask);
    };
    // getFormInput(id){
    //   this.showEdit = !this.showEdit;
    //   let obs = this._httpService.getTaskById(id);
    //   obs.subscribe(data=>{
    //     // console.log("Thank you for your subscription!",data);
    //     this.oldTask = data;
    //     // console.log(this.formTask.title,this.formTask.)
    //     console.log('back from the server',data);
    //     // this.oldTask.title = data.
    //   });
    // }
    AppComponent.prototype.createTask = function () {
        this._httpService.createATask(this.newTask).subscribe(function (data) {
            console.log(data);
        });
        this.getTasksFromService();
        this.ngOnInit();
        this.showAll = true;
    };
    AppComponent.prototype.deleteTaskById = function (id) {
        this._httpService.deleteATask(id).subscribe(function (data) {
            console.log(data);
            console.log('task ' + id + ' is about to get the AXE!');
        });
        this.getTasksFromService();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        // this.getTasks();
        // this.getTaskById();
    }
    HttpService.prototype.getTasks = function () {
        // our http response is an Observable, store it in a variable
        return this._http.get('/api/tasks');
        // subscribe to the Observable and provide the code we would like to do with our data from the response
        // tempObservable.subscribe(data=>console.log("***WE'VE GOT THE DATA!***",data))
    };
    HttpService.prototype.getTaskById = function (id) {
        return this._http.get('/api/tasks/' + id);
    };
    HttpService.prototype.createATask = function (task) {
        return this._http.post('/api/tasks', task);
    };
    HttpService.prototype.deleteATask = function (id) {
        return this._http.delete('/api/delete/' + id);
    };
    HttpService.prototype.editATask = function (id, task) {
        return this._http.put('/api/update/' + id, task);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  task works!\n</p> -->\n<div>\n    <h3>Task Info:</h3> \n    <p>ID: {{ taskToShow._id }}</p>\n    <p>Title: {{ taskToShow.title }}</p>\n    <p>Description: <em>\"{{ taskToShow.desc }}\"</em></p>\n    <button (click)='getFormInput(taskToShow._id)'>Edit this task?</button>\n\n    <div *ngIf='showEdit'>\n      <form (submit)=\"editTask(taskToShow._id)\">\n        <h3>Edit this task below:</h3>\n        Title:<input type=\"text\" name=\"oldTask.title\" [(ngModel)]=\"oldTask.title\" /><br>\n        Description:<input type=\"text\" name=\"oldTask.desc\" [(ngModel)]=\"oldTask.desc\" /><br>\n        <input type=\"submit\" value=\"Edit Task\"/>\n      </form>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Input } from '@angular/core';
var TaskComponent = /** @class */ (function () {
    function TaskComponent(_httpService) {
        this._httpService = _httpService;
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.oldTask = {
            title: "",
            desc: ""
        };
        this.showEdit = false;
    };
    TaskComponent.prototype.editTask = function (id) {
        var _this = this;
        this._httpService.editATask(id, this.oldTask).subscribe(function (data) {
            console.log('task ' + _this.taskToShow._id + ' is about to get the REVAMPED!');
        });
        this.showEdit = false;
        // this.showInfo = false;
        alert('You just edited this task!');
        // this.showInfo = true;
        // AppComponent.getTasksFromService();
        // this.getFormInput(id);
    };
    TaskComponent.prototype.getFormInput = function (id) {
        var _this = this;
        console.log(id);
        this.showEdit = !this.showEdit;
        var obs = this._httpService.getTaskById(id);
        obs.subscribe(function (data) {
            console.log('back from the server', data);
            // this.taskToShow = data;
            _this.oldTask = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "taskToShow", void 0);
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], TaskComponent);
    return TaskComponent;
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

module.exports = __webpack_require__(/*! /Users/williamenright/Documents/CodingDojo/MEAN/Angular/restful_api/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map