Ext.define('Ext.ux.feedbackslider.Oneway', {
  extend              : 'Ext.ux.feedbackslider.Base',
  xtype               : 'feedback-slider',
  setHelperValue      : function(value) {
    this.feedbackElement.dom.innerHTML = value;
  },
  getFeedbackElement  : function() {
    return {
      reference : 'feedbackElement',
      tag       : 'div',
      cls       : Ext.baseCSSPrefix + 'slider-helper-input'
    }
  },
  config  : {
    cls : [
      Ext.baseCSSPrefix + 'feedback-slider',
      Ext.baseCSSPrefix + 'feedback-slider-one-way'
    ].join(" ")
  }
});
