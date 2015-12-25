var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", './base', 'aurelia-framework'], function (require, exports, base_1, aurelia_framework_1) {
    var Parent = (function (_super) {
        __extends(Parent, _super);
        function Parent(element) {
            _super.call(this, element);
        }
        Parent.prototype.attached = function () {
            _super.prototype.attached.call(this);
        };
        Parent = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [Element])
        ], Parent);
        return Parent;
    })(base_1.Base);
    exports.Parent = Parent;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmVudC50cyJdLCJuYW1lcyI6WyJQYXJlbnQiLCJQYXJlbnQuY29uc3RydWN0b3IiLCJQYXJlbnQuYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUdBO1FBQzRCQSwwQkFBSUE7UUFDOUJBLGdCQUFZQSxPQUFnQkE7WUFDMUJDLGtCQUFNQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUNqQkEsQ0FBQ0E7UUFDREQseUJBQVFBLEdBQVJBO1lBQ0VFLGdCQUFLQSxDQUFDQSxRQUFRQSxXQUFFQSxDQUFDQTtRQUNuQkEsQ0FBQ0E7UUFQSEY7WUFBQ0EsOEJBQVVBOzttQkFRVkE7UUFBREEsYUFBQ0E7SUFBREEsQ0FSQSxBQVFDQSxFQVAyQixXQUFJLEVBTy9CO0lBUFksY0FBTSxTQU9sQixDQUFBIiwiZmlsZSI6InBhcmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZX0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIFBhcmVudCBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gIH1cbiAgYXR0YWNoZWQoKSB7XG4gICAgc3VwZXIuYXR0YWNoZWQoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
