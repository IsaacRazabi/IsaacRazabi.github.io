(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/WUq":
/*!***********************************************!*\
  !*** ./src/app/cmps/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/user.actions */ "mYIz");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function () { return { standalone: true }; };
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_div_11_Template_form_submit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); $event.preventDefault(); return ctx_r1.signup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_11_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.signUpCredentials.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_11_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.signUpCredentials.fullname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_11_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.signUpCredentials.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.signUpCredentials.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.signUpCredentials.fullname)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.signUpCredentials.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
} }
// interface signUpCredentials {
//   username: any,
//   password: any,
//   fullname: any,
//   isAdmin:boolean,
// }
class LoginComponent {
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
        this.credentials = {
            username: "",
            password: "",
            fullname: "",
            isAdmin: false,
        };
        this.signUpCredentials = {
            username: "",
            password: "",
            fullname: "",
            isAdmin: false,
        };
        this.modalOpen = true;
        this.loggedInUser = false;
        this.loggedUser$ = this.store.select('userState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('loggedUser'));
    }
    ngOnInit() {
    }
    login() {
        this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["Login"](this.credentials));
        this.router.navigate(['home']);
    }
    signup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["SaveUser"](this.signUpCredentials));
            yield this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["Login"](this.signUpCredentials));
            this.router.navigate(['home']);
        });
    }
    closeModal() {
        this.modalOpen = false;
        this.router.navigate(['home']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 12, vars: 8, consts: [[1, "signup-container", "modalWrapper", 3, "hidden"], [1, "main-display"], [1, "close-modal-btn", 3, "click"], [1, "signup-wraaper", 3, "submit"], ["for", ""], ["type", "text", "placeholder", "username", 1, "signup-input", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "password", "placeholder", "password", 1, "signup-input", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "signup-input"], ["class", "sign-up", 4, "ngIf"], [1, "sign-up"], ["type", "text", "placeholder", "Your full name", 1, "signup-input", 3, "ngModel", "ngModelOptions", "ngModelChange"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_2_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u274C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_4_listener($event) { $event.preventDefault(); return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.credentials.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 9, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.modalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedInUser);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".signup-container[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.signup-input[_ngcontent-%COMP%] {\n  min-width: 250px;\n  width: 28%;\n  max-width: 400px;\n  outline: none !important;\n  margin-bottom: 7px;\n  border-radius: 8px;\n  height: 2.6rem;\n  border-width: 1px;\n}\n\n.signup-wraaper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.signup-wraaper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.modalWrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n  \n  padding-top: 12px;\n  \n  bottom: 50px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  \n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n\n.main-display[_ngcontent-%COMP%] {\n  gap: 15px;\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 10px;\n  border: 1px solid #888;\n  width: 80%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border-radius: 1%;\n  display: flex;\n  flex-direction: column;\n  \n  \n}\n\n.close-modal-btn[_ngcontent-%COMP%] {\n  width: 5%;\n  max-width: 400px;\n  color: hotpink;\n  font-size: 1rem;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDTSxhQUFBO0VBQ0Ysc0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQU9BO0VBQ0UsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLGlCQUFBO0VBQW1CLHdCQUFBO0VBQ25CLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2Qsb0JBQUE7RUFDQyw0QkFBQTtFQUNELHVCQUFBO0VBQWdDLG1CQUFBO0VBQ2hDLG9DQUFBO0VBQXNDLHFCQUFBO0FBR3hDOztBQUNBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUVBLDRFQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFFRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLWlucHV0e1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiAyLjZyZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG4uc2lnbnVwLXdyYWFwZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLXdyYWFwZXIgbGFiZWx7XHJcbiAgZm9udC1zaXplOiAycmVtIDtcclxufVxyXG4vLyAuc2lnbnVwLXdyYWFwZXIgYnV0dG9ue1xyXG4vLyAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4vLyAgICAgd2lkdGg6IDI4JTtcclxuLy8gICAgIG1heC13aWR0aDogNDAwcHg7XHJcbi8vICAgICBjb2xvcjogaG90cGluaztcclxuLy8gICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuLy8gfVxyXG5cclxuXHJcbi5tb2RhbFdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDI7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogMTJweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gIGJvdHRvbTogNTBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cclxuICAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgIFxyXG59XHJcblxyXG4ubWFpbi1kaXNwbGF5IHtcclxuICBnYXA6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlO1xyXG4gIC8vIGhlaWdodDogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYm9yZGVyLXJhZGl1czoxJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gIC8qIGdyaWQtYXV0by1jb2x1bW5zOiAxZnIsMWZyLDFmcjsgKi9cclxufVxyXG4uY2xvc2UtbW9kYWwtYnRue1xyXG4gIHdpZHRoOiA1JTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGNvbG9yOiBob3RwaW5rO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Isaac angular-ptoject\IsaacRazabi.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/item.actions */ "rJkI");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _item_app_item_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-app/item-app.component */ "HjOC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class HomeComponent {
    constructor(store) {
        this.store = store;
        this.items$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('items'));
        this.item$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('item'));
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadItems"]());
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 5, vars: 3, consts: [[1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "item-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number of Items : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.items$).length, "!");
    } }, directives: [_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_4__["ItemAppComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "A4CU":
/*!*************************************************************!*\
  !*** ./src/app/cmps/item-preview/item-preview.component.ts ***!
  \*************************************************************/
/*! exports provided: EscapeHtmlPipe, ItemPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeHtmlPipe", function() { return EscapeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPreviewComponent", function() { return ItemPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item-list/item-list.component */ "WBUw");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["*"];
class EscapeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(content) {
        return this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, content);
    }
}
EscapeHtmlPipe.ɵfac = function EscapeHtmlPipe_Factory(t) { return new (t || EscapeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
EscapeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keepHtml", type: EscapeHtmlPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EscapeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'keepHtml', pure: false }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();
class ItemPreviewComponent {
    constructor(itemList, store) {
        this.itemList = itemList;
        this.store = store;
        this.item = null; //gets from father component : item-list
        // img = this.item!.img ;
        this.img = 'https://random.imagecdn.app/500/150 ';
        this.strHtml = '';
        this.loggedUser$ = this.store.select('userState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('user'));
    }
    ngOnInit() {
    }
}
ItemPreviewComponent.ɵfac = function ItemPreviewComponent_Factory(t) { return new (t || ItemPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemListComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
ItemPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemPreviewComponent, selectors: [["item-preview"]], inputs: { item: "item" }, ngContentSelectors: _c0, decls: 15, vars: 9, consts: [[1, "item-preview"], [1, "text"], [3, "src"], [1, "text-center"]], template: function ItemPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Added by : ", ctx.item == null ? null : ctx.item.by == null ? null : ctx.item.by.fullname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx.item == null ? null : ctx.item.by == null ? null : ctx.item.by.date, "hh:mm:ss a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item == null ? null : ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item == null ? null : ctx.item.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.item == null ? null : ctx.item.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".item-preview[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: rgba(121, 128, 192, 0.788);\n  border-radius: 10px;\n  min-height: 100px;\n  padding: 20px;\n  cursor: pointer;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBTEo7O0FBT0E7RUFDSSxZQUFBO0FBSkoiLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNvbnRhaW5lcntcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vIH1cblxuXG4uaXRlbS1wcmV2aWV3IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjEsIDEyOCwgMTkyLCAwLjc4OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50ZXh0e1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi8vIGhyIHtcbi8vICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbi8vICAgICB3aWR0aDogODAlO1xuLy8gfVxuXG4vLyAqIHtcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIjtcbi8vICAgfVxuLy8gICAuZmxleCB7XG4vLyAgICAgZ2FwOiAyNXB4O1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4vLyAgICAgZmxleC13cmFwOiB3cmFwO1xuLy8gICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDI1cHg7XG4vLyAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDI1cHg7XG4vLyAgIH1cbi8vICAgLmNvbHVtbnMtY29udGFpbmVyIHtcbi8vICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5jb2x1bW4ge1xuLy8gICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbi8vICAgICBmbGV4OiAxO1xuLy8gICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgIH1cbiAgXG4vLyAgIC5jYXJkIHtcbi8vICAgICBmb250LXNpemU6IDAuNzVyZW07XG4vLyAgICAgcGFkZGluZzogMTJweCA4cHg7XG4vLyAgICAgY29sb3I6IGJsYWNrO1xuLy8gICB9XG4vLyAgIC5jbGVhbi1saSB7XG4vLyAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICB9XG4vLyAgIC5jYXJkLWNvbnRhaW5lciB7XG4vLyAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICBcbi8vICAgICBjb2xvcjogYmxhY2s7XG4vLyAgIH1cbi8vICAgLmFkZENhcmRCdG4ge1xuLy8gICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICB9XG4vLyAgIHAge1xuLy8gICAgIHBhZGRpbmc6IDIwcHggMDtcbi8vICAgfVxuLy8gICAuaGVhZGVyLWEge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZTZlOTU7XG4vLyAgIH1cbi8vICAgLmhlYWRlci1iIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgaGVpZ2h0OiAxLjg3NXJlbTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhNTljO1xuLy8gICB9XG4vLyAgIC5oZWFkZXItYyB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGhlaWdodDogMS44NzVyZW07XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDc1OTtcbi8vICAgfVxuLy8gICAuaGVhZGVyLWQge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNlODc0MWU7XG4vLyAgIH1cbiAgXG4vLyAgIC5jYXJkLXRleHQge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcbi8vICAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcbi8vICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4vLyAgICAgZ2FwOiA1cHg7XG4gIFxuLy8gICAgIC8qIGN1cnNvcjogbW92ZTsgKi9cbi8vICAgfVxuLy8gICAuY2FyZC1taWRkbGUtdGV4dCB7XG4vLyAgICAgbWFyZ2luLWlubGluZS1zdGFydDogNXB4O1xuLy8gICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xuLy8gICAgIGdhcDogNXB4O1xuLy8gICAgIC8qIGN1cnNvcjogbW92ZTsgKi9cbi8vICAgfVxuICBcbi8vICAgLnJpZ2h0LWFycm93IHtcbi8vICAgICBmbG9hdDogcmlnaHQ7XG4vLyAgIH1cbiAgXG4vLyAgIC5sZWZ0LWFycm93IHtcbi8vICAgICBmbG9hdDogbGVmdDtcbi8vICAgfVxuICBcbi8vICAgLyogQG1lZGlhIChtYXgtd2lkdGg6NzQwcHgpIHt9ICovXG4gIFxuLy8gICAuZWRpdC1mb3Jte1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIH1cbi8vICAgLmlucHV0e1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuLy8gICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4vLyAgIH1cbi8vICAgLmRyYWd7XG4vLyAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICB9XG4gIFxuLy8gICAuZ3JhYmJhYmxlIHtcbi8vICAgICBjdXJzb3I6IG1vdmU7IFxuLy8gICAgIGN1cnNvcjogZ3JhYjtcbi8vICAgICBjdXJzb3I6IC1tb3otZ3JhYjtcbi8vICAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbi8vICAgfVxuICBcbi8vICAgLmdyYWJiYWJsZTphY3RpdmUge1xuLy8gICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4vLyAgICAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuLy8gICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbi8vICAgfVxuICBcbi8vICAgLm1haW4tbGF5b3V0e1xuLy8gICAgIG1heC13aWR0aDogOTAlO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIH1cbiAgXG4vLyAgIC5oaWRle1xuICAgXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbi8vICAgICAgIHRvcDogLTk5OTlweCAhaW1wb3J0YW50O1xuLy8gICAgICAgbGVmdDogLTk5OTlweCAhaW1wb3J0YW50O1xuICAgXG4vLyAgIH1cbiAgXG4vLyAgIC5tb2RhbC13cmFwcGVyIHtcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbi8vICAgICB6LWluZGV4OiAyOyAvKiBTaXQgb24gdG9wICovXG4vLyAgICAgcGFkZGluZy10b3A6IDEycHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbi8vICAgICBib3R0b206IDUwcHg7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbi8vICAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4vLyAgICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG4vLyAgICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgLyogRmFsbGJhY2sgY29sb3IgKi9cbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgICAgXG4vLyAgIH1cbiAgXG4vLyAgIC5tYWluLWRpc3BsYXkge1xuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JleTsgXG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBnYXA6IDE1cHg7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4vLyAgICAgbWFyZ2luOiBhdXRvO1xuLy8gICAgIG1hcmdpbi10b3A6IDEwJTtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4vLyAgICAgd2lkdGg6IDMwJTtcbi8vICAgICBoZWlnaHQ6IDQwJTtcbi8vICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XG4vLyAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4vLyAgICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XG4vLyAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuLy8gICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbi8vICAgICAvKiBncmlkLWF1dG8tY29sdW1uczogMWZyLDFmciwxZnI7ICovXG4vLyAgIH1cbi8vICAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xuLy8gICAgIGZyb20ge1xuLy8gICAgICAgdG9wOiAtMzAwcHg7XG4vLyAgICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIH1cbi8vICAgICB0byB7XG4vLyAgICAgICB0b3A6IDA7XG4vLyAgICAgICBvcGFjaXR5OiAxO1xuLy8gICAgIH1cbi8vICAgfVxuICBcbi8vICAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcbi8vICAgICBmcm9tIHtcbi8vICAgICAgIHRvcDogLTMwMHB4O1xuLy8gICAgICAgb3BhY2l0eTogMDtcbi8vICAgICB9XG4vLyAgICAgdG8ge1xuLy8gICAgICAgdG9wOiAwO1xuLy8gICAgICAgb3BhY2l0eTogMTtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4vLyAgICAgLm1haW4tZGlzcGxheSB7XG4vLyAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICB9XG4vLyAgIH1cbiAgXG4vLyAgIC5pbnB1dE1vZGFse1xuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyAgICAgd2lkdGg6IDQwJTtcbi8vICAgICBoZWlnaHQ6IDMwJTtcbi8vICAgICBtYXJnaW46IDAgMzAlO1xuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbi8vICAgfVxuLy8gICAuYnRuTW9kYWx7XG4vLyAgICAgcGFkZGluZzogMTZweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgICBjb2xvcjogYmxhY2s7XG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmV5OyBcbi8vICAgfVxuLy8gICAuYnRuTW9kYWw6aG92ZXJ7XG4vLyAgICAgdHJhbnNpdGlvbjogMC4zcztcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcbi8vICAgfVxuLy8gICAuYnRuLWNvbnRhaW5lcntcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGdhcDogMTBweDtcbi8vICAgfVxuLy8gICAuYnRuLXVwZGF0ZXtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgICBwYWRkaW5nOiAzcHg7XG4vLyAgICAgY29sb3I6IGJsYWNrO1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbi8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xuLy8gICB9XG4vLyAgIC5idG4tdXBkYXRlOmhvdmVye1xuLy8gICAgIHRyYW5zaXRpb246IDAuM3M7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XG4vLyAgIH1cbi8vICAgLm1vZGFsLWhlYWRlcntcbi8vICAgICBmb250LXNpemU6IDEuNXJlbTtcbi8vICAgfVxuICBcbiAgXG4vLyAgIC5kb25le1xuLy8gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuLy8gICAgIH1cbiAgXG4vLyAgICAgLm1haWx7XG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICAgICAgZm9udDogMjBweCBibGFjayBzb2xpZDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiAxMDAwbXM7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4vLyAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuLy8gICAgIH1cbiAgICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-preview',
                templateUrl: './item-preview.component.html',
                styleUrls: ['./item-preview.component.scss'],
            }]
    }], function () { return [{ type: _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemListComponent"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HjOC":
/*!******************************************************!*\
  !*** ./src/app/pages/item-app/item-app.component.ts ***!
  \******************************************************/
/*! exports provided: ItemAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAppComponent", function() { return ItemAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/item.actions */ "rJkI");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/item-list/item-list.component */ "WBUw");
/* harmony import */ var _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/item-edit/item-edit.component */ "Z4Ve");








function ItemAppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.error$));
} }
function ItemAppComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u23F1 Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemAppComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "item-edit", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saved", function ItemAppComponent_section_9_Template_item_edit_saved_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addingNew = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ItemAppComponent {
    //connecting to store and getting specific properties
    //pluck : take a property of object
    // constructor(private store: Store<State> ,private _uploadService:uploadService) {
    constructor(store) {
        this.store = store;
        this.addingNew = false;
        this.files = [];
        this.uploadedItems = [];
        this.filterBy = '';
        this.items$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('items'));
        this.item$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('item'));
        this.isLoading$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('isLoading'));
        this.error$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('error'));
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadItems"](this.filterBy));
    }
    removeItem(itemId) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveItem"](itemId));
    }
    editItem(itemId) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadItem"](itemId));
    }
}
ItemAppComponent.ɵfac = function ItemAppComponent_Factory(t) { return new (t || ItemAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ItemAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemAppComponent, selectors: [["item-app"]], decls: 11, vars: 13, consts: [[1, "item-app-container"], ["class", "error-msg", 4, "ngIf"], [4, "ngIf"], [3, "click"], [3, "items", "uploadedData", "removed", "edited"], [1, "error-msg"], [3, "saved"]], template: function ItemAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemAppComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemAppComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemAppComponent_Template_button_click_5_listener() { return ctx.addingNew = !ctx.addingNew; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Item...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "item-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ItemAppComponent_Template_item_list_removed_7_listener($event) { return ctx.removeItem($event); })("edited", function ItemAppComponent_Template_item_list_edited_7_listener($event) { return ctx.editItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ItemAppComponent_section_9_Template, 2, 0, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, ctx.items$))("uploadedData", ctx.uploadedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addingNew || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, ctx.item$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__["ItemListComponent"], _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_6__["ItemEditComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".item-app-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  background-color: #f5ced6;\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJpdGVtLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWFwcC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBcbn1cblxuLmVycm9yLW1zZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIwNiwgMjE0KTtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-app',
                templateUrl: './item-app.component.html',
                styleUrls: ['./item-app.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "JIlg":
/*!*************************************************************!*\
  !*** ./src/app/cmps/user-setting/user-setting.component.ts ***!
  \*************************************************************/
/*! exports provided: UserSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingComponent", function() { return UserSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/item.actions */ "rJkI");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function UserSettingComponent_main_2_section_1_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Added by : ", item_r1 == null ? null : item_r1.by == null ? null : item_r1.by.fullname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, item_r1 == null ? null : item_r1.by == null ? null : item_r1.by.date, "hh:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1 == null ? null : item_r1.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1 == null ? null : item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserSettingComponent_main_2_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserSettingComponent_main_2_section_1_section_1_Template, 13, 9, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loggedUser.fullname === (item_r1 == null ? null : item_r1.by == null ? null : item_r1.by.fullname));
} }
function UserSettingComponent_main_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserSettingComponent_main_2_section_1_Template, 2, 1, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.loggedUser$));
} }
class UserSettingComponent {
    constructor(store) {
        this.store = store;
        this.filterBy = '';
        this.items = [];
        this.loggedUser = {
            username: "",
            password: "",
            fullname: "",
            isAdmin: false,
        };
        // userPost:Boolean= this.loggedUser.fullname===this?item?.by?.fullname;
        this.img = 'https://random.imagecdn.app/500/150 ';
        this.items$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('items'));
        this.items$.subscribe((user) => {
            this.items = user;
        });
        this.loggedUser$ = this.store.select('userState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('loggedUser'));
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadItems"](this.filterBy));
        this.loggedUser$.subscribe((user) => {
            this.loggedUser = user;
        });
    }
}
UserSettingComponent.ɵfac = function UserSettingComponent_Factory(t) { return new (t || UserSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
UserSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSettingComponent, selectors: [["user-setting"]], decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "item-preview", 4, "ngIf"], [1, "item-preview"], [1, "text"], [3, "src"]], template: function UserSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserSettingComponent_main_2_Template, 3, 3, "main", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".item-preview[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: rgba(121, 128, 192, 0.788);\n  border-radius: 10px;\n  min-height: 100px;\n  padding: 20px;\n  cursor: pointer;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXNldHRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBTEo7O0FBT0E7RUFDSSxZQUFBO0FBSkoiLCJmaWxlIjoidXNlci1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNvbnRhaW5lcntcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vIH1cclxuXHJcblxyXG4uaXRlbS1wcmV2aWV3IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAxMjgsIDE5MiwgMC43ODgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGV4dHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4vLyBociB7XHJcbi8vICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuLy8gICAgIHdpZHRoOiA4MCU7XHJcbi8vIH1cclxuXHJcbi8vICoge1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCI7XHJcbi8vICAgfVxyXG4vLyAgIC5mbGV4IHtcclxuLy8gICAgIGdhcDogMjVweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuLy8gICAgIGZsZXgtd3JhcDogd3JhcDtcclxuLy8gICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDI1cHg7XHJcbi8vICAgICBtYXJnaW4taW5saW5lLWVuZDogMjVweDtcclxuLy8gICB9XHJcbi8vICAgLmNvbHVtbnMtY29udGFpbmVyIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuY29sdW1uIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuLy8gICAgIGZsZXg6IDE7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLmNhcmQge1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4vLyAgICAgcGFkZGluZzogMTJweCA4cHg7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgfVxyXG4vLyAgIC5jbGVhbi1saSB7XHJcbi8vICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbi8vICAgfVxyXG4vLyAgIC5jYXJkLWNvbnRhaW5lciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgXHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgfVxyXG4vLyAgIC5hZGRDYXJkQnRuIHtcclxuLy8gICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vICAgfVxyXG4vLyAgIHAge1xyXG4vLyAgICAgcGFkZGluZzogMjBweCAwO1xyXG4vLyAgIH1cclxuLy8gICAuaGVhZGVyLWEge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGhlaWdodDogMS44NzVyZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU2ZTk1O1xyXG4vLyAgIH1cclxuLy8gICAuaGVhZGVyLWIge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGhlaWdodDogMS44NzVyZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhNTljO1xyXG4vLyAgIH1cclxuLy8gICAuaGVhZGVyLWMge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGhlaWdodDogMS44NzVyZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0NzU5O1xyXG4vLyAgIH1cclxuLy8gICAuaGVhZGVyLWQge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGhlaWdodDogMS44NzVyZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg3NDFlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuY2FyZC10ZXh0IHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cHg7XHJcbi8vICAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuLy8gICAgIGdhcDogNXB4O1xyXG4gIFxyXG4vLyAgICAgLyogY3Vyc29yOiBtb3ZlOyAqL1xyXG4vLyAgIH1cclxuLy8gICAuY2FyZC1taWRkbGUtdGV4dCB7XHJcbi8vICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cHg7XHJcbi8vICAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcclxuLy8gICAgIGdhcDogNXB4O1xyXG4vLyAgICAgLyogY3Vyc29yOiBtb3ZlOyAqL1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAucmlnaHQtYXJyb3cge1xyXG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAubGVmdC1hcnJvdyB7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLyogQG1lZGlhIChtYXgtd2lkdGg6NzQwcHgpIHt9ICovXHJcbiAgXHJcbi8vICAgLmVkaXQtZm9ybXtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICB9XHJcbi8vICAgLmlucHV0e1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbi8vICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4vLyAgIH1cclxuLy8gICAuZHJhZ3tcclxuLy8gICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLmdyYWJiYWJsZSB7XHJcbi8vICAgICBjdXJzb3I6IG1vdmU7IFxyXG4vLyAgICAgY3Vyc29yOiBncmFiO1xyXG4vLyAgICAgY3Vyc29yOiAtbW96LWdyYWI7XHJcbi8vICAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLmdyYWJiYWJsZTphY3RpdmUge1xyXG4vLyAgICAgY3Vyc29yOiBncmFiYmluZztcclxuLy8gICAgIGN1cnNvcjogLW1vei1ncmFiYmluZztcclxuLy8gICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLm1haW4tbGF5b3V0e1xyXG4vLyAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5oaWRle1xyXG4gICBcclxuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIHRvcDogLTk5OTlweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICBsZWZ0OiAtOTk5OXB4ICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4vLyAgIH1cclxuICBcclxuLy8gICAubW9kYWwtd3JhcHBlciB7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuLy8gICAgIHotaW5kZXg6IDI7IC8qIFNpdCBvbiB0b3AgKi9cclxuLy8gICAgIHBhZGRpbmctdG9wOiAxMnB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbi8vICAgICBib3R0b206IDUwcHg7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuLy8gICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuLy8gICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xyXG4vLyAgICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICAgXHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5tYWluLWRpc3BsYXkge1xyXG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmV5OyBcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgZ2FwOiAxNXB4O1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuLy8gICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwJTtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4vLyAgICAgd2lkdGg6IDMwJTtcclxuLy8gICAgIGhlaWdodDogNDAlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuLy8gICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4vLyAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4vLyAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4vLyAgICAgLyogZ3JpZC1hdXRvLWNvbHVtbnM6IDFmciwxZnIsMWZyOyAqL1xyXG4vLyAgIH1cclxuLy8gICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbi8vICAgICBmcm9tIHtcclxuLy8gICAgICAgdG9wOiAtMzAwcHg7XHJcbi8vICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICB9XHJcbi8vICAgICB0byB7XHJcbi8vICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbiAgXHJcbi8vICAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuLy8gICAgIGZyb20ge1xyXG4vLyAgICAgICB0b3A6IC0zMDBweDtcclxuLy8gICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgIH1cclxuLy8gICAgIHRvIHtcclxuLy8gICAgICAgdG9wOiAwO1xyXG4vLyAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBAbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuLy8gICAgIC5tYWluLWRpc3BsYXkge1xyXG4vLyAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuICBcclxuLy8gICAuaW5wdXRNb2RhbHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vICAgICB3aWR0aDogNDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAzMCU7XHJcbi8vICAgICBtYXJnaW46IDAgMzAlO1xyXG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4vLyAgIH1cclxuLy8gICAuYnRuTW9kYWx7XHJcbi8vICAgICBwYWRkaW5nOiAxNnB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7IFxyXG4vLyAgIH1cclxuLy8gICAuYnRuTW9kYWw6aG92ZXJ7XHJcbi8vICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XHJcbi8vICAgfVxyXG4vLyAgIC5idG4tY29udGFpbmVye1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgZ2FwOiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gICAuYnRuLXVwZGF0ZXtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgcGFkZGluZzogM3B4O1xyXG4vLyAgICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4vLyAgIH1cclxuLy8gICAuYnRuLXVwZGF0ZTpob3ZlcntcclxuLy8gICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxuLy8gICB9XHJcbi8vICAgLm1vZGFsLWhlYWRlcntcclxuLy8gICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAgIH1cclxuICBcclxuICBcclxuLy8gICAuZG9uZXtcclxuLy8gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgLm1haWx7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgICAgIGZvbnQ6IDIwcHggYmxhY2sgc29saWQ7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4vLyAgICAgICAgIHRyYW5zaXRpb246IDEwMDBtcztcclxuLy8gICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4vLyAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4vLyAgICAgfVxyXG4gICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-setting',
                templateUrl: './user-setting.component.html',
                styleUrls: ['./user-setting.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "Otmm":
/*!**************************************!*\
  !*** ./src/app/store/app.effects.ts ***!
  \**************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/item.actions */ "rJkI");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/user.actions */ "mYIz");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/item.service */ "jcKA");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "qfBg");










