webpackHotUpdate("bundle",{

/***/ "./core/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__);




var DataService = /** @class */ (function () {
    function DataService() {
        this.apiUrl = "https://api3.skoerner.com/";
        this._items = new Array();
        this._tools = new Array();
        this.getQuestions();
        this.getTools();
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems());
        this._tools$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems1());
    }
    DataService.prototype.getQuestions = function () {
        var _this = this;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["getJSON"])(this.apiUrl + "questions").then(function (r) {
            _this.questionJson = r;
            var i;
            for (i = 0; i < _this.questionJson.length; i++) {
                var id = _this.questionJson[i].id;
                var text = _this.questionJson[i].text;
                _this._items.push({
                    id: id,
                    text: text,
                    viewed: false,
                    liked: false
                });
            }
            _this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_this.cloneItems());
        }, function (e) {
        });
    };
    DataService.prototype.getTools = function () {
        var _this = this;
        var send = null;
        if (this._items.length > 1) {
            send = JSON.stringify(this.getLikedItems());
        }
        else {
            Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["getJSON"])(this.apiUrl + "loadAll").then(function (r) {
                _this.toolsJson = r;
                var i;
                for (i = 0; i < _this.toolsJson.length; i++) {
                    _this._tools.push({
                        id: _this.toolsJson[i].id,
                        name: _this.toolsJson[i].name,
                        company: _this.toolsJson[i].company,
                        price: _this.toolsJson[i].price,
                        users: _this.toolsJson[i].users,
                        picture: _this.toolsJson[i].picture,
                        established: _this.toolsJson[i].established,
                        keywords: _this.toolsJson[i].keywords,
                        pro: _this.toolsJson[i].pro,
                        con: _this.toolsJson[i].con,
                        description: _this.toolsJson[i].description
                    });
                }
                _this._tools$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_this.cloneItems1());
            }, function (e) {
                console.log(e);
            });
            return;
        }
        console.log(send);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["request"])({
            url: this.apiUrl + "result",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: send
        }).then(function (response) {
            _this.toolsJson = response.content.toJSON();
            var i;
            for (i = 0; i < _this.toolsJson.length; i++) {
                _this._tools.push({
                    id: _this.toolsJson[i].id,
                    name: _this.toolsJson[i].name,
                    company: _this.toolsJson[i].company,
                    price: _this.toolsJson[i].price,
                    users: _this.toolsJson[i].users,
                    picture: _this.toolsJson[i].picture,
                    established: _this.toolsJson[i].established,
                    keywords: _this.toolsJson[i].keywords,
                    pro: _this.toolsJson[i].pro,
                    con: _this.toolsJson[i].con,
                    description: _this.toolsJson[i].description
                });
            }
            _this._tools$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_this.cloneItems1());
        }, function (e) {
            console.log(e);
        });
    };
    DataService.prototype.getItems = function () {
        return this._items$.getValue();
    };
    DataService.prototype.getItem = function (id) {
        return this._tools$.getValue().find(function (data) {
            return data.id == id;
        });
    };
    DataService.prototype.getIndex = function (item) {
        return this.getItems().findIndex(function (element) { return element.id === item.id; });
    };
    DataService.prototype.getUnseenItems$ = function () {
        return this._items$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return items.filter(function (item) { return !item.viewed; }); }));
    };
    DataService.prototype.getUnseenItems = function () {
        return this._items$.getValue().filter(function (item) { return !item.viewed; });
    };
    DataService.prototype.getLikedItems1$ = function () {
        // TODO: Auswahl des Tools aufgrund der gewählren Dateien
        return this._tools$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (tools) { return tools.filter(function (item) { return item; }); }));
    };
    DataService.prototype.getLikedItems1 = function () {
        return this._tools$.getValue().filter(function (item) { return item; });
    };
    DataService.prototype.getLikedItems$ = function () {
        // TODO: Auswahl des Tools aufgrund der gewählren Dateien
        return this._items$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return items.filter(function (item) { return item.liked === true; }); }));
    };
    DataService.prototype.getLikedItems = function () {
        var liked = this._items$.getValue().filter(function (item) { return item.viewed; });
        var go = new Array();
        for (var i in liked) {
            go.push({
                q_id: liked[i].id,
                response: liked[i].liked
            });
        }
        return go;
    };
    DataService.prototype.updateItem = function (item) {
        var items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    };
    DataService.prototype.dislike = function (item) {
        item.liked = false;
        var items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    };
    DataService.prototype.resetItems = function () {
        this._items$.next(this.cloneItems());
    };
    DataService.prototype.cloneItems1 = function () {
        return JSON.parse(JSON.stringify(this._tools));
    };
    DataService.prototype.cloneItems = function () {
        return JSON.parse(JSON.stringify(this._items));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNRO0FBQ047QUFDd0Q7QUF5QnJHO0lBa0lJO1FBaElBLFdBQU0sR0FBRyw0QkFBNEIsQ0FBQztRQVE5QixXQUFNLEdBQUcsSUFBSSxLQUFLLEVBRXpCLENBQUM7UUFJTSxXQUFNLEdBQUcsSUFBSSxLQUFLLEVBQ3pCLENBQUM7UUFtSEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0RBQWUsQ0FBbUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG9EQUFlLENBQW1CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFwSEQsa0NBQVksR0FBWjtRQUFBLGlCQXdCQztRQXRCRyxxRUFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTTtZQUMzQyxLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUV0QixJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFFckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1o7b0JBQ0ks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QUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsSUFBZTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8saUNBQVcsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ08sZ0NBQVUsR0FBbEI7UUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBdk5RLFdBQVc7UUFEdkIsZ0VBQVUsRUFBRTs7T0FDQSxXQUFXLENBd052QjtJQUFELGtCQUFDO0NBQUE7QUF4TnVCIiwiZmlsZSI6ImJ1bmRsZS4zNzE3ZGEzZWMzYTRhYzBmOTg1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFJdGVtIHtcclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICBpZDogYW55O1xyXG4gICAgbGlrZWQ/OiBib29sZWFuO1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB2aWV3ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvb2xzSXRlbSB7XHJcbiAgICBpZDogYW55O1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY29tcGFueT86IHN0cmluZztcclxuICAgIHByaWNlPzogc3RyaW5nO1xyXG4gICAgdXNlcnM/OiBhbnk7XHJcbiAgICBwaWN0dXJlPzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICBlc3RhYmxpc2hlZD86IGJvb2xlYW47XHJcbiAgICBrZXl3b3Jkcz86IG51bWJlcltdO1xyXG4gICAgcHJvPzogc3RyaW5nW107XHJcbiAgICBjb24/OiBzdHJpbmdbXTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkzLnNrb2VybmVyLmNvbS9cIjtcclxuICAgIHF1ZXN0aW9uSnNvbjogYW55O1xyXG4gICAgdG9vbHNKc29uOiBhbnk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfaXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj47XHJcbiAgICBwcml2YXRlIF9pdGVtcyA9IG5ldyBBcnJheTxJRGF0YUl0ZW0+KFxyXG5cclxuICAgICk7XHJcblxyXG5cclxuICAgIHByaXZhdGUgX3Rvb2xzJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PFRvb2xzSXRlbT4+O1xyXG4gICAgcHJpdmF0ZSBfdG9vbHMgPSBuZXcgQXJyYXk8VG9vbHNJdGVtPihcclxuICAgICk7XHJcblxyXG5cclxuICAgIGdldFF1ZXN0aW9ucygpIHtcclxuXHJcbiAgICAgICAgZ2V0SlNPTih0aGlzLmFwaVVybCArIFwicXVlc3Rpb25zXCIpLnRoZW4oKHI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uSnNvbiA9IHI7XHJcbiAgICBcclxuICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9uSnNvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5xdWVzdGlvbkpzb25baV0uaWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMucXVlc3Rpb25Kc29uW2ldLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj4odGhpcy5jbG9uZUl0ZW1zKCkpO1xyXG5cclxuICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFRvb2xzKCkge1xyXG5cclxuICAgICAgICBsZXQgc2VuZCA9IG51bGw7XHJcbiAgICAgICAgaWYodGhpcy5faXRlbXMubGVuZ3RoPjEpe1xyXG4gICAgICAgICAgIHNlbmQgPSAgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRMaWtlZEl0ZW1zKCkpO1xyXG4gICAgICB9IGVsc2V7XHJcblxyXG4gICAgICAgIGdldEpTT04odGhpcy5hcGlVcmwgKyBcImxvYWRBbGxcIikudGhlbigocjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNKc29uID0gcjtcclxuICAgIFxyXG4gICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudG9vbHNKc29uLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9vbHMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnRvb2xzSnNvbltpXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy50b29sc0pzb25baV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueTogdGhpcy50b29sc0pzb25baV0uY29tcGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHRoaXMudG9vbHNKc29uW2ldLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyczogdGhpcy50b29sc0pzb25baV0udXNlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmU6IHRoaXMudG9vbHNKc29uW2ldLnBpY3R1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFibGlzaGVkOiB0aGlzLnRvb2xzSnNvbltpXS5lc3RhYmxpc2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHM6IHRoaXMudG9vbHNKc29uW2ldLmtleXdvcmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm86IHRoaXMudG9vbHNKc29uW2ldLnBybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uOiB0aGlzLnRvb2xzSnNvbltpXS5jb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnRvb2xzSnNvbltpXS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl90b29scyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PFRvb2xzSXRlbT4+KHRoaXMuY2xvbmVJdGVtczEoKSk7XHJcblxyXG4gICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coc2VuZCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMuYXBpVXJsK1wicmVzdWx0XCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgY29udGVudDogc2VuZFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sc0pzb24gPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRvb2xzSnNvbi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3Rvb2xzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy50b29sc0pzb25baV0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudG9vbHNKc29uW2ldLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IHRoaXMudG9vbHNKc29uW2ldLmNvbXBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiB0aGlzLnRvb2xzSnNvbltpXS5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHRoaXMudG9vbHNKc29uW2ldLnVzZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlOiB0aGlzLnRvb2xzSnNvbltpXS5waWN0dXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlc3RhYmxpc2hlZDogdGhpcy50b29sc0pzb25baV0uZXN0YWJsaXNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmRzOiB0aGlzLnRvb2xzSnNvbltpXS5rZXl3b3JkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvOiB0aGlzLnRvb2xzSnNvbltpXS5wcm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbjogdGhpcy50b29sc0pzb25baV0uY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy50b29sc0pzb25baV0uZGVzY3JpcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8VG9vbHNJdGVtPj4odGhpcy5jbG9uZUl0ZW1zMSgpKTtcclxuXHJcblxyXG4gICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmdldFRvb2xzKCk7XHJcbiAgICAgICAgdGhpcy5faXRlbXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+Pih0aGlzLmNsb25lSXRlbXMoKSk7XHJcbiAgICAgICAgdGhpcy5fdG9vbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxUb29sc0l0ZW0+Pih0aGlzLmNsb25lSXRlbXMxKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBUb29sc0l0ZW0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuZ2V0VmFsdWUoKS5maW5kKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmlkID09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluZGV4KGl0ZW06IElEYXRhSXRlbSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVuc2Vlbkl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgIC5waXBlKG1hcCgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IGl0ZW1zLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VW5zZWVuSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMxJCgpOiBPYnNlcnZhYmxlPEFycmF5PFRvb2xzSXRlbT4+IHtcclxuICAgICAgICAvLyBUT0RPOiBBdXN3YWhsIGRlcyBUb29scyBhdWZncnVuZCBkZXIgZ2V3w6RobHJlbiBEYXRlaWVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xzJC5hc09ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAucGlwZShtYXAoKHRvb2xzOiBBcnJheTxUb29sc0l0ZW0+KSA9PiB0b29scy5maWx0ZXIoKGl0ZW06IFRvb2xzSXRlbSkgPT4gaXRlbSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWtlZEl0ZW1zMSgpOiBBcnJheTxUb29sc0l0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBUb29sc0l0ZW0pID0+IGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xyXG4gICAgICAgIC8vIFRPRE86IEF1c3dhaGwgZGVzIFRvb2xzIGF1ZmdydW5kIGRlciBnZXfDpGhscmVuIERhdGVpZW5cclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgIC5waXBlKG1hcCgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IGl0ZW1zLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkID09PSB0cnVlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgbGV0IGxpa2VkID0gIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLnZpZXdlZCk7XHJcbiAgICAgICAgbGV0IGdvID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGxpa2VkKSB7XHJcbiAgICAgICAgICAgIGdvLnB1c2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcV9pZDogbGlrZWRbaV0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IGxpa2VkW2ldLmxpa2VkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdvO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUl0ZW0oaXRlbTogSURhdGFJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XHJcbiAgICAgICAgaXRlbXNbdGhpcy5nZXRJbmRleChpdGVtKV0gPSBpdGVtO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNsaWtlKGl0ZW06IElEYXRhSXRlbSk6IHZvaWQge1xyXG4gICAgICAgIGl0ZW0ubGlrZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcclxuICAgICAgICBpdGVtc1t0aGlzLmdldEluZGV4KGl0ZW0pXSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SXRlbXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQodGhpcy5jbG9uZUl0ZW1zKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvbmVJdGVtczEoKTogQXJyYXk8VG9vbHNJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fdG9vbHMpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2xvbmVJdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5faXRlbXMpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==