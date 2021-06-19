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
/* harmony import */ var src_app_shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/schedule.service */ "3DMK");
/* harmony import */ var src_app_shared_services_suggest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/suggest-api.service */ "dgrh");





function GenerateNewScheduleComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenerateNewScheduleComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.buttonPressed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schedule_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schedule_r1.routeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schedule_r1.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schedule_r1.status);
} }
class GenerateNewScheduleComponent {
    constructor(router, _location, scheduleService, api) {
        this.router = router;
        this._location = _location;
        this.scheduleService = scheduleService;
        this.api = api;
        this.schedule = [];
    }
    goBack() {
        this.router.navigate(['/facilities/schedule/']).then(success => console.log('navigation success?', success)).catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    suggestAPI() {
        this.api.getJSONRepos();
    }
    ngOnInit() {
        this.scheduleService.getSchedule().snapshotChanges().subscribe(data => {
            this.schedule = data.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                console.log(data);
                return Object.assign({}, data);
            });
        });
    }
    buttonPressed() {
        console.log("Button pressed");
    }
}
GenerateNewScheduleComponent.ɵfac = function GenerateNewScheduleComponent_Factory(t) { return new (t || GenerateNewScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_suggest_api_service__WEBPACK_IMPORTED_MODULE_4__["SuggestAPIService"])); };
GenerateNewScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenerateNewScheduleComponent, selectors: [["app-generate-new-schedule"]], inputs: { schedule: "schedule" }, decls: 27, vars: 1, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], [3, "click"], [1, "table"], [1, "table-header"], [1, "td-name"], [1, "td-count"], [1, "td-status"], [1, "spacer-height"], [1, "table-container"], ["class", "table-body", 3, "click", 4, "ngFor", "ngForOf"], [1, "vspacer"], [1, "buttonGenerate"], [1, "table-body", 3, "click"]], template: function GenerateNewScheduleComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Suggested New Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Route Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GenerateNewScheduleComponent_button_21_Template, 10, 3, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenerateNewScheduleComponent_Template_button_click_25_listener() { return ctx.suggestAPI(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Generate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schedule);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 90%;\r\n    margin: 10px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-content: center;\r\n    text-align: center;\r\n  }\r\n  .table-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    flex-direction: row;\r\n    font-weight: 600;\r\n    width: 100%;\r\n    font-size: large;\r\n    flex: 1 1 auto;\r\n  }\r\n  .td-name[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    padding: 2px auto;\r\n    align-content: flex-start;\r\n    text-align: start;\r\n  }\r\n  .td-count[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    padding: 2px auto;\r\n    text-align: start;\r\n    align-content: flex-start;\r\n  }\r\n  .td-status[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    padding: 2px auto;\r\n    text-align: start;\r\n    align-content: flex-start;\r\n  }\r\n  .table-body[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    flex-direction: row;\r\n    padding-bottom: 5px;\r\n    height: 37px;\r\n    font-weight: 400;\r\n    font-size: medium;\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    border-radius: 8px;\r\n    border-width: 0px;\r\n    background-color: transparent;\r\n  }\r\n  .table-body[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(146, 233, 129);\r\n    color: grey;\r\n  }\r\n  .spacer-height[_ngcontent-%COMP%]{\r\n    height: 0.8em;\r\n  }\r\n  .table-container[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border-radius: 8px;\r\n    border-style: solid;\r\n    border-color: rgba(13, 179, 13, 0.63);\r\n  }\r\n  #noData[_ngcontent-%COMP%]{\r\n    color: red;\r\n  }\r\n  .buttonGenerate[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\r\n    height: 75px;\r\n    width: 75px;\r\n    border-radius: 10px;\r\n    border: rgb(228, 81, 81);\r\n    color: whitesmoke;\r\n    background-color: rgba(228, 81, 81, 0.753);\r\n    cursor: pointer;  \r\n  }\r\n  .buttonGenerate[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(228, 81, 81, 0.925);\r\n  }\r\n  .vspacer[_ngcontent-%COMP%]{\r\n    height: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLW5ldy1zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUNBQXFDO0VBQ3ZDO0VBRUE7SUFDRSxVQUFVO0VBQ1o7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLGVBQWU7RUFDakI7RUFFQTtJQUNFLDBDQUEwQztFQUM1QztFQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6ImdlbmVyYXRlLW5ldy1zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGFibGUtaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLnRkLW5hbWV7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggYXV0bztcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB9XHJcbiAgLnRkLWNvdW50e1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMnB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC50ZC1zdGF0dXN7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLnRhYmxlLWJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAudGFibGUtYm9keTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDYsIDIzMywgMTI5KTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICAuc3BhY2VyLWhlaWdodHtcclxuICAgIGhlaWdodDogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTMsIDE3OSwgMTMsIDAuNjMpO1xyXG4gIH1cclxuICBcclxuICAjbm9EYXRhe1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5idXR0b25HZW5lcmF0ZT5idXR0b257XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IHJnYigyMjgsIDgxLCA4MSk7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCA4MSwgODEsIDAuNzUzKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgIFxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbkdlbmVyYXRlPmJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCA4MSwgODEsIDAuOTI1KTtcclxuICB9XHJcblxyXG4gIC52c3BhY2Vye1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH0iXX0= */"] });


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

module.exports = __webpack_require__(/*! C:\Users\Aquaregis32\Documents\Github\OduKomban\website-o_k\src\main.ts */"zUnb");


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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](Bus_r1.Bus_ID);
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
    goBackOnce() {
        this._location.back();
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
            return buses.Bus_ID == opt;
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
TrackingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TrackingComponent, selectors: [["app-tracking"]], decls: 28, vars: 3, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], [3, "click"], [1, "tracking-banner"], ["href", "https://www.newgenapps.com/wp-content/uploads/2020/04/Navigator-Navigation-Google-Maps-Map-Location-Gps-2049643.jpg", "target", "_blank"], ["id", "t-img", "alt", "Tracking", "src", "assets/images/Navigator.jpg", "width", "304", "height", "328"], [3, "formGroup", "ngSubmit"], ["for", "busInfo"], ["formControlName", "busInfo", 1, "form-control"], ["disabled", ""], [4, "ngFor", "ngForOf"], ["type", "submit", 3, "disabled"]], template: function TrackingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TrackingComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["Bustracking-banner[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 20px auto 32px;\r\n  \r\n  align-content: center;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCOzs4QkFFNEI7RUFDNUIscUJBQXFCOztBQUV2QiIsImZpbGUiOiJ0cmFja2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQnVzdHJhY2tpbmctYmFubmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDIwcHggYXV0byAzMnB4O1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIFxyXG59Il19 */"] });


/***/ }),

