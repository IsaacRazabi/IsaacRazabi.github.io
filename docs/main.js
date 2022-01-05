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
    logout() {
        this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["Logout"]());
        this.router.navigate(['home']);
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "item-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_4__["ItemAppComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
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







function ItemPreviewComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item == null ? null : ctx_r0.item.text, " ");
} }
function ItemPreviewComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemPreviewComponent_p_4_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showLongText(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05D4\u05DE\u05E9\u05DA \u05DC\u05E7\u05E8\u05D5\u05D0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r1.item == null ? null : ctx_r1.item.text, 0, 160), " ");
} }
function ItemPreviewComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.item == null ? null : ctx_r2.item.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1) { return { "item-preview": a0, "item-preview-long": a1 }; };
const _c1 = ["*"];
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
        this.itemImg = '';
        this.longText = false;
        // img = this.item!.img ;
        this.img = 'https://random.imagecdn.app/500/150 ';
        this.myImage = 'https://random.imagecdn.app/500/150 ';
        this.strHtml = '';
        this.loggedUser$ = this.store.select('userState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('user'));
    }
    ngOnInit() {
        this.generateImg();
        // if(!this.item?.img) this.item?.img!='https://random.imagecdn.app/500/150 '
    }
    generateImg() {
        //  this.itemImg = JSON.parse(JSON.stringify(this.item!.img));
        this.itemImg = 'https://random.imagecdn.app/500/150 ';
    }
    checkLongText() {
        var _a, _b, _c, _d;
        if (((_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.length) < 30 || ((_d = (_c = this.item) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.length) === undefined)
            return true;
        else {
            if (this.longText)
                return true;
            else
                return false;
        }
    }
    showLongText() {
        this.longText = !this.longText;
    }
}
ItemPreviewComponent.ɵfac = function ItemPreviewComponent_Factory(t) { return new (t || ItemPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemListComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
ItemPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemPreviewComponent, selectors: [["item-preview"]], inputs: { item: "item" }, ngContentSelectors: _c1, decls: 15, vars: 13, consts: [[3, "ngClass"], ["class", "text", 4, "ngIf"], ["class", "img-container", 3, "src", 4, "ngIf"], [1, "item-details"], [1, "text-center"], [1, "text"], [1, "long-text", 3, "click"], [1, "img-container", 3, "src"]], template: function ItemPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemPreviewComponent_p_3_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ItemPreviewComponent_p_4_Template, 5, 5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ItemPreviewComponent_img_6_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, !ctx.longText, ctx.longText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item == null ? null : ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkLongText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.checkLongText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item == null ? null : ctx.item.by == null ? null : ctx.item.by.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 7, ctx.item == null ? null : ctx.item.by == null ? null : ctx.item.by.date, "hh:mm:ss a"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: [".item-preview[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: white;\n  border-radius: 10px;\n  min-height: 100px;\n  padding: 20px;\n  cursor: pointer;\n  width: 400px;\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item-preview-long[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: white;\n  border-radius: 10px;\n  min-height: 100px;\n  padding: 20px;\n  cursor: pointer;\n  width: 400px;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 300px;\n  height: 46%;\n}\n\n.item-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n\n.long-text[_ngcontent-%COMP%] {\n  color: lightgray;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7QUFKSjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUhKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLFFBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUZKIiwiZmlsZSI6Iml0ZW0tcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jb250YWluZXJ7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyB9XG5cblxuLml0ZW0tcHJldmlldyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLml0ZW0tcHJldmlldy1sb25ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICAvLyBoZWlnaHQ6IDQwMHB4O1xufVxuLnRleHR7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmltZy1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0NiU7XG59XG4uaXRlbS1kZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOjVweDtcbiAgICAvLyBwYWRkaW5nOjMwcHhcbn1cbi5sb25nLXRleHR7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG4vLyBociB7XG4vLyAgICAgY29sb3I6IHdoaXRlc21va2U7XG4vLyAgICAgd2lkdGg6IDgwJTtcbi8vIH1cblxuLy8gKiB7XG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCI7XG4vLyAgIH1cbi8vICAgLmZsZXgge1xuLy8gICAgIGdhcDogMjVweDtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuLy8gICAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyNXB4O1xuLy8gICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAyNXB4O1xuLy8gICB9XG4vLyAgIC5jb2x1bW5zLWNvbnRhaW5lciB7XG4vLyAgICAgbWFyZ2luLXRvcDogMjVweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuLy8gICB9XG4gIFxuLy8gICAuY29sdW1uIHtcbi8vICAgICBmb250LXNpemU6IDAuNzVyZW07XG4vLyAgICAgZmxleDogMTtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICB9XG4gIFxuLy8gICAuY2FyZCB7XG4vLyAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuLy8gICAgIHBhZGRpbmc6IDEycHggOHB4O1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgfVxuLy8gICAuY2xlYW4tbGkge1xuLy8gICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbi8vICAgfVxuLy8gICAuY2FyZC1jb250YWluZXIge1xuLy8gICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgXG4vLyAgICAgY29sb3I6IGJsYWNrO1xuLy8gICB9XG4vLyAgIC5hZGRDYXJkQnRuIHtcbi8vICAgICBjb2xvcjogbGlnaHRzbGF0ZWdyYXk7XG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgfVxuLy8gICBwIHtcbi8vICAgICBwYWRkaW5nOiAyMHB4IDA7XG4vLyAgIH1cbi8vICAgLmhlYWRlci1hIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgaGVpZ2h0OiAxLjg3NXJlbTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU2ZTk1O1xuLy8gICB9XG4vLyAgIC5oZWFkZXItYiB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGhlaWdodDogMS44NzVyZW07XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YTU5Yztcbi8vICAgfVxuLy8gICAuaGVhZGVyLWMge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQ3NTk7XG4vLyAgIH1cbi8vICAgLmhlYWRlci1kIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgaGVpZ2h0OiAxLjg3NXJlbTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg3NDFlO1xuLy8gICB9XG4gIFxuLy8gICAuY2FyZC10ZXh0IHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cHg7XG4vLyAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuLy8gICAgIGdhcDogNXB4O1xuICBcbi8vICAgICAvKiBjdXJzb3I6IG1vdmU7ICovXG4vLyAgIH1cbi8vICAgLmNhcmQtbWlkZGxlLXRleHQge1xuLy8gICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcbi8vICAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcbi8vICAgICBnYXA6IDVweDtcbi8vICAgICAvKiBjdXJzb3I6IG1vdmU7ICovXG4vLyAgIH1cbiAgXG4vLyAgIC5yaWdodC1hcnJvdyB7XG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICB9XG4gIFxuLy8gICAubGVmdC1hcnJvdyB7XG4vLyAgICAgZmxvYXQ6IGxlZnQ7XG4vLyAgIH1cbiAgXG4vLyAgIC8qIEBtZWRpYSAobWF4LXdpZHRoOjc0MHB4KSB7fSAqL1xuICBcbi8vICAgLmVkaXQtZm9ybXtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICB9XG4vLyAgIC5pbnB1dHtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1JTtcbi8vICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuLy8gICB9XG4vLyAgIC5kcmFne1xuLy8gICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbi8vICAgfVxuICBcbi8vICAgLmdyYWJiYWJsZSB7XG4vLyAgICAgY3Vyc29yOiBtb3ZlOyBcbi8vICAgICBjdXJzb3I6IGdyYWI7XG4vLyAgICAgY3Vyc29yOiAtbW96LWdyYWI7XG4vLyAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4vLyAgIH1cbiAgXG4vLyAgIC5ncmFiYmFibGU6YWN0aXZlIHtcbi8vICAgICBjdXJzb3I6IGdyYWJiaW5nO1xuLy8gICAgIGN1cnNvcjogLW1vei1ncmFiYmluZztcbi8vICAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4vLyAgIH1cbiAgXG4vLyAgIC5tYWluLWxheW91dHtcbi8vICAgICBtYXgtd2lkdGg6IDkwJTtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICB9XG4gIFxuLy8gICAuaGlkZXtcbiAgIFxuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4vLyAgICAgICB0b3A6IC05OTk5cHggIWltcG9ydGFudDtcbi8vICAgICAgIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDtcbiAgIFxuLy8gICB9XG4gIFxuLy8gICAubW9kYWwtd3JhcHBlciB7XG4vLyAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4vLyAgICAgei1pbmRleDogMjsgLyogU2l0IG9uIHRvcCAqL1xuLy8gICAgIHBhZGRpbmctdG9wOiAxMnB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4vLyAgICAgYm90dG9tOiA1MHB4O1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4vLyAgICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuLy8gICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xuLy8gICAgICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgIFxuLy8gICB9XG4gIFxuLy8gICAubWFpbi1kaXNwbGF5IHtcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7IFxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgZ2FwOiAxNXB4O1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuLy8gICAgIG1hcmdpbjogYXV0bztcbi8vICAgICBtYXJnaW4tdG9wOiAxMCU7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuLy8gICAgIHdpZHRoOiAzMCU7XG4vLyAgICAgaGVpZ2h0OiA0MCU7XG4vLyAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xuLy8gICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuLy8gICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xuLy8gICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbi8vICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4vLyAgICAgLyogZ3JpZC1hdXRvLWNvbHVtbnM6IDFmciwxZnIsMWZyOyAqL1xuLy8gICB9XG4vLyAgIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcbi8vICAgICBmcm9tIHtcbi8vICAgICAgIHRvcDogLTMwMHB4O1xuLy8gICAgICAgb3BhY2l0eTogMDtcbi8vICAgICB9XG4vLyAgICAgdG8ge1xuLy8gICAgICAgdG9wOiAwO1xuLy8gICAgICAgb3BhY2l0eTogMTtcbi8vICAgICB9XG4vLyAgIH1cbiAgXG4vLyAgIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XG4vLyAgICAgZnJvbSB7XG4vLyAgICAgICB0b3A6IC0zMDBweDtcbi8vICAgICAgIG9wYWNpdHk6IDA7XG4vLyAgICAgfVxuLy8gICAgIHRvIHtcbi8vICAgICAgIHRvcDogMDtcbi8vICAgICAgIG9wYWNpdHk6IDE7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xuLy8gICAgIC5tYWluLWRpc3BsYXkge1xuLy8gICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgfVxuLy8gICB9XG4gIFxuLy8gICAuaW5wdXRNb2RhbHtcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICAgIHdpZHRoOiA0MCU7XG4vLyAgICAgaGVpZ2h0OiAzMCU7XG4vLyAgICAgbWFyZ2luOiAwIDMwJTtcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7XG4vLyAgIH1cbi8vICAgLmJ0bk1vZGFse1xuLy8gICAgIHBhZGRpbmc6IDE2cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgICAgY29sb3I6IGJsYWNrO1xuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JleTsgXG4vLyAgIH1cbi8vICAgLmJ0bk1vZGFsOmhvdmVye1xuLy8gICAgIHRyYW5zaXRpb246IDAuM3M7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XG4vLyAgIH1cbi8vICAgLmJ0bi1jb250YWluZXJ7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBnYXA6IDEwcHg7XG4vLyAgIH1cbi8vICAgLmJ0bi11cGRhdGV7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgICAgcGFkZGluZzogM3B4O1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbi8vICAgfVxuLy8gICAuYnRuLXVwZGF0ZTpob3Zlcntcbi8vICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuLy8gICB9XG4vLyAgIC5tb2RhbC1oZWFkZXJ7XG4vLyAgICAgZm9udC1zaXplOiAxLjVyZW07XG4vLyAgIH1cbiAgXG4gIFxuLy8gICAuZG9uZXtcbi8vICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbi8vICAgICB9XG4gIFxuLy8gICAgIC5tYWlse1xuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgICAgIGZvbnQ6IDIwcHggYmxhY2sgc29saWQ7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogMTAwMG1zO1xuLy8gICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuLy8gICAgICAgICBkaXJlY3Rpb246IGx0cjtcbi8vICAgICB9XG4gICAgIl19 */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
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
function ItemAppComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "item-edit", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saved", function ItemAppComponent_section_10_Template_item_edit_saved_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addingNew = false; });
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
ItemAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemAppComponent, selectors: [["item-app"]], decls: 12, vars: 13, consts: [[1, "item-app-container"], ["class", "error-msg", 4, "ngIf"], [4, "ngIf"], [1, "container-post-btn"], [1, "post-btn", 3, "click"], [3, "items", "uploadedData", "removed", "edited"], [1, "error-msg"], [3, "saved"]], template: function ItemAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemAppComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemAppComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemAppComponent_Template_button_click_6_listener() { return ctx.addingNew = !ctx.addingNew; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Share your thoughts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "item-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ItemAppComponent_Template_item_list_removed_8_listener($event) { return ctx.removeItem($event); })("edited", function ItemAppComponent_Template_item_list_edited_8_listener($event) { return ctx.editItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ItemAppComponent_section_10_Template, 2, 0, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, ctx.items$))("uploadedData", ctx.uploadedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addingNew || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, ctx.item$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__["ItemListComponent"], _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_6__["ItemEditComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".item-app-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1100px;\n  margin: auto;\n}\n\n.post-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 190px;\n  height: 50px;\n  border: 1px solid #ddd;\n  border-radius: 50px;\n  justify-items: center;\n  background-color: white;\n  margin-top: 15px;\n}\n\n.post-btn[_ngcontent-%COMP%]:hover {\n  background-color: lightpink;\n  transition: 500ms;\n}\n\n.container-post-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 50px;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  background-color: #f5ced6;\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJpdGVtLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWFwcC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuXG59XG5cbi5wb3N0LWJ0bntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucG9zdC1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcbiAgdHJhbnNpdGlvbjogNTAwbXM7XG59XG5cbi5jb250YWluZXItcG9zdC1idG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZXJyb3ItbXNnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjA2LCAyMTQpO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMTBweDtcbn1cblxuIl19 */"] });
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
                log: console.log(items)
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
                check: console.log(user)
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
                user: { user: action.user },
                check: console.log({ user: action.user })
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: load user ==> service')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.userService.logout()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: Got logout user from service ===> Reducer', action)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => ({
                type: _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LOGOUT_USER"],
                user: null,
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
        entities.unshift(newEntity);
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
    } }, styles: [".card-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWdyaWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("modalWrapper", ctx_r1.modalOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
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
        this.filterBy = '';
        this.item$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('item'));
        this.loggedUser$ = this.store.select('userState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('loggedUser'));
    }
    closeModal() {
        this.modalOpen = !this.modalOpen;
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
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_3__["LoadItems"](this.filterBy));
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
            this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_3__["LoadItems"](this.filterBy));
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
            this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_3__["LoadItems"](this.filterBy));
        });
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_3__["LoadItems"](this.filterBy));
    }
}
ItemEditComponent.ɵfac = function ItemEditComponent_Factory(t) { return new (t || ItemEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_Service__WEBPACK_IMPORTED_MODULE_1__["uploadService"])); };
ItemEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemEditComponent, selectors: [["item-edit"]], outputs: { saved: "saved" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_upload_Service__WEBPACK_IMPORTED_MODULE_1__["uploadService"]])], decls: 4, vars: 6, consts: [["class", "item-edit modalWrapper", 3, "hidden", 4, "ngIf"], [4, "ngIf"], [1, "item-edit", "modalWrapper", 3, "hidden"], [1, "main-display"], [1, "close-modal-btn", 3, "click"], [1, "centered-text"], [1, "form-container", 3, "submit"], ["type", "text", "name", "name", "placeholder", "What's on your mind", 1, "form-text", 3, "ngModel", "ngModelChange"], [1, "upload-container", 3, "change"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "upload-btn", 3, "click"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"], ["routerLink", "/login", "routerLinkActive", "active-nav", 3, "routerLinkActiveOptions"]], template: function ItemEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemEditComponent_section_0_Template, 14, 4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemEditComponent_section_2_Template, 11, 4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.loggedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.loggedUser$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneImagePreviewComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneVideoPreviewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".modalWrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n  \n  padding-top: 12px;\n  \n  bottom: 50px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  \n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.4);\n  \n}\n\n.main-display[_ngcontent-%COMP%] {\n  gap: 15px;\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 10px;\n  border: 1px solid #888;\n  width: 80%;\n  height: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border-radius: 1%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 15%;\n  \n  \n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n  height: 30%;\n  margin: auto;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  height: 100px;\n  border-radius: 21px;\n}\n\n.upload-container[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n  border-radius: 21px;\n}\n\n.centered-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.close-modal-btn[_ngcontent-%COMP%] {\n  right: 10%;\n  width: 11%;\n  background: white;\n  border-radius: 10px;\n}\n\n.upload-btn[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  background: white;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osaUJBQUE7RUFBbUIsd0JBQUE7RUFDbkIsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxvQkFBQTtFQUNDLDRCQUFBO0VBQ0QsdUJBQUE7RUFBZ0MsbUJBQUE7RUFDaEMsb0NBQUE7RUFBc0MscUJBQUE7QUFDMUM7O0FBR0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRFQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0FBQUo7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDRixZQUFBO0FBQ0E7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0UsbUJBQUE7QUFHSjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUlGIiwiZmlsZSI6Iml0ZW0tZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5pdGVtLWVkaXQge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNCwgMTAwLCAyNDMpO1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgIG1hcmdpbjogMTBweCAwO1xyXG4vLyB9XHJcblxyXG5cclxuLm1vZGFsV3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDI7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMnB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBib3R0b206IDUwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xyXG4gICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLm1haW4tZGlzcGxheSB7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBib3JkZXItcmFkaXVzOjElO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAvKiBncmlkLWF1dG8tY29sdW1uczogMWZyLDFmciwxZnI7ICovXHJcbiAgfVxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDoxMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbm1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZvcm0tdGV4dHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbn1cclxuLnVwbG9hZC1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcclxufVxyXG5cclxuLmNlbnRlcmVkLXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jbG9zZS1tb2RhbC1idG57XHJcbiAgcmlnaHQ6IDEwJTtcclxuICB3aWR0aDogMTElO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udXBsb2FkLWJ0bntcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59Il19 */"] });
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
            // console.log(`Reducer: Setting loaded items (${items.length}) items`);
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
        this.items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    }
    query(filterBy = '') {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadingItems"]());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].query(ENTITY));
    }
    realQuery() {
        let realItem = this.https.get('https://retoolapi.dev/NLfiGD/data');
        let data = realItem.subscribe((res) => {
            if (!this.items || this.items.length === 0) {
                if (res === undefined)
                    JSON.parse(localStorage.getItem(ENTITY) || 'null');
                else {
                    let data = JSON.parse(JSON.stringify(res));
                    let newData = data.map((element, index) => {
                        let src = this.demoData()[index];
                        let user = this.demoUsers()[index];
                        element.img = src;
                        element.by = {
                            fullname: user,
                            date: Date.now(),
                        };
                        element.text = this.demoText()[index];
                        // element.by.fullname = user;
                        return element;
                    });
                    return localStorage.setItem(ENTITY, JSON.stringify(newData));
                }
            }
            else {
                return this.items;
            }
        });
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
    demoData() {
        let data = [
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/cat.gif',
            'data:image/jpeg;base64,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',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzF--y90nRLQO1-jWASJ81YnMrO_xn4i7bJnvx2pBNcVaG3zALzIAoHBHNRTZiVT4l_b8&usqp=CAU',
            'https://pa1.narvii.com/7122/d5cf4976049283bdf427d0fe18dc59b676038463r1-498-498_hq.gif',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDM1otjotYT6hu7_NoU-myU05EO08OmlAjGKHEg5NexQuajtQW6BdYGBzj9TE96yt40HY&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QisR7ODD3s3uDB1ymPSiSvgK4noxTCfWPYxiqW2kGjqTKB7fDjrOkpy5AKcmUXrTXjk&usqp=CAU',
            'data:image/jpeg;base64,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',
            'data:image/jpeg;base64,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',
            'https://media0.giphy.com/media/l0MYPAG3jAjZ2khBC/200.gif',
            'data:image/jpeg;base64,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',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzF--y90nRLQO1-jWASJ81YnMrO_xn4i7bJnvx2pBNcVaG3zALzIAoHBHNRTZiVT4l_b8&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDM1otjotYT6hu7_NoU-myU05EO08OmlAjGKHEg5NexQuajtQW6BdYGBzj9TE96yt40HY&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QisR7ODD3s3uDB1ymPSiSvgK4noxTCfWPYxiqW2kGjqTKB7fDjrOkpy5AKcmUXrTXjk&usqp=CAU',
            'data:image/jpeg;base64,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',
            'data:image/jpeg;base64,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',
        ];
        return data;
    }
    demoUsers() {
        let data = [
            'david max',
            'levi haim',
            'sara cohen',
            'michell saver',
            'danny b',
            'haim poody',
            'ori haim',
            'lea forty',
            'rachel levy',
            'sara odel',
            'david max',
            'levi haim',
            'sara cohen',
            'michell saver',
            'danny b',
            'haim poody',
            'ori haim',
            'lea forty',
            'rachel levy',
            'sara odel',
        ];
        return data;
    }
    demoText() {
        let data = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel velit ex. Vestibulum nec ex pretium, egestas ex imperdiet, luctus purus. Mauris finibus condimentum elementum. Sed pellentesque tellus a volutpat interdum. Pellentesque venenatis mattis pretium. Nunc porta ultricies ligula ut dignissim. Cras sagittis enim leo, vitae vestibulum enim convallis in. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia ligula id augue placerat pulvinar. Vestibulum id tristique urna, eget dapibus justo',
            'Fusce porttitor eros mauris, ornare sagittis elit pellentesque eget. Suspendisse quam est, lacinia id ipsum et, vehicula mollis odio. Etiam venenatis lacinia metus non congue. Quisque commodo auctor augue non elementum. Nulla vel erat lacus. Aenean sed enim pellentesque elit maximus bibendum. Maecenas arcu ante, imperdiet vitae mi id, laoreet gravida erat. Aenean at pretium arcu, et fermentum enim. Vivamus mollis ut est quis molestie.',
            'Sed feugiat commodo risus, sed venenatis magna pulvinar quis. Quisque porta nulla vitae mauris egestas imperdiet. Nam facilisis pellentesque imperdiet. Phasellus non suscipit neque. Pellentesque ac nunc in purus ultricies tincidunt. Donec blandit fringilla mauris vitae egestas. Sed finibus ex nibh, non maximus justo ultricies at. Nulla vitae faucibus nisl. Ut rhoncus odio a velit tincidunt, in aliquet magna lobortis. Mauris iaculis faucibus viverra. Integer vitae sodales est.',
            'Cras eros arcu, convallis et scelerisque ut, vulputate non dolor. Fusce condimentum est a ligula dapibus luctus. In cursus varius lectus ut rhoncus. Nunc convallis orci libero, ac eleifend lorem congue vel. Nullam et nibh luctus, malesuada libero quis, tempus nisi. Suspendisse fringilla rhoncus odio eu feugiat. Vivamus viverra erat vestibulum malesuada elementum',
            'Donec in erat in massa interdum porta sit amet et purus. Nulla ante tellus, convallis in augue id, molestie eleifend lectus. Integer bibendum et erat quis ultrices. Quisque laoreet dui nec elit cursus, a ultrices lectus molestie. Nam viverra vulputate est, in facilisis elit rhoncus sit amet.',
            'Praesent neque neque, cursus ut arcu non, congue porttitor metus. Vivamus rutrum scelerisque bibendum. Duis a elit fermentum, malesuada mi a, tempor massa. Mauris ac consequat erat. Nunc at justo facilisis',
            'consectetur urna id, egestas lectus. In dictum dolor vel quam sagittis dapibus. Sed luctus enim a augue dapibus, et volutpat purus congue. Curabitur sagittis, orci quis egestas maximus, mauris velit vestibulum nibh, eget vehicula nulla leo interdum magna. Integer vulputate ultrices ipsum at consectetur. Duis sodales turpis sapien. Vestibulum luctus mattis vehicula. Cras eget enim id eros mattis imperdiet euismod vestibulum eros',
            'Sed cursus sit amet neque a laoreet. Etiam luctus magna et magna interdum suscipit. Nunc eu metus et erat elementum scelerisque.',
        ];
        return data;
    }
    getRawData() {
        let data = [
            {
                'Home-Work': [
                    {
                        id: 8,
                        name: 'Angular practice',
                        color: '#e8741e',
                        importance: 3,
                    },
                    {
                        id: 9,
                        name: 'vue practice',
                        color: '#344759',
                        importance: 4,
                    },
                    {
                        id: 10,
                        name: 'react practice',
                        color: '#8e6e95',
                        importance: 5,
                    },
                ],
            },
            {
                Finance: [
                    {
                        id: 1,
                        name: 'take loan',
                        color: '#39a59c',
                        importance: 4,
                    },
                    {
                        id: 3,
                        name: 'go to the bank',
                        color: '#39a59c',
                        importance: 1,
                    },
                    {
                        id: 5,
                        name: 'buy shares',
                        color: '#e8741e',
                        importance: 2,
                    },
                ],
            },
            {
                others: [
                    {
                        id: 2,
                        name: 'clean car',
                        color: '#39a59c',
                        importance: 1,
                    },
                    {
                        id: 12,
                        name: 'go to the bank',
                        color: '#e8741e',
                        importance: 2,
                    },
                    {
                        'Shopping-list': [
                            {
                                id: 4,
                                name: 'buy cheese',
                                color: '#344759',
                                importance: 4,
                            },
                        ],
                    },
                ],
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
/*! exports provided: ADDED_USER, SAVE_USER, UPDATED_USER, LOADED_USER, REMOVED_USER, LOAD_USERS, LOAD_USER, LOADED_USERS, REMOVE_USER, SET_ERROR, SET_LOADING, GET_LOGGED_USER, LOADED_LOGGED_USER, LOGIN, LOGOUT, LOGOUT_USER, Login, Logout, LogoutUser, GetLoggedUser, LoadedLoggedUser, AddedUser, SaveUser, RemoveUser, UpdatedUser, LoadedUser, LoadUsers, LoadUser, LoadedUsers, RemovedUser, UserError, LoadingUsers */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutUser", function() { return LogoutUser; });
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
const LOGOUT = '[user] logout';
const LOGOUT_USER = '[user] logged out ';
class Login {
    constructor(user) {
        this.user = user;
        this.type = LOGIN;
    }
}
class Logout {
    constructor() {
        this.type = LOGOUT;
    }
}
class LogoutUser {
    constructor() {
        this.type = LOGOUT_USER;
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
            let loggedUser;
            if (user)
                loggedUser = user.user;
            console.log('Reducer: loading logged user:', user);
            // const users = [...state.users, user];
            return Object.assign(Object.assign({}, state), { loggedUser: user, error: '' });
        }
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]: {
            const { user } = action;
            let loggedUser = user;
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
            let userCredId = users.find((user) => user.user.password === userCred.user.password && user.user.username === userCred.user.username);
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AppHeaderComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.loggedUser$).user.username, "");
} }
function AppHeaderComponent_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} }
function AppHeaderComponent_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} }
function AppHeaderComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r3.loggedUser$).user.username, "");
} }
function AppHeaderComponent_hr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function AppHeaderComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_span_26_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
function AppHeaderComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class AppHeaderComponent {
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
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
        this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["Logout"]());
        this.router.navigate(['home']);
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 31, vars: 29, consts: [[1, "nav-bar-container"], [1, "nav-bar-main"], [1, "header-container"], ["routerLinkActive", "active-nav", "routerLink", "/home", 1, "home", 3, "routerLinkActiveOptions"], [1, "logo-container"], [1, "logo-img-container"], [1, "logo-title"], [1, "side-header"], [1, "nav-menu"], [4, "ngIf"], [1, "dropdown"], [1, "user", 3, "click"], ["src", "../../../assets/img/download.png", 1, "header-img"], ["class", "header-img", "src", "../../../assets/img/user.jpg", 4, "ngIf"], [1, "dropdownContent"], ["class", "hello-user", 4, "ngIf"], [3, "click", 4, "ngIf"], ["src", "../../../assets/img/user.jpg", 1, "header-img"], [1, "hello-user"], [3, "click"], ["routerLink", "/login", "routerLinkActive", "active-nav", 3, "routerLinkActiveOptions"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppHeaderComponent_span_11_Template, 4, 3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_span_click_14_listener() { return ctx.toggleShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppHeaderComponent_img_16_Template, 1, 0, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppHeaderComponent_img_18_Template, 1, 0, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppHeaderComponent_div_22_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppHeaderComponent_hr_24_Template, 1, 0, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppHeaderComponent_span_26_Template, 3, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppHeaderComponent_span_28_Template, 3, 2, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, ctx.loggedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 15, ctx.loggedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 17, ctx.loggedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 19, ctx.loggedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 21, ctx.loggedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 23, ctx.loggedUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 25, ctx.loggedUser$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Lobster&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Hind+Siliguri&family=Lato&family=Mukta&family=Nunito+Sans:wght@200&family=Poppins:wght@200;400&display=swap\");\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.red-btn2[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 50px;\n}\n.nav-bar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  grid-column: 1/-1;\n  z-index: 6;\n  background-color: white;\n  display: grid;\n  grid-template-columns: 80px 1fr 80px;\n  grid-auto-flow: dense;\n  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);\n}\n.nav-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  color: black;\n}\n.nav-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.logo-title[_ngcontent-%COMP%] {\n  font-family: \"Lobster\", cursive;\n  font-size: 23px;\n  line-height: 5px;\n  color: #ff385c;\n  position: relative;\n  top: 12px;\n  padding: 10px;\n}\n.header-container[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  font-family: \"Mukta\", sans-serif;\n  font-size: 18px;\n  font-weight: 200;\n}\n.header-container[_ngcontent-%COMP%] {\n  height: 80px;\n  background-color: #fff !important;\n  z-index: 50;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.logIn-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 10px 5px 10px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: 3px solid black;\n}\n.header-img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 25px;\n  padding: 0 0 0 2px;\n}\n.logo-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  \n}\n.nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 8px;\n}\n.side-header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  gap: 8px;\n}\n\n.user[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n}\n.dropbtn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n}\n.dropdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 85px;\n  height: 42px;\n  border: 1px solid #ddd;\n  border-radius: 50px;\n  justify-items: center;\n}\n.show[_ngcontent-%COMP%] {\n  display: none;\n}\n.dropdownContent[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  min-width: 65px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.hello-user[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: #d4cdcd;\n  color: gray;\n}\n.dropdownContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  width: 120px;\n}\n.dropdownContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  background: none;\n  outline: none;\n  border-radius: 30px;\n  border: 1px solid #ddd;\n  display: flex;\n  justify-items: center;\n  justify-content: center;\n  justify-self: center;\n  justify-content: space-between;\n  width: 344px;\n  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);\n  transition: 0.8s;\n}\n.search-btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  position: relative;\n  top: 15px;\n  font-weight: 400;\n  font-size: 18px;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.8s;\n}\n.filter-wrraper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-inline-start: 8px;\n  margin-inline-end: 8px;\n}\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  border-radius: 50px;\n  background-color: #fff;\n  height: 40px;\n  padding: 20px 0;\n}\n.filter[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]    >  {\n  width: 250px;\n}\n.fixing-filter[_ngcontent-%COMP%] {\n  margin-left: 22%;\n  border: 1px solid #bbb1b1;\n}\n.showNavOnScroll[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n}\n.user-status-log[_ngcontent-%COMP%] {\n  width: 322px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHUSw0RUFBQTtBQUNBLG1LQUFBO0FBQ1I7RUFDRSxhQUFBO0FBckdGO0FBdUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBcEdGO0FBc0dBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUFuR0o7QUFxR0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFsR0Y7QUFvR0E7RUFDRSx1Q0FBQTtVQUFBLCtCQUFBO0FBakdGO0FBbUdBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFBbUIsU0FBQTtFQUNuQixhQUFBO0FBL0ZGO0FBb0dBO0VBQ0ksY0FBQTtBQWpHSjtBQXFHQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFsR0Y7QUFvR0E7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7RUFLQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBRUEscUJBQUE7QUF0R0Y7QUF3R0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFyR0Y7QUF1R0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBcEdGO0FBeUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDRixtQkFBQTtBQXRHRjtBQXlHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNNLDhCQUFBO0VBQ0EsUUFBQTtBQXRHUjtBQXdHQTtFQUNFLGFBQUE7RUFDVSxZQUFBO0VBQ1IsbUJBQUE7RUFDQSxRQUFBO0FBckdKO0FBdUdBO0tBQUE7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFwR0Y7QUF3R0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFyR0Y7QUF1R0E7RUFDRSxlQUFBO0FBcEdGO0FBc0dBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBbkdGO0FBcUdBO0VBQ0csYUFBQTtBQWxHSDtBQXFHQTtFQUVFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FBbkdGO0FBcUdBO0VBQ0UsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7QUFuR0Y7QUFxR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBbEdGO0FBcUdBO0VBQ0Usc0JBQUE7QUFsR0Y7QUFxR0E7O0dBQUE7QUFHQTtFQUVJLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQU9BLGdCQUFBO0FBMUdKO0FBb0dJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBbEdOO0FBc0dBO0VBQ0UsMENBQUE7RUFDQSxnQkFBQTtBQW5HRjtBQXFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBbEdGO0FBcUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQTtjQUFBO0VBRUEsbUJBQUE7RUFFQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FBcEdGO0FBdUdBO0VBQ0UsWUFBQTtBQXBHRjtBQXNHQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7QUFuR0Y7QUF1R0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQXBHSjtBQXVHQTtFQUNFLFlBQUE7QUFwR0YiLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5uYXYtY29udGFpbmVyIHtcbi8vICAgaGVpZ2h0OiA2MHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcbi8vICAgei1pbmRleDogNTA7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuLy8gICBhIHtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcbi8vICAgICBmb250LXNpemU6IDEuM3JlbTtcblxuLy8gICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuLy8gICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgLm5hdi10eHQge1xuLy8gICAgIGZvbnQtc2l6ZTogMXJlbTtcbi8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgfVxuXG4vLyAgIC5hY3RpdmUtbmF2IHtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgY3Vyc29yOiBhdXRvO1xuLy8gICB9XG5cbi8vICAgaW1nIHtcbi8vICAgICBtYXgtd2lkdGg6IDM1cHg7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG4vLyB9XG5cblxuXG4vLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGluZCtTaWxpZ3VyaSZmYW1pbHk9TGF0byZmYW1pbHk9TXVrdGEmZmFtaWx5PU51bml0bytTYW5zOndnaHRAMjAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzQwMCZkaXNwbGF5PXN3YXAnKTtcblxuLy8gLmxvZ0luLWRyb3Bkb3duIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMTBweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuLy8gfVxuXG5cbi8vIC5kcm9wZG93biBkaXZ7XG4vLyAgIG1hcmdpbi10b3A6NTVweDtcbi8vIH1cbi8vIC5kcm9wZG93biB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICB3aWR0aDogODVweDtcbi8vICAgaGVpZ2h0OiA0MnB4O1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuLy8gICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIFxuLy8gfVxuLy8gLnNob3d7XG4vLyAgICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyAuZHJvcGRvd25Db250ZW50IHtcbiBcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuLy8gICBtaW4td2lkdGg6IDY1cHg7XG4vLyAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuLy8gICB6LWluZGV4OiAxO1xuLy8gfVxuLy8gLmhlbGxvLXVzZXJ7XG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgIC8vIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjA1LCAyMDUpO1xuLy8gICBjb2xvcjogZ3JheTtcbi8vIH1cbi8vIC5kcm9wZG93bkNvbnRlbnQgYSB7XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vICAgcGFkZGluZzogMTJweCAxNnB4O1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICB3aWR0aDogMTIwcHg7XG4vLyB9XG5cbi8vIC5kcm9wZG93bkNvbnRlbnQgYTpob3ZlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4vLyB9XG4vLyAudXNlcntcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7ICovXG4vLyB9XG4vLyAuZHJvcGRvd24gcHtcbi8vICAgbWFyZ2luLXRvcDo3cHg7XG4vLyB9XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IaW5kK1NpbGlndXJpJmZhbWlseT1MYXRvJmZhbWlseT1NdWt0YSZmYW1pbHk9TnVuaXRvK1NhbnM6d2dodEAyMDAmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xuLmxvZ28tY29udGFpbmVye1xuICBkaXNwbGF5OmZsZXg7XG59XG4ucmVkLWJ0bjJ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG59XG4ubmF2LWJhci1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIHotaW5kZXg6IDY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMWZyIDgwcHg7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYmEoMCwwLDAsLjEpO1xufVxuLm5hdi1tZW51IHNwYW57XG4gIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm5hdi1tZW51IHNwYW46aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG4ubG9nby10aXRsZXtcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBsaW5lLWhlaWdodDogNXB4O1xuICBjb2xvcjogcmdiKDI1NSwgNTYsIDkyKTtcbiAgcG9zaXRpb246cmVsYXRpdmU7IHRvcDoxMnB4O1xuICBwYWRkaW5nOjEwcHg7XG59XG4ubmF2LWJhci1tYWlue1xuICAgIFxufVxuLmhlYWRlci1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIC8vIGJvcmRlcjoxcHggc29saWQ7XG59XG5cbi5uYXYtbWVudSB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuLy8gICBwb3NpdGlvbjogc3RpY2t5O1xuLy8gICB0b3A6IDA7XG4gIFxuICAvLyBib3gtc2hhZG93OiAwIDEwcHggMTBweCAxMHB4IHJnYmEoMzMgLDM1LCAzOCwgLjUpO1xuICB6LWluZGV4OiA1MDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4ubG9nSW4tZHJvcGRvd24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG59XG4uaGVhZGVyLWltZyB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDJweDtcbn1cblxuXG5cbi5sb2dvLWltZ3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIC8qIGhlaWdodDogMjAwcHg7ICovXG4gIFxufVxuLm5hdi1tZW51e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDogOHB4O1xufVxuLnNpZGUtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG4vKiAuZHJvcC1idG57XG4gIH0gKi9cbi51c2Vye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kcm9wZG93biBpbWd7XG4gIG1hcmdpbi10b3A6N3B4O1xufVxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4NXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5zaG93e1xuICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duQ29udGVudCB7XG4gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgbWluLXdpZHRoOiA2NXB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbn1cbi5oZWxsby11c2Vye1xuICBmb250LXdlaWdodDogNjAwO1xuICAvLyBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwNSwgMjA1KTtcbiAgY29sb3I6IGdyYXk7XG59XG4uZHJvcGRvd25Db250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uZHJvcGRvd25Db250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiAuZmlsdGVyU2hvd3tcbiBoZWlnaHQ6IDE3MHB4O1xufSAqL1xuLnNlYXJjaC1idG57XG4gIC8vIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6NDBweDtcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDM0NHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCAwIHJnYmEoMCwwLDAsLjEpO1xuICAgIGRpdjpmaXJzdC1jaGlsZHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDoxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgdHJhbnNpdGlvbjogMC44cztcbn1cbi5zZWFyY2gtYnRuOmhvdmVye1xuICBib3gtc2hhZG93OiAwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4yKTtcbiAgdHJhbnNpdGlvbjogMC44cztcbn1cbi5maWx0ZXItd3JyYXBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogOHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogOHB4O1xufVxuXG4uZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA4MHB4OyAqL1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAvLyBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDBweDtcbi8vICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAxMCUpLCAwIDRweCA2cHggLTJweCByZ2IoMCAwIDAgLyA1JSk7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbi5maWx0ZXIgKiA+IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLmZpeGluZy1maWx0ZXJ7XG4gIG1hcmdpbi1sZWZ0OiAyMiU7XG4gIGJvcmRlcjoxcHggc29saWQgcmdiKDE4NywgMTc3LCAxNzcpXG5cbn1cblxuLnNob3dOYXZPblNjcm9sbHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgXG59XG4udXNlci1zdGF0dXMtbG9ne1xuICB3aWR0aDogMzIycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './app-header.component.html',
                styleUrls: ['./app-header.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


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