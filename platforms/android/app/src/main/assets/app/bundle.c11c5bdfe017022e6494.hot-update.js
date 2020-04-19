webpackHotUpdate("bundle",{

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./core/data.service.ts");
/* harmony import */ var tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/gestures/gestures.js");
/* harmony import */ var tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./nativescript-swipe-layout/swipe-layout.enums.js");
/* harmony import */ var _nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/animations/fesm5/animations.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_dataService, _cd) {
        this._dataService = _dataService;
        this._cd = _cd;
        this.isLoaded = false;
        this.go = false;
        this._swipeLayouts = [];
        this.swipeLayoutAnimated = _nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_STATE"].ON_EVENTS;
        this.gestureMode = _nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3__["GESTURE_MODE"].DRAG;
    }
    HomeComponent.prototype.ngAfterContentInit = function () {
        /*         if (isAndroid) {
                    setTimeout(() => {
                        this.isLoaded = true;
                    }, 2200);
                } else {
                    setTimeout(() => {
                        this.isLoaded = true;
                    }, 500);
                } */
    };
    HomeComponent.prototype.ngOnInit = function () {
        //  this.initCards();
    };
    HomeComponent.prototype.initCards = function () {
        var _this = this;
        setTimeout(function () {
            _this.cards = _this._dataService.getUnseenItems().reverse() || [];
            _this.go = true;
            _this.isLoaded = true;
        }, 100);
    };
    HomeComponent.prototype.swipeLayoutLoaded = function (event, btnLike, btnIgnore, badgeLike, badgeIgnore) {
        var _this = this;
        var swipeLayout = event.object;
        this._swipeLayouts.push(swipeLayout);
        swipeLayout.on(tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pan, function (args) {
            var vectorLength = (Math.sqrt(Math.pow(args.deltaX, 2) + Math.pow(args.deltaY, 2)));
            btnLike.opacity = _this.mapVectorLengthToOpacity(vectorLength);
            btnIgnore.opacity = _this.mapVectorLengthToOpacity(vectorLength);
            badgeLike.opacity = _this.badgeOpacity(args.deltaX);
            badgeIgnore.opacity = _this.badgeOpacity(-args.deltaX);
        });
        swipeLayout.on(tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].touch, function (args) {
            if (args.action === "up") {
                btnLike.animate({ opacity: 1, duration: 500 });
                btnIgnore.animate({ opacity: 1, duration: 500 });
                badgeLike.animate({ opacity: 0, duration: 500 });
                badgeIgnore.animate({ opacity: 0, duration: 500 });
            }
        });
    };
    HomeComponent.prototype.onContainerLoaded = function (args) {
        this._currentSwipeLayout = this._swipeLayouts[0];
    };
    HomeComponent.prototype.swipeLeftCallback = function (swipeLeftEvent, card) {
        card.liked = false;
        this.next(card);
    };
    HomeComponent.prototype.swipeRightCallback = function (swipeRightEvent, card) {
        card.liked = true;
        this.next(card);
    };
    HomeComponent.prototype.decline = function (card) {
        var _this = this;
        card.liked = false;
        this._currentSwipeLayout.animateSwipeRight().then(function () {
            _this.next(card);
        });
    };
    HomeComponent.prototype.like = function (card) {
        var _this = this;
        card.liked = true;
        this._currentSwipeLayout.animateSwipeLeft().then(function () {
            _this.next(card);
        });
    };
    HomeComponent.prototype.trackingFunction = function (index, item) {
        return item.id;
    };
    HomeComponent.prototype.resetCards = function () {
        this._dataService.resetItems();
        this.initCards();
        console.log(this.cards.length);
    };
    HomeComponent.prototype.mapVectorLengthToOpacity = function (l) {
        return (l - 0) * (0 - 1) / (80 - 0) + 1;
    };
    HomeComponent.prototype.badgeOpacity = function (deltaX) {
        return (deltaX - 20) * (1 - 0) / (120 - 20) + 0;
    };
    HomeComponent.prototype.next = function (card) {
        card.viewed = true;
        this._swipeLayouts.shift();
        this.cards.shift();
        this._currentSwipeLayout = this._swipeLayouts[0];
        this._dataService.updateItem(card);
        this._cd.detectChanges();
        this._dataService.getTools();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":leave", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUN6QjtBQUMwQztBQUdSO0FBQ3RCO0FBa0IxRTtJQVVJLHVCQUFvQixZQUF5QixFQUFVLEdBQXNCO1FBQXpELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFQN0UsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixPQUFFLEdBQVksS0FBSyxDQUFDO1FBT2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyw2RkFBZSxDQUFDLFNBQVMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLDBGQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDSjs7Ozs7Ozs7b0JBUVk7SUFFUixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNHLHFCQUFxQjtJQUN4QixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUFBLGlCQU1DO1FBTEcsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNoRSxLQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNmLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVc7UUFBbkUsaUJBa0JDO1FBakJHLElBQU0sV0FBVyxHQUE2QixLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLFdBQVcsQ0FBQyxFQUFFLENBQUMseUVBQVksQ0FBQyxHQUFHLEVBQUUsVUFBQyxJQUF5QjtZQUN2RCxJQUFNLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEYsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUQsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDaEUsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxXQUFXLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxXQUFXLENBQUMsRUFBRSxDQUFDLHlFQUFZLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBMkI7WUFDM0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDdEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDakQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDdEQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsSUFBSTtRQUNsQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLGNBQWtDLEVBQUUsSUFBZTtRQUNqRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsZUFBb0MsRUFBRSxJQUFlO1FBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxJQUFlO1FBQXZCLGlCQUtDO1FBSkcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLElBQWU7UUFBcEIsaUJBS0M7UUFKRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0MsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyxnREFBd0IsR0FBaEMsVUFBaUMsQ0FBUztRQUN0QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sb0NBQVksR0FBcEIsVUFBcUIsTUFBYztRQUMvQixPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sNEJBQUksR0FBWixVQUFhLElBQWU7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDOztnQkF6R2lDLDhEQUFXO2dCQUFlLCtEQUFpQjs7SUFWcEUsYUFBYTtRQWhCekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBRWhCLG9GQUFvQztZQUNwQyxVQUFVLEVBQUU7Z0JBQ1IsbUVBQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ1osc0VBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLGlFQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ3JCLG1FQUFPLENBQUMsR0FBRyxFQUFFLGlFQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDdEMsQ0FBQztvQkFDRixzRUFBVSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsbUVBQU8sQ0FBQyxHQUFHLEVBQUUsaUVBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUN0QyxDQUFDO2lCQUNMLENBQUM7YUFDTDtTQUNKLENBQUM7eUNBV29DLDhEQUFXLEVBQWUsK0RBQWlCO09BVnBFLGFBQWEsQ0FvSHpCO0lBQUQsb0JBQUM7Q0FBQTtBQXBIeUIiLCJmaWxlIjoiYnVuZGxlLmMxMWM1YmRmZTAxNzAyMmU2NDk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgSURhdGFJdGVtIH0gZnJvbSBcIi4uL2NvcmUvZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgUGFuR2VzdHVyZUV2ZW50RGF0YSwgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU3dpcGVMYXlvdXQsIFN3aXBlTGVmdEV2ZW50RGF0YSwgU3dpcGVSaWdodEV2ZW50RGF0YSB9IGZyb20gXCIuLi9uYXRpdmVzY3JpcHQtc3dpcGUtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEFOSU1BVElPTl9TVEFURSwgR0VTVFVSRV9NT0RFIH0gZnJvbSBcIi4uL25hdGl2ZXNjcmlwdC1zd2lwZS1sYXlvdXQvc3dpcGUtbGF5b3V0LmVudW1zXCI7XHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoXCJmYWRlXCIsIFtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbihcIjplbnRlclwiLCBbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbihcIjpsZWF2ZVwiLCBbXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIGNhcmRzOiBBcnJheTxJRGF0YUl0ZW0+O1xyXG4gICAgZ2VzdHVyZU1vZGU6IEdFU1RVUkVfTU9ERTtcclxuICAgIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBnbzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN3aXBlTGF5b3V0QW5pbWF0ZWQ6IEFOSU1BVElPTl9TVEFURTtcclxuICAgIHByaXZhdGUgX3N3aXBlTGF5b3V0czogQXJyYXk8U3dpcGVMYXlvdXQ+O1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudFN3aXBlTGF5b3V0OiBTd2lwZUxheW91dDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHRoaXMuX3N3aXBlTGF5b3V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3dpcGVMYXlvdXRBbmltYXRlZCA9IEFOSU1BVElPTl9TVEFURS5PTl9FVkVOVFM7XHJcbiAgICAgICAgdGhpcy5nZXN0dXJlTW9kZSA9IEdFU1RVUkVfTU9ERS5EUkFHO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuLyogICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDIyMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfSAqL1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgIC8vICB0aGlzLmluaXRDYXJkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDYXJkcygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldFVuc2Vlbkl0ZW1zKCkucmV2ZXJzZSgpIHx8IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmdvID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2lwZUxheW91dExvYWRlZChldmVudCwgYnRuTGlrZSwgYnRuSWdub3JlLCBiYWRnZUxpa2UsIGJhZGdlSWdub3JlKSB7XHJcbiAgICAgICAgY29uc3Qgc3dpcGVMYXlvdXQ6IFN3aXBlTGF5b3V0ID0gPFN3aXBlTGF5b3V0PmV2ZW50Lm9iamVjdDtcclxuICAgICAgICB0aGlzLl9zd2lwZUxheW91dHMucHVzaChzd2lwZUxheW91dCk7XHJcbiAgICAgICAgc3dpcGVMYXlvdXQub24oR2VzdHVyZVR5cGVzLnBhbiwgKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmVjdG9yTGVuZ3RoID0gKE1hdGguc3FydChNYXRoLnBvdyhhcmdzLmRlbHRhWCwgMikgKyBNYXRoLnBvdyhhcmdzLmRlbHRhWSwgMikpKTtcclxuICAgICAgICAgICAgYnRuTGlrZS5vcGFjaXR5ID0gdGhpcy5tYXBWZWN0b3JMZW5ndGhUb09wYWNpdHkodmVjdG9yTGVuZ3RoKTtcclxuICAgICAgICAgICAgYnRuSWdub3JlLm9wYWNpdHkgPSB0aGlzLm1hcFZlY3Rvckxlbmd0aFRvT3BhY2l0eSh2ZWN0b3JMZW5ndGgpO1xyXG4gICAgICAgICAgICBiYWRnZUxpa2Uub3BhY2l0eSA9IHRoaXMuYmFkZ2VPcGFjaXR5KGFyZ3MuZGVsdGFYKTtcclxuICAgICAgICAgICAgYmFkZ2VJZ25vcmUub3BhY2l0eSA9IHRoaXMuYmFkZ2VPcGFjaXR5KC1hcmdzLmRlbHRhWCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3dpcGVMYXlvdXQub24oR2VzdHVyZVR5cGVzLnRvdWNoLCAoYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmFjdGlvbiA9PT0gXCJ1cFwiKSB7XHJcbiAgICAgICAgICAgICAgICBidG5MaWtlLmFuaW1hdGUoeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogNTAwIH0pO1xyXG4gICAgICAgICAgICAgICAgYnRuSWdub3JlLmFuaW1hdGUoeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogNTAwIH0pO1xyXG4gICAgICAgICAgICAgICAgYmFkZ2VMaWtlLmFuaW1hdGUoeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogNTAwIH0pO1xyXG4gICAgICAgICAgICAgICAgYmFkZ2VJZ25vcmUuYW5pbWF0ZSh7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiA1MDAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnRhaW5lckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN3aXBlTGF5b3V0ID0gdGhpcy5fc3dpcGVMYXlvdXRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXBlTGVmdENhbGxiYWNrKHN3aXBlTGVmdEV2ZW50OiBTd2lwZUxlZnRFdmVudERhdGEsIGNhcmQ6IElEYXRhSXRlbSkge1xyXG4gICAgICAgIGNhcmQubGlrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5leHQoY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpcGVSaWdodENhbGxiYWNrKHN3aXBlUmlnaHRFdmVudDogU3dpcGVSaWdodEV2ZW50RGF0YSwgY2FyZDogSURhdGFJdGVtKSB7XHJcbiAgICAgICAgY2FyZC5saWtlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uZXh0KGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY2xpbmUoY2FyZDogSURhdGFJdGVtKSB7XHJcbiAgICAgICAgY2FyZC5saWtlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTd2lwZUxheW91dC5hbmltYXRlU3dpcGVSaWdodCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoY2FyZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlrZShjYXJkOiBJRGF0YUl0ZW0pIHtcclxuICAgICAgICBjYXJkLmxpa2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U3dpcGVMYXlvdXQuYW5pbWF0ZVN3aXBlTGVmdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoY2FyZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tpbmdGdW5jdGlvbihpbmRleCwgaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0Q2FyZHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UucmVzZXRJdGVtcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdENhcmRzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXJkcy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFwVmVjdG9yTGVuZ3RoVG9PcGFjaXR5KGw6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAobCAtIDApICogKDAgLSAxKSAvICg4MCAtIDApICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJhZGdlT3BhY2l0eShkZWx0YVg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAoZGVsdGFYIC0gMjApICogKDEgLSAwKSAvICgxMjAgLSAyMCkgKyAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dChjYXJkOiBJRGF0YUl0ZW0pIHtcclxuICAgICAgICBjYXJkLnZpZXdlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3dpcGVMYXlvdXRzLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5jYXJkcy5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTd2lwZUxheW91dCA9IHRoaXMuX3N3aXBlTGF5b3V0c1swXTtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS51cGRhdGVJdGVtKGNhcmQpO1xyXG4gICAgICAgIHRoaXMuX2NkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5nZXRUb29scygpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=