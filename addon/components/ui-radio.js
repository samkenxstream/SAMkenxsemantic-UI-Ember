import Ember from 'ember';
import CheckboxMixin from '../mixins/checkbox-mixin';

export default Ember.Component.extend(CheckboxMixin, {
  type: 'radio',
  classNames: ['radio'],
  ignorableAttrs: ['checked', 'label', 'disabled', 'value', 'current'],

  init() {
    this._super(...arguments);

    if (Ember.isBlank(this.get('name'))) {
      this.set('name', 'default');
      Ember.Logger.warn("The required component parameter of 'name' was not passed into the ui-radio component");
    }
  },

  // Internal wrapper for onchange, to pass through checked
  _onChange() {
    let value = this.get('value');
    return this.attrs.onChange(value, this);
  },

  didInitSemantic() {
    this._super(...arguments);
    if (this.areAttrValuesEqual('checked', this.get('value'), this.get('current'))) {
      this.execute('set checked');
    }
  }
});
