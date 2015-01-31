'use strict';

var AmpersandCheckboxView = require('ampersand-checkbox-view');
var extend = require('extend');
var uniqId = require('amp-unique-id');

var defaultTemplate = [
  '<div class="field style1 checkbox">',
    '<input type="checkbox">',
    '<label data-hook="label"></label>',
    '<div data-hook="message-container" class="message-container">',
        '<p data-hook="message-text"></p>',
    '</div>',
  '</div>'
].join('');

function CheckBox(options) {
  if (!options.template) options.template = defaultTemplate;
  this.startingValue = options.value;
  AmpersandCheckboxView.apply(this, arguments);
}

extend(CheckBox.prototype, AmpersandCheckboxView.prototype, {
  render: function () {
    AmpersandCheckboxView.prototype.render.apply(this, arguments);

    var id = uniqId(this.name);
    this.labelEl.setAttribute('for', id);
    this.input.id = id;
  },
  reset: function () {
    this.setValue(this.startingValue);
  }
});

module.exports = CheckBox;