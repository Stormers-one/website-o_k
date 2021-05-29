(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/lby":
/*!**********************************************************************************************!*\
  !*** ./src/app/facilities/schedule/generate-new-schedule/generate-new-schedule.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: GenerateNewScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateNewScheduleComponent", function() { return GenerateNewScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class GenerateNewScheduleComponent {
    constructor(router, _location) {
        this.router = router;
        this._location = _location;
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    ngOnInit() {
    }
}
GenerateNewScheduleComponent.ɵfac = function GenerateNewScheduleComponent_Factory(t) { return new (t || GenerateNewScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
GenerateNewScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenerateNewScheduleComponent, selectors: [["app-generate-new-schedule"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "facilities/schedule", "routerLinkActive", "active", 3, "click"], ["action", "/action_page.php"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", ""], ["type", "submit", "value", "Generate New Schedule"]], template: function GenerateNewScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenerateNewScheduleComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Generate New Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter Stop Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["input[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    padding: 12px 17px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid #555;\r\n    border-radius: 4px;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]{\r\n    background-color: #4CAF50;\r\n    padding: 16px 32px;\r\n    border: none;\r\n    color: white;\r\n    font-size: 17px;\r\n    width: 45%;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 0.25s ease-out;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]:hover {\r\n    \r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);\r\n  }\r\n  label[_ngcontent-%COMP%]{\r\n      text-align: justify;\r\n      font-size: 17px\r\n  }\r\n  input[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    padding: 12px 17px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid #555;\r\n    border-radius: 4px;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]{\r\n    background-color: #4CAF50;\r\n    padding: 16px 32px;\r\n    border: none;\r\n    color: white;\r\n    font-size: 17px;\r\n    width: 45%;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 0.25s ease-out;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]:hover {\r\n    \r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);\r\n  }\r\n  label[_ngcontent-%COMP%]{\r\n      text-align: justify;\r\n      font-size: 17px\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLW5ldy1zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZix3RUFBd0U7SUFDeEUsMEJBQTBCO0VBQzVCO0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsMkNBQTJDO0VBQzdDO0VBRUE7TUFDSSxtQkFBbUI7TUFDbkI7RUFDSjtFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZix3RUFBd0U7SUFDeEUsMEJBQTBCO0VBQzVCO0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsMkNBQTJDO0VBQzdDO0VBRUE7TUFDSSxtQkFBbUI7TUFDbkI7RUFDSiIsImZpbGUiOiJnZW5lcmF0ZS1uZXctc2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMTdweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRde1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLW91dDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjIwcmVtKTsqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWx7XHJcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweFxyXG4gIH1cclxuXHJcbiAgaW5wdXR7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAxN3B4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXN1Ym1pdF17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjByZW0pOyovXHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICBcclxuICBsYWJlbHtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgZm9udC1zaXplOiAxN3B4XHJcbiAgfVxyXG5cclxuICAiXX0= */"] });


/***/ }),

/***/ "/n7l":
/*!*******************************!*\
  !*** ./src/private_config.ts ***!
  \*******************************/
/*! exports provided: PrivateConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateConfig", function() { return PrivateConfig; });
const PrivateConfig = {
    firebase: {
        apiKey: 'AIzaSyAqvcf9AHA8dFSWRWd2nLSf449i2q8fVB0',
        authDomain: 'odu-komban-ok.firebaseapp.com',
        databaseURL: 'https://odu-komban-ok.firebaseio.com',
        projectId: 'odu-komban-ok',
        storageBucket: 'odu-komban-ok.appspot.com',
        messagingSenderId: "209002783516"
    },
    google_maps: {
        apiKey: 'AIzaSyDiwb683dW2wbHkSLhkm01w_7t6r6jYkTQ',
    }
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aishwarya Michael\Documents\GitHub\website-o_k\src\main.ts */"zUnb");


/***/ }),

/***/ "2Qg9":
/*!*******************************************!*\
  !*** ./src/app/shared/models/employee.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Employee; });
class Employee {
}


/***/ }),

/***/ "2qce":
/*!***********************************************************!*\
  !*** ./src/app/facilities/tracking/tracking.component.ts ***!
  \***********************************************************/
/*! exports provided: TrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingComponent", function() { return TrackingComponent; });
/* harmony import */ var src_app_shared_models_busdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/busdata */ "DQDA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/map.service */ "ZL7T");







function TrackingComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Bus_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](Bus_r1.Bus_id);
} }
//import { type } from 'os';
class TrackingComponent {
    constructor(router, _location, MapService) {
        this.router = router;
        this._location = _location;
        this.MapService = MapService;
        this.result = src_app_shared_models_busdata__WEBPACK_IMPORTED_MODULE_0__["default"];
        //////////////////////////////////////
        ///////// Drop down form code ////////
        this.dropDownForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            busInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        //////////////////////////////////////
        this.Busdata = [];
        this.id = '';
        this.Bus_id = "";
        this.Busdata = [];
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goToPage(link) {
        console.log(this.dropDownForm.value['busInfo']);
        let res = this.filterData(this.dropDownForm.value['busInfo']);
        // console.log(res);
        this.router.navigateByUrl('/facilities/tracking/' + link, { state: res }).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    //////////////////////////////////////
    ///////// Filtering bus data /////////
    filterData(opt) {
        this.result = this.Busdata.filter(function (buses) {
            return buses.Bus_id == opt;
        });
        return this.result;
    }
    get validateFunction() {
        return this.dropDownForm.controls;
    }
    setBusID(id) {
        this.Bus_id = id;
    }
    ngOnInit() {
        this.MapService.getBusdata().snapshotChanges().subscribe(data => {
            this.Busdata = data.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                //console.log(`hello${data.Latitude}`);
                return Object.assign({ id }, data);
            });
        });
        //this.Bus_id=this.Busdata[].Bus_id
    }
}
TrackingComponent.ɵfac = function TrackingComponent_Factory(t) { return new (t || TrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"])); };
TrackingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TrackingComponent, selectors: [["app-tracking"]], decls: 28, vars: 3, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/", "routerLinkActive", "active", 3, "click"], [1, "tracking-banner"], ["href", "https://www.newgenapps.com/wp-content/uploads/2020/04/Navigator-Navigation-Google-Maps-Map-Location-Gps-2049643.jpg", "target", "_blank"], ["id", "t-img", "alt", "Tracking", "src", "assets/images/Navigator.jpg", "width", "304", "height", "328"], [3, "formGroup", "ngSubmit"], ["for", "busInfo"], ["formControlName", "busInfo", 1, "form-control"], ["disabled", ""], [4, "ngFor", "ngForOf"], ["type", "submit", 3, "disabled"]], template: function TrackingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrackingComponent_Template_button_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Bus Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TrackingComponent_Template_form_ngSubmit_13_listener() { return ctx.goToPage("map"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Bus Id: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Choose Bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Select Bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TrackingComponent_option_22_Template, 2, 1, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.dropDownForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.Busdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.dropDownForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".tracking-banner[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 20px auto 32px;\r\n    \r\n    align-content: center;\r\n}\r\nselect[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  padding: 12px 17px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 2px solid #555;\r\n  border-radius: 4px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  padding: 12px 17px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 2px solid #555;\r\n  border-radius: 4px;\r\n}\r\nbutton[type=submit][_ngcontent-%COMP%]{\r\n  background-color: #4CAF50;\r\n  padding: 16px 32px;\r\n  border: none;\r\n  color: white;\r\n  font-size: 17px;\r\n  width: 45%;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  margin-bottom: 2em;\r\n}\r\nbutton[type=submit][_ngcontent-%COMP%]:hover {\r\n  \r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n    font-size: 17px\r\n}\r\nbutton[type=submit][_ngcontent-%COMP%]:disabled {\r\n  \r\n  background-color: #808a80;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCOztnQ0FFNEI7SUFDNUIscUJBQXFCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZix3RUFBd0U7RUFDeEUsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMkNBQTJDO0FBQzdDO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjtBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJ0cmFja2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYWNraW5nLWJhbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDMycHg7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zZWxlY3R7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBwYWRkaW5nOiAxMnB4IDE3cHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMTdweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuYnV0dG9uW3R5cGU9c3VibWl0XXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB3aWR0aDogNDUlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG5idXR0b25bdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yMHJlbSk7Ki9cclxuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBmb250LXNpemU6IDE3cHhcclxufVxyXG5cclxuYnV0dG9uW3R5cGU9c3VibWl0XTpkaXNhYmxlZCB7XHJcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjByZW0pOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOGE4MDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "8vhU":
/*!***************************************************************************!*\
  !*** ./src/app/facilities/customer-support/customer-support.component.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSupportComponent", function() { return CustomerSupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_customercare_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/customercare.service */ "AaRP");







function CustomerSupportComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r2);
} }
function CustomerSupportComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r3);
} }
class CustomerSupportComponent {
    constructor(router, _location, CustomercareService) {
        this.router = router;
        this._location = _location;
        this.CustomercareService = CustomercareService;
        this.complainantdropDownForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Complainant: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Route: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.Complainant = ["Passenger", "Driver-Conductor"];
        this.Route = [];
        this.id = '';
        this.customercare = [];
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    goToPage(link) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let complainant = this.complainantdropDownForm.value['Complainant'];
            let route = this.complainantdropDownForm.value['Route'];
            // let res = this.filterData(this.complainantdropDownForm.value['busInfo']);
            // console.log(res);
            let res;
            res = yield this.getFeedbacks(complainant, route);
            let obj = [res, complainant];
            this.router.navigateByUrl('/facilities/customerSupport/' + link, { state: obj }).then(success => console.log('navigation success?', success))
                .catch(console.error);
        });
    }
    get validateFunction() {
        return this.complainantdropDownForm.controls;
    }
    getFeedbacks(option, route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res;
            if (option == "Passenger") {
                res = yield this.getPassengerFeedbacks(route);
            }
            else if (option == "Driver-Conductor") {
                res = yield this.getDriverConductorFeedbacks(route);
            }
            return res;
        });
    }
    getDriverConductorFeedbacks(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield new Promise(resolve => {
                this.CustomercareService.getFeedbackDriverConductor(route).snapshotChanges().subscribe((data) => {
                    let dat = resolve(data.map((a) => {
                        let data = a.payload.doc.data();
                        return data;
                    }));
                    return dat;
                });
            });
            return (res);
        });
    }
    getPassengerFeedbacks(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield new Promise(resolve => {
                this.CustomercareService.getFeedbackPassenger(route).snapshotChanges().subscribe((data) => {
                    let dat = resolve(data.map((a) => {
                        let data = a.payload.doc.data();
                        return data;
                    }));
                    return dat;
                });
            });
            return (res);
        });
    }
    ngOnInit() {
        this.CustomercareService.getRoutes().snapshotChanges().subscribe((data) => {
            this.Route = data.map((a) => {
                const id = a.payload.doc.id;
                return id;
            });
        });
    }
}
CustomerSupportComponent.ɵfac = function CustomerSupportComponent_Factory(t) { return new (t || CustomerSupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_customercare_service__WEBPACK_IMPORTED_MODULE_5__["CustomercareService"])); };
CustomerSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerSupportComponent, selectors: [["app-customer-support"]], decls: 35, vars: 4, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/", "routerLinkActive", "active", 3, "click"], [1, "tracking-banner"], ["href", "https://www.newgenapps.com/wp-content/uploads/2020/04/Navigator-Navigation-Google-Maps-Map-Location-Gps-2049643.jpg", "target", "_blank"], ["id", "t-img", "alt", "Customer-Support", "src", "assets/images/customer-service (1).png", "width", "304", "height", "328"], [3, "formGroup", "ngSubmit"], ["for", "Complainant"], ["formControlName", "Complainant"], [4, "ngFor", "ngForOf"], ["formControlName", "Route"], ["type", "submit", 3, "disabled"]], template: function CustomerSupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerSupportComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Customer Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CustomerSupportComponent_Template_form_ngSubmit_13_listener() { return ctx.goToPage("complain-list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Type of Complainant: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Select Complainant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CustomerSupportComponent_option_21_Template, 2, 1, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Route : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Select Route ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CustomerSupportComponent_option_30_Template, 2, 1, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.complainantdropDownForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.Complainant);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.Route);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.complainantdropDownForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".tracking-banner[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 20px auto 32px;\r\n    \r\n    align-content: center;\r\n}\r\n\r\nselect[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  padding: 12px 17px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 2px solid #555;\r\n  border-radius: 4px;\r\n}\r\n\r\nbutton[type=submit][_ngcontent-%COMP%]{\r\n  background-color: #4CAF50;\r\n  padding: 16px 32px;\r\n  border: none;\r\n  color: white;\r\n  font-size: 17px;\r\n  width: 45%;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  margin-bottom: 2em;\r\n}\r\n\r\nbutton[type=submit][_ngcontent-%COMP%]:hover {\r\n  \r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nbutton[type=submit][_ngcontent-%COMP%]:disabled {\r\n  \r\n  background-color: #808a80;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n    font-size: 17px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXN1cHBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEI7O2dDQUU0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZix3RUFBd0U7RUFDeEUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSiIsImZpbGUiOiJjdXN0b21lci1zdXBwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhY2tpbmctYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMzJweDtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5zZWxlY3R7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBwYWRkaW5nOiAxMnB4IDE3cHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbmJ1dHRvblt0eXBlPXN1Ym1pdF17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuYnV0dG9uW3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjByZW0pOyovXHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuYnV0dG9uW3R5cGU9c3VibWl0XTpkaXNhYmxlZCB7XHJcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjByZW0pOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOGE4MDtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAxN3B4XHJcbn0iXX0= */"] });


/***/ }),

/***/ "AaRP":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/customercare.service.ts ***!
  \*********************************************************/
/*! exports provided: CustomercareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomercareService", function() { return CustomercareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class CustomercareService {
    constructor(db) {
        this.db = db;
        this.document = db.collection('Route Feedback');
    }
    getRoutes() {
        return this.document;
    }
    getFeedbackPassenger(route) {
        let ref = this.db.collection("Route Feedback").doc("101").collection("Passenger Complaints");
        let res;
        ref.snapshotChanges().subscribe(data => {
            data.map((a) => {
                res = a.payload.doc.data();
                return res;
            });
        });
        console.log(`Route ${res}`);
        return this.document.doc(route).collection("Passenger Complaints");
    }
    getFeedbackDriverConductor(route) {
        return this.document.doc(route).collection("DriverConductor Complaints");
    }
}
CustomercareService.ɵfac = function CustomercareService_Factory(t) { return new (t || CustomercareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
CustomercareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomercareService, factory: CustomercareService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _private_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../private_config */ "/n7l");

const environment = {
    production: true,
    firebase: _private_config__WEBPACK_IMPORTED_MODULE_0__["PrivateConfig"].firebase
};


/***/ }),

/***/ "CTmZ":
/*!******************************************************************************************!*\
  !*** ./src/app/facilities/employee-details/search-employee/search-employee.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SearchEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEmployeeComponent", function() { return SearchEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/employee.service */ "SJiT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _employee_table_employee_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-table/employee-table.component */ "zHea");






