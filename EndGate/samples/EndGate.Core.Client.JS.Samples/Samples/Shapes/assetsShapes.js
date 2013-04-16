var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ShapeBuilder = (function (_super) {
    __extends(ShapeBuilder, _super);
    function ShapeBuilder(_canvas, targetBuilders) {
        _super.call(this, _canvas);
        this._canvas = _canvas;
        var that = this, builderClicked = function () {
            targetBuilders.removeClass("disabled");
            $(this).addClass("disabled");
            that.BuildShape($(this)[0]);
        };
        $.each(targetBuilders, function (index, val) {
            $(val).click(builderClicked);
        });
        $(targetBuilders[0]).click();
    }
    ShapeBuilder.prototype.BuildShape = function (builder) {
        var shapeType = EndGate.Core.Graphics.Shapes[$(builder).attr("shape")], newShape;
        if(!this.Shape) {
            newShape = new shapeType(this._canvas.width / 2, this._canvas.height / 2, 200, 200);
        } else {
            newShape = new shapeType(this.Shape.Position.X, this.Shape.Position.Y, this.Shape.Size.Width, this.Shape.Size.Height);
            newShape.Color(this.Shape.Color());
            newShape.Border(this.Shape.BorderThickness(), this.Shape.BorderColor());
            newShape.Shadow(this.Shape.ShadowX(), this.Shape.ShadowY(), this.Shape.ShadowColor(), this.Shape.ShadowBlur());
            newShape.Opacity(this.Shape.Opacity());
            newShape.Rotation = this.Shape.Rotation;
            this.Scene.Remove(this.Shape);
        }
        this.Shape = newShape;
        this.Scene.Add(this.Shape);
    };
    return ShapeBuilder;
})(EndGate.Core.Game);
var ColorPicker = (function () {
    function ColorPicker(red, green, blue, defaultColor, oncolorchange) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.oncolorchange = oncolorchange;
        var _this = this;
        var updateGraphic = function () {
            _this.UpdateColor();
        };
        this.sliders = [
            this.red, 
            this.green, 
            this.blue
        ];
        for(var i = 0; i < 3; i++) {
            this.sliders[i].slider({
                orientation: "horizontal",
                range: "min",
                max: 255,
                value: defaultColor[i],
                animate: true,
                slide: updateGraphic,
                change: updateGraphic
            });
        }
        this.UpdateColor();
    }
    ColorPicker.prototype.UpdateColor = function () {
        var red = this.red.slider("value"), green = this.green.slider("value"), blue = this.blue.slider("value");
        this.oncolorchange("rgb(" + red + ", " + green + ", " + blue + ")");
    };
    return ColorPicker;
})();
var CustomSlider = (function () {
    function CustomSlider(_target, _min, _max, _defaultValue, onsliderchange) {
        this._target = _target;
        this._min = _min;
        this._max = _max;
        this._defaultValue = _defaultValue;
        this.onsliderchange = onsliderchange;
        var _this = this;
        var sliderChange = function () {
            _this.SliderChange();
        };
        this._target.slider({
            orientation: "horizontal",
            range: "min",
            min: this._min,
            max: this._max,
            value: this._defaultValue,
            animate: true,
            slide: sliderChange,
            change: sliderChange
        });
        this.SliderChange();
    }
    CustomSlider.prototype.SliderChange = function () {
        this.onsliderchange(parseInt(this._target.slider("value")));
    };
    return CustomSlider;
})();
//@ sourceMappingURL=assetsShapes.js.map
