webpackHotUpdate("bundle",{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" ios:marginBottom=\"48\">\n    <GridLayout row=\"0\" rowSpan=\"2\" paddingTop=\"30\" class=\"page\" (loaded)=\"onContainerLoaded($event)\" width=\"100%\" height=\"100%\">\n        <android>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <StackLayout class=\"main-card \">\n                    <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\n\n                        <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\n                            <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                        </GridLayout>\n                        <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\n                            <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n\n                        <GridLayout col=\"0\" row=\"1\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\" style=\"background: rgba(255, 255, 255, 0.075);\n                        \">\n                            <!--                   <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\n                            textWrap=\"true\">\n                            <FormattedString>\n                                <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                <Span [text]=\"card.date\"></Span>\n                            </FormattedString> \n                        </Label>-->\n                            <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\" textWrap=\"true\" class=\"h1 title\"></Label>\n                            <!--           <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\"\n                            textWrap=\"true\" class=\"h4 caption\"></Label>\n                        <circular-progress-bar [col]=\"2\" [row]=\"1\"\n                            [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar> -->\n                        </GridLayout>\n\n                        <!-- <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\"\n                            stretch=\"aspectFill\" borderRadius=\"10\"></Image> -->\n\n\n                        <GridLayout #btnIgnore col=\"1\" row=\"2\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                            <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n                        <GridLayout #btnLike col=\"3\" row=\"2\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                            <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                        </GridLayout>\n\n\n                    </GridLayout>\n                </StackLayout>\n            </SwipeLayout>\n        </android>\n        <ios>\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\n                <CardView class=\"main-card dark\" shadowOffsetHeight=\"2\" shadowColor=\"#000000\" shadowOpacity=\"0.2\" shadowRadius=\"30\">\n                    <GridLayout>\n                        <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\n\n                            <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\" stretch=\"aspectFill\"></Image>\n\n                            <GridLayout #btnIgnore col=\"1\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\n                            </GridLayout>\n                            <GridLayout #btnLike col=\"3\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\n                            </GridLayout>\n\n                            <GridLayout col=\"0\" row=\"2\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\">\n                                <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\" textWrap=\"true\">\n                                    <FormattedString>\n\n                                        <Span text=\"&#xf073; \" class=\"fa\"></Span>\n                                        <Span [text]=\"card.date\"></Span>\n                                    </FormattedString>\n                                </Label>\n                                <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\" textWrap=\"true\" class=\"h2 title\"></Label>\n                                <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\" textWrap=\"true\" class=\"h4 title\"></Label>\n                                <circular-progress-bar [col]=\"2\" [row]=\"1\" [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\n                            </GridLayout>\n\n                        </GridLayout>\n                    </GridLayout>\n                </CardView>\n            </SwipeLayout>\n        </ios>\n        <StackLayout *ngIf=\"!cards.length\" verticalAlignment=\"center\" [@fade]>\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\n            <Label text=\"No more cards to display\" textWrap=\"true\" class=\"h4 placeholder-label\" marginBottom=\"16\"></Label>\n            <Button text=\"Load more\" class=\"btn btn-primary\" marginBottom=\"40\" (tap)=\"resetCards()\"></Button>\n        </StackLayout>\n        <ActivityIndicator verticalAlignment=\"center\" [busy]=\"!isLoaded\" class=\"activity-indicator\"></ActivityIndicator>\n    </GridLayout>\n\n    <custom-action-bar row=\"0\" title=\"What is important to you?\"></custom-action-bar>\n\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4U0FBOFMsZUFBZSxnNkNBQWc2QyxrU0FBa1MsOG9EQUE4b0QsZUFBZSwwOEVBQTA4RSx3L0MiLCJmaWxlIjoiYnVuZGxlLjA3ZGE3ZGI4YTU1YjhmZDdjYWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgKlxcXCIgaW9zOm1hcmdpbkJvdHRvbT1cXFwiNDhcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3c9XFxcIjBcXFwiIHJvd1NwYW49XFxcIjJcXFwiIHBhZGRpbmdUb3A9XFxcIjMwXFxcIiBjbGFzcz1cXFwicGFnZVxcXCIgKGxvYWRlZCk9XFxcIm9uQ29udGFpbmVyTG9hZGVkKCRldmVudClcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgPGFuZHJvaWQ+XFxuICAgICAgICAgICAgPFN3aXBlTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHMgfCAgc2xpY2U6MDo1OyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja2luZ0Z1bmN0aW9uXFxcIiBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCIgW2FuaW1hdGlvblN0YXRlXT1cXFwic3dpcGVMYXlvdXRBbmltYXRlZFxcXCIgW2dlc3R1cmVNb2RlXT1cXFwiZ2VzdHVyZU1vZGVcXFwiIGNsYXNzPVxcXCJzd2lwZS1sYXlvdXRcXFwiIFtjbGFzcy5mcm9udF09XFxcImkgPT0gMFxcXCJcXG4gICAgICAgICAgICAgICAgW2NsYXNzLm1pZGRsZV09XFxcImkgPT0gMVxcXCIgW2NsYXNzLmJhY2tdPVxcXCJpID09IDJcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiIChsb2FkZWQpPVxcXCJzd2lwZUxheW91dExvYWRlZCgkZXZlbnQsIGJ0bklnbm9yZSwgYnRuTGlrZSwgYmFkZ2VMaWtlLCBiYWRnZUlnbm9yZSlcXFwiIChzd2lwZUxlZnQpPVxcXCJzd2lwZUxlZnRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIiAoc3dpcGVSaWdodCk9XFxcInN3aXBlUmlnaHRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtYWluLWNhcmQgXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sICpcXFwiIGNvbHVtbnM9XFxcIjgsIGF1dG8sICosIGF1dG8sIDhcXFwiIGNsYXNzPVxcXCJtYWluLWNhcmQtY29udGFpbmVyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VMaWtlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLWwtMTZcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9zdGFyLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VJZ25vcmUgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tci0xNlxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9jYW5jZWwucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwiaW5mb1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiaDUgZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwiJiN4ZjA3MzsgXFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwiY2FyZC5kYXRlXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPiBcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoMSB0aXRsZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIyXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQuYXV0aG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImg0IGNhcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmN1bGFyLXByb2dyZXNzLWJhciBbY29sXT1cXFwiMlxcXCIgW3Jvd109XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dTcGFuXT1cXFwiMlxcXCIgW3Byb2dyZXNzXT1cXFwiY2FyZC5wb3B1bGFyaXR5XFxcIj48L2NpcmN1bGFyLXByb2dyZXNzLWJhcj4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPEltYWdlIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dTcGFuPVxcXCI2XFxcIiBbc3JjXT1cXFwiY2FyZC5pbWFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgYm9yZGVyUmFkaXVzPVxcXCIxMFxcXCI+PC9JbWFnZT4gLS0+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bklnbm9yZSBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMlxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwiZGVjbGluZShjYXJkKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2NhbmNlbC5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bkxpa2UgY29sPVxcXCIzXFxcIiByb3c9XFxcIjJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZVxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKHRhcCk9XFxcImxpa2UoY2FyZClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9zdGFyLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1N3aXBlTGF5b3V0PlxcbiAgICAgICAgPC9hbmRyb2lkPlxcbiAgICAgICAgPGlvcz5cXG4gICAgICAgICAgICA8U3dpcGVMYXlvdXQgKm5nRm9yPVxcXCJsZXQgY2FyZCBvZiBjYXJkcyB8ICBzbGljZTowOjU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNraW5nRnVuY3Rpb25cXFwiIFt2aXNpYmlsaXR5XT1cXFwiaXNMb2FkZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIiBbYW5pbWF0aW9uU3RhdGVdPVxcXCJzd2lwZUxheW91dEFuaW1hdGVkXFxcIiBbZ2VzdHVyZU1vZGVdPVxcXCJnZXN0dXJlTW9kZVxcXCIgY2xhc3M9XFxcInN3aXBlLWxheW91dFxcXCIgW2NsYXNzLmZyb250XT1cXFwiaSA9PSAwXFxcIlxcbiAgICAgICAgICAgICAgICBbY2xhc3MubWlkZGxlXT1cXFwiaSA9PSAxXFxcIiBbY2xhc3MuYmFja109XFxcImkgPT0gMlxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKGxvYWRlZCk9XFxcInN3aXBlTGF5b3V0TG9hZGVkKCRldmVudCwgYnRuSWdub3JlLCBidG5MaWtlLCBiYWRnZUxpa2UsIGJhZGdlSWdub3JlKVxcXCIgKHN3aXBlTGVmdCk9XFxcInN3aXBlTGVmdENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiIChzd2lwZVJpZ2h0KT1cXFwic3dpcGVSaWdodENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiPlxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgY2xhc3M9XFxcIm1haW4tY2FyZCBkYXJrXFxcIiBzaGFkb3dPZmZzZXRIZWlnaHQ9XFxcIjJcXFwiIHNoYWRvd0NvbG9yPVxcXCIjMDAwMDAwXFxcIiBzaGFkb3dPcGFjaXR5PVxcXCIwLjJcXFwiIHNoYWRvd1JhZGl1cz1cXFwiMzBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0bywgKlxcXCIgY29sdW1ucz1cXFwiOCwgYXV0bywgKiwgYXV0bywgOFxcXCIgY2xhc3M9XFxcIm1haW4tY2FyZC1jb250YWluZXJcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VMaWtlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLWwtMTZcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvc3Rhci5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VJZ25vcmUgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tci0xNlxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93U3Bhbj1cXFwiNlxcXCIgW3NyY109XFxcImNhcmQuaW1hZ2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNidG5JZ25vcmUgY29sPVxcXCIxXFxcIiByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZVxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKHRhcCk9XFxcImRlY2xpbmUoY2FyZClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNidG5MaWtlIGNvbD1cXFwiM1xcXCIgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJsaWtlKGNhcmQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3N0YXIucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVxcXCIwXFxcIiByb3c9XFxcIjJcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG9cXFwiIGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJpbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgY2xhc3M9XFxcImg1IGRhdGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCImI3hmMDczOyBcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcImNhcmQuZGF0ZVxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW3RleHRdPVxcXCJjYXJkLnRpdGxlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImgyIHRpdGxlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIyXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQuYXV0aG9yXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImg0IHRpdGxlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmN1bGFyLXByb2dyZXNzLWJhciBbY29sXT1cXFwiMlxcXCIgW3Jvd109XFxcIjFcXFwiIFtyb3dTcGFuXT1cXFwiMlxcXCIgW3Byb2dyZXNzXT1cXFwiY2FyZC5wb3B1bGFyaXR5XFxcIj48L2NpcmN1bGFyLXByb2dyZXNzLWJhcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXG4gICAgICAgICAgICA8L1N3aXBlTGF5b3V0PlxcbiAgICAgICAgPC9pb3M+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFjYXJkcy5sZW5ndGhcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtAZmFkZV0+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvZW1wdHkucG5nXFxcIiBjbGFzcz1cXFwicGxhY2Vob2xkZXItaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk5vIG1vcmUgY2FyZHMgdG8gZGlzcGxheVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCBwbGFjZWhvbGRlci1sYWJlbFxcXCIgbWFyZ2luQm90dG9tPVxcXCIxNlxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkxvYWQgbW9yZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbWFyZ2luQm90dG9tPVxcXCI0MFxcXCIgKHRhcCk9XFxcInJlc2V0Q2FyZHMoKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtidXN5XT1cXFwiIWlzTG9hZGVkXFxcIiBjbGFzcz1cXFwiYWN0aXZpdHktaW5kaWNhdG9yXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgIDxjdXN0b20tYWN0aW9uLWJhciByb3c9XFxcIjBcXFwiIHRpdGxlPVxcXCJXaGF0IGlzIGltcG9ydGFudCB0byB5b3U/XFxcIj48L2N1c3RvbS1hY3Rpb24tYmFyPlxcblxcbjwvR3JpZExheW91dD5cIiJdLCJzb3VyY2VSb290IjoiIn0=