class SearchEmployeeComponent {
    constructor(router, _location, employeeService) {
        this.router = router;
        this._location = _location;
        this.employeeService = employeeService;
        this.id = '';
        this.employee = [];
        this.employeeFiltered = [];
        this.query = "";
        this.docLen = 0;
        this.matchingQuery = [];
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    filter() {
        var _a;
        console.log("Button pressed");
        let i;
        for (i = 0; i < this.docLen; i++) {
            if (((_a = this.employee[i].email) === null || _a === void 0 ? void 0 : _a.match(this.query)) != null) {
                this.matchingQuery[i] = true;
            }
            else {
                this.matchingQuery[i] = false;
            }
        }
        let j;
        let k = 0;
        this.employeeFiltered = [];
        for (j = 0; j < this.docLen; j++) {
            if (this.matchingQuery[j] == true) {
                this.employeeFiltered[k] = this.employee[j];
                k++;
            }
        }
        // console.log(this.matchingQuery)
    }
    ngOnInit() {
        this.employeeService.getEmployees().snapshotChanges().subscribe(data => {
            this.employee = data.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                // console.log(data.name);
                return Object.assign({ id }, data);
            });
            this.docLen = this.employee.length;
            this.employeeFiltered = this.employee;
        });
    }
}
SearchEmployeeComponent.ɵfac = function SearchEmployeeComponent_Factory(t) { return new (t || SearchEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"])); };
SearchEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchEmployeeComponent, selectors: [["app-search-employee"]], decls: 19, vars: 2, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/facilities/employeeDetails", "routerLinkActive", "active", 3, "click"], ["action", "/action_page.php"], [1, "container-row-input"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "View Employee Details", 3, "click"], [3, "employee"]], template: function SearchEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchEmployeeComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search Employee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Employee Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchEmployeeComponent_Template_input_ngModelChange_15_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchEmployeeComponent_Template_input_click_17_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-employee-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employee", ctx.employeeFiltered);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _employee_table_employee_table_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeTableComponent"]], styles: ["input[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding: 12px 17px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 2px solid #555;\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  padding: 16px 32px;\r\n  border: none;\r\n  color: white;\r\n  font-size: 17px;\r\n  width: 45%;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.25s ease-out;\r\n  margin-bottom: 2em;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  \r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:disabled {\r\n  \r\n  background-color: gray;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  text-align: justify;\r\n  font-size: 17px\r\n}\r\n\r\n.container-row-input[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-content: center;\r\n  text-align: center;\r\n  position: relative;\r\n  margin-top: 2em;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.container-row-input[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n}\r\n\r\n.container-row-input[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{\r\n  width: 75%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0VBQ2Ysd0VBQXdFO0VBQ3hFLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMkNBQTJDO0FBQzdDOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNlYXJjaC1lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZzogMTJweCAxN3B4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB3aWR0aDogNDUlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1vdXQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjIwcmVtKTsqL1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmRpc2FibGVkIHtcclxuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yMHJlbSk7Ki9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG5cclxubGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgZm9udC1zaXplOiAxN3B4XHJcbn1cclxuXHJcbi5jb250YWluZXItcm93LWlucHV0e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1yb3ctaW5wdXQ+ZGl2e1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuLmNvbnRhaW5lci1yb3ctaW5wdXQ+ZGl2PmlucHV0e1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "DQDA":
/*!******************************************!*\
  !*** ./src/app/shared/models/busdata.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Busdata; });
class Busdata {
}


/***/ }),

/***/ "Go5R":
/*!******************************************************!*\
  !*** ./src/app/main-banner/main-banner.component.ts ***!
  \******************************************************/
/*! exports provided: MainBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBannerComponent", function() { return MainBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MainBannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainBannerComponent.ɵfac = function MainBannerComponent_Factory(t) { return new (t || MainBannerComponent)(); };
MainBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBannerComponent, selectors: [["app-main-banner"]], decls: 6, vars: 0, consts: [[1, "main-banner"], ["href", "https://dribbble.com/shots/5484687-KSRTC-Bus-Kerala", "target", "_blank"], ["id", "banner-img", "alt", "Main banner image", "src", "assets/images/ksrtc_bus_kerala.png"]], template: function MainBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Illustration by Deepak Kumar on dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-banner[_ngcontent-%COMP%] {\r\n  \r\n  margin: 112px auto 32px;\r\n  \r\n  align-content: center;\r\n}\r\n\r\n.main-banner[_ngcontent-%COMP%]   #banner-img[_ngcontent-%COMP%] {\r\n  max-width: 960px;\r\n  width: 100%;\r\n  position: relative;\r\n  height: auto;\r\n}\r\n\r\nfigure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  position: relative;\r\n\r\n}\r\n\r\n.main-banner[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background: black;\r\n  color: white;\r\n  margin-bottom: 5px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: visibility 0s, opacity 0.5s linear;\r\n}\r\n\r\n\r\n\r\n.main-banner[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.main-banner[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  padding: 8px 15px;\r\n  visibility: visible;\r\n  opacity: 0.7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCOzs4QkFFNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUVsQiw4Q0FBOEM7QUFDaEQ7O0FBRUEsOEJBQThCOztBQUM5QjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoibWFpbi1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJhbm5lciB7XHJcbiAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgbWFyZ2luOiAxMTJweCBhdXRvIDMycHg7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWJhbm5lciAjYmFubmVyLWltZyB7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5maWd1cmUgZmlnY2FwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLm1haW4tYmFubmVyIGZpZ2NhcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG59XHJcblxyXG4vKiBIb3ZlciBvbiBQYXJlbnQgQ29udGFpbmVyICovXHJcbi5tYWluLWJhbm5lcjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFpbi1iYW5uZXI6aG92ZXIgZmlnY2FwdGlvbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Q5xF":
/*!***********************************************************!*\
  !*** ./src/app/facilities/schedule/schedule.component.ts ***!
  \***********************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ScheduleComponent {
    constructor(router) {
        this.router = router;
    }
    goToPage(link) {
        this.router.navigate(['/facilities/schedule/' + link]).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this.router.navigate(['../']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    ngOnInit() {
    }
}
ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) { return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScheduleComponent, selectors: [["app-schedule"]], decls: 17, vars: 0, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "facilities/schedule", "routerLinkActive", "active", 3, "click"], [1, "card-container"], ["routerLink", "facilities/schedule/display-schedule", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/images/clock.png", "alt", "Display Schedule"], ["routerLink", "facilities/schedule/generate-schedule", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/images/calendar.png", "alt", "Generate New Schedule"]], template: function ScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleComponent_Template_a_click_9_listener() { return ctx.goToPage("display-schedule"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Display Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleComponent_Template_a_click_13_listener() { return ctx.goToPage("generate-schedule"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Generate New Schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    \r\n    margin-top: 0.8em;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n    width: 100%;\r\n    border: #125699;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 15em;\r\n    \r\n    margin: 1.5em;\r\n    padding: 0.4em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    align-items: center;\r\n    transition: all 0.12s ease-in-out;\r\n    \r\n    \r\n  }\r\n  \r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n    flex: 1 0 40%;\r\n  }\r\n  \r\n  .card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 8em;\r\n    width: auto;\r\n  }\r\n  \r\n  .card-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  \r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n  }\r\n  \r\n  \r\n  \r\n  @media screen and (max-width: 767px) {\r\n    .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n      flex: 1 0 40%;\r\n    }\r\n    .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]:first-child {\r\n      flex: 1 0 70%;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 575px) {\r\n    .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n      flex: 1 0 70%;\r\n    }\r\n    .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]:first-child {\r\n      flex: 1 0 70%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwyQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QiwyQkFBMkI7RUFDN0I7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUdBOztPQUVLOztFQUdMO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQiwwQ0FBMEM7RUFDNUM7O0VBRUE7OztJQUdFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBLHNCQUFzQjs7RUFDdEI7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsYUFBYTtJQUNmO0VBQ0YiLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyogcGFkZGluZzogMWVtOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMC44ZW07XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6ICMxMjU2OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogMTVlbTtcclxuICAgIC8qIHdpZHRoOiA0MCU7ICovXHJcbiAgICBtYXJnaW46IDEuNWVtO1xyXG4gICAgcGFkZGluZzogMC40ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjEycyBlYXNlLWluLW91dDtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAyNHB4OyAqL1xyXG4gICAgLyogb3V0bGluZS1zdHlsZTogZGFzaGVkOyAqL1xyXG4gIH1cclxuICAuY2FyZC1jb250YWluZXI+LmNhcmQge1xyXG4gICAgZmxleDogMSAwIDQwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtY29udGFpbmVyIGltZ3tcclxuICAgIGhlaWdodDogOGVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWNvbnRhaW5lciBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfSAqL1xyXG4gIFxyXG4gIFxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICB9XHJcbiAgXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzEyNTY5OTtcclxuICB9XHJcbiAgXHJcbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNhcmQtY29udGFpbmVyPi5jYXJkIHtcclxuICAgICAgZmxleDogMSAwIDQwJTtcclxuICAgIH1cclxuICAgIC5jYXJkLWNvbnRhaW5lcj4uY2FyZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGZsZXg6IDEgMCA3MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAuY2FyZC1jb250YWluZXI+LmNhcmQge1xyXG4gICAgICBmbGV4OiAxIDAgNzAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtY29udGFpbmVyPi5jYXJkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgZmxleDogMSAwIDcwJTtcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ "SJiT":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/employee.service.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class EmployeeService {
    constructor(db) {
        this.db = db;
        this.dbPath = '/Employee Details';
        this.document = db.collection('/Employee Details');
    }
    getEmployees() {
        return this.document;
    }
    registerEmployee(employee) {
        return this.document.doc(employee.email).set(Object.assign({}, employee));
    }
    updateEmployee(employee) {
        return this.document.doc(employee.email).update(employee);
    }
    removeEmployee(employee) {
        return this.document.doc(employee.email).delete();
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-banner/main-banner.component */ "Go5R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'website-ok';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [["role", "banner", 1, "toolbar"], [1, "spacer"], ["id", "github-logo", "aria-label", "Github project repo", "target", "_blank", "rel", "noopener", "href", "https://github.com/Stormers-one/website-o_k", "title", "Github"], ["src", "assets/icons/github.svg", "height", "30", "width", "30"], ["role", "main", 1, "content"], [1, "resource-box-1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Odu Komban");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-main-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Copyright 2021 by Stormers-one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_1__["MainBannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Quicksand\",\"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n  text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  padding-left: 2em;\r\n  padding-right: 2em;\r\n  height: 80px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #d47629cc;\r\n  color: white;\r\n  font-weight: 800;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #github-logo[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.4;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 52px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  min-width: 80%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 40px;\r\n  margin: 8px;\r\n  background-color: white;\r\n  border: 1px solid #eeeeee;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 1s ease-out;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-0.25rem);\r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  margin-top: 2em;\r\n  width: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  height: 90px;\r\n  background: rgba(214, 57, 45, 0.795);\r\n  display: flex;\r\n  align-items: center;\r\n  \r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  align-content: center;\r\n  text-align: center;\r\n  width: 100%;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n  margin-right: 10%;\r\n  margin-bottom: 10%;\r\n  margin-top: 1%;\r\n}\r\n\r\n.resource-box-1[_ngcontent-%COMP%] {\r\n  background: rgba(214, 208, 208, 0.32);\r\n  border: rgba(214, 208, 208, 0.32);\r\n  border-radius: 15px;\r\n  border-width: 1px;\r\n  min-width: 80%;\r\n  max-width: 960px;\r\n  padding-bottom: 2em;\r\n  padding-top: 1em;\r\n}\r\n\r\n@media screen and (max-width: 441px) {\r\n\r\n}\r\n\r\n@media screen and (max-width: 1080px) {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0tBQXNLO0VBQ3RLLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7Ozs7OztFQU1FLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysd0VBQXdFO0VBQ3hFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBSUE7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJRdWlja3NhbmRcIixcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQ3NjI5Y2M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi50b29sYmFyICNnaXRodWItbG9nbzpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA1MnB4IGF1dG8gMzJweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBtaW4td2lkdGg6IDgwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBtYXJnaW46IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCA1NywgNDUsIDAuNzk1KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogbGluZS1oZWlnaHQ6IDIwcHg7ICovXHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlciBzcGFue1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuYm9keSxcclxuaHRtbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLnJlc291cmNlLWJveC0xIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNCwgMjA4LCAyMDgsIDAuMzIpO1xyXG4gIGJvcmRlcjogcmdiYSgyMTQsIDIwOCwgMjA4LCAwLjMyKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIG1pbi13aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0MXB4KSB7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "U7dw":
/*!****************************************************!*\
  !*** ./src/app/facilities/facilities.component.ts ***!
  \****************************************************/
