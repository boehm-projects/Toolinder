webpackHotUpdate("bundle",{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" ios:marginBottom=\"48\">\n    <GridLayout row=\"0\" rowSpan=\"2\" paddingTop=\"30\" class=\"page\" (loaded)=\"onContainerLoaded($event)\" width=\"100%\" height=\"100%\">\n        <android>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <StackLayout class=\"main-card \">\n                    <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\n\n                        <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\n                            <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                        </GridLayout>\n                        <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\n                            <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n\n                        <GridLayout col=\"0\" row=\"1\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\" style=\"background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.72));\n                        \">\n                            <!--                   <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\n                            textWrap=\"true\">\n                            <FormattedString>\n                                <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                <Span [text]=\"card.date\"></Span>\n                            </FormattedString> \n                        </Label>-->\n                            <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\" textWrap=\"true\" class=\"h1 title\"></Label>\n                            <!--           <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\"\n                            textWrap=\"true\" class=\"h4 caption\"></Label>\n                        <circular-progress-bar [col]=\"2\" [row]=\"1\"\n                            [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar> -->\n                        </GridLayout>\n\n                        <!-- <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\"\n                            stretch=\"aspectFill\" borderRadius=\"10\"></Image> -->\n\n\n                        <GridLayout #btnIgnore col=\"1\" row=\"2\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                            <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n                        <GridLayout #btnLike col=\"3\" row=\"2\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                            <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n\n                    </GridLayout>\n                </StackLayout>\n            </SwipeLayout>\n        </android>\n        <ios>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <CardView class=\"main-card dark\" shadowOffsetHeight=\"2\" shadowColor=\"#000000\" shadowOpacity=\"0.2\" shadowRadius=\"30\">\n                    <GridLayout>\n                        <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\n\n                            <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\" stretch=\"aspectFill\"></Image>\n\n                            <GridLayout #btnIgnore col=\"1\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #btnLike col=\"3\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <GridLayout col=\"0\" row=\"2\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\">\n                                <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\" textWrap=\"true\">\n                                    <FormattedString>\n\n                                        <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                        <Span [text]=\"card.date\"></Span>\n                                    </FormattedString>\n                                </Label>\n                                <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\" textWrap=\"true\" class=\"h2 title\"></Label>\n                                <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\" textWrap=\"true\" class=\"h4 title\"></Label>\n                                <circular-progress-bar [col]=\"2\" [row]=\"1\" [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\n                            </GridLayout>\n\n                        </GridLayout>\n                    </GridLayout>\n                </CardView>\n            </SwipeLayout>\n        </ios>\n        <StackLayout *ngIf=\"!cards.length\" verticalAlignment=\"center\" [@fade]>\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\n            <Label text=\"No more cards to display\" textWrap=\"true\" class=\"h4 placeholder-label\" marginBottom=\"16\"></Label>\n            <Button text=\"Load more\" class=\"btn btn-primary\" marginBottom=\"40\" (tap)=\"resetCards()\"></Button>\n        </StackLayout>\n        <ActivityIndicator verticalAlignment=\"center\" [busy]=\"!isLoaded\" class=\"activity-indicator\"></ActivityIndicator>\n    </GridLayout>\n\n    <custom-action-bar row=\"0\" title=\"What is important to you?\"></custom-action-bar>\n\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4U0FBOFMsZUFBZSw0N0NBQTQ3QyxrU0FBa1MsOG9EQUE4b0QsZUFBZSwwOEVBQTA4RSx3L0MiLCJmaWxlIjoiYnVuZGxlLmNkMGNhNDU4MTkyNDk2ZGY4MDJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgKlxcXCIgaW9zOm1hcmdpbkJvdHRvbT1cXFwiNDhcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3c9XFxcIjBcXFwiIHJvd1NwYW49XFxcIjJcXFwiIHBhZGRpbmdUb3A9XFxcIjMwXFxcIiBjbGFzcz1cXFwicGFnZVxcXCIgKGxvYWRlZCk9XFxcIm9uQ29udGFpbmVyTG9hZGVkKCRldmVudClcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgPGFuZHJvaWQ+XFxuICAgICAgICAgICAgPFN3aXBlTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHMgfCAgc2xpY2U6MDo1OyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja2luZ0Z1bmN0aW9uXFxcIiBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCIgW2FuaW1hdGlvblN0YXRlXT1cXFwic3dpcGVMYXlvdXRBbmltYXRlZFxcXCIgW2dlc3R1cmVNb2RlXT1cXFwiZ2VzdHVyZU1vZGVcXFwiIGNsYXNzPVxcXCJzd2lwZS1sYXlvdXRcXFwiIFtjbGFzcy5mcm9udF09XFxcImkgPT0gMFxcXCJcXG4gICAgICAgICAgICAgICAgW2NsYXNzLm1pZGRsZV09XFxcImkgPT0gMVxcXCIgW2NsYXNzLmJhY2tdPVxcXCJpID09IDJcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiIChsb2FkZWQpPVxcXCJzd2lwZUxheW91dExvYWRlZCgkZXZlbnQsIGJ0bklnbm9yZSwgYnRuTGlrZSwgYmFkZ2VMaWtlLCBiYWRnZUlnbm9yZSlcXFwiIChzd2lwZUxlZnQpPVxcXCJzd2lwZUxlZnRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIiAoc3dpcGVSaWdodCk9XFxcInN3aXBlUmlnaHRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluLWNhcmQgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sICpcXFwiIGNvbHVtbnM9XFxcIjgsIGF1dG8sICosIGF1dG8sIDhcXFwiIGNsYXNzPVxcXCJtYWluLWNhcmQtY29udGFpbmVyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VMaWtlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLWwtMTZcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9zdGFyLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VJZ25vcmUgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tci0xNlxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9jYW5jZWwucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwiaW5mb1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNzIpKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgY2xhc3M9XFxcImg1IGRhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiYjeGYwNzM7IFxcXCIgY2xhc3M9XFxcImZhXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcImNhcmQuZGF0ZVxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz4gXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQudGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDEgdGl0bGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMlxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW3RleHRdPVxcXCJjYXJkLmF1dGhvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCBjYXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjdWxhci1wcm9ncmVzcy1iYXIgW2NvbF09XFxcIjJcXFwiIFtyb3ddPVxcXCIxXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93U3Bhbl09XFxcIjJcXFwiIFtwcm9ncmVzc109XFxcImNhcmQucG9wdWxhcml0eVxcXCI+PC9jaXJjdWxhci1wcm9ncmVzcy1iYXI+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxJbWFnZSBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93U3Bhbj1cXFwiNlxcXCIgW3NyY109XFxcImNhcmQuaW1hZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTBcXFwiPjwvSW1hZ2U+IC0tPlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNidG5JZ25vcmUgY29sPVxcXCIxXFxcIiByb3c9XFxcIjJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZVxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKHRhcCk9XFxcImRlY2xpbmUoY2FyZClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9jYW5jZWwucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNidG5MaWtlIGNvbD1cXFwiM1xcXCIgcm93PVxcXCIyXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJsaWtlKGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvc3Rhci5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9Td2lwZUxheW91dD5cXG4gICAgICAgIDwvYW5kcm9pZD5cXG4gICAgICAgIDxpb3M+XFxuICAgICAgICAgICAgPFN3aXBlTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHMgfCAgc2xpY2U6MDo1OyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja2luZ0Z1bmN0aW9uXFxcIiBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCIgW2FuaW1hdGlvblN0YXRlXT1cXFwic3dpcGVMYXlvdXRBbmltYXRlZFxcXCIgW2dlc3R1cmVNb2RlXT1cXFwiZ2VzdHVyZU1vZGVcXFwiIGNsYXNzPVxcXCJzd2lwZS1sYXlvdXRcXFwiIFtjbGFzcy5mcm9udF09XFxcImkgPT0gMFxcXCJcXG4gICAgICAgICAgICAgICAgW2NsYXNzLm1pZGRsZV09XFxcImkgPT0gMVxcXCIgW2NsYXNzLmJhY2tdPVxcXCJpID09IDJcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiIChsb2FkZWQpPVxcXCJzd2lwZUxheW91dExvYWRlZCgkZXZlbnQsIGJ0bklnbm9yZSwgYnRuTGlrZSwgYmFkZ2VMaWtlLCBiYWRnZUlnbm9yZSlcXFwiIChzd2lwZUxlZnQpPVxcXCJzd2lwZUxlZnRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIiAoc3dpcGVSaWdodCk9XFxcInN3aXBlUmlnaHRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IGNsYXNzPVxcXCJtYWluLWNhcmQgZGFya1xcXCIgc2hhZG93T2Zmc2V0SGVpZ2h0PVxcXCIyXFxcIiBzaGFkb3dDb2xvcj1cXFwiIzAwMDAwMFxcXCIgc2hhZG93T3BhY2l0eT1cXFwiMC4yXFxcIiBzaGFkb3dSYWRpdXM9XFxcIjMwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sICpcXFwiIGNvbHVtbnM9XFxcIjgsIGF1dG8sICosIGF1dG8sIDhcXFwiIGNsYXNzPVxcXCJtYWluLWNhcmQtY29udGFpbmVyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlTGlrZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1sLTE2XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3N0YXIucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlSWdub3JlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLXItMTZcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2NhbmNlbC5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd1NwYW49XFxcIjZcXFwiIFtzcmNdPVxcXCJjYXJkLmltYWdlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuSWdub3JlIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJkZWNsaW5lKGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2NhbmNlbC5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuTGlrZSBjb2w9XFxcIjNcXFwiIHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwibGlrZShjYXJkKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9zdGFyLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cXFwiMFxcXCIgcm93PVxcXCIyXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwiaW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGNsYXNzPVxcXCJoNSBkYXRlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwiJiN4ZjA3MzsgXFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJjYXJkLmRhdGVcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoMiB0aXRsZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMlxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW3RleHRdPVxcXCJjYXJkLmF1dGhvclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCB0aXRsZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjdWxhci1wcm9ncmVzcy1iYXIgW2NvbF09XFxcIjJcXFwiIFtyb3ddPVxcXCIxXFxcIiBbcm93U3Bhbl09XFxcIjJcXFwiIFtwcm9ncmVzc109XFxcImNhcmQucG9wdWxhcml0eVxcXCI+PC9jaXJjdWxhci1wcm9ncmVzcy1iYXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxuICAgICAgICAgICAgPC9Td2lwZUxheW91dD5cXG4gICAgICAgIDwvaW9zPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhY2FyZHMubGVuZ3RoXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBbQGZhZGVdPlxcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2VtcHR5LnBuZ1xcXCIgY2xhc3M9XFxcInBsYWNlaG9sZGVyLWltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJObyBtb3JlIGNhcmRzIHRvIGRpc3BsYXlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDQgcGxhY2Vob2xkZXItbGFiZWxcXFwiIG1hcmdpbkJvdHRvbT1cXFwiMTZcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJMb2FkIG1vcmVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbkJvdHRvbT1cXFwiNDBcXFwiICh0YXApPVxcXCJyZXNldENhcmRzKClcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDxBY3Rpdml0eUluZGljYXRvciB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBbYnVzeV09XFxcIiFpc0xvYWRlZFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8Y3VzdG9tLWFjdGlvbi1iYXIgcm93PVxcXCIwXFxcIiB0aXRsZT1cXFwiV2hhdCBpcyBpbXBvcnRhbnQgdG8geW91P1xcXCI+PC9jdXN0b20tYWN0aW9uLWJhcj5cXG5cXG48L0dyaWRMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9