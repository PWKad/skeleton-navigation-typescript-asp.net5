define(["require", "exports"], function (require, exports) {
    var Welcome = (function () {
        function Welcome() {
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.previousValue = this.fullName;
        }
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.submit = function () {
            this.previousValue = this.fullName;
            alert("Welcome, " + this.fullName + "!");
        };
        Welcome.prototype.canDeactivate = function () {
            if (this.fullName !== this.previousValue) {
                return confirm('Are you sure you want to leave?');
            }
        };
        return Welcome;
    })();
    exports.Welcome = Welcome;
    var UpperValueConverter = (function () {
        function UpperValueConverter() {
        }
        UpperValueConverter.prototype.toView = function (value) {
            return value && value.toUpperCase();
        };
        return UpperValueConverter;
    })();
    exports.UpperValueConverter = UpperValueConverter;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUudHMiXSwibmFtZXMiOlsiV2VsY29tZSIsIldlbGNvbWUuY29uc3RydWN0b3IiLCJXZWxjb21lLmZ1bGxOYW1lIiwiV2VsY29tZS5zdWJtaXQiLCJXZWxjb21lLmNhbkRlYWN0aXZhdGUiLCJVcHBlclZhbHVlQ29udmVydGVyIiwiVXBwZXJWYWx1ZUNvbnZlcnRlci5jb25zdHJ1Y3RvciIsIlVwcGVyVmFsdWVDb252ZXJ0ZXIudG9WaWV3Il0sIm1hcHBpbmdzIjoiO0lBRUE7UUFBQUE7WUFDRUMsWUFBT0EsR0FBR0Esd0NBQXdDQSxDQUFDQTtZQUNuREEsY0FBU0EsR0FBR0EsTUFBTUEsQ0FBQ0E7WUFDbkJBLGFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ2pCQSxrQkFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFxQmhDQSxDQUFDQTtRQWRDRCxzQkFBSUEsNkJBQVFBO2lCQUFaQTtnQkFDRUUsTUFBTUEsQ0FBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsU0FBSUEsSUFBSUEsQ0FBQ0EsUUFBVUEsQ0FBQ0E7WUFDOUNBLENBQUNBOzs7V0FBQUY7UUFFREEsd0JBQU1BLEdBQU5BO1lBQ0VHLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO1lBQ25DQSxLQUFLQSxDQUFDQSxjQUFZQSxJQUFJQSxDQUFDQSxRQUFRQSxNQUFHQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBQ0E7UUFFREgsK0JBQWFBLEdBQWJBO1lBQ0VJLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEtBQUtBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6Q0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsaUNBQWlDQSxDQUFDQSxDQUFDQTtZQUNwREEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFDSEosY0FBQ0E7SUFBREEsQ0F6QkEsQUF5QkNBLElBQUE7SUF6QlksZUFBTyxVQXlCbkIsQ0FBQTtJQUVEO1FBQUFLO1FBSUFDLENBQUNBO1FBSENELG9DQUFNQSxHQUFOQSxVQUFPQSxLQUFLQTtZQUNWRSxNQUFNQSxDQUFDQSxLQUFLQSxJQUFJQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUN0Q0EsQ0FBQ0E7UUFDSEYsMEJBQUNBO0lBQURBLENBSkEsQUFJQ0EsSUFBQTtJQUpZLDJCQUFtQixzQkFJL0IsQ0FBQSIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge2NvbXB1dGVkRnJvbX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XG4gIGhlYWRpbmcgPSAnV2VsY29tZSB0byB0aGUgQXVyZWxpYSBOYXZpZ2F0aW9uIEFwcCEnO1xuICBmaXJzdE5hbWUgPSAnSm9obic7XG4gIGxhc3ROYW1lID0gJ0RvZSc7XG4gIHByZXZpb3VzVmFsdWUgPSB0aGlzLmZ1bGxOYW1lO1xuXG4gIC8vR2V0dGVycyBjYW4ndCBiZSBkaXJlY3RseSBvYnNlcnZlZCwgc28gdGhleSBtdXN0IGJlIGRpcnR5IGNoZWNrZWQuXG4gIC8vSG93ZXZlciwgaWYgeW91IHRlbGwgQXVyZWxpYSB0aGUgZGVwZW5kZW5jaWVzLCBpdCBubyBsb25nZXIgbmVlZHMgdG8gZGlydHkgY2hlY2sgdGhlIHByb3BlcnR5LlxuICAvL1RvIG9wdGltaXplIGJ5IGRlY2xhcmluZyB0aGUgcHJvcGVydGllcyB0aGF0IHRoaXMgZ2V0dGVyIGlzIGNvbXB1dGVkIGZyb20sIHVuY29tbWVudCB0aGUgbGluZSBiZWxvd1xuICAvL2FzIHdlbGwgYXMgdGhlIGNvcnJlc3BvbmRpbmcgaW1wb3J0IGFib3ZlLlxuICAvL0Bjb21wdXRlZEZyb20oJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpXG4gIGdldCBmdWxsTmFtZSgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRoaXMuZnVsbE5hbWU7XG4gICAgYWxlcnQoYFdlbGNvbWUsICR7dGhpcy5mdWxsTmFtZX0hYCk7XG4gIH1cblxuICBjYW5EZWFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLmZ1bGxOYW1lICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/Jyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcHBlclZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
