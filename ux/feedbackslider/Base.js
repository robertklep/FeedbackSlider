Ext.define('Ext.ux.feedbackslider.Base', {
  extend      : 'Ext.slider.Slider',
  initialize  : function() {
    this.callParent();
    this.on({
      scope   : this,
      drag    : function(slider, thumb, value, e) {
        this.setHelperValue(value);
      },
      change  : function(slider, thumb, newvalue, oldvalue) {
        this.setHelperValue(newvalue);
      }
    });
    this.feedbackElement.on({
      // don't propagate taps on feedback element
      tap : function(e) {
        e.stopPropagation();
      }
    });
  },
  setValue        : function(value) {
    this.callParent(arguments);
    this.setHelperValue(value);
  },
  getElementConfig: function() {
    return {
      reference : 'element',
      className : 'x-container',
      children  : [
        {
          reference : 'helper',
          tag       : 'div',
          cls       : Ext.baseCSSPrefix + 'slider-helper',
          children  : [ this.getFeedbackElement() ]
        },
        {
          reference : 'innerElement',
          cls       : Ext.baseCSSPrefix + 'component-outer'
        },
      ]
    };
  }
});