// the actual response to the component dispatch as vue actions
class AppEffects {
    // updateUser$ = createEffect(() => {
    //   return this.actions$.pipe(
    //     ofType(UPDATED_USER),
    //     switchMap((action) =>
    //     this.userService.update(action).pipe(
    //         tap(() =>
    //           console.log(
    //             'user signed',action
    //           )
    //         ),
    //         catchError((error) => {
    //           console.log('Effect: Caught error ===> Reducer', error);
    //           return of({
    //             type: SET_ERROR,
    //             error: error.toString(),
    //           });
    //         })
    //       )
    //     )
    //   );
    // });
    constructor(actions$, itemService, userService) {
        this.actions$ = actions$;
        this.itemService = itemService;
        this.userService = userService;
        this.loadItems$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["LOAD_ITEMS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action //a kind of filter : only wants data in pipe regarding loading items
            ) => this.itemService.realQuery().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((items) => ({
                // this is the finale data on loadItems$ observable pipe , that will go back to reducer that will update the store
                type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["LOADED_ITEMS"],
                items,
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        this.loadItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["LOAD_ITEM"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: load item ==> service')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.itemService.getById(action.itemId, action.itemId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: Got item from service ===> Reducer')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((item) => ({
                type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["LOADED_ITEM"],
                item,
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        this.removeItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["REMOVE_ITEM"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.itemService.remove(action.itemId, action.itemId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: Item removed by service ===> Reducer')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => ({
                type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["REMOVED_ITEM"],
                itemId: action.itemId,
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        this.saveItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SAVE_ITEM"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.itemService.save(action.item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: Item saved by service, inform the ===> Reducer')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((savedItem) => ({
                type: action.item.id ? _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATED_ITEM"] : _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["ADDED_ITEM"],
                item: savedItem,
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        //ה-ACTIN עצמו הוא צינור שהאפקט מאזין לו . 
        // ככה שכל פעם שנזרק דיסאפצ , כלומר שנורה action
        // ה-אפקט יוכ להאזין לו ולהגיב בהתאם
        // הזיהוי נעשה באמצעות האופרטור של typeOf
        this.saveUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["SAVE_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.userService.signup(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('user signed', action.user)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => ({
                type: action.user.fullname ? _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UPDATED_USER"] : _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["ADDED_USER"],
                // type: ADDED_USER,
                user: action.user
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        this.getLoggedUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["GET_LOGGED_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: load user ==> service')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.userService.getLoggedInUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: Got logged user from service ===> Reducer')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => ({
                type: _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LOADED_LOGGED_USER"],
                user,
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LOGIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: load user ==> service')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.userService.login(action)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: Got login user from service ===> Reducer', action)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => ({
                type: _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LOADED_LOGGED_USER"],
                user: action.user,
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
    }
}
AppEffects.ɵfac = function AppEffects_Factory(t) { return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
AppEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppEffects, factory: AppEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


/***/ }),

/***/ "Pii7":
/*!********************************!*\
  !*** ./src/app/store/store.ts ***!
  \********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _reducers_item_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/item.reducer */ "cMLI");
/* harmony import */ var _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/user.reducer */ "mgGq");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



const reducers = {
    itemState: _reducers_item_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    userState: _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
    ? []
    : [];


/***/ }),

/***/ "Sqpg":
/*!*****************************************!*\
  !*** ./src/app/root-component/index.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Coding Academy NGRX Demo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
            <app-header></app-header>
            <router-outlet></router-outlet>
            `,
            }]
    }], null, null); })();


/***/ }),

/***/ "SsL9":
/*!***************************************************!*\
  !*** ./src/app/services/async-storage.service.ts ***!
  \***************************************************/
/*! exports provided: storageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageService", function() { return storageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

const storageService = {
    query,
    get,
    post,
    put,
    remove,
    makeId
};
function query(entityType, delay = 1000) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        var entities = JSON.parse(localStorage.getItem(entityType) || 'null') || [];
        if (delay) {
            return new Promise((resolve) => setTimeout(resolve, delay, entities));
        }
        return entities;
    });
}
function get(entityType, entityId) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        // console.log(entityId);
        const entities = yield query(entityType);
        const entity = entities.find(entity => entity.id === entityId);
        if (!entity)
            throw new Error(`Cannot get, Item ${entityId} of type: ${entityType} does not exist`);
        return entity;
    });
}
function post(entityType, newEntity) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        newEntity = Object.assign(Object.assign({}, newEntity), { id: makeId() });
        const entities = yield query(entityType);
        entities.push(newEntity);
        _save(entityType, entities);
        return newEntity;
    });
}
function put(entityType, updatedEntity) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const entities = yield query(entityType);
        const idx = entities.findIndex(entity => entity.id === updatedEntity.id);
        entities[idx] = updatedEntity;
        _save(entityType, entities);
        return updatedEntity;
    });
}
function remove(entityType, entityId) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const entities = yield query(entityType);
        const idx = entities.findIndex(entity => entity.id === entityId);
        if (idx !== -1)
            entities.splice(idx, 1);
        else
            throw new Error(`Cannot remove, item ${entityId} of type: ${entityType} does not exist`);
        _save(entityType, entities);
        return true;
    });
}
function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities));
}
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


/***/ }),

/***/ "WBUw":
/*!*******************************************************!*\
  !*** ./src/app/cmps/item-list/item-list.component.ts ***!
  \*******************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





function ItemListComponent_item_preview_1_div_3_span_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemListComponent_item_preview_1_div_3_span_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeItem(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemListComponent_item_preview_1_div_3_span_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemListComponent_item_preview_1_div_3_span_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.editItem(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemListComponent_item_preview_1_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemListComponent_item_preview_1_div_3_span_1_button_1_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemListComponent_item_preview_1_div_3_span_1_button_2_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loggedUser.fullname === (item_r1 == null ? null : item_r1.by == null ? null : item_r1.by.fullname));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loggedUser.fullname === (item_r1 == null ? null : item_r1.by == null ? null : item_r1.by.fullname));
} }
function ItemListComponent_item_preview_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemListComponent_item_preview_1_div_3_span_1_Template, 3, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loggedUser);
} }
function ItemListComponent_item_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "item-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemListComponent_item_preview_1_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.uploadedData, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r0.loggedUser$));
} }
class ItemListComponent {
    // type:Array<string> = this.items!.map((el:string)=>el.itemType)
    constructor(store) {
        this.store = store;
        this.items = [];
        this.uploadedData = [];
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loggedUser = {
            username: "",
            password: "",
            fullname: "",
            isAdmin: false,
        };
        this.loggedUser$ = this.store.select('userState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('user'));
    }
    ngOnInit() {
        this.loggedUser$.subscribe((user) => {
            this.loggedUser = user;
        });
    }
    removeItem(itemId) {
        this.removed.emit(itemId);
    }
    editItem(itemId) {
        this.edited.emit(itemId);
    }
}
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["item-list"]], inputs: { items: "items", uploadedData: "uploadedData" }, outputs: { removed: "removed", edited: "edited" }, decls: 2, vars: 1, consts: [[1, "card-grid", "main-layout"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], [4, "ngIf"], [3, "click", 4, "ngIf"], [3, "click"]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemListComponent_item_preview_1_Template, 5, 5, "item-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, styles: [".card-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZ3JpZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-list',
                templateUrl: './item-list.component.html',
                styleUrls: ['./item-list.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uploadedData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Z4Ve":
/*!*******************************************************!*\
  !*** ./src/app/cmps/item-edit/item-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: ItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditComponent", function() { return ItemEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_upload_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/upload_Service */ "iaaw");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/item.actions */ "rJkI");
/* harmony import */ var src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");












function ItemEditComponent_section_0_ngx_dropzone_image_preview_11_ngx_dropzone_video_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-video-preview", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ItemEditComponent_section_0_ngx_dropzone_image_preview_11_ngx_dropzone_video_preview_1_Template_ngx_dropzone_video_preview_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const f_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.onRemove(f_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", f_r5)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", f_r5.type, ")");
} }
function ItemEditComponent_section_0_ngx_dropzone_image_preview_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ItemEditComponent_section_0_ngx_dropzone_image_preview_11_Template_ngx_dropzone_image_preview_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const f_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onRemove(f_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemEditComponent_section_0_ngx_dropzone_image_preview_11_ngx_dropzone_video_preview_1_Template, 3, 3, "ngx-dropzone-video-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", f_r3)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", f_r3.type, ")");
} }
function ItemEditComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemEditComponent_section_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ItemEditComponent_section_0_Template_form_submit_6_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemEditComponent_section_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.item.text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-dropzone", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ItemEditComponent_section_0_Template_ngx_dropzone_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Drop it, baby!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ItemEditComponent_section_0_ngx_dropzone_image_preview_11_Template, 4, 4, "ngx-dropzone-image-preview", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemEditComponent_section_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.modalOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.itemEditState, " your post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.item.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.files);
} }
const _c0 = function () { return { exact: true }; };
function ItemEditComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemEditComponent_section_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sorry! you have to sign-up to add posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "you can sign-up easily ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class ItemEditComponent {
    constructor(store, _uploadService) {
        this.store = store;
        this._uploadService = _uploadService;
        this.loggedUser = {
            username: "",
            password: "",
            fullname: "",
            isAdmin: false,
        };
        this.item = { id: '', name: '', text: '', img: '', video: '', by: { fullname: '', date: Date.now() } };
        this.modalOpen = true;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sub = null;
        this.files = [];
        this.uploadedItems = [];
        this.item$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('item'));
        this.loggedUser$ = this.store.select('userState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('loggedUser'));
    }
    closeModal() {
        this.modalOpen = false;
    }
    get itemEditState() {
        return (this.item.id) ? 'Update' : 'Add';
    }
    ngOnInit() {
        this.sub = this.item$.subscribe(item => {
            if (item)
                this.item = JSON.parse(JSON.stringify(item));
        });
    }
    saveItem() {
        var _a;
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_3__["SaveItem"](this.item));
        this.saved.emit();
        this.loggedUser$.subscribe((user) => {
            this.loggedUser = user;
        });
        (_a = this.loggedUser.items) === null || _a === void 0 ? void 0 : _a.push(this.item);
        this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["UpdatedUser"](this.loggedUser));
        // this.store.dispatch(new SaveUser(Object.assign(this.item)));
    }
    ngOnDestroy() {
        var _a;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onSelect(event) {
        console.log(event);
        this.files.push(...event.addedFiles);
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    onUpload() {
        var _a;
        if (!this.files[0]) {
            // alert('upload some files first ')ף
            this.loggedUser$.subscribe((user) => {
                this.loggedUser = user;
            });
            (_a = this.loggedUser.items) === null || _a === void 0 ? void 0 : _a.push(this.item);
            this.item.by.fullname = this.loggedUser.fullname;
            this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_3__["SaveItem"](this.item));
            this.saved.emit();
            return;
        }
        const file_data = this.files[0];
        const data = new FormData();
        data.append('file', file_data);
        data.append('upload_preset', 'wtjy3eil');
        data.append('cloud_name', 'dg6yaccvn');
        this._uploadService.uploadImage(data).subscribe((response) => {
            var _a;
            if (response)
                console.log(response);
            this.uploadedItems.push(response.secure_url);
            this.item.img = this.uploadedItems[0];
            this.loggedUser$.subscribe((user) => {
                this.loggedUser = user;
            });
            (_a = this.loggedUser.items) === null || _a === void 0 ? void 0 : _a.push(this.item);
            this.item.by.fullname = this.loggedUser.fullname;
            this.item.by.date = Date.now();
            this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_4__["UpdatedUser"](this.loggedUser));
            this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_3__["SaveItem"](this.item));
            this.saved.emit();
        });
    }
}
ItemEditComponent.ɵfac = function ItemEditComponent_Factory(t) { return new (t || ItemEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_Service__WEBPACK_IMPORTED_MODULE_1__["uploadService"])); };
ItemEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemEditComponent, selectors: [["item-edit"]], outputs: { saved: "saved" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_upload_Service__WEBPACK_IMPORTED_MODULE_1__["uploadService"]])], decls: 4, vars: 6, consts: [["class", "item-edit modalWrapper", 3, "hidden", 4, "ngIf"], [4, "ngIf"], [1, "item-edit", "modalWrapper", 3, "hidden"], [1, "main-display"], [1, "close-modal-btn", 3, "click"], [1, "centered-text"], [1, "form-container", 3, "submit"], ["type", "text", "name", "name", "placeholder", "What's on your mind", 1, "form-text", 3, "ngModel", "ngModelChange"], [1, "upload-container", 3, "change"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "upload-btn", 3, "click"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"], [1, "modalWrapper"], ["routerLink", "/login", "routerLinkActive", "active-nav", 3, "routerLinkActiveOptions"]], template: function ItemEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemEditComponent_section_0_Template, 14, 4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemEditComponent_section_2_Template, 11, 2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.loggedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.loggedUser$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneImagePreviewComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneVideoPreviewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".modalWrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n  \n  padding-top: 12px;\n  \n  bottom: 50px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  \n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n\n.main-display[_ngcontent-%COMP%] {\n  gap: 15px;\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 10px;\n  border: 1px solid #888;\n  width: 80%;\n  height: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border-radius: 1%;\n  display: flex;\n  flex-direction: column;\n  \n  \n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n  height: 30%;\n  margin: auto;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.upload-container[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n}\n\n.centered-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.close-modal-btn[_ngcontent-%COMP%] {\n  right: 10%;\n  width: 5%;\n}\n\n.upload-btn[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osaUJBQUE7RUFBbUIsd0JBQUE7RUFDbkIsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxvQkFBQTtFQUNDLDRCQUFBO0VBQ0QsdUJBQUE7RUFBZ0MsbUJBQUE7RUFDaEMsb0NBQUE7RUFBc0MscUJBQUE7QUFDMUM7O0FBR0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRFQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNGLFlBQUE7QUFDQTs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBSUYiLCJmaWxlIjoiaXRlbS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLml0ZW0tZWRpdCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMDAsIDI0Myk7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbi8vIH1cclxuXHJcblxyXG4ubW9kYWxXcmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMjsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXHJcbiAgICAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gICAgIFxyXG4gIH1cclxuXHJcbiAgLm1haW4tZGlzcGxheSB7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBib3JkZXItcmFkaXVzOjElO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAvKiBncmlkLWF1dG8tY29sdW1uczogMWZyLDFmciwxZnI7ICovXHJcbiAgfVxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDoxMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbm1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZvcm0tdGV4dHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi51cGxvYWQtY29udGFpbmVye1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVyZWQtdGV4dHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNsb3NlLW1vZGFsLWJ0bntcclxuICByaWdodDogMTAlO1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG4udXBsb2FkLWJ0bntcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-edit',
                templateUrl: './item-edit.component.html',
                styleUrls: ['./item-edit.component.scss'],
                providers: [_services_upload_Service__WEBPACK_IMPORTED_MODULE_1__["uploadService"]]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _services_upload_Service__WEBPACK_IMPORTED_MODULE_1__["uploadService"] }]; }, { saved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/store */ "Pii7");
