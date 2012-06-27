(function() {
	var FeedbackSliderBase = Ext.define('Ext.ux.FeedbackSliderBase', {
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

  var FeedbackSlider = Ext.define('Ext.ux.FeedbackSlider', {
		extend              : 'Ext.ux.FeedbackSliderBase',
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

  var TwoWayFeedbackSlider = Ext.define('Ext.ux.TwoWayFeedbackSlider', {
		extend              : 'Ext.ux.FeedbackSliderBase',
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

	Ext.define('Ext.ux.FeedbackSliderField', {
		extend          : 'Ext.field.Slider',
		xtype           : 'feedback-slider-field',
		applyComponent  : function(config) {
      return Ext.factory(config, FeedbackSlider);
		},
		config  : {
			cls: Ext.baseCSSPrefix + 'feedback-slider-field',
		}
	});

	Ext.define('Ext.ux.TwoWayFeedbackSliderField', {
		extend          : 'Ext.field.Slider',
		xtype           : 'twoway-feedback-slider-field',
		applyComponent  : function(config) {
      return Ext.factory(config, TwoWayFeedbackSlider);
		},
		config  : {
			cls: Ext.baseCSSPrefix + 'feedback-slider-field',
		}
	});

})();
