# Accessible Datepicker

This datepicker is a work in progress - it functions fine but is missing features that would make it complete.
Based off of [W3.org's datepicker example](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html) and modified to work in personal use-cases.

## Getting started

Include references to datepicker styles and scripts in your template:

`<link href="datepicker.min.css" rel="stylesheet" />`

`<script src="datepicker.min.js"></script>`

## Usage

### Single datepicker

Wrap standard label and input with `.datepicker` and JavaScript will insert other necessary DOM elements for button and dialog, examples.

```
<div class="datepicker">
  <label for="...">Date (mm/dd/yyyy)</label>
  <input id="..." name="..." type="text">
</div>
```

or

```
<div class="datepicker">
  <input name="..." type="text" aria-label="Date (mm/dd/yyyy)">
</div>
```

### Range datepicker

If a date range is required, two separate datepicker inputs should be wrapped in a fieldset, examples:

```
<fieldset class="datepicker__fieldset">
  <legend>Date range</legend>

  <div class="datepicker">
    <label for="datepicker-range-start">Start date (mm/dd/yyyy)</label>
    <input id="datepicker-range-start" name="datepicker-range-start-input" type="text">
  </div>

  <div class="datepicker">
    <label for="datepicker-range-end">End date (mm/dd/yyyy)</label>
    <input id="datepicker-range-end" name="datepicker-range-end-input" type="text">
  </div>
</fieldset>
```

Note: Fieldset class is not required but provides some styles to match the default datepicker theme - remove to inherit from browser default or site theme. Default is stacked for better readability but if inline display is needed, add modifier class of `datepicker__fieldset--inline`.

## Theming

Some base datepicker styles can be modified by updating CSS custom properties (variables) after the linked stylesheet - this is the preferred method to theme unless overriding is necessary.

## Functionality

This datepicker was modified from [W3's Datepicker Dialog](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/datepicker-dialog.html) and should follow the same accessibility features and keyboard support:

### Keyboard Support

#### Choose Date Button

| Key | Function |
| ------------- | ------------- |
| `Space`, `Enter` | Open the date picker dialog. Move focus to selected date, i.e., the date displayed in the date input text field. If no date has been selected, places focus on the current date.|

#### Date Picker Dialog

| Key | Function |
| ------------- | ------------- |
| `esc` | Closes the dialog and returns focus to the "Choose Date" button. |
| `Tab` | Moves focus to next element in the dialog tab sequence. Note that, as specified in the grid design pattern, only one button in the calendar grid is in the tab sequence. If focus is on the last button, moves focus to the first button. |
| `Shift + Tab` | Moves focus to previous element in the dialog tab sequence. Note that, as specified in the grid design pattern, only one button in the calendar grid is in the tab sequence. If focus is on the first button, moves focus to the last button. |

#### Date Picker Dialog: Month/Year Buttons

| Key | Function |
| ------------- | ------------- |
| `Space`, `Enter` | Change the month and/or year displayed in the calendar grid. |

#### Date Picker Dialog: Date Grid

| Key | Function |
| ------------- | ------------- |
| `Space`, `Enter` | Select the date, close the dialog, and move focus to the "Choose Date" button. Update the value of the "Date" input with the selected date. Update the accessible name of the "Choose Date" button to include the selected date.  |
| `Up Arrow` | Moves focus to the same day of the previous week. |
| `Down Arrow` | Moves focus to the same day of the next week. |
| `Right Arrow` | Moves focus to the next day. |
| `Left Arrow` | Moves focus to the previous day. |
| `Home` | Moves focus to the first day (e.g Sunday) of the current week. |
| `End` | Moves focus to the last day (e.g. Saturday) of the current week. |
| `Page Up` | Changes the grid of dates to the previous month. Sets focus on the same day of the same week. If that day does not exist, then moves focus to the same day of the previous or next week. |
| `Shift + Page Up` | Changes the grid of dates to the previous Year. Sets focus on the same day of the same week. If that day does not exist, then moves focus to the same day of the previous or next week. |
| `Page Down` | Changes the grid of dates to the next month. Sets focus on the same day of the same week. If that day does not exist, then moves focus to the same day of the previous or next week. |
| `Shift + Page Down` | Changes the grid of dates to the next Year. Sets focus on the same day of the same week. If that day does not exist, then moves focus to the same day of the previous or next week. |

#### Date Picker Dialog: OK and Cancel Buttons

| Key | Function |
| ------------- | ------------- |
| `Space`, `Enter` | Activates the button: "Cancel": Closes the dialog, moves focus to "Choose Date" button, does not update date in date input. "OK": Closes the dialog, moves focus to "Choose Date" button, updates date in date input. |

## Build

Note: for maximum compatibility and minimal dependencies, please write **vanilla JavaScript only**

1. `npm install`
2. Run `gulp` to watch `.css` and `.js` files in `src` folder. Files will be compiled and minified to `dist` folder on saves while Gulp is running.