/***/ "3DMK":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/schedule.service.ts ***!
  \*****************************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class ScheduleService {
    constructor(db) {
        this.db = db;
        this.document = db.collection('/Schedule Suggest');
    }
    getSchedule() {
        return this.document;
    }
}
ScheduleService.ɵfac = function ScheduleService_Factory(t) { return new (t || ScheduleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ScheduleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScheduleService, factory: ScheduleService.ɵfac, providedIn: 'root' });


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
CustomerSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerSupportComponent, selectors: [["app-customer-support"]], decls: 35, vars: 4, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], [3, "click"], [1, "tracking-banner"], ["href", "https://www.newgenapps.com/wp-content/uploads/2020/04/Navigator-Navigation-Google-Maps-Map-Location-Gps-2049643.jpg", "target", "_blank"], ["id", "t-img", "alt", "Customer-Support", "src", "assets/images/customer-service (1).png", "width", "304", "height", "328"], [3, "formGroup", "ngSubmit"], ["for", "Complainant"], ["formControlName", "Complainant"], [4, "ngFor", "ngForOf"], ["formControlName", "Route"], ["type", "submit", 3, "disabled"]], template: function CustomerSupportComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".tracking-banner[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 20px auto 32px;\r\n    \r\n    align-content: center;\r\n}\r\n\r\nbutton[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  padding: 16px 32px;\r\n  border: none;\r\n  color: white;\r\n  font-size: 17px;\r\n  width: 45%;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  margin-bottom: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXN1cHBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEI7O2dDQUU0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0VBQ2Ysd0VBQXdFO0VBQ3hFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJjdXN0b21lci1zdXBwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhY2tpbmctYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMzJweDtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b25bdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB3aWR0aDogNDUlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcbiJdfQ== */"] });


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
        // let ref = this.db.collection("Route Feedback").doc(route).collection("Passenger Complaints");
        // let res;
        // ref.snapshotChanges().subscribe(data => {
        //   data.map((a) => {
        //     res = a.payload.doc.data();
        //     return res;
        //   });
        // });
        // console.log(`Route ${res}`);
        return this.document.doc(route).collection("Passenger Complaints");
    }
    getFeedbackDriverConductor(route) {
        return this.document.doc(route).collection("DriverConductor Complaints");
    }
}
CustomercareService.ɵfac = function CustomercareService_Factory(t) { return new (t || CustomercareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
CustomercareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomercareService, factory: CustomercareService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ApuW":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/register-key.service.ts ***!
  \*********************************************************/
/*! exports provided: RegisterKeyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterKeyService", function() { return RegisterKeyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class RegisterKeyService {
    constructor(db) {
        this.db = db;
        this.document = db.collection('Service Keys');
    }
    checkKeyValidity(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const doc = yield this.document.doc(key).get().toPromise();
            return doc.exists;
        });
    }
}
RegisterKeyService.ɵfac = function RegisterKeyService_Factory(t) { return new (t || RegisterKeyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
RegisterKeyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegisterKeyService, factory: RegisterKeyService.ɵfac, providedIn: 'root' });


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

/***/ "B5Na":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/search-filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @returns {any[]}
     */
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.toLocaleLowerCase().includes(searchText);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appFilter", type: FilterPipe, pure: true });


/***/ }),