/* harmony import */ var _store_app_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/app.effects */ "Otmm");
/* harmony import */ var _root_component_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./root-component/index */ "Sqpg");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/item-app/item-app.component */ "HjOC");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmps/item-list/item-list.component */ "WBUw");
/* harmony import */ var _cmps_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cmps/item-preview/item-preview.component */ "A4CU");
/* harmony import */ var _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cmps/item-edit/item-edit.component */ "Z4Ve");
/* harmony import */ var _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cmps/login/login.component */ "/WUq");
/* harmony import */ var _cmps_user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cmps/user-setting/user-setting.component */ "JIlg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_root_component_index__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__["NgxDropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_store__WEBPACK_IMPORTED_MODULE_10__["reducers"], {
                metaReducers: _store_store__WEBPACK_IMPORTED_MODULE_10__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                },
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_store_app_effects__WEBPACK_IMPORTED_MODULE_11__["AppEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_root_component_index__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_15__["AppHeaderComponent"],
        _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_14__["ItemAppComponent"],
        _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_18__["ItemEditComponent"],
        _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_16__["ItemListComponent"],
        _cmps_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_17__["ItemPreviewComponent"],
        _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
        _cmps_user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_20__["UserSettingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__["NgxDropzoneModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _root_component_index__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_15__["AppHeaderComponent"],
                    _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_14__["ItemAppComponent"],
                    _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_18__["ItemEditComponent"],
                    _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_16__["ItemListComponent"],
                    _cmps_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_17__["ItemPreviewComponent"],
                    _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                    _cmps_user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_20__["UserSettingComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__["NgxDropzoneModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_store__WEBPACK_IMPORTED_MODULE_10__["reducers"], {
                        metaReducers: _store_store__WEBPACK_IMPORTED_MODULE_10__["metaReducers"],
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        },
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_store_app_effects__WEBPACK_IMPORTED_MODULE_11__["AppEffects"]]),
                ],
                providers: [],
                bootstrap: [_root_component_index__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_16__["ItemListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], _cmps_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_17__["ItemPreviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"]], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["AsyncPipe"]]);


/***/ }),

