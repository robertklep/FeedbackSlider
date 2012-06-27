Ext.define('Ext.ux.feedbackslider.OnewayField', {
  extend          : 'Ext.field.Slider',
  xtype           : 'feedback-slider-field',
  requires        : [ 'Ext.ux.feedbackslider.Oneway' ],
  applyComponent  : function(config) {
    return Ext.factory(config, 'Ext.ux.feedbackslider.Oneway');
  },
  config  : {
    cls: Ext.baseCSSPrefix + 'feedback-slider-field',
  }
});
