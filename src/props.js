export default {
        'zoomEnabled':               { type: Boolean, default: true },
        'controlIconsEnabled':       { type: Boolean, default: false },
        'fit':                       { type: Boolean, default: true },
        'panEnabled':                { type: Boolean, default: true },
        'dblClickZoomEnabled':       { type: Boolean, default: true },
        'mouseWheelZoomEnabled':     { type: Boolean, default: true },
        'preventMouseEventsDefault': { type: Boolean, default: true },
        'contain':                   { type: Boolean, default: false },
        'center':                    { type: Boolean, default: true },
        viewportSelector:            { default: '.svg-pan-zoom_viewport' }
        , zoomScaleSensitivity:      { default: 0.2}
        , minZoom:                   { default: 0.5}
        , maxZoom:                   { default: 10}
        , refreshRate:               { default: 'auto'}
        , beforeZoom:                { }
        , onZoom:                    { }
        , beforePan:                 { }
        , onPan:                     { }
        , onUpdatedCTM:              { }
        , customEventsHandler:   { }
        , eventsListenerElement: {  }
};