/***/ "cMLI":
/*!************************************************!*\
  !*** ./src/app/store/reducers/item.reducer.ts ***!
  \************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/item.actions */ "rJkI");

const initialState = {
    items: [],
    item: null,
    isLoading: false,
    error: ''
};
//this function will take care to return new state
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]: {
            //destructure from the state object , return new state by spreading the currant state
            // the actual change of the state by the reducer will take place depending on the action.type the is determend bu 
            //the action : the first chain on the state management . the reducer is the second one.
            //documentation: State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state
            // every change create a new state which allow angular to keep track on tree of changes :
            // some props have not changes during the state creation : so we have anew and old state and we can keep on the changes
            // similar to virtual dom on react ?
            //store is an observable that we can subscribe to it.
            const { isLoading } = action;
            console.log(`Reducer: Setting isLoading to ${isLoading}`);
            //the spread operator responsible for returned a new state (we cant change existing one).
            // maybe i can also try with object.assign
            return Object.assign(Object.assign({}, state), { isLoading, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR"]: {
            const { error } = action;
            console.log(`Reducer: Setting item error`, error);
            return Object.assign(Object.assign({}, state), { error, isLoading: false });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["LOADED_ITEMS"]: {
            console.log(action); // return from app.effects - return type+array from observable of query
            const { items } = action; // return from app.effects - return type+array from observable of query
            console.log(`Reducer: Setting loaded items (${items.length}) items`);
            return Object.assign(Object.assign({}, state), { items, isLoading: false, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["LOADED_ITEM"]: {
            const { item } = action;
            console.log(`Reducer: Setting loaded item ${item.id}`);
            return Object.assign(Object.assign({}, state), { item, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVED_ITEM"]: {
            const { itemId } = action;
            console.log('Reducer: Removing item:', itemId);
            const items = state.items.filter(item => item.id !== itemId);
            return Object.assign(Object.assign({}, state), { items, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["ADDED_ITEM"]: {
            const { item } = action;
            console.log('Reducer: Adding item:', item);
            const items = [...state.items, item];
            return Object.assign(Object.assign({}, state), { items, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATED_ITEM"]: {
            const { item } = action;
            console.log('Reducer: Updating item:', item);
            const items = state.items.map(currItem => (currItem.id === item.id) ? item : currItem);
            return Object.assign(Object.assign({}, state), { items, item: null, error: '' });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "iaaw":
/*!********************************************!*\
  !*** ./src/app/services/upload_Service.ts ***!
  \********************************************/
/*! exports provided: uploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadService", function() { return uploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class uploadService {
    constructor(_http) {
        this._http = _http;
    }
    uploadImage(vals) {
        let data = vals;
        return this._http.post('https://api.cloudinary.com/v1_1/dg6yaccvn/image/upload', data);
    }
}
uploadService.ɵfac = function uploadService_Factory(t) { return new (t || uploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
uploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: uploadService, factory: uploadService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](uploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jcKA":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/item.actions */ "rJkI");
/* harmony import */ var _async_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./async-storage.service */ "SsL9");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







const ENTITY = 'item';
class ItemService {
    constructor(store, https) {
        this.store = store;
        this.https = https;
        this.items = [];
        // If empty - load test data to storage
        // const items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
        this.items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
        // if (!items || items.length === 0) {
        //   console.log('Empty');
        //   localStorage.setItem(ENTITY, JSON.stringify(this.createItems()));
        // }
    }
    query(filterBy = '') {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadingItems"]());
        // casting : the promise entity [] to item as define on module. form can change promise to Observable
        //only if we first cast it as promise of item
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].query(ENTITY));
    }
    realQuery() {
        let realItem = this.https.get('https://retoolapi.dev/NLfiGD/data'
        // "https://philosophyapi.herokuapp.com/api/books/"
        );
        let data = realItem.subscribe(res => {
            // const items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
            if (!this.items || this.items.length === 0) {
                if (res === undefined)
                    JSON.parse(localStorage.getItem(ENTITY) || 'null');
                else {
                    return localStorage.setItem(ENTITY, JSON.stringify(res));
                }
            }
            else {
                return this.items;
            }
            //a bad way to keep data to edit data fro server. edit should check if to 
            //edit from store array ! 
        });
        // const items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.items);
    }
    getById(itemId, id) {
        id = itemId;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].get(ENTITY, id));
    }
    remove(itemId, id) {
        id = itemId;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].remove(ENTITY, id));
    }
    save(item) {
        const method = item.id ? 'put' : 'post';
        const prmSavedItem = _async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"][method](ENTITY, item);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(prmSavedItem);
    }
    createItems() {
        return ['Vue', 'Angular', 'React', 'Redux', 'NGRX', 'Vuex'].map((name) => ({
            id: _async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].makeId(),
            name,
        }));
    }
    get emptyItem() {
        return {
            id: '',
            name: '',
        };
    }
    getRawData() {
        let data = [
            {
                "Home-Work": [
                    {
                        "id": 8,
                        "name": "Angular practice",
                        "color": "#e8741e",
                        "importance": 3
                    },
                    {
                        "id": 9,
                        "name": "vue practice",
                        "color": "#344759",
                        "importance": 4
                    },
                    {
                        "id": 10,
                        "name": "react practice",
                        "color": "#8e6e95",
                        "importance": 5
                    },
                ]
            },
            { "Finance": [
                    {
                        "id": 1,
                        "name": "take loan",
                        "color": "#39a59c",
                        "importance": 4
                    },
                    {
                        "id": 3,
                        "name": "go to the bank",
                        "color": "#39a59c",
                        "importance": 1
                    },
                    {
                        "id": 5,
                        "name": "buy shares",
                        "color": "#e8741e",
                        "importance": 2
                    },
                ] },
            {
                "others": [
                    {
                        "id": 2,
                        "name": "clean car",
                        "color": "#39a59c",
                        "importance": 1
                    },
                    {
                        "id": 12,
                        "name": "go to the bank",
                        "color": "#e8741e",
                        "importance": 2
                    },
                    { "Shopping-list": [
                            {
                                "id": 4,
                                "name": "buy cheese",
                                "color": "#344759",
                                "importance": 4
                            },
                        ] }
                ]
            },
        ];
        return data;
    }
}
ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mYIz":
/*!***********************************************!*\
  !*** ./src/app/store/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: ADDED_USER, SAVE_USER, UPDATED_USER, LOADED_USER, REMOVED_USER, LOAD_USERS, LOAD_USER, LOADED_USERS, REMOVE_USER, SET_ERROR, SET_LOADING, GET_LOGGED_USER, LOADED_LOGGED_USER, LOGIN, Login, GetLoggedUser, LoadedLoggedUser, AddedUser, SaveUser, RemoveUser, UpdatedUser, LoadedUser, LoadUsers, LoadUser, LoadedUsers, RemovedUser, UserError, LoadingUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDED_USER", function() { return ADDED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER", function() { return SAVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATED_USER", function() { return UPDATED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED_USER", function() { return LOADED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVED_USER", function() { return REMOVED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS", function() { return LOAD_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER", function() { return LOAD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED_USERS", function() { return LOADED_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_USER", function() { return REMOVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOGGED_USER", function() { return GET_LOGGED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED_LOGGED_USER", function() { return LOADED_LOGGED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLoggedUser", function() { return GetLoggedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedLoggedUser", function() { return LoadedLoggedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddedUser", function() { return AddedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUser", function() { return SaveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveUser", function() { return RemoveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatedUser", function() { return UpdatedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedUser", function() { return LoadedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUsers", function() { return LoadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return LoadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedUsers", function() { return LoadedUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovedUser", function() { return RemovedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserError", function() { return UserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingUsers", function() { return LoadingUsers; });
const ADDED_USER = '[user] added';
const SAVE_USER = '[user] saved';
const UPDATED_USER = '[user] updated';
const LOADED_USER = '[user] loaded';
const REMOVED_USER = '[user] removed';
const LOAD_USERS = '[user]s load';
const LOAD_USER = '[user] load';
const LOADED_USERS = '[user]s loaded';
const REMOVE_USER = '[user] remove';
const SET_ERROR = '[user] error';
const SET_LOADING = '[user] loading';
const GET_LOGGED_USER = '[user] get logged ';
const LOADED_LOGGED_USER = '[user] logged loaded ';
const LOGIN = '[user] login';
class Login {
    constructor(user) {
        this.user = user;
        this.type = LOGIN;
    }
}
class GetLoggedUser {
    constructor() {
        this.type = GET_LOGGED_USER;
    }
}
class LoadedLoggedUser {
    constructor(user) {
        this.user = user;
        this.type = LOADED_LOGGED_USER;
    }
}
class AddedUser {
    constructor(user) {
        this.user = user;
        this.type = ADDED_USER;
    }
}
class SaveUser {
    constructor(user) {
        this.user = user;
        this.type = SAVE_USER;
    }
}
class RemoveUser {
    constructor(user) {
        this.user = user;
        this.type = REMOVED_USER;
    }
}
class UpdatedUser {
    constructor(user) {
        this.user = user;
        this.type = UPDATED_USER;
    }
}
class LoadedUser {
    constructor(user) {
        this.user = user;
        this.type = LOADED_USER;
    }
}
class LoadUsers {
    constructor(user) {
        this.user = user;
        this.type = LOAD_USERS;
    }
}
class LoadUser {
    constructor(user) {
        this.user = user;
        this.type = LOAD_USER;
    }
}
class LoadedUsers {
    constructor(user) {
        this.user = user;
        this.type = LOADED_USERS;
    }
}
class RemovedUser {
    constructor(user) {
        this.user = user;
        this.type = REMOVED_USER;
    }
}
class UserError {
    constructor(error) {
        this.error = error;
        this.type = SET_ERROR;
    }
}
class LoadingUsers {
    constructor(isLoading = true) {
        this.isLoading = isLoading;
        this.type = SET_LOADING;
    }
}
// export const signUp = createAction('[user] SignUp', props<{ signUpCredentials:any }>());
// export const login = createAction('[user] Login');
// export const logOut = createAction('[user] LogOut');


/***/ }),

/***/ "mgGq":
/*!************************************************!*\
  !*** ./src/app/store/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ "mYIz");
// import { createReducer, on } from '@ngrx/store';
// import { login, signUp, logOut } from '../actions/user.actions';
// import { UserService } from 'src/app/services/user.service';
// import { User } from 'src/app/models/item';
// export interface userState {
//    users: User[];
//    user: User | null;
//     isLoading: boolean;
//     error: string;
//   }
// export const initialState = {
//     loggedUser : UserService.getLoggedUser(),
//     users: [],
// };
// const _counterReducer = createReducer(
//   initialState,
//   on(login, (state) => state),
//   on(signUp, (state) => state),
//   on(logOut, (state) => state)
// );
// export function counterReducer(state:any, action:any) {
//   return _counterReducer(state, action);
// }

const initialState = {
    users: [],
    user: null,
    loggedUser: null,
    isLoading: false,
    error: ''
};
//this function will take care to return new state
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]: {
            //destructure from the state object , return new state by spreading the currant state
            // the actual change of the state by the reducer will take place depending on the action.type the is determend bu 
            //the action : the first chain on the state management . the reducer is the second one.
            //documentation: State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state
            // every change create a new state which allow angular to keep track on tree of changes :
            // some props have not changes during the state creation : so we have anew and old state and we can keep on the changes
            // similar to virtual dom on react ?
            //store is an observable that we can subscribe to it.
            const { isLoading } = action;
            console.log(`Reducer: Setting isLoading to ${isLoading}`);
            //the spread operator responsible for returned a new state (we cant change existing one).
            // maybe i can also try with object.assign
            return Object.assign(Object.assign({}, state), { isLoading, error: '' });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR"]: {
            const { error } = action;
            console.log(`Reducer: Setting user error`, error);
            return Object.assign(Object.assign({}, state), { error, isLoading: false });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOADED_USERS"]: {
            console.log(action); // return from app.effects - return type+array from observable of query
            const { users } = action; // return from app.effects - return type+array from observable of query
            console.log(`Reducer: Setting loaded users (${users.length}) users`);
            return Object.assign(Object.assign({}, state), { users, isLoading: false, error: '' });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOADED_USER"]: {
            const { user } = action;
            console.log(`Reducer: Setting loaded user ${user.password}`);
            return Object.assign(Object.assign({}, state), { user, error: '' });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVED_USER"]: {
            const { userPassword } = action;
            console.log('Reducer: Removing user:', userPassword);
            const users = state.users.filter(user => user.password !== userPassword);
            return Object.assign(Object.assign({}, state), { users, error: '' });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["ADDED_USER"]: {
            const { user } = action;
            console.log('Reducer: Adding user:', user);
            // const users = [...state.users, user];
            return Object.assign(Object.assign({}, state), { user: user, error: '' });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATED_USER"]: {
            const { user } = action;
            console.log('Reducer: Updating user:', user);
            const users = state.users.map(currUser => (currUser.password === user.password) ? user : currUser);
            return Object.assign(Object.assign({}, state), { users, user, error: '' });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOADED_LOGGED_USER"]: {
            const { user } = action;
            let loggedUser = user.user;
            console.log('Reducer: loading logged user:', user);
            // const users = [...state.users, user];
            return Object.assign(Object.assign({}, state), { loggedUser: loggedUser, error: '' });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _async_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./async-storage.service */ "SsL9");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







const ENTITY = 'user';
class UserService {
    constructor(store, https) {
        this.store = store;
        this.https = https;
        this.STORAGE_KEY_LOGGED_USER = 'loggedUser';
        this.SCORE_FOR_REVIEW = 10;
        // If empty - load test data to storage
        const users = JSON.parse(localStorage.getItem(ENTITY) || 'null');
        if (!users || users.length === 0) {
            console.log('Empty');
        }
    }
    getUsers() {
        return _async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].query('user');
        // return httpService.get(`user`)
    }
    getById(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield _async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].get('user', userId);
            // const user = await httpService.get(`user/${userId}`)
            // gWatchedUser = user;
            return user;
        });
    }
    remove(userId) {
        return _async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].remove('user', userId);
        // return httpService.delete(`user/${userId}`)
    }
    update(user) {
        // user = await httpService.put(`user/${user._id}`, user)
        // Handle case in which admin updates other user's details
        if (this.getLoggedUser().id === user.id)
            this._saveLocalUser(user);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
    }
    login(userCred) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let users = yield _async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].query('user');
            console.log(userCred);
            let userCredId = users.find((user) => user.user.password === userCred.user.password && user.user.fullname === userCred.user.fullname);
            const user = users.find((user) => user.id === userCredId.id);
            console.log(user);
            // return _saveLocalUser(user)
            // const user = await httpService.post('auth/login', userCred)
            // socketService.emit('login', user._id);
            if (user)
                return this._saveLocalUser(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user));
            else {
                return console.log('no user');
            }
            ;
        });
    }
    // async login (userCred:any) {
    //     const users = await storageService.query('user')
    //     const user = users.find(user => user.id === userCred.id)
    //     // return _saveLocalUser(user)
    //     // const user = await httpService.post('auth/login', userCred)
    //     // socketService.emit('login', user._id);
    //     if (user) return from(this._saveLocalUser(user))
    //     else { return console.log('no user')};    
    // }
    // async  signup(userCred:any) {
    //     // userCred.score = 100;
    //     const user = await storageService.post('user', userCred)
    //     // const user = await httpService.post('auth/signup', userCred)
    //     // socketService.emit('set-user-socket', user._id);
    //     return this._saveLocalUser(user) 
    // }
    signup(userCred) {
        // userCred.score = 100;
        // userCred.id = this._makeId()
        const user = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].post('user', userCred));
        // const user = await httpService.post('auth/signup', userCred)
        // socketService.emit('set-user-socket', user._id);
        // this._saveLocalUser(user)
        return this._saveLocalUser(user);
        //    return user  
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sessionStorage.removeItem(this.STORAGE_KEY_LOGGED_USER);
            // socketService.emit('unset-user-socket');
            // return await httpService.post('auth/logout')
        });
    }
    increaseScore(by = this.SCORE_FOR_REVIEW) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = this.getLoggedUser();
            user.score = user.score + by || by;
            yield this.update(user);
            return user.score;
        });
    }
    addUserReview(stat) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = this.getLoggedUser();
            if (!user.reviews)
                user.reviews = [];
            user.reviews.push(stat.review);
            yield this.update(user);
            return user.reviews;
        });
    }
    addUserOrder({ order }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = this.getLoggedUser();
            if (!user.orders)
                user.orders = [];
            user.orders.push(order);
            yield this.update(user);
            return user.orders;
        });
    }
    addUserStay({ stay }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = this.getLoggedUser();
            if (!user.stayes)
                user.stayes = [];
            user.stayes.push(stay);
            yield this.update(user);
            return user.stayes;
        });
    }
    _saveLocalUser(user) {
        user.subscribe((user) => {
            sessionStorage.setItem(this.STORAGE_KEY_LOGGED_USER, JSON.stringify(user));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
    }
    getLoggedUser() {
        return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGED_USER) || 'null');
    }
    getLoggedInUser() {
        const user = JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGED_USER) || 'null');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
    }
    _makeId(length = 5) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rJkI":
