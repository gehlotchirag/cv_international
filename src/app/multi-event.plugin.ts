import { DomEventsPlugin } from '@angular/platform-browser/src/dom/events/dom_events';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { Injectable } from '@angular/core';

let noop = function () { };

@Injectable()
export class MultiEventPlugin extends DomEventsPlugin {

  private DOM = getDOM();

  getMultiEventArray(eventName: string): string[] {
    return eventName.split(",")
                    .filter((item, index): boolean => { return item && item != '' })
  }

  supports(eventName: string): boolean {
    return this.getMultiEventArray(eventName).length > 1
  }

  addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
    var zone = this.manager.getZone();
    var eventsArray = this.getMultiEventArray(eventName);

    // Entering back into angular to trigger changeDetection
    var outsideHandler = (event) => {
        zone.run(() => handler(event))
    };

    // Executed outside of angular so that change detection is not constantly triggered.
    var addAndRemoveHostListenersForOutsideEvents = () => {
      eventsArray.forEach((singleEventName: string) => {
        // Sending the events back up to this.manager allows the events to be handled by the appropriate plugin
        this.manager.addEventListener(element, singleEventName, outsideHandler);
      });
    }
    return this.manager.getZone().runOutsideAngular(addAndRemoveHostListenersForOutsideEvents);
  }

  addGlobalEventListener(target: string, eventName: string, handler: Function): Function {
    var element = this.DOM.getGlobalEventTarget(target);
    var zone = this.manager.getZone();
    var outsideHandler = (event) => zone.run(() => handler(event));

    if ((target === "document") || (target === "window" )) {
      return noop;
    }
    return this.manager.getZone().runOutsideAngular(
        () => this.DOM.onAndCancel(element, eventName, outsideHandler)
    );
  }
}
