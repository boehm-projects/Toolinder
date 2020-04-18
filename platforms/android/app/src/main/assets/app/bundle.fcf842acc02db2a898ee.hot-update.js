webpackHotUpdate("bundle",{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" ios:marginBottom=\"48\">\r\n    <GridLayout row=\"0\" rowSpan=\"2\" paddingTop=\"30\" class=\"page\" (loaded)=\"onContainerLoaded($event)\" width=\"100%\" height=\"100%\">\r\n        <android>\r\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\r\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\r\n                <StackLayout class=\"main-card \">\r\n                    <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\r\n\r\n                        <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\r\n                            <Image src=\"~/images/pruefen.png\" class=\"image\"></Image>\r\n                        </GridLayout>\r\n                        <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\r\n                            <Image src=\"~/images/schliessen.png\" class=\"image\"></Image>\r\n                        </GridLayout>\r\n\r\n\r\n                        <GridLayout col=\"0\" row=\"1\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\" style=\"background: white;\r\n                        \">\r\n                            <!--                   <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\r\n                            textWrap=\"true\">\r\n                            <FormattedString>\r\n                                <Span text=\"&#xf073; \" class=\"fa\"></Span>\r\n                                <Span [text]=\"card.date\"></Span>\r\n                            </FormattedString> \r\n                        </Label>-->\r\n                            <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.text\" textWrap=\"true\" class=\"h1 title\"></Label>\r\n                            <!--                             <circular-progress-bar [col]=\"2\" [row]=\"1\" [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\r\n -->\r\n                        </GridLayout>\r\n\r\n                        <!-- <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\"\r\n                            stretch=\"aspectFill\" borderRadius=\"10\"></Image> -->\r\n\r\n\r\n                        <GridLayout #btnIgnore col=\"1\" row=\"2\" class=\"btn btn-square\" style=\"width: 25%; height: 25%; margin-left: 50px;\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\r\n                            <Image src=\"~/images/schliessen.png\" style=\"width: 100%; height: 100%;\" class=\"image\"></Image>\r\n                        </GridLayout>\r\n\r\n                        <GridLayout #btnLike col=\"3\" row=\"2\" style=\"width: 25%; height: 25%; margin-right: 50px;\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\r\n                            <Image src=\"~/images/pruefen.png\" style=\"width: 100%; height: 100%; \" class=\"image\"></Image>\r\n                        </GridLayout>\r\n\r\n\r\n                    </GridLayout>\r\n                </StackLayout>\r\n            </SwipeLayout>\r\n        </android>\r\n        <ios>\r\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\r\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\r\n                <CardView class=\"main-card dark\" shadowOffsetHeight=\"2\" shadowColor=\"#000000\" shadowOpacity=\"0.2\" shadowRadius=\"30\">\r\n                    <GridLayout>\r\n                        <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\r\n\r\n                            <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\r\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n                            <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\r\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n\r\n                            <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\" stretch=\"aspectFill\"></Image>\r\n\r\n                            <GridLayout #btnIgnore col=\"1\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\r\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n                            <GridLayout #btnLike col=\"3\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\r\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n\r\n                            <GridLayout col=\"0\" row=\"2\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\">\r\n                                <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\" textWrap=\"true\">\r\n                                    <FormattedString>\r\n\r\n                                        <Span text=\"&#xf073; \" class=\"fa\"></Span>\r\n                                        <Span [text]=\"card.date\"></Span>\r\n                                    </FormattedString>\r\n                                </Label>\r\n                                <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\" textWrap=\"true\" class=\"h2 title\"></Label>\r\n                                <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\" textWrap=\"true\" class=\"h4 title\"></Label>\r\n                                <circular-progress-bar [col]=\"2\" [row]=\"1\" [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\r\n                            </GridLayout>\r\n\r\n                        </GridLayout>\r\n                    </GridLayout>\r\n                </CardView>\r\n            </SwipeLayout>\r\n        </ios>\r\n        <StackLayout *ngIf=\"!cards.length\" verticalAlignment=\"center\" [@fade]>\r\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\r\n            <Label text=\"That's it we know everything we need!\" textWrap=\"true\" class=\"h4 placeholder-label\" marginBottom=\"16\"></Label>\r\n            <Button text=\"Show me my results\" class=\"btn btn-primary\" marginBottom=\"40\" (tap)=\"resetCards()\"></Button>\r\n        </StackLayout>\r\n        <ActivityIndicator verticalAlignment=\"center\" [busy]=\"!isLoaded\" class=\"activity-indicator\"></ActivityIndicator>\r\n    </GridLayout>\r\n\r\n    <custom-action-bar row=\"0\" title=\"Tell us what you need\"></custom-action-bar>\r\n\r\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvVEFBb1QsZUFBZSw0NkNBQTQ2Qyw0U0FBNFMsNjJCQUE2MkIsYUFBYSxtQkFBbUIsNEpBQTRKLGNBQWMsZ0tBQWdLLGFBQWEsb0JBQW9CLCtLQUErSyxjQUFjLDhSQUE4UixlQUFlLDgvRUFBOC9FLDBqRCIsImZpbGUiOiJidW5kbGUuZmNmODQyYWNjMDJkYjJhODk4ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIiBpb3M6bWFyZ2luQm90dG9tPVxcXCI0OFxcXCI+XFxyXFxuICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCIgcGFkZGluZ1RvcD1cXFwiMzBcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIiAobG9hZGVkKT1cXFwib25Db250YWluZXJMb2FkZWQoJGV2ZW50KVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICA8YW5kcm9pZD5cXHJcXG4gICAgICAgICAgICA8U3dpcGVMYXlvdXQgKm5nRm9yPVxcXCJsZXQgY2FyZCBvZiBjYXJkcyB8ICBzbGljZTowOjU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNraW5nRnVuY3Rpb25cXFwiIFt2aXNpYmlsaXR5XT1cXFwiaXNMb2FkZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIiBbYW5pbWF0aW9uU3RhdGVdPVxcXCJzd2lwZUxheW91dEFuaW1hdGVkXFxcIiBbZ2VzdHVyZU1vZGVdPVxcXCJnZXN0dXJlTW9kZVxcXCIgY2xhc3M9XFxcInN3aXBlLWxheW91dFxcXCIgW2NsYXNzLmZyb250XT1cXFwiaSA9PSAwXFxcIlxcclxcbiAgICAgICAgICAgICAgICBbY2xhc3MubWlkZGxlXT1cXFwiaSA9PSAxXFxcIiBbY2xhc3MuYmFja109XFxcImkgPT0gMlxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKGxvYWRlZCk9XFxcInN3aXBlTGF5b3V0TG9hZGVkKCRldmVudCwgYnRuSWdub3JlLCBidG5MaWtlLCBiYWRnZUxpa2UsIGJhZGdlSWdub3JlKVxcXCIgKHN3aXBlTGVmdCk9XFxcInN3aXBlTGVmdENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiIChzd2lwZVJpZ2h0KT1cXFwic3dpcGVSaWdodENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm1haW4tY2FyZCBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0bywgKlxcXCIgY29sdW1ucz1cXFwiOCwgYXV0bywgKiwgYXV0bywgOFxcXCIgY2xhc3M9XFxcIm1haW4tY2FyZC1jb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUxpa2UgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tbC0xNlxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3BydWVmZW4ucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUlnbm9yZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1yLTE2XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3NjaGxpZXNzZW4ucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwiaW5mb1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiaDUgZGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwiJiN4ZjA3MzsgXFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwiY2FyZC5kYXRlXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC50ZXh0XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImgxIHRpdGxlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY3VsYXItcHJvZ3Jlc3MtYmFyIFtjb2xdPVxcXCIyXFxcIiBbcm93XT1cXFwiMVxcXCIgW3Jvd1NwYW5dPVxcXCIyXFxcIiBbcHJvZ3Jlc3NdPVxcXCJjYXJkLnBvcHVsYXJpdHlcXFwiPjwvY2lyY3VsYXItcHJvZ3Jlc3MtYmFyPlxcclxcbiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8SW1hZ2UgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd1NwYW49XFxcIjZcXFwiIFtzcmNdPVxcXCJjYXJkLmltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiBib3JkZXJSYWRpdXM9XFxcIjEwXFxcIj48L0ltYWdlPiAtLT5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuSWdub3JlIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIyXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjUlOyBoZWlnaHQ6IDI1JTsgbWFyZ2luLWxlZnQ6IDUwcHg7XFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwiZGVjbGluZShjYXJkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3NjaGxpZXNzZW4ucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bkxpa2UgY29sPVxcXCIzXFxcIiByb3c9XFxcIjJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjUlOyBoZWlnaHQ6IDI1JTsgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwibGlrZShjYXJkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3BydWVmZW4ucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDwvU3dpcGVMYXlvdXQ+XFxyXFxuICAgICAgICA8L2FuZHJvaWQ+XFxyXFxuICAgICAgICA8aW9zPlxcclxcbiAgICAgICAgICAgIDxTd2lwZUxheW91dCAqbmdGb3I9XFxcImxldCBjYXJkIG9mIGNhcmRzIHwgIHNsaWNlOjA6NTsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tpbmdGdW5jdGlvblxcXCIgW3Zpc2liaWxpdHldPVxcXCJpc0xvYWRlZCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiIFthbmltYXRpb25TdGF0ZV09XFxcInN3aXBlTGF5b3V0QW5pbWF0ZWRcXFwiIFtnZXN0dXJlTW9kZV09XFxcImdlc3R1cmVNb2RlXFxcIiBjbGFzcz1cXFwic3dpcGUtbGF5b3V0XFxcIiBbY2xhc3MuZnJvbnRdPVxcXCJpID09IDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgIFtjbGFzcy5taWRkbGVdPVxcXCJpID09IDFcXFwiIFtjbGFzcy5iYWNrXT1cXFwiaSA9PSAyXFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAobG9hZGVkKT1cXFwic3dpcGVMYXlvdXRMb2FkZWQoJGV2ZW50LCBidG5JZ25vcmUsIGJ0bkxpa2UsIGJhZGdlTGlrZSwgYmFkZ2VJZ25vcmUpXFxcIiAoc3dpcGVMZWZ0KT1cXFwic3dpcGVMZWZ0Q2FsbGJhY2soJGV2ZW50LCBjYXJkKVxcXCIgKHN3aXBlUmlnaHQpPVxcXCJzd2lwZVJpZ2h0Q2FsbGJhY2soJGV2ZW50LCBjYXJkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyBjbGFzcz1cXFwibWFpbi1jYXJkIGRhcmtcXFwiIHNoYWRvd09mZnNldEhlaWdodD1cXFwiMlxcXCIgc2hhZG93Q29sb3I9XFxcIiMwMDAwMDBcXFwiIHNoYWRvd09wYWNpdHk9XFxcIjAuMlxcXCIgc2hhZG93UmFkaXVzPVxcXCIzMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvLCAqXFxcIiBjb2x1bW5zPVxcXCI4LCBhdXRvLCAqLCBhdXRvLCA4XFxcIiBjbGFzcz1cXFwibWFpbi1jYXJkLWNvbnRhaW5lclxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUxpa2UgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tbC0xNlxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9zdGFyLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUlnbm9yZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1yLTE2XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9jYW5jZWwucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dTcGFuPVxcXCI2XFxcIiBbc3JjXT1cXFwiY2FyZC5pbWFnZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bklnbm9yZSBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwiZGVjbGluZShjYXJkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9jYW5jZWwucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bkxpa2UgY29sPVxcXCIzXFxcIiByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZVxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKHRhcCk9XFxcImxpa2UoY2FyZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvc3Rhci5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMlxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCIgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcImluZm9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiaDUgZGF0ZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiYjeGYwNzM7IFxcXCIgY2xhc3M9XFxcImZhXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwiY2FyZC5kYXRlXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQudGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDIgdGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjJcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC5hdXRob3JcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDQgdGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY3VsYXItcHJvZ3Jlc3MtYmFyIFtjb2xdPVxcXCIyXFxcIiBbcm93XT1cXFwiMVxcXCIgW3Jvd1NwYW5dPVxcXCIyXFxcIiBbcHJvZ3Jlc3NdPVxcXCJjYXJkLnBvcHVsYXJpdHlcXFwiPjwvY2lyY3VsYXItcHJvZ3Jlc3MtYmFyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgICAgIDwvU3dpcGVMYXlvdXQ+XFxyXFxuICAgICAgICA8L2lvcz5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWNhcmRzLmxlbmd0aFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgW0BmYWRlXT5cXHJcXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9lbXB0eS5wbmdcXFwiIGNsYXNzPVxcXCJwbGFjZWhvbGRlci1pbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVGhhdCdzIGl0IHdlIGtub3cgZXZlcnl0aGluZyB3ZSBuZWVkIVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCBwbGFjZWhvbGRlci1sYWJlbFxcXCIgbWFyZ2luQm90dG9tPVxcXCIxNlxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNob3cgbWUgbXkgcmVzdWx0c1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbWFyZ2luQm90dG9tPVxcXCI0MFxcXCIgKHRhcCk9XFxcInJlc2V0Q2FyZHMoKVxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtidXN5XT1cXFwiIWlzTG9hZGVkXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgIDxjdXN0b20tYWN0aW9uLWJhciByb3c9XFxcIjBcXFwiIHRpdGxlPVxcXCJUZWxsIHVzIHdoYXQgeW91IG5lZWRcXFwiPjwvY3VzdG9tLWFjdGlvbi1iYXI+XFxyXFxuXFxyXFxuPC9HcmlkTGF5b3V0PlwiIl0sInNvdXJjZVJvb3QiOiIifQ==