/***/ "Bcjh":
/*!******************************************************!*\
  !*** ./src/app/wrapper/sign-in/sign-in.component.ts ***!
  \******************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_fire_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/fire-auth.service */ "dP/y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SignInComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignInComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(router, fs) {
        this.router = router;
        this.fs = fs;
        this.userAuth = this.fs.signedIn.subscribe((user) => {
            if (user) {
                this.router.navigate(['/facilities']);
            }
        });
        this.validators = [true, true];
        this.user = { emp_id: "", pswd: "" };
    }
    goToPage(link) {
        this.router.navigate(['/' + link]).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    // userForm = new FormGroup({
    //   emp_id: new FormControl('', [Validators.minLength(0), Validators.pattern(/([\w]+@[\w]+.[\w]+)/g)]),
    //   pswd: new FormControl('', Validators.minLength(6))
    // })
    empValidate(emp) {
        if (emp.match(/(\w)/) && emp.match(/(@)/g) && emp.length > 0) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    pswdValidate(pswd) {
        if (pswd.match(/(\d)/g) && pswd.match(/(\w)/g) && pswd.length > 0) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    validate(user, pswd) {
        this.validators[0] = false;
        if (this.empValidate(user)) {
            this.validators[0] = true;
        }
        this.validators[1] = false;
        if (this.pswdValidate(pswd)) {
            this.validators[1] = true;
        }
        if (this.validators[1] && this.validators[0]) {
            return true;
        }
        else {
            return false;
        }
    }
    signIn(user, pswd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log(this.validate(user, pswd));
                console.log(user);
                if (!this.validate(user, pswd))
                    throw new Error('Invalid sign-in credentials');
                const result = yield this.fs.signIn(user, pswd);
                console.log('Sign in successful!', result);
                if (result)
                    this.router.navigate(['/facilities']);
                else
                    throw new Error('Sign-in failed');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.userAuth)
            this.userAuth.unsubscribe();
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_fire_auth_service__WEBPACK_IMPORTED_MODULE_3__["FireAuthService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 32, vars: 4, consts: [[1, "container"], [1, "container-row"], ["for", "emp_id"], ["type", "email", 3, "ngModel", "ngModelChange"], ["userForm", ""], [4, "ngIf"], ["for", "pswd"], ["type", "password", 3, "ngModel", "ngModelChange"], ["pswdForm", ""], ["type", "submit", "value", "Sign In", 3, "click"], [1, "register", 3, "click"], ["id", "validator"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Enter Employee ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.emp_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SignInComponent_div_14_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.pswd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SignInComponent_div_23_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInComponent_Template_input_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22); return ctx.signIn(_r0.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_29_listener() { return ctx.goToPage("register"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "register instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.emp_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validators[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.pswd);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validators[1]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".register[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    color: white;\r\n    background-color: rgb(236, 135, 68);\r\n    border: none;\r\n    padding: 10px 20px;\r\n    border-radius: 8px;\r\n  }\r\n  .register[_ngcontent-%COMP%]:hover{\r\n    color: wheat;\r\n    background-color: rgb(233, 144, 93);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixtQ0FBbUM7RUFDckMiLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gIC5yZWdpc3RlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDEzNSwgNjgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXI6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAxNDQsIDkzKTtcclxuICB9Il19 */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _employee_table_employee_table_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeTableComponent"]], styles: [".container-row-input[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-content: center;\r\n  text-align: center;\r\n  position: relative;\r\n  margin-top: 2em;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.container-row-input[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n}\r\n\r\n.container-row-input[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{\r\n  width: 75%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzZWFyY2gtZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyLXJvdy1pbnB1dHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXItcm93LWlucHV0PmRpdntcclxuICB3aWR0aDogNjAlO1xyXG59XHJcbi5jb250YWluZXItcm93LWlucHV0PmRpdj5pbnB1dHtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4iXX0= */"] });


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
MainBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBannerComponent, selectors: [["app-main-banner"]], decls: 8, vars: 0, consts: [[1, "main-banner"], ["id", "spacer"], ["href", "https://dribbble.com/shots/5484687-KSRTC-Bus-Kerala", "target", "_blank"], ["id", "banner-img", "alt", "Main banner image", "src", "assets/images/ksrtc_bus_kerala.png"]], template: function MainBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Illustration by Deepak Kumar on dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-banner[_ngcontent-%COMP%] {\r\n  \r\n  margin: 112px auto 10px;\r\n  \r\n  align-content: center;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n#spacer[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n}\r\n\r\n.main-banner[_ngcontent-%COMP%]   #banner-img[_ngcontent-%COMP%] {\r\n  max-width: 750px;\r\n  width: 100%;\r\n  position: relative;\r\n  height: auto;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.main-banner[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background: black;\r\n  color: white;\r\n  margin-bottom: 5px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: visibility 0s, opacity 0.5s linear;\r\n}\r\n\r\n\r\n\r\n.main-banner[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.main-banner[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  padding: 8px 15px;\r\n  visibility: visible;\r\n  opacity: 0.7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCOzs4QkFFNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0dBSUc7O0FBRUg7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUVsQiw4Q0FBOEM7QUFDaEQ7O0FBRUEsOEJBQThCOztBQUM5QjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoibWFpbi1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJhbm5lciB7XHJcbiAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgbWFyZ2luOiAxMTJweCBhdXRvIDEwcHg7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4jc3BhY2Vye1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5tYWluLWJhbm5lciAjYmFubmVyLWltZyB7XHJcbiAgbWF4LXdpZHRoOiA3NTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi8qIGZpZ3VyZSBmaWdjYXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbn0gKi9cclxuXHJcbi5tYWluLWJhbm5lciBmaWdjYXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxufVxyXG5cclxuLyogSG92ZXIgb24gUGFyZW50IENvbnRhaW5lciAqL1xyXG4ubWFpbi1iYW5uZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1haW4tYmFubmVyOmhvdmVyIGZpZ2NhcHRpb24ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_fire_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fire-auth.service */ "dP/y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['signIn']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_fire_auth_service__WEBPACK_IMPORTED_MODULE_1__["FireAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ScheduleComponent {
    constructor(router, _location) {
        this.router = router;
        this._location = _location;
    }
    goToPage(link) {
        this.router.navigateByUrl('/facilities/schedule/' + link).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBack() {
        this.router.navigate(['/facilities/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    ngOnInit() {
    }
}
ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) { return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
ScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScheduleComponent, selectors: [["app-schedule"]], decls: 17, vars: 0, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], [3, "click"], [1, "card-container"], ["routerLink", "facilities/schedule/display-schedule", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/images/clock.png", "alt", "Display Schedule"], ["routerLink", "facilities/schedule/generate-schedule", "routerLinkActive", "active", 1, "card", 3, "click"], ["src", "assets/images/calendar.png", "alt", "Generate New Schedule"]], template: function ScheduleComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Schedule Suggested");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".card-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    \r\n    margin-top: 0.8em;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n    width: 100%;\r\n    border: #125699;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 15em;\r\n    \r\n    margin: 1.5em;\r\n    padding: 0.4em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    align-items: center;\r\n    transition: all 0.12s ease-in-out;\r\n    \r\n    \r\n  }\r\n  \r\n  .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n    flex: 1 0 40%;\r\n  }\r\n  \r\n  .card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 8em;\r\n    width: auto;\r\n  }\r\n  \r\n  .card-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n  }\r\n  \r\n  \r\n  \r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n  }\r\n  \r\n  \r\n  \r\n  @media screen and (max-width: 767px) {\r\n    .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n      flex: 1 0 40%;\r\n    }\r\n    .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]:first-child {\r\n      flex: 1 0 70%;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 575px) {\r\n    .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%] {\r\n      flex: 1 0 70%;\r\n    }\r\n    .card-container[_ngcontent-%COMP%] > .card[_ngcontent-%COMP%]:first-child {\r\n      flex: 1 0 70%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwyQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QiwyQkFBMkI7RUFDN0I7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUdBOztPQUVLOztFQUdMO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQiwwQ0FBMEM7RUFDNUM7O0VBRUE7OztJQUdFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBLHNCQUFzQjs7RUFDdEI7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsYUFBYTtJQUNmO0VBQ0YiLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyogcGFkZGluZzogMWVtOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMC44ZW07XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6ICMxMjU2OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogMTVlbTtcclxuICAgIC8qIHdpZHRoOiA0MCU7ICovXHJcbiAgICBtYXJnaW46IDEuNWVtO1xyXG4gICAgcGFkZGluZzogMC40ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjEycyBlYXNlLWluLW91dDtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAyNHB4OyAqL1xyXG4gICAgLyogb3V0bGluZS1zdHlsZTogZGFzaGVkOyAqL1xyXG4gIH1cclxuICAuY2FyZC1jb250YWluZXI+LmNhcmQge1xyXG4gICAgZmxleDogMSAwIDQwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtY29udGFpbmVyIGltZ3tcclxuICAgIGhlaWdodDogOGVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWNvbnRhaW5lciBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfSAqL1xyXG4gIFxyXG4gIFxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICB9XHJcbiAgXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzEyNTY5OTtcclxuICB9XHJcbiAgXHJcbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNhcmQtY29udGFpbmVyPi5jYXJkIHtcclxuICAgICAgZmxleDogMSAwIDQwJTtcclxuICAgIH1cclxuICAgIC5jYXJkLWNvbnRhaW5lcj4uY2FyZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGZsZXg6IDEgMCA3MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAuY2FyZC1jb250YWluZXI+LmNhcmQge1xyXG4gICAgICBmbGV4OiAxIDAgNzAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtY29udGFpbmVyPi5jYXJkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgZmxleDogMSAwIDcwJTtcclxuICAgIH1cclxuICB9Il19 */"] });


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
/* harmony import */ var _shared_services_fire_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/fire-auth.service */ "dP/y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-banner/main-banner.component */ "Go5R");





function AppComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    // public userAuth: Subscription;
    constructor(fs, router) {
        this.fs = fs;
        this.router = router;
        this.title = 'website-ok';
        this.signedIn = this.fs.signedIn;
        // this.userAuth = this.fs.signedIn.subscribe((user) => {
        //   if (user) {
        //     this.signedIn = true;
        //     console.log("Set true")
        //     this.router.navigate(['facilities']);
        //   } else {
        //     this.signedIn = true;
        //     console.log("Set false")
        //     this.router.navigate(['signIn']);
        //   }
        // });
        var user = JSON.parse(localStorage.getItem('user'));
        if (user !== null && user !== 'null' && user.uid !== null) {
            this.signedIn = true;
            console.log("Set true");
            this.router.navigate(['facilities']);
        }
        else {
            this.signedIn = true;
            console.log("Set false");
            this.router.navigate(['signIn']);
        }
    }
    ngOnInit() {
        this.signedIn = this.fs.signedIn;
    }
    signOut() {
        console.log("signout");
        this.signedIn = false;
        this.router.navigate(['signIn']);
        this.fs.signOut();
    }
    ngOnDestroy() {
        // if (this.userAuth) this.userAuth.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_fire_auth_service__WEBPACK_IMPORTED_MODULE_1__["FireAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 1, consts: [["role", "banner", 1, "toolbar"], [1, "title"], [1, "spacer-long"], ["id", "github-logo", "aria-label", "Github project repo", "target", "_blank", "rel", "noopener", "href", "https://github.com/Stormers-one/website-o_k", "title", "Github"], ["src", "assets/icons/github.svg", "height", "30", "width", "30"], [1, "spacer-short"], ["class", "signoutButton", 3, "click", 4, "ngIf"], ["role", "main", 1, "content"], [1, "resource-box-1"], [1, "signoutButton", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Odu Komban");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_button_7_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-main-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Copyright 2021 by Stormers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_4__["MainBannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Quicksand\",\"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n  text-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.spacer-long[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.spacer-short[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  padding-left: 2em;\r\n  padding-right: 2em;\r\n  height: 80px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #d47629cc;\r\n  color: white;\r\n  font-weight: 800;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #github-logo[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  font-size: 24px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 52px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  min-width: 80%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 40px;\r\n  margin: 8px;\r\n  background-color: white;\r\n  border: 1px solid #eeeeee;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 1s ease-out;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-0.25rem);\r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  margin-top: 2em;\r\n  width: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  height: 90px;\r\n  background: rgba(214, 57, 45, 0.795);\r\n  display: flex;\r\n  align-items: center;\r\n  \r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  align-content: center;\r\n  text-align: center;\r\n  width: 100%;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n  margin-right: 10%;\r\n  margin-bottom: 10%;\r\n  margin-top: 1%;\r\n}\r\n\r\n.resource-box-1[_ngcontent-%COMP%] {\r\n  background: rgba(214, 208, 208, 0.32);\r\n  border: rgba(214, 208, 208, 0.32);\r\n  border-radius: 15px;\r\n  border-width: 1px;\r\n  min-width: 80%;\r\n  max-width: 960px;\r\n  padding-bottom: 2em;\r\n  padding-top: 1em;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   .signoutButton[_ngcontent-%COMP%]:hover {\r\n  background-color: #32945e; \r\n  transform: translateY(-1px);\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   .signoutButton[_ngcontent-%COMP%]{\r\n  background-color: #2b8152; \r\n  border: none;\r\n  border-radius: 15px;\r\n  color: white;\r\n  padding: 12px 25px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n@media screen and (max-width: 441px) {\r\n\r\n}\r\n\r\n@media screen and (max-width: 1080px) {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0tBQXNLO0VBQ3RLLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7Ozs7OztFQU1FLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysd0VBQXdFO0VBQ3hFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBSUE7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJRdWlja3NhbmRcIixcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlci1sb25nIHtcclxuICBmbGV4OiAxO1xyXG59XHJcbi5zcGFjZXItc2hvcnQge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDc2MjljYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgI2dpdGh1Yi1sb2dvOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA1MnB4IGF1dG8gMzJweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBtaW4td2lkdGg6IDgwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluayB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNCwgNTcsIDQ1LCAwLjc5NSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIGxpbmUtaGVpZ2h0OiAyMHB4OyAqL1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5mb290ZXIgc3BhbntcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbmJvZHksXHJcbmh0bWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi5yZXNvdXJjZS1ib3gtMSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIwOCwgMjA4LCAwLjMyKTtcclxuICBib3JkZXI6IHJnYmEoMjE0LCAyMDgsIDIwOCwgMC4zMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBtaW4td2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgcGFkZGluZy10b3A6IDFlbTtcclxufVxyXG5cclxuLnRvb2xiYXIgLnNpZ25vdXRCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjk0NWU7IFxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbn1cclxuXHJcbi50b29sYmFyIC5zaWdub3V0QnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjgxNTI7IFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0MXB4KSB7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuXHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _wrapper_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./wrapper/sign-in/sign-in.component */ "Bcjh");
/* harmony import */ var _wrapper_register_register_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./wrapper/register/register.component */ "qlJ/");
/* harmony import */ var _shared_services_fire_auth_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/services/fire-auth.service */ "dP/y");
/* harmony import */ var _facilities_schedule_display_schedule_display_schedule_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./facilities/schedule/display-schedule/display-schedule.component */ "kli/");
/* harmony import */ var _facilities_schedule_generate_new_schedule_generate_new_schedule_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./facilities/schedule/generate-new-schedule/generate-new-schedule.component */ "/lby");
/* harmony import */ var _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/pipes/search-filter.pipe */ "B5Na");
/* harmony import */ var _shared_services_fare_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/services/fare.service */ "udiV");
/* harmony import */ var _shared_services_register_key_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/services/register-key.service */ "ApuW");
/* harmony import */ var _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/services/employee.service */ "SJiT");
/* harmony import */ var _shared_services_customercare_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/services/customercare.service */ "AaRP");
/* harmony import */ var _shared_services_bus_stops_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/services/bus-stops.service */ "s9gI");
/* harmony import */ var _facilities_schedule_display_schedule_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./facilities/schedule/display-schedule/timetable/timetable.component */ "w5gX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ "fXoL");












