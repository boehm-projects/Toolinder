webpackHotUpdate("bundle",{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" ios:marginBottom=\"48\">\n    <GridLayout row=\"0\" rowSpan=\"2\" paddingTop=\"30\" class=\"page\" (loaded)=\"onContainerLoaded($event)\"\n        width=\"100%\" height=\"100%\">\n        <android>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\"\n                [visibility]=\"isLoaded ? 'visible' : 'collapse'\"\n                [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\"\n                class=\"swipe-layout\" [class.front]=\"i == 0\" [class.middle]=\"i == 1\"\n                [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\"\n                (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\"\n                (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <StackLayout class=\"main-card \">\n                    <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\"\n                        class=\"main-card-container\">\n\n                       <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\"\n                            class=\"btn btn-square card-badge m-l-16\"\n                            horizontalAlignment=\"left\" opacity=\"0\">\n                            <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                        </GridLayout>\n                        <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\"\n                            class=\"btn btn-square card-badge m-r-16\"\n                            horizontalAlignment=\"right\" opacity=\"0\">\n                            <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n\n                        <GridLayout col=\"0\" row=\"1\" colSpan=\"5\" rows=\"auto, auto, auto\"\n                        columns=\"auto, *, auto\" class=\"info\">\n      <!--                   <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\n                            textWrap=\"true\">\n                            <FormattedString>\n                                <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                <Span [text]=\"card.date\"></Span>\n                            </FormattedString> \n                        </Label>-->\n                        <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\"\n                            textWrap=\"true\" class=\"h1 title\"></Label>\n              <!--           <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\"\n                            textWrap=\"true\" class=\"h4 caption\"></Label>\n                        <circular-progress-bar [col]=\"2\" [row]=\"1\"\n                            [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar> -->\n                    </GridLayout>\n\n                        <!-- <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\"\n                            stretch=\"aspectFill\" borderRadius=\"10\"></Image> -->\n\n\n                            <GridLayout #btnIgnore col=\"1\" row=\"2\" class=\"btn btn-square\"\n                            [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                            <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                        </GridLayout>\n                        \n                        <GridLayout #btnLike col=\"3\" row=\"2\" class=\"btn btn-square\"\n                            [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                            <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n               \n                    </GridLayout>\n                </StackLayout>\n            </SwipeLayout>\n        </android>\n        <ios>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\"\n                [visibility]=\"isLoaded ? 'visible' : 'collapse'\"\n                [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\"\n                class=\"swipe-layout\" [class.front]=\"i == 0\" [class.middle]=\"i == 1\"\n                [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\"\n                (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\"\n                (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <CardView class=\"main-card dark\" shadowOffsetHeight=\"2\"\n                    shadowColor=\"#000000\" shadowOpacity=\"0.2\" shadowRadius=\"30\">\n                    <GridLayout>\n                        <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\"\n                            class=\"main-card-container\">\n\n                            <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\"\n                                class=\"btn btn-square card-badge m-l-16\"\n                                horizontalAlignment=\"left\" opacity=\"0\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\"\n                                class=\"btn btn-square card-badge m-r-16\"\n                                horizontalAlignment=\"right\" opacity=\"0\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\"\n                                [src]=\"card.image\" stretch=\"aspectFill\"></Image>\n\n                            <GridLayout #btnIgnore col=\"1\" row=\"1\" class=\"btn btn-square\"\n                                [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #btnLike col=\"3\" row=\"1\" class=\"btn btn-square\"\n                                [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <GridLayout col=\"0\" row=\"2\" colSpan=\"5\" rows=\"auto, auto, auto\"\n                                columns=\"auto, *, auto\" class=\"info\">\n                                <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\n                                    textWrap=\"true\">\n                                    <FormattedString>\n                                        <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                        <Span [text]=\"card.date\"></Span>\n                                    </FormattedString>\n                                </Label>\n                                <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\"\n                                    textWrap=\"true\" class=\"h2 title\"></Label>\n                                <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\"\n                                    textWrap=\"true\" class=\"h4 title\"></Label>\n                                <circular-progress-bar [col]=\"2\" [row]=\"1\"\n                                    [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\n                            </GridLayout>\n\n                        </GridLayout>\n                    </GridLayout>\n                </CardView>\n            </SwipeLayout>\n        </ios>\n        <StackLayout *ngIf=\"!cards.length\" verticalAlignment=\"center\" [@fade]>\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\n            <Label text=\"No more cards to display\" textWrap=\"true\" class=\"h4 placeholder-label\"\n                marginBottom=\"16\"></Label>\n            <Button text=\"Load more\" class=\"btn btn-primary\" marginBottom=\"40\"\n                (tap)=\"resetCards()\"></Button>\n        </StackLayout>\n        <ActivityIndicator verticalAlignment=\"center\" [busy]=\"!isLoaded\"\n            class=\"activity-indicator\"></ActivityIndicator>\n    </GridLayout>\n\n    <custom-action-bar row=\"0\" title=\"What is important to you?\"></custom-action-bar>\n\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1VEFBdVQsZUFBZSwwMURBQTAxRCwwdkRBQTB2RCxlQUFlLDQzRkFBNDNGLHNwRCIsImZpbGUiOiJidW5kbGUuOTk5YTQzOWViMGYwNTdiMjY1ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIiBpb3M6bWFyZ2luQm90dG9tPVxcXCI0OFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCIgcGFkZGluZ1RvcD1cXFwiMzBcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIiAobG9hZGVkKT1cXFwib25Db250YWluZXJMb2FkZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgPGFuZHJvaWQ+XFxuICAgICAgICAgICAgPFN3aXBlTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHMgfCAgc2xpY2U6MDo1OyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja2luZ0Z1bmN0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCJcXG4gICAgICAgICAgICAgICAgW2FuaW1hdGlvblN0YXRlXT1cXFwic3dpcGVMYXlvdXRBbmltYXRlZFxcXCIgW2dlc3R1cmVNb2RlXT1cXFwiZ2VzdHVyZU1vZGVcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzd2lwZS1sYXlvdXRcXFwiIFtjbGFzcy5mcm9udF09XFxcImkgPT0gMFxcXCIgW2NsYXNzLm1pZGRsZV09XFxcImkgPT0gMVxcXCJcXG4gICAgICAgICAgICAgICAgW2NsYXNzLmJhY2tdPVxcXCJpID09IDJcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiXFxuICAgICAgICAgICAgICAgIChsb2FkZWQpPVxcXCJzd2lwZUxheW91dExvYWRlZCgkZXZlbnQsIGJ0bklnbm9yZSwgYnRuTGlrZSwgYmFkZ2VMaWtlLCBiYWRnZUlnbm9yZSlcXFwiXFxuICAgICAgICAgICAgICAgIChzd2lwZUxlZnQpPVxcXCJzd2lwZUxlZnRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIiAoc3dpcGVSaWdodCk9XFxcInN3aXBlUmlnaHRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluLWNhcmQgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sICpcXFwiIGNvbHVtbnM9XFxcIjgsIGF1dG8sICosIGF1dG8sIDhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1haW4tY2FyZC1jb250YWluZXJcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlTGlrZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1sLTE2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvc3Rhci5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlSWdub3JlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLXItMTZcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwiaW5mb1xcXCI+XFxuICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGNsYXNzPVxcXCJoNSBkYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCImI3hmMDczOyBcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJjYXJkLmRhdGVcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+IFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQudGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDEgdGl0bGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICA8IS0tICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjJcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC5hdXRob3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDQgY2FwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY3VsYXItcHJvZ3Jlc3MtYmFyIFtjb2xdPVxcXCIyXFxcIiBbcm93XT1cXFwiMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd1NwYW5dPVxcXCIyXFxcIiBbcHJvZ3Jlc3NdPVxcXCJjYXJkLnBvcHVsYXJpdHlcXFwiPjwvY2lyY3VsYXItcHJvZ3Jlc3MtYmFyPiAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxJbWFnZSBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93U3Bhbj1cXFwiNlxcXCIgW3NyY109XFxcImNhcmQuaW1hZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTBcXFwiPjwvSW1hZ2U+IC0tPlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuSWdub3JlIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIyXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJkZWNsaW5lKGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuTGlrZSBjb2w9XFxcIjNcXFwiIHJvdz1cXFwiMlxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwibGlrZShjYXJkKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3N0YXIucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3dpcGVMYXlvdXQ+XFxuICAgICAgICA8L2FuZHJvaWQ+XFxuICAgICAgICA8aW9zPlxcbiAgICAgICAgICAgIDxTd2lwZUxheW91dCAqbmdGb3I9XFxcImxldCBjYXJkIG9mIGNhcmRzIHwgIHNsaWNlOjA6NTsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tpbmdGdW5jdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgW3Zpc2liaWxpdHldPVxcXCJpc0xvYWRlZCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiXFxuICAgICAgICAgICAgICAgIFthbmltYXRpb25TdGF0ZV09XFxcInN3aXBlTGF5b3V0QW5pbWF0ZWRcXFwiIFtnZXN0dXJlTW9kZV09XFxcImdlc3R1cmVNb2RlXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwic3dpcGUtbGF5b3V0XFxcIiBbY2xhc3MuZnJvbnRdPVxcXCJpID09IDBcXFwiIFtjbGFzcy5taWRkbGVdPVxcXCJpID09IDFcXFwiXFxuICAgICAgICAgICAgICAgIFtjbGFzcy5iYWNrXT1cXFwiaSA9PSAyXFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIlxcbiAgICAgICAgICAgICAgICAobG9hZGVkKT1cXFwic3dpcGVMYXlvdXRMb2FkZWQoJGV2ZW50LCBidG5JZ25vcmUsIGJ0bkxpa2UsIGJhZGdlTGlrZSwgYmFkZ2VJZ25vcmUpXFxcIlxcbiAgICAgICAgICAgICAgICAoc3dpcGVMZWZ0KT1cXFwic3dpcGVMZWZ0Q2FsbGJhY2soJGV2ZW50LCBjYXJkKVxcXCIgKHN3aXBlUmlnaHQpPVxcXCJzd2lwZVJpZ2h0Q2FsbGJhY2soJGV2ZW50LCBjYXJkKVxcXCI+XFxuICAgICAgICAgICAgICAgIDxDYXJkVmlldyBjbGFzcz1cXFwibWFpbi1jYXJkIGRhcmtcXFwiIHNoYWRvd09mZnNldEhlaWdodD1cXFwiMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yPVxcXCIjMDAwMDAwXFxcIiBzaGFkb3dPcGFjaXR5PVxcXCIwLjJcXFwiIHNoYWRvd1JhZGl1cz1cXFwiMzBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0bywgKlxcXCIgY29sdW1ucz1cXFwiOCwgYXV0bywgKiwgYXV0bywgOFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1haW4tY2FyZC1jb250YWluZXJcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VMaWtlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1sLTE2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9zdGFyLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUlnbm9yZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tci0xNlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2NhbmNlbC5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd1NwYW49XFxcIjZcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cXFwiY2FyZC5pbWFnZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bklnbm9yZSBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKHRhcCk9XFxcImRlY2xpbmUoY2FyZClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNidG5MaWtlIGNvbD1cXFwiM1xcXCIgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwibGlrZShjYXJkKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9zdGFyLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cXFwiMFxcXCIgcm93PVxcXCIyXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcImluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiaDUgZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwiJiN4ZjA3MzsgXFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJjYXJkLmRhdGVcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC50aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImgyIHRpdGxlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIyXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQuYXV0aG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDQgdGl0bGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY3VsYXItcHJvZ3Jlc3MtYmFyIFtjb2xdPVxcXCIyXFxcIiBbcm93XT1cXFwiMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93U3Bhbl09XFxcIjJcXFwiIFtwcm9ncmVzc109XFxcImNhcmQucG9wdWxhcml0eVxcXCI+PC9jaXJjdWxhci1wcm9ncmVzcy1iYXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxuICAgICAgICAgICAgPC9Td2lwZUxheW91dD5cXG4gICAgICAgIDwvaW9zPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhY2FyZHMubGVuZ3RoXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBbQGZhZGVdPlxcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2VtcHR5LnBuZ1xcXCIgY2xhc3M9XFxcInBsYWNlaG9sZGVyLWltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJObyBtb3JlIGNhcmRzIHRvIGRpc3BsYXlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDQgcGxhY2Vob2xkZXItbGFiZWxcXFwiXFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cXFwiMTZcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJMb2FkIG1vcmVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbkJvdHRvbT1cXFwiNDBcXFwiXFxuICAgICAgICAgICAgICAgICh0YXApPVxcXCJyZXNldENhcmRzKClcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDxBY3Rpdml0eUluZGljYXRvciB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBbYnVzeV09XFxcIiFpc0xvYWRlZFxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgIDxjdXN0b20tYWN0aW9uLWJhciByb3c9XFxcIjBcXFwiIHRpdGxlPVxcXCJXaGF0IGlzIGltcG9ydGFudCB0byB5b3U/XFxcIj48L2N1c3RvbS1hY3Rpb24tYmFyPlxcblxcbjwvR3JpZExheW91dD5cIiJdLCJzb3VyY2VSb290IjoiIn0=