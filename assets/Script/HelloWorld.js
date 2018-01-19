cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        if(cc.sys.isNative){
            window.io = SocketIO;
        }else{
            require('socket.io');
        }
        var self = this;
        var socket = io("http://localhost:3010");
        socket.on('connected', function(msg) {
            self.label.string = msg;
        });
    },

    // called every frame
    update: function (dt) {

    },
});
