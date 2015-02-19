# tabs
Because this shouldn't take more than 100 lines...

## Dependencies

- jQuery - https://github.com/jquery/jquery
- Select - https://github.com/btpoe/select

## Setup

Pretty strait forward. Simply call `$('.Tab').tabs();` and you have fully functional tabs!
Call it as often as you like. It will only ever bind events once to each module. If you have AJAX content loaded in,
call it again and it will only create new instances for modules that haven't been initialized yet.