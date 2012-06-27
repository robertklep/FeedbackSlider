Ext.define('Ext.ux.feedbackslider.TwowayField', {
  extend          : 'Ext.field.Slider',
  xtype           : 'twoway-feedback-slider-field',
  requires        : [ 'Ext.ux.feedbackslider.Twoway' ],
  applyComponent  : function(config) {
    return Ext.factory(config, 'Ext.ux.feedbackslider.Twoway');
  },
  config  : {
    cls: Ext.baseCSSPrefix + 'feedback-slider-field',
  }
});