/*!***********************************************!*\
  !*** ./src/app/store/actions/item.actions.ts ***!
  \***********************************************/
/*! exports provided: SET_LOADING, SET_ERROR, LOAD_ITEMS, LOAD_ITEM, LOADED_ITEM, LOADED_ITEMS, REMOVE_ITEM, REMOVED_ITEM, SAVE_ITEM, ADDED_ITEM, UPDATED_ITEM, LoadItems, LoadItem, RemoveItem, LoadedItems, LoadedItem, RemovedItem, SaveItem, AddedItem, UpdatedItem, LoadingItems, ItemError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ITEMS", function() { return LOAD_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ITEM", function() { return LOAD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED_ITEM", function() { return LOADED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED_ITEMS", function() { return LOADED_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVED_ITEM", function() { return REMOVED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM", function() { return SAVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDED_ITEM", function() { return ADDED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATED_ITEM", function() { return UPDATED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadItems", function() { return LoadItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadItem", function() { return LoadItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItem", function() { return RemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedItems", function() { return LoadedItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedItem", function() { return LoadedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovedItem", function() { return RemovedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveItem", function() { return SaveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddedItem", function() { return AddedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatedItem", function() { return UpdatedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingItems", function() { return LoadingItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemError", function() { return ItemError; });
//variables for log information
const SET_LOADING = '[item] loading';
const SET_ERROR = '[item] error';
const LOAD_ITEMS = '[item]s load';
const LOAD_ITEM = '[item] load';
const LOADED_ITEM = '[item] loaded';
const LOADED_ITEMS = '[item]s loaded';
const REMOVE_ITEM = '[item] remove';
const REMOVED_ITEM = '[item] removed';
const SAVE_ITEM = '[item] saved';
const ADDED_ITEM = '[item] added';
const UPDATED_ITEM = '[item] updated';
// export type UserAction = LoadUsers | LoadUser | RemoveUser | SaveUser
//action doesn't actually perform , just arrange the data 
// as usual inside the constructor params : the input for the action
//readonly : type script creature: cant be changed
class LoadItems {
    constructor(filterBy = '') {
        this.filterBy = filterBy;
        this.type = LOAD_ITEMS;
    }
}
class LoadItem {
    constructor(itemId = '') {
        this.itemId = itemId;
        this.type = LOAD_ITEM;
    }
}
class RemoveItem {
    constructor(itemId) {
        this.itemId = itemId;
        this.type = REMOVE_ITEM;
    }
}
// when reducer gets it - he will push it to the store
class LoadedItems {
    constructor(items = []) {
        this.items = items;
        this.type = LOADED_ITEMS;
    }
}
class LoadedItem {
    constructor(item) {
        this.item = item;
        this.type = LOADED_ITEM;
    }
}
class RemovedItem {
    constructor(itemId) {
        this.itemId = itemId;
        this.type = REMOVED_ITEM;
    }
}
class SaveItem {
    constructor(item) {
        this.item = item;
        this.type = SAVE_ITEM;
    }
}
class AddedItem {
    constructor(item) {
        this.item = item;
        this.type = ADDED_ITEM;
    }
}
class UpdatedItem {
    constructor(item) {
        this.item = item;
        this.type = UPDATED_ITEM;
    }
}
class LoadingItems {
    constructor(isLoading = true) {
        this.isLoading = isLoading;
        this.type = SET_LOADING;
    }
}
class ItemError {
    constructor(error) {
        this.error = error;
        this.type = SET_ERROR;
    }
}
// export class AddedUser implements Action {
//   readonly type = ADDED_USER;
//   constructor(public user: User) {}
// }
// export class SaveUser implements Action {
//   readonly type = SAVE_USER;
//   constructor(public user: User) {}
// }
// export class RemoveUser implements Action {
//   readonly type = REMOVED_USER;
//   constructor(public user: User) {}
// }
// export class UpdatedUser implements Action {
//   readonly type = UPDATED_USER;
//   constructor(public user: User) {}
// }
// export class LoadedUser implements Action {
//   readonly type = LOADED_USER;
//   constructor(public user:User) {}
// }
// export class LoadUsers implements Action {
//   readonly type = LOAD_USERS;
//   constructor(public user:User) {}
// }
// export class LoadUser implements Action {
//   readonly type = LOAD_USER;
//   constructor(public user:User) {}
// }
// export class LoadedUsers implements Action {
//   readonly type = LOADED_USERS;
//   constructor(public user:User) {}
// }
// export class RemovedUser implements Action {
//   readonly type = REMOVED_USER;
//   constructor(public user:User) {}
// }


/***/ }),