/*! exports provided: FacilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesComponent", function() { return FacilitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FacilitiesComponent {
    constructor(router) {
        this.router = router;
    }
    goToPage(link) {
        this.router.navigate(['/facilities/' + link]).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    ngOnInit() {
    }
}
FacilitiesComponent.ɵfac = function FacilitiesComponent_Factory(t) { return new (t || FacilitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FacilitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilitiesComponent, selectors: [["app-facilities"]], decls: 23, vars: 0, consts: [[1, "card-container"], ["routerLink", "/facilities/tracking", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/icons/map.png", "alt", "Tracking"], ["routerLink", "/facilities/employeeDetails", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/icons/employee.png", "alt", "Employee details"], ["routerLink", "/facilities/schedule", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/icons/schedule.png", "alt", "schedule"], ["routerLink", "/facilities/fareUpdate", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/icons/pay.png", "alt", "Fare update"], ["routerLink", "/facilities/customerSupport", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/icons/customer-service.png", "alt", "Customer service"]], template: function FacilitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitiesComponent_Template_a_click_3_listener() { return ctx.goToPage("tracking"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bus Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitiesComponent_Template_a_click_7_listener() { return ctx.goToPage("employeeDetails"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Employee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitiesComponent_Template_a_click_11_listener() { return ctx.goToPage("schedule"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Bus Timings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitiesComponent_Template_a_click_15_listener() { return ctx.goToPage("fareUpdate"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fare update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitiesComponent_Template_a_click_19_listener() { return ctx.goToPage("customerSupport"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Customer Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["svg.material-icons[_ngcontent-%COMP%] {\r\n  height: 24px;\r\n  width: auto;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: #888;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  \r\n  margin-top: 0.8em;\r\n  height: -webkit-max-content;\r\n  height: max-content;\r\n  width: 100%;\r\n  border: #125699;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  border: 1px solid #eee;\r\n  background-color: #fafafa;\r\n  height: 15em;\r\n  \r\n  margin: 1.5em;\r\n  padding: 0.4em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n  align-items: center;\r\n  transition: all 0.12s ease-in-out;\r\n  \r\n  \r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n  flex: 1 0 40%;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]:first-child {\r\n  flex: 1 0 70%;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 8em;\r\n  width: auto;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n\r\n\r\n.card.highlight-card[_ngcontent-%COMP%] {\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: auto;\r\n  min-width: 30%;\r\n  position: relative;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n  text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n    flex: 1 0 40%;\r\n  }\r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]:first-child {\r\n    flex: 1 0 70%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n    flex: 1 0 70%;\r\n  }\r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]:first-child {\r\n    flex: 1 0 70%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2lsaXRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBOztLQUVLOztBQUdMO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQ0FBMEM7QUFDNUM7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7Ozs7RUFNRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUdBLHNCQUFzQjs7QUFDdEI7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiZmFjaWxpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gIGZpbGw6ICM4ODg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBwYWRkaW5nOiAxZW07ICovXHJcbiAgbWFyZ2luLXRvcDogMC44ZW07XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6ICMxMjU2OTk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBoZWlnaHQ6IDE1ZW07XHJcbiAgLyogd2lkdGg6IDQwJTsgKi9cclxuICBtYXJnaW46IDEuNWVtO1xyXG4gIHBhZGRpbmc6IDAuNGVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLyogbGluZS1oZWlnaHQ6IDI0cHg7ICovXHJcbiAgLyogb3V0bGluZS1zdHlsZTogZGFzaGVkOyAqL1xyXG59XHJcbi5jYXJkLWNvbnRhaW5lcj4uY2FyZCB7XHJcbiAgZmxleDogMSAwIDQwJTtcclxufVxyXG4uY2FyZC1jb250YWluZXI+LmNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gIGZsZXg6IDEgMCA3MCU7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciBpbWd7XHJcbiAgaGVpZ2h0OiA4ZW07XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciBzcGFue1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLyogLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH0gKi9cclxuXHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbn1cclxuXHJcbi8qIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xyXG59ICovXHJcblxyXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAzMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jYXJkLWNvbnRhaW5lcj4uY2FyZCB7XHJcbiAgICBmbGV4OiAxIDAgNDAlO1xyXG4gIH1cclxuICAuY2FyZC1jb250YWluZXI+LmNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgZmxleDogMSAwIDcwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLmNhcmQtY29udGFpbmVyPi5jYXJkIHtcclxuICAgIGZsZXg6IDEgMCA3MCU7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRhaW5lcj4uY2FyZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBmbGV4OiAxIDAgNzAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facilities/facilities.component */ "U7dw");
/* harmony import */ var _facilities_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facilities/tracking/tracking.component */ "2qce");
/* harmony import */ var _facilities_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facilities/schedule/schedule.component */ "Q5xF");
/* harmony import */ var _facilities_customer_support_customer_support_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facilities/customer-support/customer-support.component */ "8vhU");
/* harmony import */ var _facilities_fare_update_fare_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facilities/fare-update/fare-update.component */ "yF+o");
/* harmony import */ var _facilities_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./facilities/employee-details/employee-details.component */ "cnhq");
/* harmony import */ var _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-banner/main-banner.component */ "Go5R");
/* harmony import */ var _facilities_employee_details_search_employee_search_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./facilities/employee-details/search-employee/search-employee.component */ "CTmZ");
/* harmony import */ var _facilities_employee_details_register_new_employee_register_new_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./facilities/employee-details/register-new-employee/register-new-employee.component */ "xPVv");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _facilities_tracking_map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./facilities/tracking/map/map.component */ "rlCP");
/* harmony import */ var _private_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../private_config */ "/n7l");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _facilities_employee_details_search_employee_employee_table_employee_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./facilities/employee-details/search-employee/employee-table/employee-table.component */ "zHea");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-page-scroll-core */ "Zgu1");
/* harmony import */ var _shared_services_map_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/services/map.service */ "ZL7T");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _facilities_customer_support_complain_list_complain_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./facilities/customer-support/complain-list/complain-list.component */ "ZJip");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");












