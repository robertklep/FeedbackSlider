FeedbackSlider
==============

Sencha Touch 2 implementations of Ext.slider.Slider and Ext.field.Slider
with textual feedback.

Introduction
------------

This extension introduces four new Sencha Touch components:
* `Ext.ux.FeedbackSlider` (_xtype: feedback-slider_)
* `Ext.ux.TwoWayFeedbackSlider` (_xtype: twoway-feedback-slider_)
* `Ext.ux.FeedbackSliderField` (_xtype: feedback-slider-field_)
* `Ext.ux.TwoWayFeedbackSliderField` (_xtype: twoway-feedback-slider-field_)

These should be drop-in replacements for respectively `Ext.slider.Slider`
(_xtype: slider_) and `Ext.field.Slider` (_xtype: sliderfield_), with an
added feedback text field positioned right next to the slider.

The `twoway` versions use an input field instead of a static text field, so
you can either use the slider to change the value, or use the input field.

Howto
-----

See `test.html` for an example on how to use.

Demo
----

Here's [a demo](http://robertklep.github.com/FeedbackSlider/demo/).
