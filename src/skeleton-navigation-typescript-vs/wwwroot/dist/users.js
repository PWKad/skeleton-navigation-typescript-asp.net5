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
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', './base', 'knockout', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, base_1, ko) {
    var Users = (function (_super) {
        __extends(Users, _super);
        function Users(http, element) {
            var _this = this;
            _super.call(this, element);
            this.http = http;
            this.heading = ko.observable('Github Users');
            this.users = ko.observableArray([]);
            this.computedUsers = ko.computed(function () {
                return _this.users();
            });
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
                .then(function (users) { return _this.users(users); });
        };
        Users = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient, Element])
        ], Users);
        return Users;
    })(base_1.Base);
    exports.Users = Users;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLnRzIl0sIm5hbWVzIjpbIlVzZXJzIiwiVXNlcnMuY29uc3RydWN0b3IiLCJVc2Vycy5hY3RpdmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBTUE7UUFDMkJBLHlCQUFJQTtRQU83QkEsZUFBb0JBLElBQWdCQSxFQUFFQSxPQUFnQkE7WUFSeERDLGlCQXNCQ0E7WUFiR0Esa0JBQU1BLE9BQU9BLENBQUNBLENBQUNBO1lBREdBLFNBQUlBLEdBQUpBLElBQUlBLENBQVlBO1lBTnBDQSxZQUFPQSxHQUFHQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtZQUN4Q0EsVUFBS0EsR0FBR0EsRUFBRUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLGtCQUFhQSxHQUFHQSxFQUFFQSxDQUFDQSxRQUFRQSxDQUFDQTtnQkFDMUJBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1lBQ3RCQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUlEQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxNQUFNQTtnQkFDbkJBLE1BQU1BO3FCQUNIQSx3QkFBd0JBLEVBQUVBO3FCQUMxQkEsV0FBV0EsQ0FBQ0EseUJBQXlCQSxDQUFDQSxDQUFDQTtZQUM1Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFFREQsd0JBQVFBLEdBQVJBO1lBQUFFLGlCQUlDQTtZQUhDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTtpQkFDNUJBLElBQUlBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBO2lCQUNqQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBakJBLENBQWlCQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBQ0E7UUFyQkhGO1lBQUNBLDhCQUFVQTs7a0JBc0JWQTtRQUFEQSxZQUFDQTtJQUFEQSxDQXRCQSxBQXNCQ0EsRUFyQjBCLFdBQUksRUFxQjlCO0lBckJZLGFBQUssUUFxQmpCLENBQUEiLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3QsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQge0Jhc2V9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgKiBhcyBrbyBmcm9tICdrbm9ja291dCc7XG5pbXBvcnQgJ2ZldGNoJztcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBVc2VycyBleHRlbmRzIEJhc2Uge1xuICBoZWFkaW5nID0ga28ub2JzZXJ2YWJsZSgnR2l0aHViIFVzZXJzJyk7XG4gIHVzZXJzID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgY29tcHV0ZWRVc2VycyA9IGtvLmNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gdGhpcy51c2VycygpO1xuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgICBodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xuICAgICAgY29uZmlnXG4gICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vJyk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCd1c2VycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbih1c2VycyA9PiB0aGlzLnVzZXJzKHVzZXJzKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
