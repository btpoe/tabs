# tabs
Because this shouldn't take more than 100 lines...

[View a demo](http://codepen.io/btpoe/details/EaEweY/)

## Dependencies

- jQuery - https://github.com/jquery/jquery
- Select - https://github.com/btpoe/select

## Setup

Pretty strait forward. Simply call in your javascript:
```javascript
$('.Tab').tabs();
```
and you have fully functional tabs!
Call it as often as you like. It will only ever bind events once to each module. If you have AJAX content loaded in,
call it again and it will only create new instances for modules that haven't been initialized yet. Speaking of events...

## Events

In the event that you are jumping to the tabs via a `#id` link somewhere else on the page, you can ensure the container is
active by triggering the following event:

```javascript
$TabContainer.trigger('scrollToAnchor');
```

If you are having issues with other `scrollToAnchor` event listeners bound to Tab containers, you can call it with it's namespace:

```javascript
$TabContainer.trigger('scrollToAnchor.tabs');
```