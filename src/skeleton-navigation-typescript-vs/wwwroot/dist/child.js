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
    var Child = (function (_super) {
        __extends(Child, _super);
        function Child(element) {
            _super.call(this, element);
        }
        Child.prototype.attached = function () {
            _super.prototype.attached.call(this);
        };
        Child = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [Element])
        ], Child);
        return Child;
    })(base_1.Base);
    exports.Child = Child;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLnRzIl0sIm5hbWVzIjpbIkNoaWxkIiwiQ2hpbGQuY29uc3RydWN0b3IiLCJDaGlsZC5hdHRhY2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBR0E7UUFDMkJBLHlCQUFJQTtRQUM3QkEsZUFBWUEsT0FBZ0JBO1lBQzFCQyxrQkFBTUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDakJBLENBQUNBO1FBQ0RELHdCQUFRQSxHQUFSQTtZQUNFRSxnQkFBS0EsQ0FBQ0EsUUFBUUEsV0FBRUEsQ0FBQ0E7UUFDbkJBLENBQUNBO1FBUEhGO1lBQUNBLDhCQUFVQTs7a0JBUVZBO1FBQURBLFlBQUNBO0lBQURBLENBUkEsQUFRQ0EsRUFQMEIsV0FBSSxFQU85QjtJQVBZLGFBQUssUUFPakIsQ0FBQSIsImZpbGUiOiJjaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZX0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIENoaWxkIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgfVxuICBhdHRhY2hlZCgpIHtcbiAgICBzdXBlci5hdHRhY2hlZCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
