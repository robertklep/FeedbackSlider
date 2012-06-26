(function() {

	var FeedbackSlider = Ext.define('Ext.ux.FeedbackSlider', {
		extend      : 'Ext.slider.Slider',
		xtype       : 'feedback-slider',
		initialize  : function() {
			this.callParent();
			this.on({
				scope   : this,
				drag    : function(slider, thumb, value, e) {
					this.setHelperValue(value);
				}
			});
		},
		setValue        : function(value) {
			this.callParent(arguments);
			this.setHelperValue(value);
		},
		setHelperValue  : function(value) {
			this.feedbackElement.dom.innerHTML = value;
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
						children  : [{
							reference : 'feedbackElement',
							tag       : 'div',
							cls       : Ext.baseCSSPrefix + 'slider-helper-input'
						}]
					},
					{
						reference : 'innerElement',
						cls       : Ext.baseCSSPrefix + 'component-outer'
					},
				]
			};
		},
		config  : {
			cls : Ext.baseCSSPrefix + 'feedback-slider'
		}
	});

	Ext.define('Ext.ux.FeedbackSliderField', {
		extend          : 'Ext.field.Slider',
		xtype           : 'feedback-slider-field',
		applyComponent  : function(config) {
			return Ext.factory(config, FeedbackSlider)
		},
		config  : {
			cls : Ext.baseCSSPrefix + 'feedback-slider-field'
		}
	});

})();
