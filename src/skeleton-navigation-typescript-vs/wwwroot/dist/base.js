define(["require", "exports", 'aurelia-event-aggregator', 'aurelia-dependency-injection'], function (require, exports, aurelia_event_aggregator_1, aurelia_dependency_injection_1) {
    var Base = (function () {
        function Base(element) {
            this.loadingVMs = [];
            var container = new aurelia_dependency_injection_1.Container();
            this.events = container.root.get(aurelia_event_aggregator_1.EventAggregator);
            this.loadingVMs.push(this);
            this.element = element;
            this._getEventAggregator();
        }
        Base.prototype._getEventAggregator = function () {
            this.events.subscribe('composition-complete', function (payload) {
                console.log('-- Composition is complete ');
                console.log(payload);
            });
        };
        Base.prototype.attached = function () {
            var _this = this;
            var index = this.loadingVMs.indexOf(this);
            if (index > -1) {
                this.loadingVMs.splice(index, 1);
            }
            setTimeout(function () {
                if (_this.loadingVMs.length === 0) {
                    _this.compositionComplete();
                }
            }, 100);
            ko.applyBindings(this, this.element);
        };
        Base.prototype.compositionComplete = function () {
            this.events.publish('composition-complete');
        };
        return Base;
    })();
    exports.Base = Base;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOlsiQmFzZSIsIkJhc2UuY29uc3RydWN0b3IiLCJCYXNlLl9nZXRFdmVudEFnZ3JlZ2F0b3IiLCJCYXNlLmF0dGFjaGVkIiwiQmFzZS5jb21wb3NpdGlvbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiO0lBR0E7UUFJRUEsY0FBWUEsT0FBZ0JBO1lBRDVCQyxlQUFVQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUVkQSxJQUFJQSxTQUFTQSxHQUFHQSxJQUFJQSx3Q0FBU0EsRUFBRUEsQ0FBQ0E7WUFDaENBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLDBDQUFlQSxDQUFDQSxDQUFDQTtZQUNsREEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQzdCQSxDQUFDQTtRQUNERCxrQ0FBbUJBLEdBQW5CQTtZQUNFRSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxzQkFBc0JBLEVBQUVBLFVBQUFBLE9BQU9BO2dCQUNuREEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsNkJBQTZCQSxDQUFDQSxDQUFBQTtnQkFDMUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQ3ZCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUNERix1QkFBUUEsR0FBUkE7WUFBQUcsaUJBV0NBO1lBVkNBLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQzFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDZkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLENBQUNBO1lBQ0RBLFVBQVVBLENBQUNBO2dCQUNUQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDakNBLEtBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtZQUNIQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNSQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN2Q0EsQ0FBQ0E7UUFDREgsa0NBQW1CQSxHQUFuQkE7WUFDRUksSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxDQUFBQTtRQUM3Q0EsQ0FBQ0E7UUFDSEosV0FBQ0E7SUFBREEsQ0FoQ0EsQUFnQ0NBLElBQUE7SUFoQ1ksWUFBSSxPQWdDaEIsQ0FBQSIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgZWxlbWVudDtcbiAgZXZlbnRzO1xuICBsb2FkaW5nVk1zID0gW107XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBsZXQgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgIHRoaXMuZXZlbnRzID0gY29udGFpbmVyLnJvb3QuZ2V0KEV2ZW50QWdncmVnYXRvcik7XG4gICAgdGhpcy5sb2FkaW5nVk1zLnB1c2godGhpcyk7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9nZXRFdmVudEFnZ3JlZ2F0b3IoKTtcbiAgfVxuICBfZ2V0RXZlbnRBZ2dyZWdhdG9yKCkge1xuICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnY29tcG9zaXRpb24tY29tcGxldGUnLCBwYXlsb2FkID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCctLSBDb21wb3NpdGlvbiBpcyBjb21wbGV0ZSAnKVxuICAgICAgY29uc29sZS5sb2cocGF5bG9hZCk7XG4gICAgfSk7XG4gIH1cbiAgYXR0YWNoZWQoKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5sb2FkaW5nVk1zLmluZGV4T2YodGhpcyk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubG9hZGluZ1ZNcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxvYWRpbmdWTXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29tcG9zaXRpb25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gICAga28uYXBwbHlCaW5kaW5ncyh0aGlzLCB0aGlzLmVsZW1lbnQpO1xuICB9XG4gIGNvbXBvc2l0aW9uQ29tcGxldGUoKSB7XG4gICAgdGhpcy5ldmVudHMucHVibGlzaCgnY29tcG9zaXRpb24tY29tcGxldGUnKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