// Firebase integration



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [_shared_services_map_service__WEBPACK_IMPORTED_MODULE_23__["MapService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase, 'website-o_k'),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({ apiKey: _private_config__WEBPACK_IMPORTED_MODULE_18__["PrivateConfig"].google_maps.apiKey,
                libraries: ['places']
            }),
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_22__["NgxPageScrollCoreModule"].forRoot({ duration: 1600 }),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_3__["FacilitiesComponent"],
        _facilities_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_4__["TrackingComponent"],
        _facilities_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_5__["ScheduleComponent"],
        _facilities_customer_support_customer_support_component__WEBPACK_IMPORTED_MODULE_6__["CustomerSupportComponent"],
        _facilities_fare_update_fare_update_component__WEBPACK_IMPORTED_MODULE_7__["FareUpdateComponent"],
        _facilities_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeDetailsComponent"],
        _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_9__["MainBannerComponent"],
        _facilities_employee_details_search_employee_search_employee_component__WEBPACK_IMPORTED_MODULE_10__["SearchEmployeeComponent"],
        _facilities_employee_details_register_new_employee_register_new_employee_component__WEBPACK_IMPORTED_MODULE_11__["RegisterNewEmployeeComponent"],
        _facilities_tracking_map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"],
        _facilities_employee_details_search_employee_employee_table_employee_table_component__WEBPACK_IMPORTED_MODULE_20__["EmployeeTableComponent"],
        _facilities_customer_support_complain_list_complain_list_component__WEBPACK_IMPORTED_MODULE_26__["ComplainListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"], _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_22__["NgxPageScrollCoreModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"]] }); })();


/***/ }),

/***/ "ZJip":
/*!**************************************************************************************!*\
  !*** ./src/app/facilities/customer-support/complain-list/complain-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ComplainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainListComponent", function() { return ComplainListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_customercare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/customercare.service */ "AaRP");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");





function ComplainListComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComplainListComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.buttonPressed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customercare_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customercare_r1.UID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customercare_r1.complaint);
} }
const _c0 = function () { return { itemsPerPage: 10, currentPage: 1 }; };
class ComplainListComponent {
    constructor(router, _location, customercareService, activatedRoute) {
        var _a;
        this.router = router;
        this._location = _location;
        this.customercareService = customercareService;
        this.activatedRoute = activatedRoute;
        this.data = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        if (this.data == null) {
            this.goBackOnce();
        }
        this.customercare = this.data[0];
        this.type = this.data[1];
        console.log(`route State:`);
        console.log(this.customercare);
    }
    ngOnInit() {
    }
    delete() {
        console.log("delete button pressed");
    }
    buttonPressed() {
        console.log("Button pressed");
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
}
ComplainListComponent.ɵfac = function ComplainListComponent_Factory(t) { return new (t || ComplainListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_customercare_service__WEBPACK_IMPORTED_MODULE_3__["CustomercareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ComplainListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComplainListComponent, selectors: [["app-complain-list"]], decls: 24, vars: 6, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/", "routerLinkActive", "active", 3, "click"], [1, "table"], [1, "table-header"], [1, "td-user_id"], [1, "td-Comp"], [1, "spacer-height"], [1, "table-container"], ["class", "table-body", 3, "click", 4, "ngFor", "ngForOf"], [1, "table-body", 3, "click"], [1, "td-comp"]], template: function ComplainListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComplainListComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Customer Feedbacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "User_Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Complain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ComplainListComponent_button_22_Template, 7, 2, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 2, ctx.customercare, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 90%;\r\n    margin: 10px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-content: center;\r\n    text-align: center;\r\n  }\r\n  .table-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    flex-direction: row;\r\n    font-weight: 600;\r\n    width: 100%;\r\n    font-size: large;\r\n    flex: 1 1 auto;\r\n  }\r\n  .td-user_id[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    padding: 2px auto;\r\n    align-content: flex-start;\r\n    text-align: start;\r\n  }\r\n  \r\n  .td-comp[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    padding: 2px auto;\r\n    text-align: start;\r\n    align-content: flex-start;\r\n  }\r\n  .table-body[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    flex-direction: row;\r\n    padding-bottom: 5px;\r\n    height: 37px;\r\n    font-weight: 400;\r\n    font-size: medium;\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    border-radius: 8px;\r\n    border-width: 0px;\r\n    background-color: transparent;\r\n  }\r\n  .table-body[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(146, 233, 129);\r\n    color: grey;\r\n  }\r\n  .spacer-height[_ngcontent-%COMP%]{\r\n    height: 0.8em;\r\n  }\r\n  .table-container[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border-radius: 8px;\r\n    border-style: solid;\r\n    border-color: rgba(13, 179, 13, 0.63);\r\n  }\r\n  h1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\r\n    color: tomato;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsYWluLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7RUFDQTs7Ozs7S0FLRztFQUNIO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFDQUFxQztFQUN2QztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6ImNvbXBsYWluLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRhYmxlLWhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIC50ZC11c2VyX2lke1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMnB4IGF1dG87XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG4gIC8qIC50ZC1hY3RpdmV7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICB9ICovXHJcbiAgLnRkLWNvbXB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLnRhYmxlLWJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAudGFibGUtYm9keTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDYsIDIzMywgMTI5KTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICAuc3BhY2VyLWhlaWdodHtcclxuICAgIGhlaWdodDogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTMsIDE3OSwgMTMsIDAuNjMpO1xyXG4gIH1cclxuXHJcbiAgaDE+c3BhbntcclxuICAgIGNvbG9yOiB0b21hdG87XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "ZL7T":
/*!************************************************!*\
  !*** ./src/app/shared/services/map.service.ts ***!
  \************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class MapService {
    constructor(db) {
        this.db = db;
        this.document = db.collection('/Bus Static Locations');
    }
    getBusdata() {
        return this.document;
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cnhq":
/*!***************************************************************************!*\
  !*** ./src/app/facilities/employee-details/employee-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/employee.service */ "SJiT");



class EmployeeDetailsComponent {
    constructor(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
        this.id = '';
    }
    goToPage(link) {
        this.router.navigate(['/facilities/employeeDetails/' + link]).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    ngOnInit() {
    }
    create(employee) {
        this.employeeService.registerEmployee(employee);
    }
    update(employee) {
        this.employeeService.updateEmployee(employee);
    }
    delete(employee) {
        this.employeeService.removeEmployee(employee);
    }
}
EmployeeDetailsComponent.ɵfac = function EmployeeDetailsComponent_Factory(t) { return new (t || EmployeeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"])); };
EmployeeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeDetailsComponent, selectors: [["app-employee-details"]], decls: 17, vars: 0, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/", "routerLinkActive", "active", 3, "click"], [1, "card-container"], ["routerLink", "/facilities/employeeDetails/searchEmployee", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/images/employee.png", "alt", "Search Employee"], ["routerLink", "/facilities/employeeDetails/registerEmployee", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/images/profile.png", "alt", "Employee details"]], template: function EmployeeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDetailsComponent_Template_button_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Employee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDetailsComponent_Template_a_click_9_listener() { return ctx.goToPage("searchEmployee"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDetailsComponent_Template_a_click_13_listener() { return ctx.goToPage("registerEmployee"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Register New Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  \r\n  margin-top: 0.8em;\r\n  height: -webkit-max-content;\r\n  height: max-content;\r\n  width: 100%;\r\n  border: #125699;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  border: 1px solid #eee;\r\n  background-color: #fafafa;\r\n  height: 15em;\r\n  \r\n  margin: 1.5em;\r\n  padding: 0.4em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n  align-items: center;\r\n  transition: all 0.12s ease-in-out;\r\n  \r\n  \r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n  flex: 1 0 40%;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 8em;\r\n  width: auto;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n    flex: 1 0 40%;\r\n  }\r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]:first-child {\r\n    flex: 1 0 70%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n    flex: 1 0 70%;\r\n  }\r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]:first-child {\r\n    flex: 1 0 70%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7O0tBRUs7O0FBR0w7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJlbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogcGFkZGluZzogMWVtOyAqL1xyXG4gIG1hcmdpbi10b3A6IDAuOGVtO1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAjMTI1Njk5O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgaGVpZ2h0OiAxNWVtO1xyXG4gIC8qIHdpZHRoOiA0MCU7ICovXHJcbiAgbWFyZ2luOiAxLjVlbTtcclxuICBwYWRkaW5nOiAwLjRlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTJzIGVhc2UtaW4tb3V0O1xyXG4gIC8qIGxpbmUtaGVpZ2h0OiAyNHB4OyAqL1xyXG4gIC8qIG91dGxpbmUtc3R5bGU6IGRhc2hlZDsgKi9cclxufVxyXG4uY2FyZC1jb250YWluZXI+LmNhcmQge1xyXG4gIGZsZXg6IDEgMCA0MCU7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciBpbWd7XHJcbiAgaGVpZ2h0OiA4ZW07XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciBzcGFue1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLyogLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH0gKi9cclxuXHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2FyZC1jb250YWluZXI+LmNhcmQge1xyXG4gICAgZmxleDogMSAwIDQwJTtcclxuICB9XHJcbiAgLmNhcmQtY29udGFpbmVyPi5jYXJkOmZpcnN0LWNoaWxkIHtcclxuICAgIGZsZXg6IDEgMCA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5jYXJkLWNvbnRhaW5lcj4uY2FyZCB7XHJcbiAgICBmbGV4OiAxIDAgNzAlO1xyXG4gIH1cclxuICAuY2FyZC1jb250YWluZXI+LmNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgZmxleDogMSAwIDcwJTtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "kli/":
/*!************************************************************************************!*\
  !*** ./src/app/facilities/schedule/display-schedule/display-schedule.component.ts ***!
  \************************************************************************************/
/*! exports provided: DisplayScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayScheduleComponent", function() { return DisplayScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class DisplayScheduleComponent {
    constructor(router, _location) {
        this.router = router;
        this._location = _location;
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    ngOnInit() {
    }
}
DisplayScheduleComponent.ɵfac = function DisplayScheduleComponent_Factory(t) { return new (t || DisplayScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
DisplayScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayScheduleComponent, selectors: [["app-display-schedule"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "facilities/schedule", "routerLinkActive", "active", 3, "click"], ["action", "/action_page.php"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", ""], ["type", "submit", "value", "View Schedule"]], template: function DisplayScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayScheduleComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Display Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter Name of Bus Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["input[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    padding: 12px 17px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid #555;\r\n    border-radius: 4px;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]{\r\n    background-color: #4CAF50;\r\n    padding: 16px 32px;\r\n    border: none;\r\n    color: white;\r\n    font-size: 17px;\r\n    width: 45%;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 0.25s ease-out;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]:hover {\r\n    \r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);\r\n  }\r\n  label[_ngcontent-%COMP%]{\r\n      text-align: justify;\r\n      font-size: 17px\r\n  }\r\n  input[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    padding: 12px 17px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid #555;\r\n    border-radius: 4px;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]{\r\n    background-color: #4CAF50;\r\n    padding: 16px 32px;\r\n    border: none;\r\n    color: white;\r\n    font-size: 17px;\r\n    width: 45%;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 0.25s ease-out;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]:hover {\r\n    \r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);\r\n  }\r\n  label[_ngcontent-%COMP%]{\r\n      text-align: justify;\r\n      font-size: 17px\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0lBQ2Ysd0VBQXdFO0lBQ3hFLDBCQUEwQjtFQUM1QjtFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLDJDQUEyQztFQUM3QztFQUVBO01BQ0ksbUJBQW1CO01BQ25CO0VBQ0o7RUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0lBQ2Ysd0VBQXdFO0lBQ3hFLDBCQUEwQjtFQUM1QjtFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLDJDQUEyQztFQUM3QztFQUVBO01BQ0ksbUJBQW1CO01BQ25CO0VBQ0oiLCJmaWxlIjoiZGlzcGxheS1zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAxN3B4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXN1Ym1pdF17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjByZW0pOyovXHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICBcclxuICBsYWJlbHtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgZm9udC1zaXplOiAxN3B4XHJcbiAgfVxyXG5cclxuICBpbnB1dHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE3cHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9c3VibWl0XXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yMHJlbSk7Ki9cclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVse1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICBmb250LXNpemU6IDE3cHhcclxuICB9XHJcblxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "qoX0":
/*!***************************************!*\
  !*** ./src/app/shared/models/fare.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fare; });
class Fare {
}


/***/ }),

/***/ "rlCP":
/*!**********************************************************!*\
  !*** ./src/app/facilities/tracking/map/map.component.ts ***!
  \**********************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "pxUr");




class MapComponent {
    constructor(router, _location, activatedRoute) {
        var _a;
        this.router = router;
        this._location = _location;
        this.activatedRoute = activatedRoute;
        this.lat = 0.0;
        this.long = 0.0;
        this.zoom = 18;
        this.Busdata = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        if (this.Busdata == null) {
            this.goBackOnce();
        }
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    ngOnInit() {
        // this.Busdata = this.router.routerState.snapshot.root.data;
        this.Busdata = history.state;
        this.lat = Number(this.Busdata[0]["Latitude"]);
        this.long = Number(this.Busdata[0]["Longitude"]);
    }
    ngOnDestroy() {
        this.Busdata;
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 14, vars: 5, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/", "routerLinkActive", "active", 3, "click"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude"], [1, "Bustracking-banner"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bus Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "agm-map", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "agm-marker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Aishwarya michael is a beautiful soul better than others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.long)("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.long);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"]], styles: ["Bustracking-banner[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 20px auto 32px;\r\n    \r\n    align-content: center;\r\n    \r\n}\r\nagm-map[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  padding: 12px 17px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 2px solid #555;\r\n  border-radius: 4px;\r\n}\r\ninput[type=submit][_ngcontent-%COMP%]{\r\n  background-color: #4CAF50;\r\n  padding: 16px 32px;\r\n  border: none;\r\n  color: white;\r\n  font-size: 17px;\r\n  width: 45%;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.25s ease-out;\r\n}\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  \r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n    font-size: 17px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0Qjs7Z0NBRTRCO0lBQzVCLHFCQUFxQjs7QUFFekI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZix3RUFBd0U7RUFDeEUsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMkNBQTJDO0FBQzdDO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSiIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkJ1c3RyYWNraW5nLWJhbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDMycHg7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbmFnbS1tYXAge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZzogMTJweCAxN3B4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5pbnB1dFt0eXBlPXN1Ym1pdF17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjIwcmVtKTsqL1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogMTdweFxyXG59Il19 */"] });


/***/ }),

/***/ "udiV":
/*!*************************************************!*\
  !*** ./src/app/shared/services/fare.service.ts ***!
  \*************************************************/