// Firebase integration































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({ providers: [
        _shared_services_map_service__WEBPACK_IMPORTED_MODULE_23__["MapService"],
        _shared_services_fire_auth_service__WEBPACK_IMPORTED_MODULE_29__["FireAuthService"],
        _shared_services_fare_service__WEBPACK_IMPORTED_MODULE_33__["FareService"],
        _shared_services_register_key_service__WEBPACK_IMPORTED_MODULE_34__["RegisterKeyService"],
        _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_35__["EmployeeService"],
        _shared_services_customercare_service__WEBPACK_IMPORTED_MODULE_36__["CustomercareService"],
        _shared_services_bus_stops_service__WEBPACK_IMPORTED_MODULE_37__["BusStopsService"],
    ], imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_3__["FacilitiesComponent"],
        _facilities_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_4__["TrackingComponent"],
        _facilities_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_5__["ScheduleComponent"],
        _facilities_customer_support_customer_support_component__WEBPACK_IMPORTED_MODULE_6__["CustomerSupportComponent"],
        _facilities_fare_update_fare_update_component__WEBPACK_IMPORTED_MODULE_7__["FareUpdateComponent"],
        _facilities_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeDetailsComponent"],
        _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_9__["MainBannerComponent"],
        _facilities_employee_details_search_employee_search_employee_component__WEBPACK_IMPORTED_MODULE_10__["SearchEmployeeComponent"],
        _facilities_schedule_display_schedule_display_schedule_component__WEBPACK_IMPORTED_MODULE_30__["DisplayScheduleComponent"],
        _facilities_schedule_generate_new_schedule_generate_new_schedule_component__WEBPACK_IMPORTED_MODULE_31__["GenerateNewScheduleComponent"],
        _facilities_employee_details_register_new_employee_register_new_employee_component__WEBPACK_IMPORTED_MODULE_11__["RegisterNewEmployeeComponent"],
        _facilities_tracking_map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"],
        _facilities_employee_details_search_employee_employee_table_employee_table_component__WEBPACK_IMPORTED_MODULE_20__["EmployeeTableComponent"],
        _facilities_customer_support_complain_list_complain_list_component__WEBPACK_IMPORTED_MODULE_26__["ComplainListComponent"],
        _wrapper_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_27__["SignInComponent"],
        _wrapper_register_register_component__WEBPACK_IMPORTED_MODULE_28__["RegisterComponent"],
        _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_32__["FilterPipe"],
        _facilities_schedule_display_schedule_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_38__["TimetableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
ComplainListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComplainListComponent, selectors: [["app-complain-list"]], decls: 24, vars: 6, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], [3, "click"], [1, "table"], [1, "table-header"], [1, "td-user_id"], [1, "td-Comp"], [1, "spacer-height"], [1, "table-container"], ["class", "table-body", 3, "click", 4, "ngFor", "ngForOf"], [1, "table-body", 3, "click"], [1, "td-comp"]], template: function ComplainListComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 90%;\r\n    margin: 10px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-content: center;\r\n    text-align: center;\r\n  }\r\n  .table-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    flex-direction: row;\r\n    font-weight: 600;\r\n    width: 100%;\r\n    font-size: large;\r\n    flex: 1 1 auto;\r\n  }\r\n  .td-user_id[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    padding: 2px auto;\r\n    align-content: flex-start;\r\n    text-align: start;\r\n  }\r\n  \r\n  .td-comp[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    padding: 2px auto;\r\n    text-align: start;\r\n    align-content: flex-start;\r\n  }\r\n  .table-body[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    flex-direction: row;\r\n    padding-bottom: 5px;\r\n    height: 37px;\r\n    font-weight: 400;\r\n    font-size: medium;\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    border-radius: 8px;\r\n    border-width: 0px;\r\n    background-color: transparent;\r\n  }\r\n  .table-body[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(146, 233, 129);\r\n    color: grey;\r\n  }\r\n  .spacer-height[_ngcontent-%COMP%]{\r\n    height: 0.8em;\r\n  }\r\n  .table-container[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border-radius: 8px;\r\n    border-style: solid;\r\n    border-color: rgba(13, 179, 13, 0.63);\r\n  }\r\n  h1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\r\n    color: tomato;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsYWluLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7RUFDQTs7Ozs7S0FLRztFQUNIO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFDQUFxQztFQUN2QztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6ImNvbXBsYWluLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRhYmxlLWhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIC50ZC11c2VyX2lke1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMnB4IGF1dG87XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG4gIC8qIC50ZC1hY3RpdmV7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICB9ICovXHJcbiAgLnRkLWNvbXB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLnRhYmxlLWJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAudGFibGUtYm9keTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDYsIDIzMywgMTI5KTtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICAuc3BhY2VyLWhlaWdodHtcclxuICAgIGhlaWdodDogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTMsIDE3OSwgMTMsIDAuNjMpO1xyXG4gIH1cclxuXHJcbiAgaDE+c3BhbntcclxuICAgIGNvbG9yOiB0b21hdG87XHJcbiAgfSJdfQ== */"] });


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

/***/ "dP/y":
/*!******************************************************!*\
  !*** ./src/app/shared/services/fire-auth.service.ts ***!
  \******************************************************/
/*! exports provided: FireAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireAuthService", function() { return FireAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");





class FireAuthService {
    constructor(fs, auth) {
        this.fs = fs;
        this.auth = auth;
        this.signedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((subscriber) => {
            this.auth.onAuthStateChanged(subscriber);
        });
        this.auth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
            }
            else {
                localStorage.setItem('user', "null");
            }
            // console.log(JSON.parse(localStorage.getItem('user')!));
        });
    }
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== 'null') ? true : false;
    }
    signIn(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!email || !password)
                    throw new Error('Invalid email and/or password');
                yield this.auth.signInWithEmailAndPassword(email, password);
                return true;
            }
            catch (error) {
                console.log('Sign in failed', error);
                return false;
            }
        });
    }
    register(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!email || !password)
                    throw new Error('Invalid email and/or password');
                yield this.auth.createUserWithEmailAndPassword(email, password);
                return true;
            }
            catch (error) {
                console.log('Registration failed', error);
                return false;
            }
        });
    }
    signOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.auth.signOut();
                localStorage.removeItem('user');
                return true;
            }
            catch (error) {
                console.log('Sign out failed', error);
                return false;
            }
        });
    }
}
FireAuthService.ɵfac = function FireAuthService_Factory(t) { return new (t || FireAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
FireAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FireAuthService, factory: FireAuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dgrh":
/*!********************************************************!*\
  !*** ./src/app/shared/services/suggest-api.service.ts ***!
  \********************************************************/
/*! exports provided: SuggestAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestAPIService", function() { return SuggestAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SuggestAPIService {
    constructor() { }
    getJSONRepos() {
        return fetch('http://34.93.246.194/api/v1/suggest').then(response => response.json());
    }
}
SuggestAPIService.ɵfac = function SuggestAPIService_Factory(t) { return new (t || SuggestAPIService)(); };
SuggestAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SuggestAPIService, factory: SuggestAPIService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_bus_stops_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/bus-stops.service */ "s9gI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/search-filter.pipe */ "B5Na");







function DisplayScheduleComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DisplayScheduleComponent_div_27_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const stop_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.sendToFieldFrom(stop_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stop_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stop_r3);
} }
function DisplayScheduleComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DisplayScheduleComponent_div_27_div_1_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.stopNames, ctx_r0.selectedBusFrom));
} }
function DisplayScheduleComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DisplayScheduleComponent_div_28_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const stop_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.sendToFieldTo(stop_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stop_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stop_r7);
} }
function DisplayScheduleComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DisplayScheduleComponent_div_28_div_1_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r1.stopNames, ctx_r1.selectedBusTo));
} }
class DisplayScheduleComponent {
    constructor(router, _location, busStopService) {
        this.router = router;
        this._location = _location;
        this.busStopService = busStopService;
        this.exp = new RegExp('([\w ]+)[^(\w+)]?');
        this.selectedBusFrom = '';
        this.selectedBusTo = '';
        this.enteredTextFrom = false;
        this.enteredTextTo = false;
        this.stopNames = [];
        this.stops = [];
    }
    goBack() {
        this.router.navigate(['/facilities/schedule/']).then(success => console.log('navigation success?', success))
            .catch(console.error);
    }
    goBackOnce() {
        this._location.back();
    }
    getRouteName(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let exp = new RegExp(/([\w ]+)[^(\w+)]?/);
            let s = query;
            let c = s.split('');
            let res = s.match(exp)[0];
            res = res.trim().toLocaleLowerCase();
            let listA = res.split(" ");
            let newList = [];
            for (var r of listA) {
                if (r !== 'bs') {
                    newList.push(r);
                }
            }
            res = newList.join(' ');
            res = res[0].toUpperCase() + res.substr(1);
            return res;
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let _from = yield this.getRouteName(this.selectedBusFrom);
            let _to = yield this.getRouteName(this.selectedBusTo);
            let query = _from + ' - ' + _to;
            let res = yield this.busStopService.getRoutes(query);
            let obj = [res, query];
            this.router.navigateByUrl('/facilities/schedule/display-schedule/timetable', { state: obj });
        });
    }
    sendToFieldFrom(opt) {
        this.selectedBusFrom = opt;
        this.enteredTextFrom = false;
    }
    sendToFieldTo(opt) {
        this.selectedBusTo = opt;
        this.enteredTextTo = false;
    }
    changeFrom() {
        if (this.selectedBusFrom !== '') {
            this.enteredTextFrom = true;
        }
        else {
            this.enteredTextFrom = false;
        }
        this.enteredTextTo = false;
    }
    changeTo() {
        if (this.selectedBusTo !== '') {
            this.enteredTextTo = true;
        }
        else {
            this.enteredTextTo = false;
        }
        this.enteredTextFrom = false;
    }
    ngOnInit() {
        this.busStopService.getStops().snapshotChanges().subscribe(data => {
            this.stops = data.map((a) => {
                const data = a.payload.doc.data();
                // console.log(data.name);
                return Object.assign({}, data);
            });
            this.stopNames = this.stops.map((e) => e['Stop Name']);
        });
    }
}
DisplayScheduleComponent.ɵfac = function DisplayScheduleComponent_Factory(t) { return new (t || DisplayScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_bus_stops_service__WEBPACK_IMPORTED_MODULE_4__["BusStopsService"])); };
DisplayScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DisplayScheduleComponent, selectors: [["app-display-schedule"]], decls: 31, vars: 4, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], [3, "click"], ["for", "start"], ["type", "text", "id", "start", "name", "start", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "destination"], ["type", "text", "id", "destination", "name", "destination", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "suggestionsOuterContainer"], ["id", "spacer"], [1, "listSuggestions"], [4, "ngIf"], ["type", "submit", "value", "View Schedule", 3, "click"], ["class", "listItems", 4, "ngFor", "ngForOf"], [1, "listItems"]], template: function DisplayScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DisplayScheduleComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Display Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Enter Start Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplayScheduleComponent_Template_input_ngModelChange_15_listener($event) { return ctx.selectedBusFrom = $event; })("ngModelChange", function DisplayScheduleComponent_Template_input_ngModelChange_15_listener() { return ctx.changeFrom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Enter Destination Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplayScheduleComponent_Template_input_ngModelChange_22_listener($event) { return ctx.selectedBusTo = $event; })("ngModelChange", function DisplayScheduleComponent_Template_input_ngModelChange_22_listener() { return ctx.changeTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DisplayScheduleComponent_div_27_Template, 3, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DisplayScheduleComponent_div_28_Template, 3, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DisplayScheduleComponent_Template_input_click_30_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedBusFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedBusTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.enteredTextFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.enteredTextTo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"]], styles: [".listSuggestions[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    width: 80%;\r\n    max-width: 400px;\r\n    max-height: 180px;\r\n    overflow-y: scroll;\r\n    border-radius: 15px;\r\n}\r\n#spacer[_ngcontent-%COMP%]{\r\n    flex: 1;\r\n}\r\n.suggestionsOuterContainer[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.listItems[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 32px\r\n}\r\n.listItems[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    text-align: left;\r\n    border-style: none;\r\n    width: 100%;\r\n    flex: auto;\r\n    font-size: medium;\r\n    cursor: pointer;\r\n}\r\n.listItems[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(13, 179, 13, 0.63);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0MiLCJmaWxlIjoiZGlzcGxheS1zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RTdWdnZXN0aW9uc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxODBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuI3NwYWNlcntcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLnN1Z2dlc3Rpb25zT3V0ZXJDb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmxpc3RJdGVtc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMnB4XHJcbn1cclxuLmxpc3RJdGVtcz5idXR0b257XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxpc3RJdGVtcz5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxNzksIDEzLCAwLjYzKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "qlJ/":
/*!********************************************************!*\
  !*** ./src/app/wrapper/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_fire_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/fire-auth.service */ "dP/y");
/* harmony import */ var src_app_shared_services_register_key_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/register-key.service */ "ApuW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/employee.service */ "SJiT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function RegisterComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid Employee ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid Phone no");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid Service Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid Mail ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invalid Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "The passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(router, fs, registerKey, _location, employeeService) {
        this.router = router;
        this.fs = fs;
        this.registerKey = registerKey;
        this._location = _location;
        this.employeeService = employeeService;
        this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.userAuth = this.fs.signedIn.subscribe((user) => {
            if (user) {
                this.router.navigate(['/facilities']);
            }
        });
        this.validators = [true, true, true, true, true, true];
        this.user = {
            emp_id: "",
            mail: "",
            name: "",
            phn_no: ""
        };
    }
    goBackOnce() {
        this._location.back();
    }
    empValidate(emp) {
        if (emp.match(/(\w)/) && emp.length > 0) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    mailValidate(mail) {
        if (mail.match(/([\w]+@[\w]+.[\w])/) && mail.length > 0) {
            return true;
        }
        else {
            return false;
        }
        ;
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
    phnNoValidate(phn_no) {
        if (phn_no.length == 10 && this.isAlpha(phn_no)) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    serviceKeyValidate(key) {
        if (key.length > 0 && this.registerKey.checkKeyValidity(key)) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    pswdValidate(pswd) {
        if (pswd.match(/(\d)/g) && pswd.match(/(\w)/g) && pswd.length > 0) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    validate(emp_id, phnno, service_key, pswd1, pswd2, mail) {
        this.validators = [false, false, false, false, false, false];
        if (this.empValidate(emp_id)) {
            this.validators[0] = true;
        }
        if (this.phnNoValidate(phnno)) {
            this.validators[1] = true;
        }
        if (this.mailValidate(mail)) {
            this.validators[2] = true;
        }
        if (this.serviceKeyValidate(service_key)) {
            this.validators[3] = true;
        }
        if (this.pswdValidate(pswd1)) {
            this.validators[4] = true;
        }
        if (pswd1 === pswd2 && pswd1.length > 0) {
            this.validators[5] = true;
        }
        if (this.validators[0] &&
            this.validators[1] &&
            this.validators[2] &&
            this.validators[3] &&
            this.validators[4] &&
            this.validators[5]) {
            return true;
        }
        else {
            return false;
        }
    }
    register(name, phnno, service_key, pswd1, pswd2, mail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user.name = name;
            this.user.phn_no = phnno;
            this.user.mail = mail;
            this.user.emp_id = String(mail.match(/([\w]+)@/g)).slice(0, -1);
            console.log(this.user);
            let resVal = this.validate(name, phnno, service_key, pswd1, pswd2, mail);
            if (resVal) {
                const result = yield this.fs.register(mail, pswd1);
                console.log('Registration successful!', result);
                const res = yield this.employeeService.registerEmployee(this.user);
                if (result)
                    this.router.navigate(['/facilites']);
                else
                    console.log("Registeration failed");
            }
            else
                console.log("Invalid credentials");
        });
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_fire_auth_service__WEBPACK_IMPORTED_MODULE_3__["FireAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_register_key_service__WEBPACK_IMPORTED_MODULE_4__["RegisterKeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 66, vars: 9, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/facilities/employeeDetails", "routerLinkActive", "active", 3, "click"], ["for", "emp_id"], ["type", "text", 3, "ngModel", "ngModelChange"], ["emp_id", ""], [4, "ngIf"], ["for", "phn_no"], ["type", "number", 3, "ngModel", "ngModelChange"], ["phnno", ""], ["for", "service_key"], ["type", "text"], ["serviceKey", ""], ["for", "mail"], ["type", "email", 3, "ngModel", "ngModelChange"], ["mail", ""], ["for", "pswd"], ["type", "password"], ["pswd1", ""], ["pswd2", ""], ["type", "submit", "value", "Register", 3, "click"], ["id", "validator"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Registeration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Enter Employee ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.emp_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegisterComponent_div_17_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Enter Phone No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.user.phn_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RegisterComponent_div_26_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Enter Unique Service Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Enter E-Mail Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_42_listener($event) { return ctx.user.mail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RegisterComponent_div_44_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, RegisterComponent_div_53_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 18, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, RegisterComponent_div_62_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_input_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](61); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43); return ctx.register(_r0.value, _r2.value, _r4.value, _r8.value, _r10.value, _r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.emp_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validators[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.phn_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validators[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validators[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.mail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validators[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validators[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validators[5]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


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
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 12, vars: 5, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], ["routerLink", "/", "routerLinkActive", "active", 3, "click"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude"], [1, "Bustracking-banner"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.long)("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.long);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5hZ20tbWFwIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "s9gI":
/*!******************************************************!*\
  !*** ./src/app/shared/services/bus-stops.service.ts ***!
  \******************************************************/
/*! exports provided: BusStopsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusStopsService", function() { return BusStopsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class BusStopsService {
    constructor(db) {
        this.db = db;
        this.res_id = [];
        this.res = [];
        this.stops = db.collection('Bus Stops');
        this.routes = db.collection('Routes');
    }
    getStops() {
        return this.stops;
    }
    // prev_route:string = ''
    getRoutes(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var StoredRouteResRaw = localStorage.getItem(route);
            var StoredRouteRes;
            this.res = [];
            if (StoredRouteResRaw == null) {
                const filteredData = this.db.collection('Routes', ref => ref.where('route_name', '==', route));
                this.res_id = yield new Promise(resolve => {
                    filteredData.snapshotChanges().subscribe((data) => {
                        let dat = resolve(data.map((a) => {
                            let id = a.payload.doc.id;
                            return id;
                        }));
                        return dat;
                    });
                });
                for (var _id of this.res_id) {
                    let res = yield new Promise(resolve => {
                        this.routes.doc(_id).collection('stops').valueChanges().subscribe((data) => {
                            let stops = resolve(data.map((e) => {
                                const data = e;
                                return data;
                            }));
                            return (stops);
                        });
                    });
                    this.res.push(res);
                }
                localStorage.setItem(route, JSON.stringify(this.res));
                StoredRouteRes = JSON.parse(localStorage.getItem(route));
            }
            else {
                StoredRouteRes = JSON.parse(StoredRouteResRaw);
            }
            // this.prev_route = route
            return StoredRouteRes;
        });
    }
}
BusStopsService.ɵfac = function BusStopsService_Factory(t) { return new (t || BusStopsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
BusStopsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BusStopsService, factory: BusStopsService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _wrapper_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wrapper/sign-in/sign-in.component */ "Bcjh");
/* harmony import */ var _wrapper_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wrapper/register/register.component */ "qlJ/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _facilities_schedule_display_schedule_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./facilities/schedule/display-schedule/timetable/timetable.component */ "w5gX");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"] },
    { path: 'signIn', component: _wrapper_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__["SignInComponent"] },
    { path: 'register', component: _wrapper_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"] },
    { path: 'facilities', component: _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_1__["FacilitiesComponent"], canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'facilities/tracking', component: _facilities_tracking_tracking_component__WEBPACK_IMPORTED_MODULE_2__["TrackingComponent"] },
    { path: 'facilities/tracking/map', component: _facilities_tracking_map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"] },
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
    { path: 'facilities/customerSupport/complain-list', component: _facilities_customer_support_complain_list_complain_list_component__WEBPACK_IMPORTED_MODULE_13__["ComplainListComponent"] },
    { path: 'facilities/schedule/display-schedule/timetable', component: _facilities_schedule_display_schedule_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_17__["TimetableComponent"] }
    // { path: '**', component: PageNotFoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w5gX":
/*!***************************************************************************************!*\
  !*** ./src/app/facilities/schedule/display-schedule/timetable/timetable.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");




function TimetableComponent_div_14_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _schedule_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_schedule_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_schedule_r4.time);
} }
function TimetableComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimetableComponent_div_14_div_10_Template, 7, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scheduleOne_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", scheduleOne_r1);
} }
const _c0 = function () { return { itemsPerPage: 10, currentPage: 1 }; };
class TimetableComponent {
    constructor(router, activatedRoute, _location) {
        var _a;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._location = _location;
        this.data = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        if (this.data == null) {
            this.goBackOnce();
        }
        this.schedule = this.data[0];
        this.route = this.data[1];
        console.log(this.schedule);
    }
    goBackOnce() {
        this._location.back();
    }
    ngOnInit() {
    }
}
TimetableComponent.ɵfac = function TimetableComponent_Factory(t) { return new (t || TimetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
TimetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimetableComponent, selectors: [["app-timetable"]], decls: 16, vars: 6, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], [3, "click"], [1, "table"], [1, "table-container"], ["class", "scheduleBoxContainer", 4, "ngFor", "ngForOf"], [1, "scheduleBoxContainer"], [1, "table-header"], [1, "td-user_id"], [1, "td-Comp"], [1, "spacer-height"], ["class", "table-body", 4, "ngFor", "ngForOf"], [1, "table-body"], [1, "td-comp"]], template: function TimetableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimetableComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Schedule: ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TimetableComponent_div_14_Template, 11, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.route);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 2, ctx.schedule, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 90%;\r\n    margin: 10px auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-content: center;\r\n    text-align: center;\r\n  }\r\n  .table-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin: 7px;\r\n    padding-top:2px;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    flex-direction: row;\r\n    font-weight: 600;\r\n    width: 100%;\r\n    font-size: large;\r\n    flex: 1 1 auto;\r\n  }\r\n  .td-user_id[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    padding: 2px auto;\r\n    align-content: flex-start;\r\n    text-align: start;\r\n  }\r\n  \r\n  .td-comp[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    padding: 2px auto;\r\n    text-align: start;\r\n    align-content: flex-start;\r\n  }\r\n  .table-body[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    flex-direction: row;\r\n    padding-bottom: 5px;\r\n    height: 37px;\r\n    font-weight: 400;\r\n    font-size: medium;\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    border-radius: 8px;\r\n    border-width: 0px;\r\n    background-color: transparent;\r\n  }\r\n  .table-body[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(146, 233, 129);\r\n    color: grey;\r\n  }\r\n  .spacer-height[_ngcontent-%COMP%]{\r\n    height: 0.8em;\r\n  }\r\n  .table-container[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border-radius: 8px;\r\n    border-style: solid;\r\n    border-color: rgba(13, 179, 13, 0.63);\r\n  }\r\n  h1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\r\n    color: tomato;\r\n  }\r\n  .scheduleBoxContainer[_ngcontent-%COMP%]{\r\n    background-color: rgba(158, 238, 158, 0.774);\r\n    border-radius: 7px;\r\n    margin: 10px;\r\n    border: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25CO0VBQ0E7Ozs7O0tBS0c7RUFDSDtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQ0FBcUM7RUFDdkM7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0UsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtFQUNkIiwiZmlsZSI6InRpbWV0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGFibGUtaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgcGFkZGluZy10b3A6MnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAudGQtdXNlcl9pZHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDJweCBhdXRvO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuICAvKiAudGQtYWN0aXZle1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMnB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfSAqL1xyXG4gIC50ZC1jb21we1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMnB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC50YWJsZS1ib2R5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnRhYmxlLWJvZHk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ2LCAyMzMsIDEyOSk7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICB9XHJcbiAgLnNwYWNlci1oZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDAuOGVtO1xyXG4gIH1cclxuICBcclxuICAudGFibGUtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzLCAxNzksIDEzLCAwLjYzKTtcclxuICB9XHJcblxyXG4gIGgxPnNwYW57XHJcbiAgICBjb2xvcjogdG9tYXRvO1xyXG4gIH1cclxuXHJcbiAgLnNjaGVkdWxlQm94Q29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDIzOCwgMTU4LCAwLjc3NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfSJdfQ== */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["span[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLW5ldy1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJyZWdpc3Rlci1uZXctZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5zcGFue1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r6, " ");
} }
function FareUpdateComponent_div_13_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter Bus type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FareUpdateComponent_div_13_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter minimum price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FareUpdateComponent_div_13_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FareUpdateComponent_div_13_Template_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.document.bus_type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Choose Bus Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select Bus Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FareUpdateComponent_div_13_option_13_Template, 2, 1, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FareUpdateComponent_div_13_div_14_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Revised minimum price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " (in Rupees)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FareUpdateComponent_div_13_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.document.min_price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FareUpdateComponent_div_13_div_23_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Price/KM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "(in Rupees)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FareUpdateComponent_div_13_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.document.per_km = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, FareUpdateComponent_div_13_div_32_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FareUpdateComponent_div_13_Template_input_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.saveFare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.document.bus_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
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
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You updated fare successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FareUpdateComponent_div_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.newFare(); });
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
        this.validators = [true, true, true];
        this.busTypes = [];
        this.submitted = false;
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
FareUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FareUpdateComponent, selectors: [["app-fare-update"]], decls: 15, vars: 2, consts: [[1, "container"], [1, "container-row"], [1, "back-button-container"], [3, "click"], [1, "fareupdation-banner"], ["href", "https://www.newgenapps.com/wp-content/uploads/2020/04/Navigator-Navigation-Google-Maps-Map-Location-Gps-2049643.jpg", "target", "_blank"], ["id", "t-img", "alt", "Fare Updation", "src", "assets/images/capture.png", "width", "304", "height", "328"], [4, "ngIf"], ["action", "/action_page.php"], ["for", "bus_type"], [3, "ngModel", "ngModelChange"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["type", "text", "id", "new_name", "name", "new_name", 4, "ngFor", "ngForOf"], ["for", "minprice"], ["type", "number", "id", "Bnum", "name", "Bnum", "required", "", 3, "ngModel", "ngModelChange"], ["for", "price/km"], ["type", "number", "id", "from", "name", "from", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Update", 3, "click"], ["type", "text", "id", "new_name", "name", "new_name"], ["id", "validator"]], template: function FareUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FareUpdateComponent_Template_button_click_3_listener() { return ctx.goBackOnce(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FareUpdateComponent_div_13_Template, 36, 9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FareUpdateComponent_div_14_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]], styles: [".fareupdation-banner[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 20px auto 32px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcmUtdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJmYXJlLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhcmV1cGRhdGlvbi1iYW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAzMnB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


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