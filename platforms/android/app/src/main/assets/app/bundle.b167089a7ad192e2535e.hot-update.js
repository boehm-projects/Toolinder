webpackHotUpdate("bundle",{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" ios:marginBottom=\"48\">\n    <GridLayout row=\"0\" rowSpan=\"2\" paddingTop=\"56\" class=\"page\" (loaded)=\"onContainerLoaded($event)\"\n        width=\"100%\" height=\"100%\">\n        <android>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\"\n                [visibility]=\"isLoaded ? 'visible' : 'collapse'\"\n                [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\"\n                class=\"swipe-layout\" [class.front]=\"i == 0\" [class.middle]=\"i == 1\"\n                [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\"\n                (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\"\n                (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <StackLayout class=\"main-card dark\">\n                    <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\"\n                        class=\"main-card-container\">\n\n                       <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\"\n                            class=\"btn btn-square card-badge m-l-16\"\n                            horizontalAlignment=\"left\" opacity=\"0\">\n                            <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                        </GridLayout>\n                        <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\"\n                            class=\"btn btn-square card-badge m-r-16\"\n                            horizontalAlignment=\"right\" opacity=\"0\">\n                            <Label text=\"Ja\"></Label>\n                        </GridLayout>\n\n\n                        <GridLayout col=\"0\" row=\"1\" colSpan=\"5\" rows=\"auto, auto, auto\"\n                        columns=\"auto, *, auto\" class=\"info\">\n                        <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\n                            textWrap=\"true\">\n                            <FormattedString>\n                                <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                <Span [text]=\"card.date\"></Span>\n                            </FormattedString>\n                        </Label>\n                        <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\"\n                            textWrap=\"true\" class=\"h1 title\"></Label>\n                        <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\"\n                            textWrap=\"true\" class=\"h4 caption\"></Label>\n                        <circular-progress-bar [col]=\"2\" [row]=\"1\"\n                            [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\n                    </GridLayout>\n\n                        <!-- <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\"\n                            stretch=\"aspectFill\" borderRadius=\"10\"></Image> -->\n\n<!-- \n                            <GridLayout #btnIgnore col=\"1\" row=\"2\" class=\"btn btn-square\"\n                            [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                            <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                        </GridLayout> -->\n                        \n\n                        <GridLayout #btnIgnore col=\"1\" row=\"2\" class=\"btn btn-square\"\n                        [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                        <Label [text]=\"Coole Sache\"></Label>\n                    </GridLayout>\n                        \n                        <GridLayout #btnLike col=\"3\" row=\"2\" class=\"btn btn-square\"\n                            [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                            <Label text=\"Ja\"></Label>\n                        </GridLayout>\n\n               \n                    </GridLayout>\n                </StackLayout>\n            </SwipeLayout>\n        </android>\n        <ios>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\"\n                [visibility]=\"isLoaded ? 'visible' : 'collapse'\"\n                [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\"\n                class=\"swipe-layout\" [class.front]=\"i == 0\" [class.middle]=\"i == 1\"\n                [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\"\n                (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\"\n                (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <CardView class=\"main-card dark\" shadowOffsetHeight=\"2\"\n                    shadowColor=\"#000000\" shadowOpacity=\"0.2\" shadowRadius=\"30\">\n                    <GridLayout>\n                        <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\"\n                            class=\"main-card-container\">\n\n                            <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\"\n                                class=\"btn btn-square card-badge m-l-16\"\n                                horizontalAlignment=\"left\" opacity=\"0\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\"\n                                class=\"btn btn-square card-badge m-r-16\"\n                                horizontalAlignment=\"right\" opacity=\"0\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\"\n                                [src]=\"card.image\" stretch=\"aspectFill\"></Image>\n\n                            <GridLayout #btnIgnore col=\"1\" row=\"1\" class=\"btn btn-square\"\n                                [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #btnLike col=\"3\" row=\"1\" class=\"btn btn-square\"\n                                [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <GridLayout col=\"0\" row=\"2\" colSpan=\"5\" rows=\"auto, auto, auto\"\n                                columns=\"auto, *, auto\" class=\"info\">\n                                <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\n                                    textWrap=\"true\">\n                                    <FormattedString>\n                                        <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                        <Span [text]=\"card.date\"></Span>\n                                    </FormattedString>\n                                </Label>\n                                <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\"\n                                    textWrap=\"true\" class=\"h2 title\"></Label>\n                                <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\"\n                                    textWrap=\"true\" class=\"h4 title\"></Label>\n                                <circular-progress-bar [col]=\"2\" [row]=\"1\"\n                                    [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\n                            </GridLayout>\n\n                        </GridLayout>\n                    </GridLayout>\n                </CardView>\n            </SwipeLayout>\n        </ios>\n        <StackLayout *ngIf=\"!cards.length\" verticalAlignment=\"center\" [@fade]>\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\n            <Label text=\"No more cards to display\" textWrap=\"true\" class=\"h4 placeholder-label\"\n                marginBottom=\"16\"></Label>\n            <Button text=\"Load more\" class=\"btn btn-primary\" marginBottom=\"40\"\n                (tap)=\"resetCards()\"></Button>\n        </StackLayout>\n        <ActivityIndicator verticalAlignment=\"center\" [busy]=\"!isLoaded\"\n            class=\"activity-indicator\"></ActivityIndicator>\n    </GridLayout>\n\n    <custom-action-bar row=\"0\" title=\"What is important to you?\"></custom-action-bar>\n\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1VEFBdVQsZUFBZSx5ekRBQXl6RCw0Z0VBQTRnRSxlQUFlLDQzRkFBNDNGLHNwRCIsImZpbGUiOiJidW5kbGUuYjE2NzA4OWE3YWQxOTJlMjUzNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIiBpb3M6bWFyZ2luQm90dG9tPVxcXCI0OFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCIgcGFkZGluZ1RvcD1cXFwiNTZcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIiAobG9hZGVkKT1cXFwib25Db250YWluZXJMb2FkZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgPGFuZHJvaWQ+XFxuICAgICAgICAgICAgPFN3aXBlTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHMgfCAgc2xpY2U6MDo1OyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja2luZ0Z1bmN0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCJcXG4gICAgICAgICAgICAgICAgW2FuaW1hdGlvblN0YXRlXT1cXFwic3dpcGVMYXlvdXRBbmltYXRlZFxcXCIgW2dlc3R1cmVNb2RlXT1cXFwiZ2VzdHVyZU1vZGVcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzd2lwZS1sYXlvdXRcXFwiIFtjbGFzcy5mcm9udF09XFxcImkgPT0gMFxcXCIgW2NsYXNzLm1pZGRsZV09XFxcImkgPT0gMVxcXCJcXG4gICAgICAgICAgICAgICAgW2NsYXNzLmJhY2tdPVxcXCJpID09IDJcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiXFxuICAgICAgICAgICAgICAgIChsb2FkZWQpPVxcXCJzd2lwZUxheW91dExvYWRlZCgkZXZlbnQsIGJ0bklnbm9yZSwgYnRuTGlrZSwgYmFkZ2VMaWtlLCBiYWRnZUlnbm9yZSlcXFwiXFxuICAgICAgICAgICAgICAgIChzd2lwZUxlZnQpPVxcXCJzd2lwZUxlZnRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIiAoc3dpcGVSaWdodCk9XFxcInN3aXBlUmlnaHRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluLWNhcmQgZGFya1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvLCAqXFxcIiBjb2x1bW5zPVxcXCI4LCBhdXRvLCAqLCBhdXRvLCA4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYWluLWNhcmQtY29udGFpbmVyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUxpa2UgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tbC0xNlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3N0YXIucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUlnbm9yZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1yLTE2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJKYVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVxcXCIwXFxcIiByb3c9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcImluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgY2xhc3M9XFxcImg1IGRhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiYjeGYwNzM7IFxcXCIgY2xhc3M9XFxcImZhXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcImNhcmQuZGF0ZVxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW3RleHRdPVxcXCJjYXJkLnRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImgxIHRpdGxlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMlxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW3RleHRdPVxcXCJjYXJkLmF1dGhvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCBjYXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjdWxhci1wcm9ncmVzcy1iYXIgW2NvbF09XFxcIjJcXFwiIFtyb3ddPVxcXCIxXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93U3Bhbl09XFxcIjJcXFwiIFtwcm9ncmVzc109XFxcImNhcmQucG9wdWxhcml0eVxcXCI+PC9jaXJjdWxhci1wcm9ncmVzcy1iYXI+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8SW1hZ2UgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd1NwYW49XFxcIjZcXFwiIFtzcmNdPVxcXCJjYXJkLmltYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiBib3JkZXJSYWRpdXM9XFxcIjEwXFxcIj48L0ltYWdlPiAtLT5cXG5cXG48IS0tIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuSWdub3JlIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIyXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJkZWNsaW5lKGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bklnbm9yZSBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMlxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJkZWNsaW5lKGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJDb29sZSBTYWNoZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuTGlrZSBjb2w9XFxcIjNcXFwiIHJvdz1cXFwiMlxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwibGlrZShjYXJkKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJKYVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9Td2lwZUxheW91dD5cXG4gICAgICAgIDwvYW5kcm9pZD5cXG4gICAgICAgIDxpb3M+XFxuICAgICAgICAgICAgPFN3aXBlTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHMgfCAgc2xpY2U6MDo1OyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja2luZ0Z1bmN0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCJcXG4gICAgICAgICAgICAgICAgW2FuaW1hdGlvblN0YXRlXT1cXFwic3dpcGVMYXlvdXRBbmltYXRlZFxcXCIgW2dlc3R1cmVNb2RlXT1cXFwiZ2VzdHVyZU1vZGVcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzd2lwZS1sYXlvdXRcXFwiIFtjbGFzcy5mcm9udF09XFxcImkgPT0gMFxcXCIgW2NsYXNzLm1pZGRsZV09XFxcImkgPT0gMVxcXCJcXG4gICAgICAgICAgICAgICAgW2NsYXNzLmJhY2tdPVxcXCJpID09IDJcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiXFxuICAgICAgICAgICAgICAgIChsb2FkZWQpPVxcXCJzd2lwZUxheW91dExvYWRlZCgkZXZlbnQsIGJ0bklnbm9yZSwgYnRuTGlrZSwgYmFkZ2VMaWtlLCBiYWRnZUlnbm9yZSlcXFwiXFxuICAgICAgICAgICAgICAgIChzd2lwZUxlZnQpPVxcXCJzd2lwZUxlZnRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIiAoc3dpcGVSaWdodCk9XFxcInN3aXBlUmlnaHRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IGNsYXNzPVxcXCJtYWluLWNhcmQgZGFya1xcXCIgc2hhZG93T2Zmc2V0SGVpZ2h0PVxcXCIyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Q29sb3I9XFxcIiMwMDAwMDBcXFwiIHNoYWRvd09wYWNpdHk9XFxcIjAuMlxcXCIgc2hhZG93UmFkaXVzPVxcXCIzMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvLCAqXFxcIiBjb2x1bW5zPVxcXCI4LCBhdXRvLCAqLCBhdXRvLCA4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWFpbi1jYXJkLWNvbnRhaW5lclxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUxpa2UgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLWwtMTZcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3N0YXIucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlSWdub3JlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1yLTE2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93U3Bhbj1cXFwiNlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVxcXCJjYXJkLmltYWdlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuSWdub3JlIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwiZGVjbGluZShjYXJkKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9jYW5jZWwucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bkxpa2UgY29sPVxcXCIzXFxcIiByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJsaWtlKGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3N0YXIucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVxcXCIwXFxcIiByb3c9XFxcIjJcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwiaW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGNsYXNzPVxcXCJoNSBkYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCImI3hmMDczOyBcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcImNhcmQuZGF0ZVxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW3RleHRdPVxcXCJjYXJkLnRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDIgdGl0bGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjJcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC5hdXRob3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCB0aXRsZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjdWxhci1wcm9ncmVzcy1iYXIgW2NvbF09XFxcIjJcXFwiIFtyb3ddPVxcXCIxXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dTcGFuXT1cXFwiMlxcXCIgW3Byb2dyZXNzXT1cXFwiY2FyZC5wb3B1bGFyaXR5XFxcIj48L2NpcmN1bGFyLXByb2dyZXNzLWJhcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXG4gICAgICAgICAgICA8L1N3aXBlTGF5b3V0PlxcbiAgICAgICAgPC9pb3M+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFjYXJkcy5sZW5ndGhcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtAZmFkZV0+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvZW1wdHkucG5nXFxcIiBjbGFzcz1cXFwicGxhY2Vob2xkZXItaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk5vIG1vcmUgY2FyZHMgdG8gZGlzcGxheVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCBwbGFjZWhvbGRlci1sYWJlbFxcXCJcXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPVxcXCIxNlxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkxvYWQgbW9yZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbWFyZ2luQm90dG9tPVxcXCI0MFxcXCJcXG4gICAgICAgICAgICAgICAgKHRhcCk9XFxcInJlc2V0Q2FyZHMoKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtidXN5XT1cXFwiIWlzTG9hZGVkXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxuICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgPGN1c3RvbS1hY3Rpb24tYmFyIHJvdz1cXFwiMFxcXCIgdGl0bGU9XFxcIldoYXQgaXMgaW1wb3J0YW50IHRvIHlvdT9cXFwiPjwvY3VzdG9tLWFjdGlvbi1iYXI+XFxuXFxuPC9HcmlkTGF5b3V0PlwiIl0sInNvdXJjZVJvb3QiOiIifQ==