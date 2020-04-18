webpackHotUpdate("bundle",{

/***/ "./components/list-item/list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout columns=\"*,auto\" class=\"p-8 m-b-8 m-x-8\" borderRadius=\"8\" backgroundColor=\"white\">\n    <GridLayout col=\"0\" columns=\"auto,*,auto\" rows=\"auto,auto,auto\" (tap)=\"emitTap()\">\n        <Image col=\"0\" rowSpan=\"3\" class=\"thumbnail m-r-12\" stretch=\"aspectFill\" [src]=\"item.image\"></Image>\n        <Label col=\"1\" row=\"0\" class=\"h3 title m-t-4\" marginBottom=\"0\" [text]=\"item.title\"></Label>\n        <Label col=\"1\" row=\"1\" class=\"h5 caption\" [text]=\"item.author\"></Label>\n        <Label col=\"1\" row=\"2\" class=\"h5 date\" marginBottom=\"4\" verticalAlignment=\"bottom\">\n            <FormattedString>\n                <Span class=\"fa\" text=\"&#xf155; \"></Span>\n                <Span [text]=\"item.date\"></Span>\n            </FormattedString>\n        </Label>\n    </GridLayout>\n    <StackLayout col=\"1\" verticalAlignment=\"top\" (tap)=\"emitDislike(item)\">\n        <Image class=\"favorite-star\" src=\"~/images/star.png\"></Image>\n    </StackLayout>\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrdEJBQWt0QixzVSIsImZpbGUiOiJidW5kbGUuMTdiYzRkZGViN2Y2OTliMWMyYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLGF1dG9cXFwiIGNsYXNzPVxcXCJwLTggbS1iLTggbS14LThcXFwiIGJvcmRlclJhZGl1cz1cXFwiOFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJ3aGl0ZVxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IGNvbD1cXFwiMFxcXCIgY29sdW1ucz1cXFwiYXV0bywqLGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sYXV0byxhdXRvXFxcIiAodGFwKT1cXFwiZW1pdFRhcCgpXFxcIj5cXG4gICAgICAgIDxJbWFnZSBjb2w9XFxcIjBcXFwiIHJvd1NwYW49XFxcIjNcXFwiIGNsYXNzPVxcXCJ0aHVtYm5haWwgbS1yLTEyXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiBbc3JjXT1cXFwiaXRlbS5pbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImgzIHRpdGxlIG0tdC00XFxcIiBtYXJnaW5Cb3R0b209XFxcIjBcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImg1IGNhcHRpb25cXFwiIFt0ZXh0XT1cXFwiaXRlbS5hdXRob3JcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiByb3c9XFxcIjJcXFwiIGNsYXNzPVxcXCJoNSBkYXRlXFxcIiBtYXJnaW5Cb3R0b209XFxcIjRcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiPlxcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgIDxTcGFuIGNsYXNzPVxcXCJmYVxcXCIgdGV4dD1cXFwiJiN4ZjE1NTsgXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwiaXRlbS5kYXRlXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICA8L0xhYmVsPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjFcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiICh0YXApPVxcXCJlbWl0RGlzbGlrZShpdGVtKVxcXCI+XFxuICAgICAgICA8SW1hZ2UgY2xhc3M9XFxcImZhdm9yaXRlLXN0YXJcXFwiIHNyYz1cXFwifi9pbWFnZXMvc3Rhci5wbmdcXFwiPjwvSW1hZ2U+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9HcmlkTGF5b3V0PlwiIl0sInNvdXJjZVJvb3QiOiIifQ==