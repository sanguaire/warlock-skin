Hooks.once("init", () => {
    CONFIG.canvasTextStyle = foundry.utils.mergeObject(
        CONFIG.canvasTextStyle,
        {
            "styleID": 41,
            "_align": "center",
            "_breakWords": false,
            "_dropShadow": false,
            "_dropShadowAlpha": 1,
            "_dropShadowAngle": 0,
            "_dropShadowBlur": 2,
            "_dropShadowColor": "#000000",
            "_dropShadowDistance": 0,
            "_fill": "#111111",
            "_fillGradientType": 0,
            "_fillGradientStops": [],
            "_fontFamily": "Courier New",
            "_fontSize": 36,
            "_fontStyle": "normal",
            "_fontVariant": "normal",
            "_fontWeight": "bold",
            "_letterSpacing": 0,
            "_lineHeight": 0,
            "_lineJoin": "miter",
            "_miterLimit": 10,
            "_padding": 1,
            "_stroke": "#111111",
            "_strokeThickness": 0,
            "_textBaseline": "alphabetic",
            "_trim": false,
            "_whiteSpace": "pre",
            "_wordWrap": false,
            "_wordWrapWidth": 100,
            "_leading": 0
        }
    ) ;
});

Hooks.on("renderPause", () => {
    $(".paused img").attr("src", "modules/warlock-skin/assets/pause-skull.webp");
});
