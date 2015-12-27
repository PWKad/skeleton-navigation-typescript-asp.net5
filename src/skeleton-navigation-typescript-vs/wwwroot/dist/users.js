var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    var Users = (function () {
        function Users(http) {
            this.http = http;
            this.heading = 'Github Users';
            this.users = [];
            http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('https://api.github.com/');
            });
        }
        Users.prototype.activate = function () {
            var _this = this;
            return this.http.fetch('users')
                .then(function (response) { return response.json(); })
                .then(function (users) { return _this.users = users; });
        };
        Users = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], Users);
        return Users;
    })();
    exports.Users = Users;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLnRzIl0sIm5hbWVzIjpbIlVzZXJzIiwiVXNlcnMuY29uc3RydWN0b3IiLCJVc2Vycy5hY3RpdmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUlBO1FBS0VBLGVBQW9CQSxJQUFnQkE7WUFBaEJDLFNBQUlBLEdBQUpBLElBQUlBLENBQVlBO1lBSHBDQSxZQUFPQSxHQUFHQSxjQUFjQSxDQUFDQTtZQUN6QkEsVUFBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFHVEEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsTUFBTUE7Z0JBQ25CQSxNQUFNQTtxQkFDSEEsd0JBQXdCQSxFQUFFQTtxQkFDMUJBLFdBQVdBLENBQUNBLHlCQUF5QkEsQ0FBQ0EsQ0FBQ0E7WUFDNUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBO1FBRURELHdCQUFRQSxHQUFSQTtZQUFBRSxpQkFJQ0E7WUFIQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7aUJBQzVCQSxJQUFJQSxDQUFDQSxVQUFBQSxRQUFRQSxJQUFJQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQTtpQkFDakNBLElBQUlBLENBQUNBLFVBQUFBLEtBQUtBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLEVBQWxCQSxDQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLENBQUNBO1FBakJIRjtZQUFDQSw4QkFBVUE7O2tCQWtCVkE7UUFBREEsWUFBQ0E7SUFBREEsQ0FsQkEsQUFrQkNBLElBQUE7SUFqQlksYUFBSyxRQWlCakIsQ0FBQSIsImZpbGUiOiJ1c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQgJ2ZldGNoJztcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBVc2VycyB7XG4gIGhlYWRpbmcgPSAnR2l0aHViIFVzZXJzJztcbiAgdXNlcnMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xuICAgICAgY29uZmlnXG4gICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vJyk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCd1c2VycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbih1c2VycyA9PiB0aGlzLnVzZXJzID0gdXNlcnMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