/*! exports provided: FareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareService", function() { return FareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class FareService {
    constructor(db) {
        this.db = db;
        this.dbPath = '/Bus Fare ';
        this.document = db.collection('/Bus Fare ');
    }
    getFare() {
        return this.document;
    }
    updateFare(fare) {
        return this.document.doc(fare.bus_type).update(Object.assign({}, fare));
        ;
    }
}
FareService.ɵfac = function FareService_Factory(t) { return new (t || FareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
FareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FareService, factory: FareService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facilities/facilities.component */ "U7dw");
/* harmony import */ var _facilities_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facilities/tracking/tracking.component */ "2qce");
/* harmony import */ var _facilities_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facilities/schedule/schedule.component */ "Q5xF");
/* harmony import */ var _facilities_customer_support_customer_support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facilities/customer-support/customer-support.component */ "8vhU");
/* harmony import */ var _facilities_fare_update_fare_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facilities/fare-update/fare-update.component */ "yF+o");
/* harmony import */ var _facilities_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facilities/employee-details/employee-details.component */ "cnhq");
/* harmony import */ var _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-banner/main-banner.component */ "Go5R");
/* harmony import */ var _facilities_employee_details_search_employee_search_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./facilities/employee-details/search-employee/search-employee.component */ "CTmZ");
/* harmony import */ var _facilities_employee_details_register_new_employee_register_new_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facilities/employee-details/register-new-employee/register-new-employee.component */ "xPVv");
/* harmony import */ var _facilities_schedule_display_schedule_display_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./facilities/schedule/display-schedule/display-schedule.component */ "kli/");
/* harmony import */ var _facilities_schedule_generate_new_schedule_generate_new_schedule_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./facilities/schedule/generate-new-schedule/generate-new-schedule.component */ "/lby");
/* harmony import */ var _facilities_tracking_map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./facilities/tracking/map/map.component */ "rlCP");
/* harmony import */ var _facilities_customer_support_complain_list_complain_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./facilities/customer-support/complain-list/complain-list.component */ "ZJip");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const routes = [
    { path: '', component: _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_1__["FacilitiesComponent"] },
    { path: 'facilities/tracking', component: _facilities_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_2__["TrackingComponent"] },
    { path: 'facilities/tracking/map', component: _facilities_tracking_map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"], data: { Bustype: Object.assign({}, []) } },
    { path: 'facilities/schedule', component: _facilities_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"] },
    { path: 'facilities/schedule/display-schedule', component: _facilities_schedule_display_schedule_display_schedule_component__WEBPACK_IMPORTED_MODULE_10__["DisplayScheduleComponent"] },
    { path: 'facilities/schedule/generate-schedule', component: _facilities_schedule_generate_new_schedule_generate_new_schedule_component__WEBPACK_IMPORTED_MODULE_11__["GenerateNewScheduleComponent"] },
    { path: 'facilities/schedule', component: _facilities_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"] },
    { path: 'facilities/customerSupport', component: _facilities_customer_support_customer_support_component__WEBPACK_IMPORTED_MODULE_4__["CustomerSupportComponent"] },
    { path: 'facilities/fareUpdate', component: _facilities_fare_update_fare_update_component__WEBPACK_IMPORTED_MODULE_5__["FareUpdateComponent"] },
    { path: 'facilities/employeeDetails', component: _facilities_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDetailsComponent"] },
    { path: 'mainBanner', component: _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_7__["MainBannerComponent"] },
    { path: 'facilities/employeeDetails/searchEmployee', component: _facilities_employee_details_search_employee_search_employee_component__WEBPACK_IMPORTED_MODULE_8__["SearchEmployeeComponent"] },
    { path: 'facilities/employeeDetails/registerEmployee', component: _facilities_employee_details_register_new_employee_register_new_employee_component__WEBPACK_IMPORTED_MODULE_9__["RegisterNewEmployeeComponent"] },
    { path: 'facilities/customerSupport/complain-list', component: _facilities_customer_support_complain_list_complain_list_component__WEBPACK_IMPORTED_MODULE_13__["ComplainListComponent"] }
    // { path: '**', component: PageNotFoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xPVv":
/*!******************************************************************************************************!*\
  !*** ./src/app/facilities/employee-details/register-new-employee/register-new-employee.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RegisterNewEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterNewEmployeeComponent", function() { return RegisterNewEmployeeComponent; });
/* harmony import */ var src_app_shared_models_employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/employee */ "2Qg9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/employee.service */ "SJiT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function RegisterNewEmployeeComponent_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter proper name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterNewEmployeeComponent_div_8_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter proper Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterNewEmployeeComponent_div_8_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter proper email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterNewEmployeeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Enter Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterNewEmployeeComponent_div_8_div_7_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterNewEmployeeComponent_div_8_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.document.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Enter Phone number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RegisterNewEmployeeComponent_div_8_div_15_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterNewEmployeeComponent_div_8_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.document.phone_no = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Enter Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RegisterNewEmployeeComponent_div_8_div_23_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterNewEmployeeComponent_div_8_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.document.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterNewEmployeeComponent_div_8_Template_input_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.saveEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.validators[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.document.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.validators[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.document.phone_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.validators[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.document.email);
} }
function RegisterNewEmployeeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You submitted successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterNewEmployeeComponent_div_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.newEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterNewEmployeeComponent {
    constructor(router, _location, employeeService) {
        this.router = router;
        this._location = _location;
        this.employeeService = employeeService;
        this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.regex = /(\w+@\w+.\w+)/g;
        this.document = new src_app_shared_models_employee__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.submitted = false;
        // this.valid = false;
        this.validators = [true, true, true];
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    ngOnInit() {
    }
    isAlpha(val) {
        let i = 1;
        let j = 1;
        let n = val.length;
        for (j = 1; j < n; j++) {
            let temp = +val[i];
            for (i = 1; i < 10; i++) {
                if (temp == this.numbers[i]) {
                    return false;
                }
            }
        }
        return true;
    }
    saveEmployee() {
        var _a, _b, _c;
        this.validators = [false, false, false];
        let name = (_a = this.document.name) !== null && _a !== void 0 ? _a : "";
        let phone_no = String((_b = this.document.phone_no) !== null && _b !== void 0 ? _b : "");
        let email = (_c = this.document.email) !== null && _c !== void 0 ? _c : "";
        if (name.length > 0) {
            this.validators[0] = true;
        }
        if (phone_no.length == 10 && this.isAlpha(phone_no)) {
            this.validators[1] = true;
        }
        if (email.length > 0 && email.match(this.regex)) {
            this.validators[2] = true;
        }
        if (this.validators[0] && this.validators[1] && this.validators[2]) {
            this.employeeService.registerEmployee(this.document).then(() => {
                console.log("Successfully registered new employee");
                this.submitted = true;
            });
        }
        else if (!this.validators[0] && !this.validators[1] && !this.validators[2]) {
            console.log("Enter all required fields!");
        }
    }
    newEmployee() {
        this.submitted = false;
        this.document = new src_app_shared_models_employee__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
}
RegisterNewEmployeeComponent.ɵfac = function RegisterNewEmployeeComponent_Factory(t) { return new (t || RegisterNewEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"])); };
RegisterNewEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterNewEmployeeComponent, selectors: [["app-register-new-employee"]], decls: 10, vars: 2, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/facilities/employeeDetails", "routerLinkActive", "active", 3, "click"], [4, "ngIf"], ["action", "/action_page.php"], ["for", "new_name"], ["type", "text", "id", "new_name", "name", "new_name", "required", "", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["type", "text", "id", "phone", "name", "phone", "required", "", 3, "ngModel", "ngModelChange"], ["for", "mail"], ["type", "email", "id", "mail", "name", "mail", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 3, "click"], [3, "click"]], template: function RegisterNewEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterNewEmployeeComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Register Details of New Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RegisterNewEmployeeComponent_div_8_Template, 28, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RegisterNewEmployeeComponent_div_9_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["input[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    padding: 12px 17px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid #555;\r\n    border-radius: 4px;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]{\r\n    background-color: #4CAF50;\r\n    padding: 16px 32px;\r\n    border: none;\r\n    color: white;\r\n    font-size: 17px;\r\n    width: 45%;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 0.25s ease-out;\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]:hover {\r\n    \r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);\r\n  }\r\n  label[_ngcontent-%COMP%]{\r\n      text-align: justify;\r\n      font-size: 17px\r\n  }\r\n  span[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLW5ldy1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZix3RUFBd0U7SUFDeEUsMEJBQTBCO0VBQzVCO0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsMkNBQTJDO0VBQzdDO0VBRUE7TUFDSSxtQkFBbUI7TUFDbkI7RUFDSjtFQUVGO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InJlZ2lzdGVyLW5ldy1lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAxN3B4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXN1Ym1pdF17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjByZW0pOyovXHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICBcclxuICBsYWJlbHtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgZm9udC1zaXplOiAxN3B4XHJcbiAgfVxyXG5cclxuc3BhbntcclxuICBjb2xvcjogcmVkO1xyXG59Il19 */"] });


/***/ }),

/***/ "yF+o":
/*!*****************************************************************!*\
  !*** ./src/app/facilities/fare-update/fare-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: FareUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareUpdateComponent", function() { return FareUpdateComponent; });
/* harmony import */ var src_app_shared_models_fare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fare */ "qoX0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_fare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/fare.service */ "udiV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function FareUpdateComponent_div_13_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r6);
} }
function FareUpdateComponent_div_13_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter Bus type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FareUpdateComponent_div_13_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter minimum price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FareUpdateComponent_div_13_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter price per km");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FareUpdateComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Enter Bus Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Choose Bus Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select Bus Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FareUpdateComponent_div_13_option_13_Template, 2, 1, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FareUpdateComponent_div_13_div_14_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Revised minimum price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " (in Rupees)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FareUpdateComponent_div_13_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.document.min_price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FareUpdateComponent_div_13_div_23_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Price/KM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "(in Rupees)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FareUpdateComponent_div_13_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.document.per_km = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, FareUpdateComponent_div_13_div_32_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FareUpdateComponent_div_13_Template_input_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.saveFare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.busTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.validators[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.document.min_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.validators[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.document.per_km);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.validators[2]);
} }
function FareUpdateComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You updated fare successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FareUpdateComponent_div_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.newFare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FareUpdateComponent {
    constructor(router, _location, fareservice) {
        this.router = router;
        this._location = _location;
        this.fareservice = fareservice;
        this.document = new src_app_shared_models_fare__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.submitted = false;
        this.validators = [true, true, true];
        this.busTypes = [];
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    ngOnInit() {
        this.fareservice.getFare().snapshotChanges().subscribe((data) => {
            this.busTypes = data.map((a) => {
                const data = a.payload.doc.data().bus_type;
                return data;
            });
        });
    }
    saveFare() {
        var _a, _b, _c;
        this.validators = [false, false, false];
        let bus_type = (_a = this.document.bus_type) !== null && _a !== void 0 ? _a : "";
        let min_price = Number((_b = this.document.min_price) !== null && _b !== void 0 ? _b : "");
        let per_km = Number((_c = this.document.per_km) !== null && _c !== void 0 ? _c : "");
        if (bus_type.length > 0) {
            this.validators[0] = true;
        }
        if (min_price > 0) {
            this.validators[1] = true;
        }
        if (per_km > 0) {
            this.validators[2] = true;
        }
        if (this.validators[0] && this.validators[1] && this.validators[2]) {
            this.fareservice.updateFare(this.document).then(() => {
                console.log("Successfully updated the fare");
                this.submitted = true;
            });
        }
        else if (!this.validators[0] && !this.validators[1] && !this.validators[2]) {
            console.log("Enter all required fields!");
        }
        this.fareservice.updateFare(this.document).then(() => {
            console.log("New Fare Updated ");
            this.submitted = true;
        });
    }
    newFare() {
        this.submitted = false;
        this.document = new src_app_shared_models_fare__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
}
FareUpdateComponent.ɵfac = function FareUpdateComponent_Factory(t) { return new (t || FareUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_fare_service__WEBPACK_IMPORTED_MODULE_4__["FareService"])); };
FareUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FareUpdateComponent, selectors: [["app-fare-update"]], decls: 15, vars: 2, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/", "routerLinkActive", "active", 3, "click"], [1, "fareupdation-banner"], ["href", "https://www.newgenapps.com/wp-content/uploads/2020/04/Navigator-Navigation-Google-Maps-Map-Location-Gps-2049643.jpg", "target", "_blank"], ["id", "t-img", "alt", "Fare Updation", "src", "assets/images/capture.png", "width", "304", "height", "328"], [4, "ngIf"], ["action", "/action_page.php"], ["for", "bus_type"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["type", "text", "id", "new_name", "name", "new_name", 4, "ngFor", "ngForOf"], ["for", "minprice"], ["type", "number", "id", "Bnum", "name", "Bnum", "required", "", 3, "ngModel", "ngModelChange"], ["for", "price/km"], ["type", "number", "id", "from", "name", "from", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Update", 3, "click"], ["type", "text", "id", "new_name", "name", "new_name"], ["id", "validator"], [3, "click"]], template: function FareUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FareUpdateComponent_Template_button_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fare Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FareUpdateComponent_div_13_Template, 36, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FareUpdateComponent_div_14_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".fareupdation-banner[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 20px auto 32px;\r\n    align-content: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  padding: 12px 17px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 2px solid #555;\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]{\r\n  background-color: #4CAF50;\r\n  padding: 16px 32px;\r\n  border: none;\r\n  color: white;\r\n  font-size: 17px;\r\n  width: 45%;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 0.2s ease-out;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  \r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n    font-size: 17px\r\n}\r\n\r\n#validator[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n\r\nselect[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  padding: 12px 17px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n  border: 2px solid #555;\r\n  border-radius: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcmUtdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMkNBQTJDO0FBQzdDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0o7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJmYXJlLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhcmV1cGRhdGlvbi1iYW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAzMnB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMTdweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuaW5wdXRbdHlwZT1zdWJtaXRde1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjIwcmVtKTsqL1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogMTdweFxyXG59XHJcbiN2YWxpZGF0b3J7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5zZWxlY3R7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBwYWRkaW5nOiAxMnB4IDE3cHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "zHea":
/*!********************************************************************************************************!*\
  !*** ./src/app/facilities/employee-details/search-employee/employee-table/employee-table.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EmployeeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTableComponent", function() { return EmployeeTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/employee.service */ "SJiT");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");





function EmployeeTableComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeTableComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.buttonPressed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Conductor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r2.email);
} }
function EmployeeTableComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Matching Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { itemsPerPage: 10, currentPage: 1 }; };
class EmployeeTableComponent {
    constructor(router, _location, employeeService) {
        this.router = router;
        this._location = _location;
        this.employeeService = employeeService;
        this.noData = false;
        this.employee = [];
    }
    ngOnChanges(changes) {
        console.log(changes['employee'].currentValue);
        if (changes['employee'].currentValue.length == 0) {
            this.noData = true;
        }
        else {
            this.noData = false;
        }
    }
    ngOnInit() {
    }
    delete() {
        console.log("delete button pressed");
    }
    buttonPressed() {
        console.log("Button pressed");
    }
    goBack() {
        this.router.navigate(['/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
}
EmployeeTableComponent.ɵfac = function EmployeeTableComponent_Factory(t) { return new (t || EmployeeTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"])); };
EmployeeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeTableComponent, selectors: [["app-employee-table"]], inputs: { employee: "employee" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 6, consts: [[1, "container"], [1, "table"], [1, "table-header"], [1, "td-mail"], [1, "td-active"], [1, "td-desig"], [1, "spacer-height"], [1, "table-container"], ["class", "table-body", 3, "click", 4, "ngFor", "ngForOf"], ["id", "noData", "class", "table-body", 4, "ngIf"], [1, "table-body", 3, "click"], ["id", "noData", 1, "table-body"]], template: function EmployeeTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmployeeTableComponent_button_14_Template, 10, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmployeeTableComponent_div_16_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 2, ctx.employee, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 90%;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  text-align: center;\r\n}\r\n.table-header[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n  flex-direction: row;\r\n  font-weight: 600;\r\n  width: 100%;\r\n  font-size: large;\r\n  flex: 1 1 auto;\r\n}\r\n.td-mail[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  padding: 2px auto;\r\n  align-content: flex-start;\r\n  text-align: start;\r\n}\r\n.td-active[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  padding: 2px auto;\r\n  text-align: start;\r\n  align-content: flex-start;\r\n}\r\n.td-desig[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  padding: 2px auto;\r\n  text-align: start;\r\n  align-content: flex-start;\r\n}\r\n.table-body[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n  flex-direction: row;\r\n  padding-bottom: 5px;\r\n  height: 37px;\r\n  font-weight: 400;\r\n  font-size: medium;\r\n  width: 100%;\r\n  flex: 1 1 auto;\r\n  border-radius: 8px;\r\n  border-width: 0px;\r\n  background-color: transparent;\r\n}\r\n.table-body[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(146, 233, 129);\r\n  color: grey;\r\n}\r\n.spacer-height[_ngcontent-%COMP%]{\r\n  height: 0.8em;\r\n}\r\n.table-container[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  border-radius: 8px;\r\n  border-style: solid;\r\n  border-color: rgba(13, 179, 13, 0.63);\r\n}\r\n#noData[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJlbXBsb3llZS10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYmxlLWhlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4udGQtbWFpbHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogMnB4IGF1dG87XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG4udGQtYWN0aXZle1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwYWRkaW5nOiAycHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi50ZC1kZXNpZ3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMnB4IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4udGFibGUtYm9keXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGhlaWdodDogMzdweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udGFibGUtYm9keTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ2LCAyMzMsIDEyOSk7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuLnNwYWNlci1oZWlnaHR7XHJcbiAgaGVpZ2h0OiAwLjhlbTtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMTMsIDE3OSwgMTMsIDAuNjMpO1xyXG59XHJcblxyXG4jbm9EYXRhe1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map