/***/ "uOz6":
/*!*********************************************************!*\
  !*** ./src/app/cmps/app-header/app-header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function () { return { exact: true }; };
function AppHeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_span_6_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r0.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function AppHeaderComponent_div_8_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppHeaderComponent_div_8_p_5_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r1.loggedUser$).fullname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r1.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx_r1.loggedUser$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
} }
class AppHeaderComponent {
    constructor(store) {
        this.store = store;
        this.isShow = true;
        this.loggedUser$ = this.store.select('userState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('loggedUser'));
    }
    ngOnInit() {
        this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["GetLoggedUser"]());
    }
    findUser() {
        // this.loggedUser$.subscribe((user) => console.log(user));
    }
    toggleShow() {
        this.isShow = !this.isShow;
    }
    logout() {
        // this.store.dispatch()
        // console.log('loggin out');
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 10, vars: 8, consts: [[1, "nav-container", "flex", "space-between", "align-center"], [1, "flex"], ["routerLinkActive", "active-nav", "routerLink", "/home", 3, "routerLinkActiveOptions"], [1, "flex", "align-center"], [1, "nav-txt"], [4, "ngIf"], ["class", "dropdown", 3, "click", 4, "ngIf"], ["src", "../../../assets/img/download.png", 1, "dropdown", 3, "click"], [1, "user"], ["routerLink", "/login", "routerLinkActive", "active-nav", 3, "routerLinkActiveOptions"], [1, "dropdown", 3, "click"], ["routerLink", "/user-setting", "routerLinkActive", "active-nav", 3, "routerLinkActiveOptions"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppHeaderComponent_span_6_Template, 7, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppHeaderComponent_div_8_Template, 11, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.loggedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx.loggedUser$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Lobster&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Hind+Siliguri&family=Lato&family=Mukta&family=Nunito+Sans:wght@200&family=Poppins:wght@200;400&display=swap\");\n.nav-container[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.166);\n  width: 100%;\n  padding: 10px;\n  background-color: #3336db;\n}\n.nav-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #acacac;\n  font-size: 1.3rem;\n}\n.nav-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 10px;\n}\n.nav-container[_ngcontent-%COMP%]   .nav-txt[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-left: 5px;\n}\n.nav-container[_ngcontent-%COMP%]   .active-nav[_ngcontent-%COMP%] {\n  color: white;\n  cursor: auto;\n}\n.nav-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 35px;\n  cursor: pointer;\n}\n.logIn-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 10px 5px 10px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: 3px solid black;\n}\n.dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 55px;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 85px;\n  height: 42px;\n  border: 1px solid #ddd;\n  border-radius: 50px;\n  justify-items: center;\n}\n.show[_ngcontent-%COMP%] {\n  display: none;\n}\n.dropdownContent[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  min-width: 65px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.hello-user[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: #d4cdcd;\n  color: gray;\n}\n.dropdownContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  width: 120px;\n}\n.dropdownContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n.user[_ngcontent-%COMP%] {\n  cursor: pointer;\n  \n}\n.dropdown[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDUSw0RUFBQTtBQUNBLG1LQUFBO0FBbkNSO0VBQ0UsNENBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBR0Y7QUFERTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBR0o7QUFESTtFQUNFLGlCQUFBO0FBR047QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQURKO0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFQRjtBQVdBO0VBQ0UsZ0JBQUE7QUFSRjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBUEY7QUFVQTtFQUNHLGFBQUE7QUFQSDtBQVVBO0VBRUUsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUFSRjtBQVVBO0VBQ0UsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7QUFSRjtBQVVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVBGO0FBVUE7RUFDRSxzQkFBQTtBQVBGO0FBU0E7RUFDRSxlQUFBO0VBQ0E7MEJBQUE7QUFMRjtBQVFBO0VBQ0UsZUFBQTtBQUxGIiwiZmlsZSI6ImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNjYpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1NCwgMjE5KTtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLm5hdi10eHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLmFjdGl2ZS1uYXYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cblxuICBpbWcge1xuICAgIG1heC13aWR0aDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IaW5kK1NpbGlndXJpJmZhbWlseT1MYXRvJmZhbWlseT1NdWt0YSZmYW1pbHk9TnVuaXRvK1NhbnM6d2dodEAyMDAmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xuXG4ubG9nSW4tZHJvcGRvd24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG59XG5cblxuLmRyb3Bkb3duIGRpdntcbiAgbWFyZ2luLXRvcDo1NXB4O1xufVxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4NXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgXG59XG4uc2hvd3tcbiAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bkNvbnRlbnQge1xuIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIG1pbi13aWR0aDogNjVweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG4uaGVsbG8tdXNlcntcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMDUsIDIwNSk7XG4gIGNvbG9yOiBncmF5O1xufVxuLmRyb3Bkb3duQ29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmRyb3Bkb3duQ29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbi51c2Vye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDsgKi9cbn1cbi5kcm9wZG93biBwe1xuICBtYXJnaW4tdG9wOjdweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './app-header.component.html',
                styleUrls: ['./app-header.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/item-app/item-app.component */ "HjOC");
/* harmony import */ var _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmps/login/login.component */ "/WUq");
/* harmony import */ var _cmps_user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmps/user-setting/user-setting.component */ "JIlg");








const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'item', component: _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_3__["ItemAppComponent"] },
    { path: 'login', component: _cmps_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'user-setting', component: _cmps_user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_5__["UserSettingComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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