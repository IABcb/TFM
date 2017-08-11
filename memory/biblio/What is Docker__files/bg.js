(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.trusted_bg_image = function() {
	this.initialize(img.trusted_bg_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,824);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.392,1],0,0,0,0,0,4.9).s().p("AgfAgQgOgNAAgTQAAgSAOgNQANgOASAAQATAAANAOQAOANAAASQAAATgOANQgNAOgTAAQgSAAgNgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-4.5,-4.6,9.1,9.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-57.8,-4.2,0.7,0.7);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({_off:false},0).to({x:-47.7,y:1.5,alpha:1},4).to({regY:-0.1,x:46.9,y:-1.3},37).to({regY:0,guide:{path:[46.9,-1.3,53.4,-4.2,59.8,-7.1]},alpha:0},5).to({_off:true},1).wait(22));

	// Layer 5
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57.7,-3.6,0.85,0.85);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({guide:{path:[-57.7,-3.6,-51.4,-0.4,-45.1,2.7]},alpha:1},5).to({regY:-0.1,x:49.5,y:-2.5},37).to({regY:0,guide:{path:[49.5,-2.5,54.7,-4.8,59.8,-7.1]},alpha:0},4).to({_off:true},1).wait(23));

	// Layer 6
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-57.8,-3.7);
	this.instance_2.alpha = 0;
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({guide:{path:[-57.7,-3.7,-50.1,0.2,-42.5,4]},alpha:1},6).to({x:52.1,y:-3.7},37).to({guide:{path:[52.1,-3.7,56,-5.4,59.8,-7.1]},alpha:0},3).to({_off:true},1).wait(24));

	// Layer 7
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18.3,-97.3,0.7,0.7);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({regX:-0.1,regY:-0.1,guide:{path:[-18.2,-97.3,-18.4,-89.1,-18.6,-81]},alpha:1},5).to({regX:0,regY:0,guide:{path:[-18.7,-81,-18.7,-80.2,-18.7,-79.4,-28.7,-75.5,-38.6,-71.5,-38.8,-44.1,-38.9,-16.7,-52.9,-11.1,-66.8,-5.5,-66.8,9.2,-66.7,23.9,-57.3,29.8,-47.9,35.8,-53.9,51,-59.9,66.2,-52.5,83.5,-45,100.8,-42.9,101.7,-40.7,102.7]}},72).to({guide:{path:[-40.7,102.7,-30.3,107.2,-19.8,111.7]},alpha:0},7).to({_off:true},1).wait(163));

	// Layer 8
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-18.3,-97.3,0.85,0.85);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({regX:-0.1,regY:-0.1,guide:{path:[-18.3,-97.3,-18.5,-88.4,-18.7,-79.4,-19.5,-79.1,-20.3,-78.7]},alpha:1},6).to({regX:0,regY:0,guide:{path:[-20.4,-78.7,-29.5,-75.1,-38.6,-71.5,-38.8,-44.1,-38.9,-16.7,-52.9,-11.1,-66.8,-5.5,-66.8,9.2,-66.7,23.9,-57.3,29.8,-47.9,35.8,-53.9,51,-59.9,66.2,-52.5,83.5,-45,100.8,-40.6,102.7,-36.1,104.6]}},72).to({guide:{path:[-36.1,104.7,-27.1,108.6,-18.1,112.5]},alpha:0},6).to({_off:true},1).wait(164));

	// Layer 9
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-18.3,-97.4);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({guide:{path:[-18.3,-97.3,-18.5,-88.4,-18.7,-79.4,-21,-78.5,-23.3,-77.6]},alpha:1},7).to({guide:{path:[-23.4,-77.5,-31,-74.5,-38.6,-71.5,-38.8,-44.1,-38.9,-16.7,-52.9,-11.1,-66.8,-5.5,-66.8,9.2,-66.7,23.9,-57.3,29.8,-47.9,35.8,-53.9,51,-59.9,66.2,-52.5,83.5,-45,100.8,-39.5,103.2,-33.9,105.6]}},72).to({guide:{path:[-33.9,105.6,-26.4,108.8,-18.9,112.1]},alpha:0},5).to({_off:true},1).wait(165));

	// Layer 10
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(26.6,-98.2,0.7,0.7);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({regX:0.1,regY:-0.1,guide:{path:[26.6,-98.1,26.7,-90.7,26.7,-83.3]},alpha:1},5).to({regX:0,regY:0,guide:{path:[26.9,-83.3,26.9,-81.3,26.9,-79.2,32.8,-78.1,38.7,-77,40,-48.1,41.2,-19.1,54.1,-15.7,66.9,-12.3,66.9,4.2,66.9,20.8,54.2,27.4,41.4,34.1,50.1,47.5,58.7,61,54.9,70.2,51,79.4]}},72).to({guide:{path:[51.1,79.3,47,89,43,98.6]},alpha:0},7).to({_off:true},1).wait(71));

	// Layer 11
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(26.6,-98.2,0.85,0.85);
	this.instance_7.alpha = 0;
	this.instance_7.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(93).to({_off:false},0).to({regX:0.1,regY:-0.1,guide:{path:[26.6,-98.1,26.7,-89.2,26.7,-80.2]},alpha:1},6).to({regX:0,regY:0,guide:{path:[26.9,-80.3,26.9,-79.8,26.9,-79.2,32.8,-78.1,38.7,-77,40,-48.1,41.2,-19.1,54.1,-15.7,66.9,-12.3,66.9,4.2,66.9,20.8,54.2,27.4,41.4,34.1,50.1,47.5,58.7,61,54.3,71.6,49.9,82.2]}},72).to({guide:{path:[49.9,82.2,46.4,90.4,43,98.6]},alpha:0},6).to({_off:true},1).wait(72));

	// Layer 12
	this.instance_8 = new lib.Symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(26.6,-98.3);
	this.instance_8.alpha = 0;
	this.instance_8.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(92).to({_off:false},0).to({guide:{path:[26.6,-98.2,26.7,-88.7,26.8,-79.2,27.7,-79,28.7,-78.9]},alpha:1},7).to({guide:{path:[28.8,-78.9,33.8,-77.9,38.7,-77,40,-48,41.2,-19.1,54.1,-15.7,66.9,-12.3,66.9,4.3,66.9,20.8,54.2,27.5,41.4,34.1,50.1,47.6,58.7,61,53.7,73,48.7,84.9]}},72).to({guide:{path:[48.7,84.9,45.8,91.8,43,98.6]},alpha:0},5).to({_off:true},1).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-120,52,54);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(25.3,-46.1,0.7,0.7);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:0.1,regY:-0.1,guide:{path:[25.3,-46,14.1,-41.4,2.9,-36.7]},alpha:1},4).to({regX:0,regY:0,guide:{path:[2.9,-36.7,-30,-23,-63,-9.2,-63,-9.1,-63,-9,-44.4,-2.8,-25.8,3.4,-24.4,24.7,-23,46.1,3.5,34,30,21.9]}},35).to({guide:{path:[30.2,21.8,46.7,14.3,63.2,6.8]},alpha:0},6).to({_off:true},1).wait(39));

	// Layer 3
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.3,-46.1,0.85,0.85);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regY:-0.1,guide:{path:[25.3,-46,11.4,-40.2,-2.6,-34.4]},alpha:1},5).to({guide:{path:[-2.6,-34.4,-32.8,-21.8,-63,-9.2,-63,-9.1,-63,-9.1,-44.4,-2.8,-25.7,3.4,-24.3,24.7,-22.9,46,6.3,32.7,35.6,19.3]}},35).to({regY:0,guide:{path:[35.5,19.3,49.3,13.1,63.2,6.8]},alpha:0},5).to({_off:true},1).wait(40));

	// Layer 4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.3,-46.1);
	this.instance_2.alpha = 0;
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[25.3,-46,8.6,-39.1,-8,-32.1]},alpha:1},6).to({guide:{path:[-8.2,-32.1,-35.6,-20.7,-63,-9.2,-63,-9.1,-63,-9,-44.4,-2.8,-25.8,3.4,-24.4,24.7,-23,46.1,8.7,31.6,40.4,17.1]}},35).to({guide:{path:[40.5,17.1,51.5,12.1,62.5,7.2]},alpha:0},4).to({_off:true},1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,-68.7,53,53);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(85.8,-82,0.7,0.7);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:0.1,regY:-0.1,guide:{path:[85,-82,78.2,-78.4,71.4,-74.8]},alpha:1},4).to({guide:{path:[71.3,-74.8,14.6,-44.4,-42.1,-14,-66.5,35.7,-90.9,85.3,-17.7,42.8,55.4,0.3,67,-27.5,78.5,-55.4]}},121).to({regX:0,regY:0,guide:{path:[78.6,-55.3,83.7,-67.8,88.9,-80.3]},alpha:0},7).to({_off:true},1).wait(15));

	// Layer 3
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.1,-82,0.85,0.85);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:0.1,regY:-0.1,guide:{path:[85,-82,76.5,-77.4,67.9,-72.9]},alpha:1},5).to({guide:{path:[68,-72.9,12.9,-43.5,-42.1,-14,-66.5,35.6,-90.8,85.3,-17.7,42.8,55.5,0.3,67.7,-29.3,80,-58.8]}},121).to({regX:0,regY:0,guide:{path:[80,-58.8,84.4,-69.6,88.9,-80.3]},alpha:0},6).to({_off:true},1).wait(16));

	// Layer 4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.5,-81.8);
	this.instance_2.alpha = 0;
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[84.5,-81.7,74.2,-76.2,64,-70.7]},alpha:0.047},6).to({guide:{path:[64,-70.8,11,-42.4,-42.1,-14,-66.5,35.7,-90.9,85.3,-17.7,42.8,55.4,0.3,68.5,-31.1,81.5,-62.5]},alpha:1},121).to({guide:{path:[81.5,-62.4,85.2,-71.4,88.9,-80.3]},alpha:0},5).to({_off:true},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62,-104.4,54,53);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-21.2,-19,0.7,0.7);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({regX:-0.1,regY:-0.1,guide:{path:[-21.3,-19,-32.2,-24.5,-43.2,-29.9]},alpha:1},4).to({regX:0,regY:0,guide:{path:[-43.3,-29.9,-102.1,-59,-160.9,-88.2,-154.9,-21,-148.9,46.1,-105,72.3,-61.1,98.5]}},59).to({guide:{path:[-61,98.6,-45.2,108,-29.4,117.5]},alpha:0},6).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21.2,-19,0.85,0.85);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({regX:-0.1,regY:-0.1,guide:{path:[-21.2,-19,-35,-25.8,-48.7,-32.7]},alpha:1},5).to({regX:0,regY:0,guide:{path:[-48.8,-32.6,-104.8,-60.4,-160.9,-88.2,-154.9,-21.1,-148.9,46.1,-102.4,73.9,-55.9,101.7]}},59).to({guide:{path:[-55.7,101.7,-42.5,109.6,-29.3,117.5]},alpha:0},5).to({_off:true},1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21.2,-19);
	this.instance_2.alpha = 0;
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({guide:{path:[-21.3,-19,-37.7,-27.2,-54.2,-35.4]},alpha:1},6).to({guide:{path:[-54.3,-35.3,-107.6,-61.8,-160.9,-88.2,-154.9,-21.1,-148.9,46.1,-99.7,75.5,-50.5,104.9]}},59).to({guide:{path:[-50.4,104.9,-39.8,111.2,-29.3,117.5]},alpha:0},4).to({_off:true},1).wait(2));

	// Layer 3
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(11.4,-119.1,0.7,0.7);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({regX:0.1,regY:-0.1,guide:{path:[11.5,-119.1,19.3,-116.5,27.2,-113.9]},alpha:1},3).to({regX:0,regY:0,guide:{path:[27.3,-114,74.8,-98.5,122.3,-83,121.5,-60.7,120.3,-28.1,120.2,-26.7,120.1,-25.2,119.5,-9.6,118.9,5.9]}},34).to({guide:{path:[118.9,6,118.4,19.8,117.8,33.6]},alpha:0},5).to({_off:true},1).wait(79));

	// Layer 7
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(11.4,-119.1,0.85,0.85);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({regX:0.1,regY:-0.1,guide:{path:[11.5,-119.1,22,-115.7,32.5,-112.2]},alpha:1},4).to({guide:{path:[32.6,-112.2,77.5,-97.6,122.3,-82.9,121.5,-60.6,120.3,-28.1,120.2,-26.7,120.1,-25.2,119.4,-6.9,118.7,11.5]}},34).to({regX:0,regY:0,guide:{path:[118.7,11.6,118.2,22.6,117.8,33.6]},alpha:0},4).to({_off:true},1).wait(80));

	// Layer 8
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(11.4,-119.2);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({guide:{path:[11.5,-119.1,24.6,-114.8,37.8,-110.5]},alpha:1},5).to({guide:{path:[37.8,-110.5,80.1,-96.7,122.3,-82.9,121.5,-60.6,120.3,-28.1,120.2,-26.7,120.1,-25.2,119.3,-4.1,118.5,17.1]}},34).to({guide:{path:[118.5,17,118.1,25.3,117.8,33.6]},alpha:0},3).to({_off:true},1).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-141.8,52,53);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-25.2,-66.3,0.7,0.7);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({guide:{path:[-25.1,-66.2,-20.1,-65.9,-15,-65.6]},alpha:1},2).to({guide:{path:[-15.1,-65.7,14.5,-64,44,-62.3,67.7,-43,91.4,-23.7,77.1,9.7,62.8,43.1]}},38).to({regY:0.1,guide:{path:[62.9,43.1,57.9,54.7,52.9,66.4]},alpha:0},5).to({_off:true},1).wait(23));

	// Layer 7
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25.2,-66.3,0.85,0.85);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({regX:-0.1,regY:-0.1,guide:{path:[-25.1,-66.2,-17.6,-65.8,-10.1,-65.4]},alpha:1},3).to({guide:{path:[-10,-65.4,17,-63.8,44,-62.3,67.7,-43,91.4,-23.8,76.2,11.9,60.9,47.6]}},38).to({regX:0,regY:0,guide:{path:[60.9,47.7,56.9,57,52.9,66.4]},alpha:0},4).to({_off:true},1).wait(24));

	// Layer 4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25.2,-66.3);
	this.instance_2.alpha = 0;
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({guide:{path:[-25.1,-66.2,-15,-65.7,-4.9,-65.1]},alpha:1},4).to({guide:{path:[-4.9,-65.1,19.6,-63.7,44,-62.3,67.7,-43,91.4,-23.8,75.2,14.3,58.9,52.3]}},38).to({guide:{path:[58.9,52.4,55.9,59.4,52.9,66.4]},alpha:0},3).to({_off:true},1).wait(25));

	// Layer 6
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-25.5,-65.8,0.7,0.7);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({guide:{path:[-25.4,-65.7,-28.7,-59.3,-31.9,-52.8]},alpha:1},3).to({guide:{path:[-32,-52.8,-47.3,-22.6,-62.7,7.6,-46.5,27.1,-30.3,46.6,-1.1,53.6,28,60.5]}},37).to({regY:0.1,guide:{path:[28,60.5,39.8,63.3,51.5,66.1]},alpha:0},5).to({_off:true},1).wait(77));

	// Layer 5
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-25.4,-65.8,0.85,0.85);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({regX:-0.1,regY:-0.1,guide:{path:[-25.4,-65.7,-29.8,-57.1,-34.1,-48.5]},alpha:1},4).to({guide:{path:[-34.1,-48.5,-48.4,-20.4,-62.6,7.6,-46.5,27.1,-30.3,46.6,1.2,54.1,32.8,61.6]}},37).to({regX:0,regY:0,guide:{path:[32.7,61.6,42.1,63.8,51.5,66.1]},alpha:0},4).to({_off:true},1).wait(78));

	// Layer 3
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-25.5,-65.8);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({guide:{path:[-25.4,-65.7,-30.9,-55,-36.3,-44.2]},alpha:1},5).to({guide:{path:[-36.3,-44.2,-49.5,-18.2,-62.7,7.7,-46.5,27.2,-30.3,46.6,3.6,54.7,37.4,62.7]}},37).to({guide:{path:[37.4,62.7,44.5,64.4,51.5,66.1]},alpha:0},3).to({_off:true},1).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-88.4,54,53);


// stage content:
(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(865.5,144.1,1,1,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250));

	// Layer 4
	this.instance_1 = new lib.Symbol3("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(905.3,624.1,1,1,0,0,0,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(200));

	// Layer 5
	this.instance_2 = new lib.Symbol4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(973.3,660.5,1,1,0,0,0,-0.2,0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).wait(150));

	// Layer 6
	this.instance_3 = new lib.Symbol5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(846.7,517.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).wait(175));

	// Layer 7
	this.instance_4 = new lib.Symbol6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(850.9,367.7,1,1,0,0,0,0,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(250));

	// Layer 1
	this.instance_5 = new lib.trusted_bg_image();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,412,1280,824);
// library properties:
lib.properties = {
	width: 1280,
	height: 824,
	fps: 24,
	color: "#1D5275",
	opacity: 1.00,
	manifest: [
		{src:"sites/all/themes/docker/animation/images/trusted_bg_image.png?1485452655212", id:"trusted_bg_image"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;