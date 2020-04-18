webpackHotUpdate("bundle",{

/***/ "./favorites-list/favorites-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesListComponent", function() { return FavoritesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./core/data.service.ts");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__);






var FavoritesListComponent = /** @class */ (function () {
    function FavoritesListComponent(_dataService, routerExtensions, _activatedRoute) {
        var _this = this;
        this._dataService = _dataService;
        this.routerExtensions = routerExtensions;
        this._activatedRoute = _activatedRoute;
        this.filteredItems = [];
        setTimeout(function () {
            _this._itemsSubscription = _this._dataService.getLikedItems1$()
                .subscribe(function (items) {
                _this.setItems(items);
            });
        }, 2000);
    }
    FavoritesListComponent.prototype.reloadTools = function () {
        var _this = this;
        setTimeout(function () {
            _this._itemsSubscription = _this._dataService.getLikedItems1$()
                .subscribe(function (items) {
                _this.setItems(items);
            });
        }, 1000);
    };
    Object.defineProperty(FavoritesListComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            console.log(items);
        },
        enumerable: true,
        configurable: true
    });
    FavoritesListComponent.prototype.setItems = function (items) {
        this.items = items;
        this.filteredItems = !!this._searchPhrase ? this.filterItems(items, this._searchPhrase) : this.items;
    };
    FavoritesListComponent.prototype.ngOnDestroy = function () {
        this._itemsSubscription.unsubscribe();
    };
    FavoritesListComponent.prototype.onSearch = function (text) {
        this._searchPhrase = text;
        this.filteredItems = this.filterItems(this.items, text);
    };
    FavoritesListComponent.prototype.onClear = function () {
        this._searchPhrase = "";
        this.filteredItems = this.items;
    };
    FavoritesListComponent.prototype.onDislike = function (args) {
        this._dataService.dislike(args.item);
    };
    FavoritesListComponent.prototype.dismissKeyboard = function (args) {
        if (args.action == "down") {
            if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__["isAndroid"]) {
                tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__["ad"].dismissSoftInput();
            }
            else {
                // ios.getter(UIApplication, UIApplication.sharedApplication)
                //     .keyWindow
                //     .endEditing(true);
            }
        }
    };
    FavoritesListComponent.prototype.filterItems = function (items, text) {
        return items.filter(function (data) {
            return data.name.includes(text) || data.company.includes(text);
        });
    };
    FavoritesListComponent.prototype.onTap = function (id) {
        var navigationExtras = {
            queryParams: {
                "id": id
            },
            relativeTo: this._activatedRoute
        };
        this.routerExtensions.navigate(['/', { outlets: { favoritesTab: ['item'] } }], navigationExtras);
    };
    FavoritesListComponent.ctorParameters = function () { return [
        { type: _core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    FavoritesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Search",
            template: __importDefault(__webpack_require__("./favorites-list/favorites-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FavoritesListComponent);
    return FavoritesListComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mYXZvcml0ZXMtbGlzdC9mYXZvcml0ZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUNDO0FBQ047QUFDVztBQUVaO0FBQ0Q7QUFVdEQ7SUFPSSxnQ0FBb0IsWUFBeUIsRUFDakMsZ0JBQWtDLEVBQ2xDLGVBQStCO1FBRjNDLGlCQVFDO1FBUm1CLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBUDNDLGtCQUFhLEdBQXFCLEVBQUUsQ0FBQztRQVE3QixVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUU7aUJBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQXVCO2dCQUMvQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCw0Q0FBVyxHQUFYO1FBQUEsaUJBUUM7UUFORyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUU7aUJBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQXVCO2dCQUMvQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFFRCxzQkFBSSx5Q0FBSzthQUtUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFQRCxVQUFVLEtBQXVCO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFNRCx5Q0FBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6RyxDQUFDO0lBR0QsNENBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQseUNBQVEsR0FBUixVQUFTLElBQVk7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELHdDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELDBDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLElBQTJCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDdkIsSUFBSSxtRUFBUyxFQUFFO2dCQUNYLCtEQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6QjtpQkFBTTtnQkFDSCw2REFBNkQ7Z0JBQzdELGlCQUFpQjtnQkFDakIseUJBQXlCO2FBQzVCO1NBQ0o7SUFDTCxDQUFDO0lBRU8sNENBQVcsR0FBbkIsVUFBb0IsS0FBdUIsRUFBRSxJQUFZO1FBQ3JELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7WUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxzQ0FBSyxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLEVBQUU7YUFDWDtZQUNELFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUNuQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDckcsQ0FBQzs7Z0JBaEZpQyw4REFBVztnQkFDZixxRUFBZ0I7Z0JBQ2pCLDhEQUFjOztJQVRsQyxzQkFBc0I7UUFMbEMsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBRWxCLHdHQUE4QztTQUNqRCxDQUFDO3lDQVFvQyw4REFBVztZQUNmLHFFQUFnQjtZQUNqQiw4REFBYztPQVRsQyxzQkFBc0IsQ0F3RmxDO0lBQUQsNkJBQUM7Q0FBQTtBQXhGa0MiLCJmaWxlIjoiYnVuZGxlLmZiMTBmNDJkZDQ1ZmRkMGM2MWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIFRvb2xzSXRlbSB9IGZyb20gXCIuLi9jb3JlL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgeyBhZCwgaW9zIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuXHJcblxyXG5kZWNsYXJlIHZhciBVSUFwcGxpY2F0aW9uOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNlYXJjaFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmF2b3JpdGVzLWxpc3QuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgZmlsdGVyZWRJdGVtczogQXJyYXk8VG9vbHNJdGVtPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfaXRlbXNTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9pdGVtczogQXJyYXk8VG9vbHNJdGVtPjtcclxuICAgIHByaXZhdGUgX3NlYXJjaFBocmFzZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24gPSB0aGlzLl9kYXRhU2VydmljZS5nZXRMaWtlZEl0ZW1zMSQoKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PFRvb2xzSXRlbT4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWxvYWRUb29scygpe1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24gPSB0aGlzLl9kYXRhU2VydmljZS5nZXRMaWtlZEl0ZW1zMSQoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8VG9vbHNJdGVtPikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXRlbXMoaXRlbXM6IEFycmF5PFRvb2xzSXRlbT4pIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXRlbXMoKTogQXJyYXk8VG9vbHNJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEl0ZW1zKGl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9ICEhdGhpcy5fc2VhcmNoUGhyYXNlID8gdGhpcy5maWx0ZXJJdGVtcyhpdGVtcywgdGhpcy5fc2VhcmNoUGhyYXNlKSA6IHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2godGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoUGhyYXNlID0gdGV4dDtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlckl0ZW1zKHRoaXMuaXRlbXMsIHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoUGhyYXNlID0gXCJcIjtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzbGlrZShhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuZGlzbGlrZShhcmdzLml0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NLZXlib2FyZChhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpIHtcclxuICAgICAgICBpZiAoYXJncy5hY3Rpb24gPT0gXCJkb3duXCIpIHtcclxuICAgICAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICAgICAgICAgICAgYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gaW9zLmdldHRlcihVSUFwcGxpY2F0aW9uLCBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5rZXlXaW5kb3dcclxuICAgICAgICAgICAgICAgIC8vICAgICAuZW5kRWRpdGluZyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckl0ZW1zKGl0ZW1zOiBBcnJheTxUb29sc0l0ZW0+LCB0ZXh0OiBzdHJpbmcpOiBBcnJheTxUb29sc0l0ZW0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLm5hbWUuaW5jbHVkZXModGV4dCkgfHwgZGF0YS5jb21wYW55LmluY2x1ZGVzKHRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25UYXAoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBpZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLl9hY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnLycsIHsgb3V0bGV0czogeyBmYXZvcml0ZXNUYWI6IFsnaXRlbSddIH0gfV0sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=