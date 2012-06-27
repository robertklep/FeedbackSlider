Ext.define('Ext.ux.feedbackslider.Twoway', {
  extend              : 'Ext.ux.feedbackslider.Base',
  xtype               : 'twoway-feedback-slider',
  initialize          : function() {
    this.callParent();
    this.feedbackElement.dom.onchange = Ext.bind(function(e) {
      var max   = this.getMaxValue();
      var min   = this.getMinValue();
      var value = Number(this.feedbackElement.getValue());

      this.setValue( Math.max(min, Math.min(max, value)) );
    }, this);
  },
  setHelperValue      : function(value) {
    this.feedbackElement.dom.value = value;
  },
  getFeedbackElement  : function() {
    return {
      reference : 'feedbackElement',
      tag       : 'input',
      type      : 'number',
      cls       : Ext.baseCSSPrefix + 'slider-helper-input'
    }
  },
  config  : {
    cls : [
      Ext.baseCSSPrefix + 'feedback-slider',
      Ext.baseCSSPrefix + 'feedback-slider-two-way'
    ].join(" ")
  }
});
