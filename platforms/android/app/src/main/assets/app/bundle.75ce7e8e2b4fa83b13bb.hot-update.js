webpackHotUpdate("bundle",{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" ios:marginBottom=\"48\">\n    <GridLayout row=\"0\" rowSpan=\"2\" paddingTop=\"30\" class=\"page\" (loaded)=\"onContainerLoaded($event)\"\n        width=\"100%\" height=\"100%\">\n        <android>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\"\n                [visibility]=\"isLoaded ? 'visible' : 'collapse'\"\n                [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\"\n                class=\"swipe-layout\" [class.front]=\"i == 0\" [class.middle]=\"i == 1\"\n                [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\"\n                (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\"\n                (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <StackLayout class=\"main-card \">\n                    <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\"\n                        class=\"main-card-container\">\n\n                       <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\"\n                            class=\"btn btn-square card-badge m-l-16\"\n                            horizontalAlignment=\"left\" opacity=\"0\">\n                            <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                        </GridLayout>\n                        <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\"\n                            class=\"btn btn-square card-badge m-r-16\"\n                            horizontalAlignment=\"right\" opacity=\"0\">\n                            <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n\n                        <GridLayout col=\"0\" row=\"1\" colSpan=\"5\" rows=\"auto, auto, auto\"\n                        columns=\"auto, *, auto\" >\n      <!--                   <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\n                            textWrap=\"true\">\n                            <FormattedString>\n                                <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                <Span [text]=\"card.date\"></Span>\n                            </FormattedString> \n                        </Label>-->\n                        <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\"\n                            textWrap=\"true\" class=\"h1 title\"></Label>\n              <!--           <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\"\n                            textWrap=\"true\" class=\"h4 caption\"></Label>\n                        <circular-progress-bar [col]=\"2\" [row]=\"1\"\n                            [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar> -->\n                    </GridLayout>\n\n                        <!-- <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\"\n                            stretch=\"aspectFill\" borderRadius=\"10\"></Image> -->\n\n\n                            <GridLayout #btnIgnore col=\"1\" row=\"2\" class=\"btn btn-square\"\n                            [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\" class=\"info\">\n                            <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                        </GridLayout>\n                        \n                        <GridLayout #btnLike col=\"3\" row=\"2\" class=\"btn btn-square\"\n                            [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                            <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n               \n                    </GridLayout>\n                </StackLayout>\n            </SwipeLayout>\n        </android>\n        <ios>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\"\n                [visibility]=\"isLoaded ? 'visible' : 'collapse'\"\n                [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\"\n                class=\"swipe-layout\" [class.front]=\"i == 0\" [class.middle]=\"i == 1\"\n                [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\"\n                (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\"\n                (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <CardView class=\"main-card dark\" shadowOffsetHeight=\"2\"\n                    shadowColor=\"#000000\" shadowOpacity=\"0.2\" shadowRadius=\"30\">\n                    <GridLayout>\n                        <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\"\n                            class=\"main-card-container\">\n\n                            <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\"\n                                class=\"btn btn-square card-badge m-l-16\"\n                                horizontalAlignment=\"left\" opacity=\"0\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\"\n                                class=\"btn btn-square card-badge m-r-16\"\n                                horizontalAlignment=\"right\" opacity=\"0\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\"\n                                [src]=\"card.image\" stretch=\"aspectFill\"></Image>\n\n                            <GridLayout #btnIgnore col=\"1\" row=\"1\" class=\"btn btn-square\"\n                                [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #btnLike col=\"3\" row=\"1\" class=\"btn btn-square\"\n                                [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <GridLayout col=\"0\" row=\"2\" colSpan=\"5\" rows=\"auto, auto, auto\"\n                                columns=\"auto, *, auto\" class=\"info\">\n                                <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\n                                    textWrap=\"true\">\n                                    <FormattedString>\n                                        <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                        <Span [text]=\"card.date\"></Span>\n                                    </FormattedString>\n                                </Label>\n                                <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\"\n                                    textWrap=\"true\" class=\"h2 title\"></Label>\n                                <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\"\n                                    textWrap=\"true\" class=\"h4 title\"></Label>\n                                <circular-progress-bar [col]=\"2\" [row]=\"1\"\n                                    [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\n                            </GridLayout>\n\n                        </GridLayout>\n                    </GridLayout>\n                </CardView>\n            </SwipeLayout>\n        </ios>\n        <StackLayout *ngIf=\"!cards.length\" verticalAlignment=\"center\" [@fade]>\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\n            <Label text=\"No more cards to display\" textWrap=\"true\" class=\"h4 placeholder-label\"\n                marginBottom=\"16\"></Label>\n            <Button text=\"Load more\" class=\"btn btn-primary\" marginBottom=\"40\"\n                (tap)=\"resetCards()\"></Button>\n        </StackLayout>\n        <ActivityIndicator verticalAlignment=\"center\" [busy]=\"!isLoaded\"\n            class=\"activity-indicator\"></ActivityIndicator>\n    </GridLayout>\n\n    <custom-action-bar row=\"0\" title=\"What is important to you?\"></custom-action-bar>\n\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1VEFBdVQsZUFBZSw0MERBQTQwRCx5d0RBQXl3RCxlQUFlLDQzRkFBNDNGLHNwRCIsImZpbGUiOiJidW5kbGUuNzVjZTdlOGUyYjRmYTgzYjEzYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIiBpb3M6bWFyZ2luQm90dG9tPVxcXCI0OFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCIgcGFkZGluZ1RvcD1cXFwiMzBcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIiAobG9hZGVkKT1cXFwib25Db250YWluZXJMb2FkZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgPGFuZHJvaWQ+XFxuICAgICAgICAgICAgPFN3aXBlTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHMgfCAgc2xpY2U6MDo1OyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja2luZ0Z1bmN0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCJcXG4gICAgICAgICAgICAgICAgW2FuaW1hdGlvblN0YXRlXT1cXFwic3dpcGVMYXlvdXRBbmltYXRlZFxcXCIgW2dlc3R1cmVNb2RlXT1cXFwiZ2VzdHVyZU1vZGVcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzd2lwZS1sYXlvdXRcXFwiIFtjbGFzcy5mcm9udF09XFxcImkgPT0gMFxcXCIgW2NsYXNzLm1pZGRsZV09XFxcImkgPT0gMVxcXCJcXG4gICAgICAgICAgICAgICAgW2NsYXNzLmJhY2tdPVxcXCJpID09IDJcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiXFxuICAgICAgICAgICAgICAgIChsb2FkZWQpPVxcXCJzd2lwZUxheW91dExvYWRlZCgkZXZlbnQsIGJ0bklnbm9yZSwgYnRuTGlrZSwgYmFkZ2VMaWtlLCBiYWRnZUlnbm9yZSlcXFwiXFxuICAgICAgICAgICAgICAgIChzd2lwZUxlZnQpPVxcXCJzd2lwZUxlZnRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIiAoc3dpcGVSaWdodCk9XFxcInN3aXBlUmlnaHRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluLWNhcmQgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sICpcXFwiIGNvbHVtbnM9XFxcIjgsIGF1dG8sICosIGF1dG8sIDhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1haW4tY2FyZC1jb250YWluZXJcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlTGlrZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1sLTE2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvc3Rhci5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlSWdub3JlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLXItMTZcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiA+XFxuICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGNsYXNzPVxcXCJoNSBkYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCImI3hmMDczOyBcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJjYXJkLmRhdGVcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+IFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQudGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDEgdGl0bGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICA8IS0tICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjJcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC5hdXRob3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDQgY2FwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY3VsYXItcHJvZ3Jlc3MtYmFyIFtjb2xdPVxcXCIyXFxcIiBbcm93XT1cXFwiMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd1NwYW5dPVxcXCIyXFxcIiBbcHJvZ3Jlc3NdPVxcXCJjYXJkLnBvcHVsYXJpdHlcXFwiPjwvY2lyY3VsYXItcHJvZ3Jlc3MtYmFyPiAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxJbWFnZSBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93U3Bhbj1cXFwiNlxcXCIgW3NyY109XFxcImNhcmQuaW1hZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTBcXFwiPjwvSW1hZ2U+IC0tPlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuSWdub3JlIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIyXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJkZWNsaW5lKGNhcmQpXFxcIiBjbGFzcz1cXFwiaW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2NhbmNlbC5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bkxpa2UgY29sPVxcXCIzXFxcIiByb3c9XFxcIjJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKHRhcCk9XFxcImxpa2UoY2FyZClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9zdGFyLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1N3aXBlTGF5b3V0PlxcbiAgICAgICAgPC9hbmRyb2lkPlxcbiAgICAgICAgPGlvcz5cXG4gICAgICAgICAgICA8U3dpcGVMYXlvdXQgKm5nRm9yPVxcXCJsZXQgY2FyZCBvZiBjYXJkcyB8ICBzbGljZTowOjU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNraW5nRnVuY3Rpb25cXFwiXFxuICAgICAgICAgICAgICAgIFt2aXNpYmlsaXR5XT1cXFwiaXNMb2FkZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIlxcbiAgICAgICAgICAgICAgICBbYW5pbWF0aW9uU3RhdGVdPVxcXCJzd2lwZUxheW91dEFuaW1hdGVkXFxcIiBbZ2VzdHVyZU1vZGVdPVxcXCJnZXN0dXJlTW9kZVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInN3aXBlLWxheW91dFxcXCIgW2NsYXNzLmZyb250XT1cXFwiaSA9PSAwXFxcIiBbY2xhc3MubWlkZGxlXT1cXFwiaSA9PSAxXFxcIlxcbiAgICAgICAgICAgICAgICBbY2xhc3MuYmFja109XFxcImkgPT0gMlxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCJcXG4gICAgICAgICAgICAgICAgKGxvYWRlZCk9XFxcInN3aXBlTGF5b3V0TG9hZGVkKCRldmVudCwgYnRuSWdub3JlLCBidG5MaWtlLCBiYWRnZUxpa2UsIGJhZGdlSWdub3JlKVxcXCJcXG4gICAgICAgICAgICAgICAgKHN3aXBlTGVmdCk9XFxcInN3aXBlTGVmdENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiIChzd2lwZVJpZ2h0KT1cXFwic3dpcGVSaWdodENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiPlxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgY2xhc3M9XFxcIm1haW4tY2FyZCBkYXJrXFxcIiBzaGFkb3dPZmZzZXRIZWlnaHQ9XFxcIjJcXFwiXFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcj1cXFwiIzAwMDAwMFxcXCIgc2hhZG93T3BhY2l0eT1cXFwiMC4yXFxcIiBzaGFkb3dSYWRpdXM9XFxcIjMwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sICpcXFwiIGNvbHVtbnM9XFxcIjgsIGF1dG8sICosIGF1dG8sIDhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYWluLWNhcmQtY29udGFpbmVyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlTGlrZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tbC0xNlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvc3Rhci5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VJZ25vcmUgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLXItMTZcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9jYW5jZWwucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dTcGFuPVxcXCI2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XFxcImNhcmQuaW1hZ2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNidG5JZ25vcmUgY29sPVxcXCIxXFxcIiByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJkZWNsaW5lKGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2NhbmNlbC5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuTGlrZSBjb2w9XFxcIjNcXFwiIHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKHRhcCk9XFxcImxpa2UoY2FyZClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvc3Rhci5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMlxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJpbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgY2xhc3M9XFxcImg1IGRhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiYjeGYwNzM7IFxcXCIgY2xhc3M9XFxcImZhXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwiY2FyZC5kYXRlXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQudGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoMiB0aXRsZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMlxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW3RleHRdPVxcXCJjYXJkLmF1dGhvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImg0IHRpdGxlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmN1bGFyLXByb2dyZXNzLWJhciBbY29sXT1cXFwiMlxcXCIgW3Jvd109XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd1NwYW5dPVxcXCIyXFxcIiBbcHJvZ3Jlc3NdPVxcXCJjYXJkLnBvcHVsYXJpdHlcXFwiPjwvY2lyY3VsYXItcHJvZ3Jlc3MtYmFyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0NhcmRWaWV3PlxcbiAgICAgICAgICAgIDwvU3dpcGVMYXlvdXQ+XFxuICAgICAgICA8L2lvcz5cXG4gICAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWNhcmRzLmxlbmd0aFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgW0BmYWRlXT5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9lbXB0eS5wbmdcXFwiIGNsYXNzPVxcXCJwbGFjZWhvbGRlci1pbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTm8gbW9yZSBjYXJkcyB0byBkaXNwbGF5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImg0IHBsYWNlaG9sZGVyLWxhYmVsXFxcIlxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209XFxcIjE2XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTG9hZCBtb3JlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBtYXJnaW5Cb3R0b209XFxcIjQwXFxcIlxcbiAgICAgICAgICAgICAgICAodGFwKT1cXFwicmVzZXRDYXJkcygpXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3IgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgW2J1c3ldPVxcXCIhaXNMb2FkZWRcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8Y3VzdG9tLWFjdGlvbi1iYXIgcm93PVxcXCIwXFxcIiB0aXRsZT1cXFwiV2hhdCBpcyBpbXBvcnRhbnQgdG8geW91P1xcXCI+PC9jdXN0b20tYWN0aW9uLWJhcj5cXG5cXG48L0dyaWRMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9