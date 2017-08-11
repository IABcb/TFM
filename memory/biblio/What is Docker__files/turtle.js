(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3AF9FF","rgba(145,239,255,0)"],[0.392,1],0,0,0,0,0,20.6).s().p("Ai5CTQhNg7gBhWQgBhVBNg9QBMg8BugCQBtAABNA7QBOA8ABBWQABBVhNA8QhNA9huABIgCABQhrAAhNg8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.4,-20.6,52.8,41.3);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AAiA5QgZgYgPgUQgQgSgGgKQgGgKABgJQABgHADgGQADgHAFgBQAJgCALANQAIAJAFAPQADAJAGAYQAIAeAFAOg");
	this.shape.setTransform(-0.1,0,1.065,1.065);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8FCFF").s().p("AgGANQgQgSgGgKQgGgKABgJQABgHADgGQADgHAFgBQAJgCALANQAIAJAFAPIAJAhIANAsQgZgYgPgUg");
	this.shape_1.setTransform(-0.1,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-9.7,9.4,17.5);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AAMA/QgMgagJgdQgJgXgBgMQgBgMAEgIQAIgPAJAAQAIABAHARQAFAMgBAQIgFAiQgDAUAAAZg");
	this.shape.setTransform(0,0,1.065,1.065);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8FCFF").s().p("AgJAIQgJgXgBgMQgBgMAEgIQAIgPAJAAQAIABAHARQAFAMgBAQIgFAiQgDAUAAAZQgMgagJgdg");
	this.shape_1.setTransform(0,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-7.7,7.1,17.1);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AgfA5QAEgfAIgbQAGgZAFgKQAFgKAHgFQAQgJAIAHQAGAFgDASQgDAMgJANQgGAGgRAUQgbAjAAABg");
	this.shape.setTransform(0,0,1.065,1.065);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8FCFF").s().p("AgTgBQAGgZAFgKQAFgKAHgFQAQgJAIAHQAGAFgDASQgDAMgJANIgXAaIgbAkQAEgfAIgbg");
	this.shape_1.setTransform(0,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-7,9.9,14.5);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("Ag0AoQASgYAUgVQAQgTAKgGQAKgHAJAAQASAAADAJQAEAIgMAOQgJAIgOAHQgIAEgYAJQgTAHgWALg");
	this.shape.setTransform(0,-0.1,1.065,1.065);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8FCFF").s().p("AgOgFQAQgUAKgGQAKgGAJgBQASAAADAJQAEAIgMAOQgJAIgOAHIggANQgTAHgWALQASgYAUgUg");
	this.shape_1.setTransform(0,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-5.1,15.2,10.7);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6B593").s().p("AgEAQQgGgBgEgDQgFgFAAgFIAAgJIADgIIAAAAQgBAHACAJQABAJALABQAHACAHgGQAHgGACgIIAAAAQABAJgHAHQgGAHgIAAIgEAAg");
	this.shape.setTransform(-4.7,-0.9,1.065,1.065);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6B593").s().p("AgIAUQgMgCgCgPQgCgLAEgLIABAAQgDAMADAJQAEAMAIABQAIADAKgHQAIgGAFgKIAAAAQgCALgJAIQgHAGgIAAIgGAAg");
	this.shape_1.setTransform(-0.2,-0.1,1.065,1.065);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6B593").s().p("AgLAUQgMgHgBgNQgBgNAKgJIABAAQgHALADALQACAJAJAFQAHAEAJgFQAKgFAGgKIAAAAQgBAMgLAIQgHAFgGAAQgFAAgGgDg");
	this.shape_2.setTransform(2.6,-3.1,1.065,1.065);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6B593").s().p("AgOAUQgFgEgCgJIAAgLQADgNAKgFIABAAQgHAIgBALQAAAMAGAFQAFAEANgHQAIgFAFgJIABABQgBALgKAHQgGAFgFABIgFABQgFAAgFgDg");
	this.shape_3.setTransform(7.5,-2.9,1.065,1.065);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6B593").s().p("AgPAVQgHgCgCgGQgDgFAAgHQABgJAIgNIAAABQgEAMABAJQABAHACACQACADADABQAIACALgDQALgCAKgHIABAAQgIAKgMAFQgIADgIAAIgHgBg");
	this.shape_4.setTransform(7.5,-7.5,1.065,1.065);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6B593").s().p("AgPAWQgIgCgEgHQgEgGAAgHQgBgHAEgHIABABQgCAOAIAIQAFADAEABQAEABAEgBQAEgCAFgEIAKgIQAJgIAIgNIABAAQgDAOgJALQgEAGgGAFQgGAFgFADIgIABIgHgBg");
	this.shape_5.setTransform(2.2,-7.9,1.065,1.065);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6B593").s().p("AgPAWIgFgGIgDgGQgCgHABgGQABgMAJgKIABAAQgFALAAALQAAAMAIAHQAEAEAGgCIAJgEQAKgGAGgJIAAAAQgBAMgMAIQgEAEgIACIgEABQgGAAgFgEg");
	this.shape_6.setTransform(-2.1,-5.2,1.065,1.065);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6B593").s().p("AgJASQgNgCgCgOQgCgKAHgKIABAAQgFAMADAIQACAKAKABQAEACAMgHQAJgFAIgIIABABQgHAJgJAGQgKAIgHAAIgCgBg");
	this.shape_7.setTransform(-2.6,-10,1.065,1.065);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6B593").s().p("AgUAcQgHgFgDgKQgBgJADgHQAFgQASgJIAAAAQgOANgEAOQgCAHACAFQADAIAEACQAFAFASgNQANgIALgOIAAAAQgHARgNAKQgHAFgHAEQgGACgEAAQgEAAgDgBg");
	this.shape_8.setTransform(8.4,-12.2,1.065,1.065);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6B593").s().p("AgVAbQgIgDgCgLQgCgHAFgJQAHgOARgJIABAAIgNAMQgGAGgDAHQgDAHACAGQACAJAFABQAEACAJgEIAOgIQANgJALgOIAAABQgIAOgOALIgOAJQgGADgGAAIgFAAg");
	this.shape_9.setTransform(2.2,-13.1,1.065,1.065);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2EAD9").s().p("AgWCvQgPAAgHgKQgHgJADgQIAHgUIABgNIgIABQgEAAgDACIgTAMQgMAIgIAEQgNAGgTABQgOABgHgJQgGgJAEgOQAJgdAfgVIAbgTQggAIgTAUQgKAKgLABQgJABgOgFQgXgJAPgUQAQgUAZgJIAfgLQAhgLACgiQADguAfghQAogqAzgLQA3gNA0AcIAmAWQgqA7gHATQgEAJgJAxIgMgNIgCABIAGAUQAFAMALAPQALASgCANQgDANgRAKQgRALgRAAQgTABgMgPQgUAogDAFQgLAQgGAGQgLALgLAFQgMADgIAAIgCAAg");
	this.shape_10.setTransform(-0.2,-0.6,1.065,1.065);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D1011").s().p("AgpC+QgRgIgJgXIgGgYQgFAGgNAHQgUAKgUgFQgjgIgEgZQgEgRAMgOQgPACgNgEQgNgFgFgLQgIgOAJgTQAEgMALgJIAXgOQAGgDAKgEIAcgNIAVgKIAGgdQASg7AdgeQAXgYAfgNQAfgMAhABQAJABAQADQAhAIAjARIAcAPIAKAGQAIAHAHAJQgYAVgQAaIgMAXQgMAdgDAZQAAAIACAHQADAHADADQAaAcgRAgQgKARgSALQgdARgmgLQgJAdgYAVQggAcgZAAQgKAAgJgEg");
	this.shape_11.setTransform(0,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-20.7,45.3,41.3);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("ABjBEQhegHgygxQg8ANg1gPQg6gOgcgnIADgbIAIALQAaAhAxAQQAzAPA1gHIAKgDQAAgFAMANQANAOAkAMQAlANArAFQBYAMA3gLIAEgBIABANQgkALg4AAQgZAAgdgDg");
	this.shape.setTransform(-0.4,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBD1BD").s().p("ABLBwQgrgGgkgMQglgMgNgOQgMgOAAAFIgKADQg1AIgzgQQgxgQgaghQgbhdBDgUQBDgTAxAWQAxAXAaAmQAEAGAGAAQAFABAJgVQALgUAhgGQAggHAGAJQA7gCAgAYQAfAXAaAdQAZAdAIAjQAIAjg1AWQgaAFgjAAQgkAAgugGg");
	this.shape_1.setTransform(1.8,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-13.6,53.1,25.3);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("Ah0BXQAXgVAigZIA6gqQAagWAfgXQAbgUAhgVIABABQgaAWgfAXQgbAUghAVQgTANglAgQghAagaARg");
	this.shape.setTransform(11.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,23.4,17.6), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("Ah5BVQAXgUAjgaIAfgVIAegWQAdgVAfgVQAdgTAjgUIAAABQgaAUgjAXIg9AoQgTALgpAhQghAagcARg");
	this.shape.setTransform(12.2,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,24.5,17.2), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("Ah5BXQAagXAhgXQAngaAWgRQANgMAQgLIAegVQAkgYAcgQIAAAAQgcAXggAWIg+ApQgXAPgkAeQgiAZgcARg");
	this.shape.setTransform(12.2,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,24.5,17.5), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AhvBVQAYgZAbgWQAngcARgPQAegZAagSQAegVAdgQIABABIg5ApIg4ApQgcASgbAZQgfAbgXASg");
	this.shape.setTransform(11.2,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,22.4,17.2), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AhzBYQAXgVAhgaIAegVQAJgGATgPQAegZAbgUQAfgYAcgSIABABQgcAYgdAWQgnAdgUANQgQALgoAiQgfAYgcATg");
	this.shape.setTransform(11.6,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,23.2,17.7), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("Ah0BTQAbgXAegUQAogaATgOIA4grQAbgUAhgUIABABQgaAVgfAWQgYATgjAWQgTAMgmAeQggAYgcAQg");
	this.shape.setTransform(11.7,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,23.4,16.8), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("Ah4BSQAYgUAigYIA9gpQAigZAZgQQAcgSAjgUIAAABQgaAUgiAWIg9AnQgQAIgrAiQgkAagZAPg");
	this.shape.setTransform(12.1,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,24.2,16.6), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("Ah6BQQAcgUAhgWQAngVAWgRQApgdATgMQAkgYAagPIAAABQgbAWgfAVQgqAbgUALQgVANgoAcQgbATgjATg");
	this.shape.setTransform(12.3,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,24.5,16.1), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AiCBOQAkgaAcgQIBBgnIBAgnQAkgUAggQIAAABQgYARgpAYIhCAkQgOAGgSAMIggAVQgeAVgjASg");
	this.shape.setTransform(13.1,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,26.2,15.7), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AiPBLQAfgVAogUIBHglIBHgmQAigRAogQIAAAAQggATgnAUQgfAQgqATQgPAFgUAMIgkAVQghATgmASg");
	this.shape.setTransform(14.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,28.7,15.1), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AiJBKQAbgSAogWIAjgSIAigSIBEgmQAhgRAmgQIAAAAQghAUgjATQgiASgkAQQgVAJguAdQgiAUgjAQg");
	this.shape.setTransform(13.8,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,27.6,14.9), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AiQBGQAlgVAigRQAtgTAcgOQAegRApgTQAigRAogQIAAABQglAUgiARIhKAhQgZAMguAYQggARgpARg");
	this.shape.setTransform(14.5,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,29.1,14.1), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AiVBCQAhgSAogSQAsgSAfgPQAmgSAkgPQAogRAkgNIAAABQgmATgjAPIhMAfQgdAKgsAZQgnASgkAOg");
	this.shape.setTransform(15,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,29.9,13.4), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AGtBKIkfgqIiPgYIiPgUIiQgSQhVgMg6gOIiNgfIAAgBICOAcQBVAQA6AIICQASQA/AJBQAOICOAZICQAUQBNAMBCAHICQATIAAABQhJgHhHgIg");
	this.shape.setTransform(57.3,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,114.6,17.8), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AGqBAIiPgRQhjgMi5gaIiOgSQhegMgwgIIkag0IAAgBICNAYICOAZICOAWICOARIEbAjIEdApIAAABg");
	this.shape.setTransform(56.8,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,113.6,16.6), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F8F92").s().p("AGiBBIiMgQIkWgkQhpgNiugdIkXgvIABgBQA/AIBMANICLAVICLAXICMAWIEWAjQC5ATBfANIAAABg");
	this.shape.setTransform(55.9,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,111.7,15.6), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#51656A").ss(1.5).p("ApMqPQgLA0gJBNQgJBFgEA8QgFBaAHAsQAGAeAPATQANAPAaANQARAJA0AUQAnAPAnAKQAlAJAYAOQAlAVAdAiQAQASASAcQAiA3AMBGQAGApABBOIAAACQAAAngFAeQgEAUABAZQAEAzASAzQAdBUA9AzQBDA5BhAJQA3AFBVgMQBGgJAugRQBSgdA0g6QAtgzAWhMQANgsALhfQAGgxgBg8QAAgqACgUQACglAIgoQAThWAmhP");
	this.shape.setTransform(63.2,65.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.2,-0.8,127,133.9), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48AECB").s().p("AgGARQgGgBgFgEQgEgFgBgGQgBgFACgFQADgGAEgCQgGAIAEAJQADAJAJABQAGACAIgGQAJgGAEgIQAAAJgJAJQgHAIgIAAIgFgBg");
	this.shape.setTransform(2.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,4.7,3.6), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C79E5E").s().p("AgDAXQgJgGAAgJQgCgTAXgVIAEBBIgQgKg");
	this.shape.setTransform(44.9,57.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C79E5E").s().p("AAYA2Ig9gnQgQgJAAgRQABgiACgRQAeAXAbAhQAVAYAaApIgDAEIgbgJg");
	this.shape_1.setTransform(29.6,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C79E5E").s().p("Ag7BAIgGAAQgCgLACgCIAbgdQAlgrATgVQAFgFAJgGIAQgKIALAJQAFAEACAEQACADgCAFQgBAFgDADQgxA8hCAiIgEAAIgCAAg");
	this.shape_2.setTransform(29.9,102.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C79E5E").s().p("AAIBlIgXgLQgNgHgJgGQgEgDgEgIIgEgLIAGglIAUheQADgKAJgKQAEgFAFABQAEAAACAHIAXA9IAVA9QAGATgKATQgFAJgTAXQgBACgEAAIgDAAIgEAAg");
	this.shape_3.setTransform(39,40.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C79E5E").s().p("AgqBeQgMgbgBgTQgDgZANgWQAnhAAUgfQAGgLAKgBQAKgBAKAHQADACADAHIgKBEQgMA1gLAjQgHAZghAPQgFACgEAAQgLAAgFgNg");
	this.shape_4.setTransform(40.4,78.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C79E5E").s().p("AhKBlQABgPAFgNQAfhJAOgmIALggQAHgTAHgMQARgYAUASQAPAMAKAQQALASgBAOQABAJgGALIgNAUQgsA8g4AzIgLAIQgGAEgFAAQgIAAAAgPg");
	this.shape_5.setTransform(21,95.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C79E5E").s().p("AgOBNQgGgFgEgdQgEgegFgSQgIgagOgTIgdgfQAqgCAnALIAhALQAhAJANAdQAMAYgFAeQgFAbgPAMQgPAMgcAAIgEAAQgYAAgGgFg");
	this.shape_6.setTransform(8.5,8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C79E5E").s().p("AgUBYQgGgKgHgSIgMgeIgshdQgJgVAFgJQAFgIAWgFQA0gLA8AjQATALAOAJQASAMgCAUQgHBGggAwQgNAVgZAAQgZAAgNgVg");
	this.shape_7.setTransform(20.1,31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C79E5E").s().p("AguCUQgHgEgCgKQgDgQAAgQIAEhZQACglgTg8QgEgPABgMQAAgjAlgCIATAGQALAEAFAEIBBA6QAWAUgQAhQgOAcgaA6QgPAfgSAcQgGAKgUANQgGAEgFAAIgFgBg");
	this.shape_8.setTransform(28.7,63.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,46.2,108.8), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC9D6C").s().p("AieAxQhFgbg2g1QAPgEADgGQAxAvA/AYQBLAdBVgNQAvgGBDgXIABgBQBSgdBEg5IAIAUQhGA3hSAeIgBAAQgqAQgdAGQgzAOguAAQg+gBg5gVg");
	this.shape.setTransform(28.2,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,56.4,14.1), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC9D6C").s().p("AjIAwQhUglhBhGIAHgWQBBBJBVAmQBeApBugMQA9gGBVgcIABgBQBggfBWg/IAJASQhXA/hiAgIgBABQg0ARggAHQg9AOg2AAQhXAAhOgig");
	this.shape.setTransform(35,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,70,16.4), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC9D6C").s().p("AkmAPQg3gZgtgjIABgZQA0AqA3AaQBuA0CGABQBJABBpgSIABgBQCGgXB2g/IAGATQh3A/iHAYIgCAAIhLAMQg0AGguAAQiPAAh1g4g");
	this.shape.setTransform(39.5,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,79,14.3), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6B593").s().p("AgJARIgLgEQgGgDgEgEQgDgGABgGQABgGADgEIABAAQgGAMAGAHQAFAFAOAEQASAEAXgKIAAABQgIAGgMADIgMABIgKAAg");
	this.shape.setTransform(29,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6B593").s().p("AgPAQQgGgDgCgFQgCgEACgGQADgKALgHIAAABIgGAIQgEAFAAAEQgCAJAIAEIAJADIAJAAQAJAAALgGIAAAAQgJAIgLACIgGABQgHAAgHgEg");
	this.shape_1.setTransform(23.9,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6B593").s().p("AgXAFQgEgHACgLIABAAQAAALAEAFQAFAHAIgCQAHAAAKgEQAIgDAJgFIAAAAQgGAHgJAEQgJAFgJABIgEABQgJAAgEgJg");
	this.shape_2.setTransform(26.8,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6B593").s().p("AgTARQgHgCgEgGQgHgJAGgQIAAABQgCAPAHAHQAGAIAOgEQAJgBAMgJQAJgGAKgLIAAAAQgHAMgJAIQgLAJgMADIgKABIgEAAg");
	this.shape_3.setTransform(22.5,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6B593").s().p("AgEAYQgGAAgHgEQgGgEgDgHQgCgHABgFQACgNALgIIAAAAQgIAJgBAMQgCAMALAHQAKAGALgCQAMgBAJgIIAAAAQgHAKgNADIgHABIgFgBg");
	this.shape_4.setTransform(31.6,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6B593").s().p("AgKAPQgFAAgFgKIAAAAQAGAIAEAAQAHABAFgGQAEgDAGgHIAJgMQgHAPgKAJQgGAFgGAAIgCAAg");
	this.shape_5.setTransform(18.3,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6B593").s().p("AgJANQgJgDgDgJQgCgHAFgJIABABQgBAKADAEQADAEAGACIAMAEQAGAAAKgBIABAAQgHAFgJACIgEAAQgFAAgHgDg");
	this.shape_6.setTransform(26.5,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6B593").s().p("AgSAVQgIgEgDgIQgDgJADgGQACgJAGgEQAGgFAGAAIAAAAQgMAGgDANQgBAFADAGQACAGAGADQAJAEAOgBQALgBALgJIABABQgIALgPAEIgKABQgKAAgHgEg");
	this.shape_7.setTransform(31.1,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6B593").s().p("AgXATQgGgGACgJQABgIAFgGQAFgGARgJIAAABQgRANgCADQgJAOAIAKQAHAHARgDQANgCAKgLIAAAAQgEAHgFAEQgFADgIADQgFACgIgBQgLAAgFgGg");
	this.shape_8.setTransform(36.1,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6B593").s().p("AgHAOIgKgDQgGgDgBgEQgFgJALgIQgJAIAEAIQADAFANAEQAQACARgOIAAAAQgHAHgIAEQgHADgGAAIgFAAg");
	this.shape_9.setTransform(38,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C6B593").s().p("AgKASIgOgCQgHgCgFgGQgGgJAIgQIABAAQgEARAGAFQAEAEARABQARABAggLIABABQgYARgXAAIgDAAg");
	this.shape_10.setTransform(33.2,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6B593").s().p("AgKASQgHgBgFgDQgFgFgBgGQgCgLANgJIABABQgKAJADAJQACAEAEACQAEADAEAAQAGABANgFQANgHAGgGIABABQgHAKgKAHQgMAGgIAAIgDAAg");
	this.shape_11.setTransform(27.4,10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C6B593").s().p("AgTAaQgIgFgDgJQgDgJACgHQADgPAPgKIAAAAQgKAMgCANQgBAHACAGQADAHAGAEQAKAGAQgIQANgGAIgMIABAAQgGAPgNAIQgGAEgIACIgGABQgHAAgGgEg");
	this.shape_12.setTransform(22,12.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6B593").s().p("AgcAOQgFgFACgIQACgLAPgHIABAAQgOAKAAAIQgBAHADADQADACAHAAQAIAAAPgEQAMgDANgGIAAAAQgLAIgMAFQgNAFgNAAQgJgBgDgDg");
	this.shape_13.setTransform(23.9,8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C6B593").s().p("AgbAQQgHgEADgLQACgHAHgFQAMgHASgBIAAAAQgSAHgIAGQgFAEgCAFIAAAFQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAAAQACACAKABIAOAAQAQgCAOgFIAAAAQgOAKgPADIgPABQgLAAgFgEg");
	this.shape_14.setTransform(33.2,8.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6B593").s().p("AgZAPQgHgEADgJQABgGAIgFQAJgGASgCIAAAAIgNAFQgHADgFADQgGAGgBADQgBAGAEACQAEACAHABIANgBQAMgBAQgHIABABQgPAIgNACIgOACQgJAAgFgDg");
	this.shape_15.setTransform(28.7,6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2EAD9").s().p("AhRCwQgQgFgGgQQgJgcANgUIgsASQgdAKgTAAQgVABgHgNQgGgMAKgTQARgdAugTIgHAAQgcAJgNAGQgMAFgRgCQgQgCgJgJQgLgKADgOQACgPANgJQAKgFAOgDQAIgBARgBQAVAAAEgBQANgDAHgJQAJgNAFgVQAMg3AngcQAsgiA+gFQA7gGAsAUQA5AZAnA+IAZAkQAYAmgDAzQgBAXgEAOQgFATgLAOQgLAOgTADQgUACgJgNQgIgLgNgIIgYgOQgngXgzAWIg6AeIgEgHIgCAEQgFAkggATQgHAEgJAAQgGAAgGgCg");
	this.shape_16.setTransform(27.9,19.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D1011").s().p("AhLDFQgQgCgMgNQgLgNgDgRQgCgQAHgNQgSAUgXAIQghAMgXgLQgIgEgIgHQgPgNgCgQQgBgLADgLQADgEAGgGIANgLIgOgBQgJAAgFgCQgOgFgGgGQgHgIgCgOQgDggAfgQQANgHATgDIAigEQAPgBACgMIAKgfQAPg4AvgfQAyggA2gEQB0gIBKBfIAQAYQAKARAHAHQAsAvgDBHQgCAtgVAaQgIAKgKAGQgUAJgNgDQgJgDgOgMQgGgGgEgHIgHgJQgRgTgyAGQgMABglAOQgjANgGAFQgJAJgHAPQgIAPgKAJQgSARgUAAIgIgBg");
	this.shape_17.setTransform(27.6,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,55.2,39.6), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#937415").s().p("AACAsQgNgGgGgFQgLgIgCgNQgCgYAfgXIAZgUIAHBvg");
	this.shape.setTransform(46.9,58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#937415").s().p("AAfBPQgKgCgLgHQgSgOgMgHIgbgQQgKgGgEgIQgDgGgBgJIgBgHIACgOIAGglIACgVIAAgFQAoAiAhArQAaAgASAgIAGASQgJACgJAAQgJAAgJgCg");
	this.shape_1.setTransform(31.2,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#937415").s().p("AhFBHQgMgNACgLQABgFARgTIALgMIAVgXIAjgpQALgMAMgFQAGgDAGgBQAOgCALAGQALAHADAJQADALgJASQgRAegnAbQgVAPgkAWQgLAHgGAAQgGgBgHgEg");
	this.shape_2.setTransform(31.8,103.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#937415").s().p("AAFBxIgbgNQgQgIgGgFQgJgIgGgLQgFgLACgQQAAgJAIglQALg6AOgdQAEgJAHgGQAOgJAGACQAJADAEALIAxCIQAAAOgEAPQgGAUgOARIgDAEQgIAJgOAAQgGAAgEgCg");
	this.shape_3.setTransform(40.6,41.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#937415").s().p("AgkB0QgKgFgHgMQgQgaAAgeIABgYQACgGAJgTQASgkARgZIAWghQAMgSATgBQAPgBAMAKQAHAFAEAGIACAJIgMBIQgHAlgRA7QgQAegcAJQgGACgKABIgLgEg");
	this.shape_4.setTransform(41.6,79);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#937415").s().p("AhTB+QgIgJAAgRQABgRAGgQIAVgyQAhg+ADgKIANgsQAGgTAKgIQAIgGAMAAQAPAAANAMQASAOALATQANAWgBASQABAUgWAcQgtA/g6A1QgFAFgIAEQgKAGgKABQgLAAgGgHg");
	this.shape_5.setTransform(22.9,96.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#937415").s().p("AgaBRQgFgFgBgJIgFgaQgJgugTgmQgGgMgHgKQgKgNgLgIIAogGQASgDAsALQAdAHAFACQAQAGAMAKQATAOAJAZQAKAZgFAaQgFAdgSAQQgUASglAAQggAAgMgNg");
	this.shape_6.setTransform(10,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#937415").s().p("AglBeQgHgIgVg1QgKgdgHgQIgUgxQgGgTgBgIQgBgKAEgHQAEgGALgEQAHgCATgEQAOgDAUAAQAWABAUAIQANADAdANQAWAKANAMQAOANAEAMQACAEACAPQAAAbgHAdQgKAqgTAdQgFAIgGAGQgRAOgbADQglgIgTgXg");
	this.shape_7.setTransform(21.8,32.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#937415").s().p("Ag3ChQgOgFgJgSQgDgHAAgJIAAgVIAEhFIAAgsIgBgVQgBgJgDgLIgGgaQgFgaAAgHQACgUAKgNQAPgSAdAAQANAAATAHQAYAKAXASQALAKATAUQARATADAJQADAMgDANQgCAJgHATIgLAYIgIAQIgUAwQgQAkgVAXQgMAPgQALQgLAIgLAAQgHAAgFgDg");
	this.shape_8.setTransform(30.7,64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,50,110.7), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC9D6C").s().p("AkLAgQhGggg9g1IgHgjQBBBBBRAlQBtA1CHABQBJACBpgTIABAAQCAgXBxg6IABAWQhwA4h/AXIgCAAQhkAShIAAQiQAAh0g5g");
	this.shape.setTransform(40.6,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,81.2,17.7), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWHyQA6h/AWh4QAaiCgLh/QgKh8gziAQg1iHg1hoIACgBQA6BpA3CDQAdBHAPA1QARA+AHBEQAQCOgbB5QgfCIhDBsg");
	this.shape.setTransform(9.5,49.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,19,99.9), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC9D6C").s().p("Aj9AZQhBgag7grQgBgQgEgNQA7AwBOAfQBpAsCAAEQBGACBigMIACAAQB3gPBqgqIgBAVQhnAph3APIgBAAQhXAKg6AAQiTAAh4gxg");
	this.shape.setTransform(38.3,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,76.6,14.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai5BzQhDgFg+gMQBDACBBgPQBGgPA8gfQA9gCA7gOQA3gOAzgXQAegPAUgNQAxggAqgsQgRA8gmAvQggAmgtAaQgcAQgxARQhJAbhSAFIgkABQgpAAg7gEg");
	mask.setTransform(31.5,11.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD9EC6").s().p("AiPAvIgPgEQBFg5BSgWQBSgXBUAPQgOAMgQALQgUAOgaAIQgRAHhEATQg/ASgVAEQgOACgMAAQgQAAgPgEg");
	this.shape.setTransform(37.5,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#101312").s().p("AipA5IgCgKQAmgnAqgWQBGgnBTgDQAygCA0ALIAIAEQhPAzhaAaQhRAXhUAAIgHAAg");
	this.shape_1.setTransform(38,18.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(20.8,13.2,34.5,10.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.4,34.3,0.717,0.717);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,x:59.4,y:9,alpha:1},6).to({x:78.1,y:-4.1,alpha:0},4).to({_off:true},1).wait(22));

	// Layer 3
	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.6,28.3,0.717,0.717);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:26.3,y:-7.7,alpha:1},6).to({x:31.7,y:-18.2,alpha:0},4).to({_off:true},1).wait(23));

	// Layer 4
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16.1,27.8,0.717,0.717);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:-20.4,y:-6.7,alpha:1},6).to({x:-21.8,y:-16.6,alpha:0},4).to({_off:true},1).wait(24));

	// Layer 5
	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-31.8,35.6,0.717,0.717);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:-61.4,y:7.7,alpha:1},6).to({x:-72.4,y:-9.4,alpha:0},4).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,30.3,7.2,11.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#48AECB").ss(0.3).p("AApgEQgNAHgPADQgRAEgRgGQgKgEgJgH");
	this.shape.setTransform(-10.5,2,1.065,1.065);

	this.instance = new lib.Group_6();
	this.instance.parent = this;
	this.instance.setTransform(-1.2,2.1,1.065,1.065,0,0,0,2.4,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1FCFF").s().p("AgNAMIgCgYIAeACIABAXg");
	this.shape_1.setTransform(-3,-5.6,1.065,1.065);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1FCFF").s().p("AgPALIAAgWIAeAEIABATg");
	this.shape_2.setTransform(1,-9,1.065,1.065);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1FCFF").s().p("AgQAKIABgWIAfACIABAXg");
	this.shape_3.setTransform(1.1,-5.3,1.065,1.065);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1FCFF").s().p("AglBWQgggCgYgRQgagUgNgcQgNgcADgdIDsAMQADgCACgDQACgEgDgKQgGgWACgGQABgFAEgEQADgEADABQACAAADAHQABAFABAQQABAIACABIADgBIADgDIABgFQABgGAGgFQAFgEAFABQABAAABABQAAAAABAAQAAAAABABQAAAAAAABQADAEgHAKQgFAIgKAGQgIAGgEAGQgDAFgCAKQgBAFABAGIAAAGQAAANgRAQQgZAbgiAOQgRAHgMACQgRADgOAAIgIAAg");
	this.shape_4.setTransform(0,0,1.065,1.065);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#48AECB").s().p("AgYBpQg6gEgjgmQgZgcgHgmQgDgVADgUIBlADIgFgiIApACIACgfIAuAFIACBBIA3AEQACgCAAgDQABgDgGgHQgJgMAEgTQAEgOAJgEQAFgCAGADQAGACAAABQAFAEACAIIAAAGIAHgDQAMgGAEACQADABACAGQACAFAAAFQgBAKgIALQgIAJgIAEQgHACgFAGIgCAFQgDAJADAKQAEAPgVAfQgPAZghAPQggAPggAAIgIAAg");
	this.shape_5.setTransform(0,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-16.1,-11.2,32.3,22.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AAnCLQgrgLgYgjQgYgkAGgwQAFgkAjgoQAkgnAigEIAigEQAsADAeANQAkAQAVAiQAWAigEAjQgDAmgbAcQg6A7hGAAQgYAAgagHgAi/BWQgYgHgQgaQgQgaAAgcQAGhbBRgpQAogTArALQAsAKAZAmQAFAHAAADQAAAEgGAFQhCA/ARBPQABACgCADQgCAEgCAAQgkAMgbADIgRABQgZAAgXgHg");
	var mask_graphics_63 = new cjs.Graphics().p("AAnCLQgrgLgYgjQgYgkAGgwQAFgkAjgoQAkgnAigEIAigEQAsADAeANQAkAQAVAiQAWAigEAjQgDAmgbAcQg6A7hGAAQgYAAgagHgAi/BWQgYgHgQgaQgQgaAAgcQAGhbBRgpQAogTArALQAsAKAZAmQAFAHAAADQAAAEgGAFQhCA/ARBPQABACgCADQgCAEgCAAQgkAMgbADIgRABQgZAAgXgHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1,y:-22.5}).wait(63).to({graphics:mask_graphics_63,x:-1,y:-22.5}).wait(143).to({graphics:null,x:0,y:0}).wait(4));

	// Layer 4
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.6,-34);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},63).to({startPosition:0},27).to({x:9.3,y:-44.5},5).to({_off:true},1).wait(114));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("ACpBGQgggYg7AFQgmADhzANQhAAEgZAAQgkgBgggJQhqgdgbhCQgKgXABgYQAAgbANgLQAFgEALgBIArABIA/ADIAAgBIAdAKIABABQAKAEAjAEIBLAKQAmAFBHgFQBIgEBYABQBYACBsgGQhuAehuACQgUAAgtAFQgvAEgxABIhUAAQgigBgZgEIg/gQQgngJgmgFQgdgDgeAAQAEAfACAHQAWBKBaALQAnAFA0gBIBagCIAtgCIBbgHQAcgDAeAJQAdAIAWAfQAVAeAIARIgMAMQgigugLgJg");
	this.shape.setTransform(-12.2,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2EAD9").s().p("ADRBnQgIgRgVgeQgWgfgdgIQgegJgcADIhbAHIgtACIhaACQg0ABgngFQhagLgWhKQgCgHgEgfQAeAAAdADQAmAFAnAJIA/AQQAZAEAiABIBUAAQAxgBAvgEQAtgFAUAAQBugCBugeQAfDbiBAAQgXAAgdgHg");
	this.shape_1.setTransform(-10.5,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},91).wait(119));

	// Layer 1
	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.6,8.8,1.065,1.065,0,0,0,31.6,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B2963").s().p("Ai5BzQhDgFg+gMQBDACBBgOQBGgQA8ggQA9gBA7gOQA3gOAzgXQAegOAUgOQAxggAqgsQgRA9gmAuQggAmgtAaQgcAPgxATQhJAahSAFIgkABQgpAAg7gEg");
	this.shape_2.setTransform(-3.7,8.3,1.065,1.065);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010101").s().p("AlZDYQgjgSgQgiQgNgfAFgnQABgNAOACQAeAGAdABQBSADBCgPQAbgGAkgKIA6gRIAEgBIgNgVIAFgCIA8gDQAzgEBmgdQBmgfBKg9QA+gyAQhEIADgLQACADAAAGIgBAKQgKAogJAfQgHAXgGASQgWA7giArQgrA0grAZQg0AdhSASQhOAShHACQgyABhjgIQg9gFhUgaIg0gRQADAgACAGQAWBMBbAKQAnAFA0AAIBagDICxgKQBMgDAxAPIAtAQIAAABIhLgIIgBAFIgVgCIgDgBIhOABIh+AGIi3AFIgGAAQg7AAgqgVg");
	this.shape_3.setTransform(-7.2,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2EAD9").s().p("ADREFIgtgQQgygPhMADIixAKIhaADQg0AAgngFQhagKgWhMQgCgGgEggIA1ARQBTAaA9AFQBjAIAygBQBIgCBOgSQBRgSA0gdQAsgZArg1QAigqAVg7QAHgSAHgXQAJgfAJgoIABgKQAAgGgCgDIgDALQgQBEg+AyQhKA9hmAdQhlAfgzADIg8AEQAEgGAUgJQC8gsCAhgQBBg4AthRQBchBACCOIhYGTIiPAWg");
	this.shape_4.setTransform(-3.1,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1}]},91).to({state:[]},115).wait(4));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAiQgMgHgEgOQgEgNAHgOQAHgOAOgFQAMgGANAGQAMAHAEAOQADANgHAOQgGAOgOAFQgHADgFAAQgGAAgHgDg");
	this.shape_5.setTransform(-20.1,-26.1,1.065,1.065);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAuQgQgLgGgRQgFgRAGgSQADgRAOgLQAPgNASADQARgBAPAJQAPAKAHARQAHARgFARQgFASgOAMQgPALgTABIgBAAQgRAAgOgKg");
	this.shape_6.setTransform(-16.3,-21.1,1.065,1.065);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAkQgNgHgFgPQgEgOAIgPQAIgPAOgGQAOgGANAHQAOAGADAPQAEAPgHAPQgHAPgPAGQgHADgGAAQgHAAgHgEg");
	this.shape_7.setTransform(-0.2,-23.5,1.065,1.065);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAyQgRgMgGgSQgGgTAGgTQAGgVANgKQAKgIAMgCIAOAAQASgCARALQAQAKAHASQAIATgFATQgFATgQANQgQAMgUABIgCAAQgTAAgPgLg");
	this.shape_8.setTransform(3.9,-18.2,1.065,1.065);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C8FCFF").s().p("Ag9BqQgWgHgQgYQgPgZABgaQAFhVBMgmQAlgTAoALQApAKAYAjQAEAGAAADQABAEgGAFQg+A6AQBLQABACgCADQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgiALgZADIgQAAQgYAAgVgGg");
	this.shape_9.setTransform(-13.6,-25.1,1.065,1.065);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8FCFF").s().p("Ag4B0QgqgLgWghQgWghAFgsQAFgjAhglQAiglAhgEIAfgDQApACAcANQAiAPAUAgQAUAfgDAhQgDAjgaAbQg2A3hCAAQgWAAgYgGg");
	this.shape_10.setTransform(9,-20.9,1.065,1.065);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#010101").s().p("AjyD/QhRgCgqgQQgpgPgKgaQgUgvgDgdQgFgyAcg4QAgg+A1gnQAGgEAAgIQAAhDA5gyQAzgrA8AFQALACAPAEIAaAIQAIABAHAAIAwgHQAdgDASgBQBOgFA4ACQBUADBEASQBLAWAlA5QAVAgAIAsQAIAqAAAyQAAAlgEA5IgIBrIgZAAIACgiQAHhTACgpQAFhQgNg9QgFgYgKgUIAAAAQgUgpgogWQgtgZg4gFQhzgLgmgCQglgBhKACIg2AAIAnAvIADgDQBWhDBpA5QA7AfAJBCQAKBMhEAzQhNA6hZgUQgpgIgTgVQgOgPgagiIgFACIgXALQgNAGgKAEQhGAXg2grQgegZgHgxQhJA6gTBUQgOA/AeBAQAIARAYALQAYALAqAGQArAGBoAAIgEASQgiACggAAIgSAAg");
	this.shape_11.setTransform(4.3,-12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2EAD9").s().p("AC0EEQiNg2g9ADIhPAFIg2ADIADgSQhoAAgqgFQgqgGgZgMQgYgLgHgQQgfhBAPg+QAShUBJg6QAIAwAeAZQA2AtBGgYQAJgDAOgHIAWgMIAGgCQAZAjAOAPQAUAUAoAJQBaAUBNg6QBDgzgKhMQgJhCg6ggQhpg4hWBCIgEADIgngvIA2AAQBKgCAlACQAnACBzALQA4AEAtAaQAnAVAUApIAAABQAKATAFAYQAOA9gFBQQgCAqgIBSIgBAjQhMBZhZAAQgeAAgfgKg");
	this.shape_12.setTransform(4.1,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[]},206).wait(4));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2EAD9").s().p("Ai0BtIgRgwQAOjDBwgcIDaAAQgDBNAaBKQAZBIADgCIgXARQgVAgh8ApQgoAOgmAAQhKAAg6g2g");
	this.shape_13.setTransform(29.9,25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#010101").s().p("AiGCeQg3gRgPgoIgQgxIAAAAIASACIARAwQBYBSB7gpQB8gqAVgfIAXgSQgDACgahIQgZhJADhOIAZgBIgBAQIgDAfQgBAiADAaQAHApAwBPQg8A2g9AaQg9Abg6AFIgeACQgrAAgqgNg");
	this.shape_14.setTransform(30.4,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[]},206).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-38,102.2,81.3);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADDBmQg+gIhAgHQg2gGg5gIQhIgLhbgQQhbgQhZgNQhSgMgsgHQhLgMhYgSQApgXAlgRQA1gYCBguIAIgDIA2ACQA2ADBPALQAoAGBIAJIBvAOQBJALBRAJIEiAiIDXAaIADAAQAEABADACQAEADgCAFQgBADgGADQgOAFi0CQQiIgYiPgUg");
	mask.setTransform(67.5,14.6);

	// Layer 3
	this.instance = new lib.Group_23();
	this.instance.parent = this;
	this.instance.setTransform(120.3,20.7,1,1,0,0,0,11.7,8.8);

	this.instance_1 = new lib.Group_22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112.5,19.8,1,1,0,0,0,12.2,8.6);

	this.instance_2 = new lib.Group_21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(104.1,18.4,1,1,0,0,0,12.2,8.7);

	this.instance_3 = new lib.Group_20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.6,17.6,1,1,0,0,0,11.2,8.6);

	this.instance_4 = new lib.Group_19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(88.8,16.5,1,1,0,0,0,11.6,8.8);

	this.instance_5 = new lib.Group_18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.6,15.4,1,1,0,0,0,11.7,8.4);

	this.instance_6 = new lib.Group_17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(72,14.2,1,1,0,0,0,12.1,8.3);

	this.instance_7 = new lib.Group_16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(63.5,13.2,1,1,0,0,0,12.3,8.1);

	this.instance_8 = new lib.Group_15();
	this.instance_8.parent = this;
	this.instance_8.setTransform(54.2,11.9,1,1,0,0,0,13.1,7.9);

	this.instance_9 = new lib.Group_14();
	this.instance_9.parent = this;
	this.instance_9.setTransform(46.6,10.6,1,1,0,0,0,14.4,7.5);

	this.instance_10 = new lib.Group_13();
	this.instance_10.parent = this;
	this.instance_10.setTransform(38.5,9.5,1,1,0,0,0,13.8,7.4);

	this.instance_11 = new lib.Group_12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(30.3,8.2,1,1,0,0,0,14.5,7);

	this.instance_12 = new lib.Group_11();
	this.instance_12.parent = this;
	this.instance_12.setTransform(20.7,6.8,1,1,0,0,0,15,6.7);

	this.instance_13 = new lib.Group_10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(63.3,16.5,1,1,0,0,0,57.3,8.9);

	this.instance_14 = new lib.Group_9();
	this.instance_14.parent = this;
	this.instance_14.setTransform(69.3,12.9,1,1,0,0,0,56.8,8.3);

	this.instance_15 = new lib.Group_8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(76.5,9.1,1,1,0,0,0,55.9,7.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(5.7,0.1,126.6,29.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiwKGQgBgCABgDQAVgrATg0QAyiGAQiTQAJhTABg4QABhbgQhYQgYiFhDiKQgqhZgQggQgWgrgMgOQgegmgJghQgJgjAGgjIAAgBIABgBIABAAIAFgBIAJgBQAWAAALAGQAOAIAQAuIAIAbQACAKAEAIQANAbAVAVQgMgQgEgRQgDgLgBgMQA3gGA0AKQBAAOA+AqQBoBGBKCIQBdCrgIDUQgECCgvByQgRApgLAUQgUAjgaAcQgfAhgoAZQgZAPgnASQgyAYg8ANIBdgHQg2Agg/APQgnAKgqADIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	mask.setTransform(30.3,64.8);

	// Layer 3
	this.instance = new lib.Group_5();
	this.instance.parent = this;
	this.instance.setTransform(37.8,64.1,1,1,0,0,0,23.1,54.4);

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.7,64.2,1,1,0,0,0,25,55.3);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(12.7,8.9,48,110.7), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AARIgQiMgXhxhYQhejigoieIgVhxQgChlAhhpQAQgyALgYQATgrAVgQQAGgFAygzQAHgIAFgJQAGgMAAgYIgBgRIArADQAQAWAVAOQAZARAgAGQASADAmAAQBWAABEgjQAngUAigfQA4BaApBhQAcBCAPAuQAcBSAOBUQAGAoADBSQACBggFBvQgEBFgUBKQgMAsgaBFIgCAFQhqAuhvAAQgsAAgugHg");
	mask.setTransform(40.3,55.1);

	// Layer 3
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(43,76.7,1,1,0,0,0,38.3,7.4);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.6,60,1,1,0,0,0,40.6,8.8);

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.8,45.2,1,1,0,0,0,39.5,7.1);

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(39.1,30.8,1,1,0,0,0,35,8.2);

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(39.6,15.1,1,1,0,0,0,28.2,7);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(1.1,8.1,78.4,76.1), null);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FAFB2").s().p("AIoBhQhcgQi6gcIh0gRQhEgLgwgJQgLgDgYgCQgXgCgMgDQgPgEgWgCIgmgEIhJgMIi9gbQg5gJgigHQg8gNgzgIIgMgCQABgEADgEQAEgEAGgCQAFgBABACIBvAVIB8AVIITBSQAZAEAuAFIBHAIICHAUIBVAOIAMADQgIAIgFADQgFADgGAAIgFAAg");
	this.shape.setTransform(-11.1,5.9,1.065,1.065);

	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(0.9,-1.4,1.065,1.065,0,0,0,67.5,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCE5E7").s().p("ADDBnQg+gJhAgHQg2gGg5gJQhIgKhbgQQhbgQhZgOQhSgLgsgHQhLgMhYgSQApgYAlgRQA1gYCBgtIAIgDIA2ACQA2AEBPAKQAoAGBIAJIBvAOQBJAKBRAJIEiAjIDXAaQAFgBAFADQAEAFgCADQgBAEgGADQgOAFi0CQQiIgYiPgTg");
	this.shape_1.setTransform(0.9,-1.5,1.065,1.065);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AHECpQgPgBgfgFItLiDIh0gVIiAgZIgKgDQgFgDgBgHQgBgQAMgGIAzgbQAggQAVgKQBXgnA8gVQAMgEATgBIAhgBIAPABQDjAWDNAZQENAgESAnIA+AJIALACQAFACABAGQAAAFgFAOQgBADgGAFIheBLIh6BcQgHAFgIAAIgDAAg");
	this.shape_2.setTransform(0,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,-18,148.6,36);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-4.2,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// Layer 4
	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.2,-13,0.788,0.788);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-0.1,scaleX:1.08,scaleY:1.08,x:-4.3,y:-13.1,alpha:1},7).to({startPosition:0},3).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:-4.2,y:-13,alpha:0},7).to({regX:-0.1,regY:-0.1,scaleX:1.08,scaleY:1.08,x:-4.3,y:-13.1,alpha:1},7).to({startPosition:0},3).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:-4.2,y:-13,alpha:0},7).to({regX:-0.1,regY:-0.1,scaleX:1.08,scaleY:1.08,x:-4.3,y:-13.1,alpha:1},7).to({startPosition:0},3).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51656A").s().p("AAkAaIAAgpIAVABIAAApgAApAWIAKAAIAAggIgKAAgAAFAWIAAgoIAUABIAAAogAAKATIAKAAIAAghIgKAAgAg4APIAAgoIAzADIAAAqgAgzALIApAEIAAggIgpgEg");
	this.shape.setTransform(-33.1,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDE6E6").s().p("AgygdIBlANIhfAug");
	this.shape_1.setTransform(9.5,52.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7C5C5").s().p("AAyB8IgbjqIALAEIAKB0QAGBEANAvIBqg1IAKAAIgBAFQgBAGgCABIhhAwIgKAEIgEAAQgNAAgBgMgAiyBkIAQjrIClAXQAJABADADQAFAEAAAJIAFBAIAAAHIAWCdg");
	this.shape_2.setTransform(-1.9,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5DBDB").s().p("AGrHQQgcgCg1gIIsShtIgNhHIgSiGQgJhWgCg8QgChTAEhvQAAgYADglIAFg+IAEhaIAdgCICNgJIGBgWIBLgFID1gMIAngBQAHAAAPAEQARAFgBATIgJBrIgDBIIgEBSQgDBEgCBFIgDDBQgBAogDBPIgCCnIAAAKQAAAFgCACQgNAHgLAAIgBgBgAGoGFQgDjvAFirQAHjfAWi8QhAGGAhGvgAktFTIAUABIAAgqIgUgBgAlNFQIAVABIAAgqIgVgBgAmKFIIAzAFIAAgqIgzgEgAkoFPIAAghIAKAAIAAAhgAlIFMIAAgiIAKABIAAAhgAmFFEIAAghIApAEIAAAhg");
	this.shape_3.setTransform(0.8,-10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXJOQgXgFgygGIhWgQQgggFgegKIgRgFQgDghAEgmIAPinQAAgDgDgDQgDgDgDAAQgPgDgggDIh6gUIgKAAQgUgBgWgDQgOgCgFgFQgFgFgBgHQgGgYgGghIgDgVIgMhJIgJhCQgFgpgCgtQgCgTgBhbIgBg3QAAgmAFhLQADgyAFgdQACgVAAgQQAAgMADgTIAFgeQACgQAHgHQAJgJASAAQAlABBHgHQBJgIAjAAQApAAB3gHICngLICHgHIA+gCQAmgBAZgEQAQgCAdAAQAhABAMgBQAVAAALAIQAJAHAEAIQADAHAAAHIADD8QgBAIgFC/IgHDiQgDB+ABAJQACARAAAaIgBAtQAAAEgCAEQgCAFgHAGQgJAIgJADQgYAKgkgHQgYgEgsgFIhOgIIgsgGIgWgCIgugFIgTgEQgvgKgggCIgQgBIAOCbQBUAOAggCQAJAAADAEQABAAABAHQADAQgDAFQgBACgFAEQgiASgLAFIgsAVQgVAKgNABIgDAAIgQgCgAAeIyQACAOAQgCIALgFIBggvQADgBABgGIABgFIgKgBIhqA2QgNgwgGhEIgKh1IgMgDgAjFIZIDgAiIgVifIAAgHIgFg/QAAgKgEgDQgDgDgKgBIilgYgAAyIsIBggvIhmgNgAGeo3Ij1ALIhKAFImCAWIiNAJIgdADIgDBaIgFA+QgDAlgBAYQgEBvACBTQACA9AJBVIATCGIAMBGIMSBuQA2AHAbADQAMAAANgHQACgBAAgFIABgKIABinQAEhQAAgnIAEjBQABhFAEhFIAEhRIAChJIAJhqQACgTgRgFQgPgEgIAAIgnABgAHPoYQgXC8gHDeQgFCsADDvQggmvBAmGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-59.1,100.4,118.4);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.2,-23.9,1,1,0,0,0,20.8,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},85).to({x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).to({rotation:7,x:5.6,y:-25.5},4).to({rotation:0,x:4.6,y:-22.5},4).wait(1));

	// <Group>_1_1
	this.instance_1 = new lib.Group_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.5,1.3,1.065,1.065,0,0,0,48.8,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({regY:27.1,rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).to({rotation:-8,x:64.6,y:-1},4).to({rotation:12,x:64.7,y:-1.1},4).wait(1));

	// Layer 4
	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},85).to({regY:0.1,rotation:-1.5,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).to({regY:0,scaleX:1,rotation:0,skewX:-1.5,skewY:2.8,y:15.1},4).to({regY:0.1,scaleX:1,rotation:-1.5,skewX:0,skewY:0,y:15},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-32,148.6,64.2);


// stage content:
(lib.turtle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_205 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(205).call(this.frame_205).wait(1));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_97 = new cjs.Graphics().p("AsDMxIAA5gIYHAAIAAZgg");
	var mask_graphics_98 = new cjs.Graphics().p("AsDVuIAA5gIYHAAIAAZgg");
	var mask_graphics_99 = new cjs.Graphics().p("AsDVtIAA5gIYHAAIAAZgg");
	var mask_graphics_100 = new cjs.Graphics().p("AsDVtIAA5gIYHAAIAAZgg");
	var mask_graphics_101 = new cjs.Graphics().p("AsDVsIAA5gIYHAAIAAZgg");
	var mask_graphics_102 = new cjs.Graphics().p("AsDVrIAA5gIYHAAIAAZgg");
	var mask_graphics_103 = new cjs.Graphics().p("AsDVrIAA5gIYHAAIAAZgg");
	var mask_graphics_104 = new cjs.Graphics().p("AsDVqIAA5gIYHAAIAAZgg");
	var mask_graphics_105 = new cjs.Graphics().p("ArzVpIAA5gIYHAAIAAZgg");
	var mask_graphics_106 = new cjs.Graphics().p("AqhVpIAA5gIYIAAIAAZgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(97).to({graphics:mask_graphics_97,x:-51.6,y:196.5}).wait(1).to({graphics:mask_graphics_98,x:-35.1,y:139}).wait(1).to({graphics:mask_graphics_99,x:-18.6,y:138.9}).wait(1).to({graphics:mask_graphics_100,x:-2.1,y:138.9}).wait(1).to({graphics:mask_graphics_101,x:14.4,y:138.8}).wait(1).to({graphics:mask_graphics_102,x:30.9,y:138.7}).wait(1).to({graphics:mask_graphics_103,x:47.4,y:138.7}).wait(1).to({graphics:mask_graphics_104,x:64,y:138.6}).wait(1).to({graphics:mask_graphics_105,x:78.8,y:138.5}).wait(1).to({graphics:mask_graphics_106,x:87.1,y:138.5}).wait(100));

	// Layer 8
	this.instance = new lib.Group_7();
	this.instance.parent = this;
	this.instance.setTransform(101.9,193.2,1.065,1.065,0,0,0,63.4,66.3);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).wait(109));

	// Layer 7
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.9,111.8,1,1,0,0,0,-8.8,48.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},72,cjs.Ease.get(-1)).to({y:148.4,alpha:1},14,cjs.Ease.get(-1)).to({regX:-8.7,regY:48.3,rotation:1.7,y:141.2,startPosition:3},2).to({regY:48.4,rotation:0.2,y:148.6,startPosition:7},3).to({regY:48.3,rotation:-1,x:66,y:146.1,startPosition:12},3,cjs.Ease.get(0.99)).to({regY:48.2,rotation:0.5,x:65.9,y:148.5,startPosition:30},4).to({startPosition:30},12).to({startPosition:32},95).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol3("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(180.1,155.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("A3tSsMAAAglXMAvbAAAMAAAAlXg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A3tSsMAAAglXMAvbAAAMAAAAlXgADimvIB+ALIA9AyIATgdIgvhCIiuAAg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A3tSsMAAAglXMAvbAAAMAAAAlXgADimvIBvAJQAYAjAvAVIAYghIgvhCIiuAAg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A3tSsMAAAglXMAvbAAAMAAAAlXgADimvIBrAKQAcAiAvAVIAYghIgvhCIiuAAg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A3tSsMAAAglXMAvbAAAMAAAAlXgADimvIBmAKQAhAiAvAVIAYghIgvhCIiuAAg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A3tSsMAAAglXMAvbAAAMAAAAlXgADgmmIBkABQA4AwAcAHIAYghIgvhCIiuAAg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A3tSsMAAAglXMAvbAAAMAAAAlXgADjmpIBoADQAsAoAhAQIAYghIgvhCIiuAAg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A3tSsMAAAglXMAvbAAAMAAAAlXgAFXmmQAbAqAmAOIAYghIgvhCIiuAAIAUAqQAigDAaAAQAfAAAVAEg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A3tSsMAAAglXMAvbAAAMAAAAlXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:165.7,y:157.3}).wait(92).to({graphics:mask_1_graphics_92,x:165.7,y:157.3}).wait(1).to({graphics:mask_1_graphics_93,x:165.7,y:157.3}).wait(1).to({graphics:mask_1_graphics_94,x:165.7,y:157.3}).wait(1).to({graphics:mask_1_graphics_95,x:165.7,y:157.3}).wait(1).to({graphics:mask_1_graphics_96,x:165.7,y:157.3}).wait(1).to({graphics:mask_1_graphics_97,x:165.7,y:157.3}).wait(1).to({graphics:mask_1_graphics_98,x:165.7,y:157.3}).wait(1).to({graphics:mask_1_graphics_99,x:165.7,y:157.3}).wait(107));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6B593").s().p("AgSAQQgEAAgDgDQgEgDAAgEQgCgLAKgLQgHANADAIQABAGAHABQAFAAAGgBQAVgEAPgUIABAAQgFALgKAHQgIAHgNAEIgIABIgFgBg");
	this.shape.setTransform(241.4,228.3,1.065,1.065);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6B593").s().p("AgEAUQgEAAgFgFQgGgIABgLQABgJAGgHIAAAAQgDAHAAAJQAAALAFAEQAFAIAJgCQAJgDAFgHIAAAAQgDALgKACIgFABIgFgBg");
	this.shape_1.setTransform(243.9,224.5,1.065,1.065);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6B593").s().p("AgTAPQgFgEgCgJQgCgFACgHQADgHAFgDIAAABQgHAKAEAJQACAGAEADQAFAEAFAAQAJABALgIQAIgGAEgLIABAAQgBANgJAIQgLALgMAAQgJgBgFgFg");
	this.shape_2.setTransform(239.3,224,1.065,1.065);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6B593").s().p("AgKAYQgIgDgEgIQgCgIAAgFQACgIALgPIAAAAQgIASgBAFQAAAPALAEQAJACAMgLQAJgHADgMIABAAQAAAGgDAFQgDAIgFADQgDAFgHADQgFADgFAAIgEAAg");
	this.shape_3.setTransform(242.9,220,1.065,1.065);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C6B593").s().p("AgZAOQAQABANgLQANgJAJgQQgHARgMALQgPANgRACg");
	this.shape_4.setTransform(239.3,218.7,1.065,1.065);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6B593").s().p("AgOANQgFgHACgKQADgJAIgGIAAABQgEAHgBAJQgBAGAEAFQADADAHACQAGAAAKgCIABABQgJAGgIAAIgCABQgJAAgFgHg");
	this.shape_5.setTransform(242.9,214.7,1.065,1.065);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6B593").s().p("AgaAJQAggEAUgUQgSAXghAIg");
	this.shape_6.setTransform(239.2,214.5,1.065,1.065);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2EAD9").s().p("AgfC2QgUgBgHgNQgHgOANgRQAFgGAIgHIAPgMQgdAGgSAbIgCAFQgFAHgXACQgXADgJgGIAZgXQAmgrAOg6QAMgugCg0QgBgOgOhJIgDgLQAigSAgABQAYABAZAKQAlARARATIAPAUIAPAUIgpB6QgBgZgCgNQgDgUgFgPQAEAlAAAqQABAlgEAVQgCAPgHAOQgKAXgPAKQgoAcgjAAIgGAAg");
	this.shape_7.setTransform(241.5,224,1.065,1.065);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010101").s().p("AgrDLQgQgFgFgGQgGgHgBgMQgBgLgDgCQgEgCgIAFQgLAHgIABQgJABgKgDIgMgFIgGgMQA/hFARhcQAPhWgfhVQAOgKAMgFQAogRAuAKQAxALAfAkQAaAfAFArQgHAcgNAuQgKAegLAcQgGANgBANIgDAcQgEATgIARIgIANQgZAkgnAMQgOAFgPAAQgMAAgLgEg");
	this.shape_8.setTransform(241.2,224.1,1.065,1.065);

	this.instance_3 = new lib.ClipGroup_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(270.6,169,1.065,1.065,0,0,0,31.4,64.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2EAD9").s().p("AiMArIAPgOIAMgNQAUgFAUgIQAggNAagVIAZgIQAggIAjAAIAoABIAYADQgEANgJAJQgFAFgNAJQgpAbgxAPQgkALgiACIgYAAQggAAgigFg");
	this.shape_9.setTransform(287,229.4,1.065,1.065);

	this.instance_4 = new lib.Group_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(261.3,175.2,1.065,1.065,0,0,0,9.6,49.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D4F37").s().p("AiwKGQgCgCABgDQAWgrATg0QAxiGAQiTQAKhTABg4QABhbgRhYQgYiFhCiKQgqhZgRggQgWgrgMgOQgegmgIghQgGgWAAgaIACgWIABgBIAAgBIABAAIAFgBIAJgBQAWAAAMAGQANAIAQAuIAIAbQADAKAEAIQAMAbAVAVQgLgQgFgRQgDgLgBgMQA4gGAzAKQBAAOA+AqQBoBGBKCIQBdCrgHDUQgFCCguByQgSApgLAUQgTAjgbAcQgeAhgpAZQgYAPgnASQgzAYg7ANIBcgHQg2Agg+APQgoAKgpADIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_10.setTransform(269.5,169.1,1.065,1.065);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#010101").s().p("AiyKTIgQgDIAAgBQgEgBgDgDQgFgFAAgKQABgRAEgUIAFgRQAHgUALgWIAHgKIADgIQAQgsAJgcQACgTAFgKIAJglQAXh2AChGIADgiIAAgjIgGh4QgDgwgThMQgMg0gMghQgYhHgYg9QgQgngqhVIgeg3QgcgogHgsQgDgTAAgJQABgSAIgGQADgCAEgBIAZgHQAVgCAQALQAQALAIAWIATA7QApgGALAAQBEgEBNAfQA/AZA0AuQBEA8AjBBQAiA/AbA9QAWA2ARBTQAOBGABBLQACBbgQBAQgUBUgFAQQgSBAghAxQgLARgTAWIgiAlIgNAJIBcgOQAUgDATAEQAQADAEALQAEALgJAOQgOAUglAUQhcAyhcgIQgUgCgpgHQgEgBgFAEQgUAMgaAJQgSAGggAIQgYAFgdAAIgdgBg");
	this.shape_11.setTransform(270.6,169.2,1.065,1.065);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BAC1C2").s().p("Ag6ArQgagFgEgfQgDgWAUgMQAPgJAUgFQAUgGARAAQAzACAcAiQAWAZgfAQQglASgrAAQgXAAgagFg");
	this.shape_12.setTransform(264.7,249.7,1.065,1.065);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvA9QgWgEgOgKQgRgNgCgYQgDgYASgQQA4gzBBAVQA0APAQAqQAGAPgNASQgOASgVAFIhCAOIgpgGg");
	this.shape_13.setTransform(265.3,250.1,1.065,1.065);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BAC1C2").s().p("AhIAtQgQgCgEgKQgFgKAIgOQAjg5AzgCQAngBAlAfQAIAGAMATQAEAIgDAKQgEALgJADQgTAHggAGQgGABgJgBIgPAAIAAABQg5gEgPgCg");
	this.shape_14.setTransform(210.7,255.9,1.065,1.065);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag7A+QgNgCgTgJQgNgFgEgMQgEgMAGgNQAPghAfgVQAggWAkAAQAzABAkAnQAOAQACATQACAVgMANQgOAQgaAFQgYAFgcAAQgeAAgmgGg");
	this.shape_15.setTransform(211.4,256.2,1.065,1.065);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BBC0C1").s().p("AhkCIQgXgDgfgGIg1gKQgEgBgKgFIgPgMQgJgHgDgKQgCgHgBgOQgCghAYgsQAmhEA6gYIBBgaIApgGQA2gGA2ASQAfAKAoAWQANAIASAMIAdAWQAXAQALAeQAKAcgIAZQgMAjgoATQhNAmhmAFIgRAAQgnAAg9gGg");
	this.shape_16.setTransform(166,245.6,1.065,1.065);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8C9798").s().p("AApDDQhegzheAVIgwANQhAAggZARQgwAhgXAqQhQgJgogfQAbhRgQhvQgLhQgmhwQAbhSApg2QA1hFBBgJIKDBoQBeA1BCB1QAfA9AGA/QAFBCgWA7QgiBYhlAkQhKAah5AAQgehahfg0g");
	this.shape_17.setTransform(178.9,210.5,1.065,1.065);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999E9F").s().p("ABKHYQhPgBgygEQgagChAgMQhcgPgugJQhQgQg4gaQg/gfgWhLQgOgvgBg5QgBgqAGhAQAOigA6iBQAohZA2g3IADgCIAWgWQBMhABKgUQAHgBAEABQBJgDBCAGQBMAHBNATQBrA6BABCQBABBAvBQQAqBJAaBNQAaBJALBfQAIA+gMA9QgOBIhFAsQhGAuhwAWIgzAKIgjAGIgsACIgjABIgJAAg");
	this.shape_18.setTransform(71.8,205.4,1.065,1.065);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AFNICQgTgBh9gWQgQgDgLgGQgLgFgJgIIgPgQQgPgeAHgiQAEgTATgpIg3gJQgdgGgWgLQgPgHgHANQgLATgYAYQgiAghAAcQg7AZgkAHIgzAMIg2AFQgSABgUACIgmAEQgiACgfgBIhygIQgygEgxgHQgcgEgsgJQgmgIgVgFQgcgGgsgQQgogOgQgIQgcgOgZgbQgjglgPhMQgQhJALhpQAPiQAxh2QAXg4AuhEQAthCAWgPIAGgFQBThBBMgVQBHgFBHACQBEACAbADQApAFAkAMQAsAQAyAfQA1AjA3A7QBTBbA0B0QAQguAbgoQAzg+AbgVQAYgRAegMILBBuQBcBLALARQAuA8ATA1QAfBXgOBeQgQBthIApQhAAmhNAPQhFAOhKgJQgBAggQAZQgJAQgPAMQgLAJgVAKQg1AchMANQgsAHg5AAIghgBg");
	this.shape_19.setTransform(125.1,209,1.065,1.065);

	this.instance_5 = new lib.ClipGroup();
	this.instance_5.parent = this;
	this.instance_5.setTransform(218.6,173.5,1.065,1.065,0,0,0,40.8,55.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DCBDA6").s().p("AARIgQiMgXhxhYQhejigoieIgVhxQgChlAhhpQAQgyALgYQATgrAVgQIA4g4QAHgIAFgJQAGgMAAgYIgBgRIArADQAQAWAVAOQAZARAgAGQASADAmAAQBWAABEgjQAngUAigfQA4BaApBhQAcBCAPAuQAcBSAOBUQAGAoADBSQACBggFBvQgEBFgUBKQgMAsgaBFIgCAFQhqAuhvAAQgsAAgugHg");
	this.shape_20.setTransform(218,173.5,1.065,1.065);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#010101").s().p("AAOI6QiSgXh3heIgCgBIgBgDQhgjmgoifQgMgzgGglQgDgUAAgKQgChoAihtQARg0AMgZQAUguAZgTIA1g1QAFgGAEgGQAEgJAAgTQAAgOgCgLIgCgNIBMAFIADADQAPAWAUAOQAWAPAdAEQARADAjAAQBQAABAggQArgWAigjIAJgJIAHALQA9BiArBmQAcBBAQAxQAcBTAOBWQAHAoADBUQACBggFBwQgEBIgUBMQgMAqgbBKIgFAMIgEACQhuAxh6AAQguAAgsgHg");
	this.shape_21.setTransform(218,172.9,1.065,1.065);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.instance_3,this.shape_9,this.instance_4,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.instance_5,this.shape_20,this.shape_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.instance_5},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_4},{t:this.shape_9},{t:this.instance_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(206));

	// Layer 4
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(220.4,114.5,1,1,0,0,0,29.6,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:72},72).to({startPosition:92},20).to({x:220.2,y:116.9,startPosition:96},4).to({x:220.1,y:115.6,startPosition:97},1).to({x:219.8,y:109.2,startPosition:102},5).to({x:220.4,y:114.5,startPosition:107},5).to({startPosition:205},98).wait(1));

	// Layer 10
	this.instance_7 = new lib.Symbol4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(204.6,26.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96).to({_off:false},0).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(174.5,144.4,291.4,259.4);
// library properties:
lib.properties = {
	width: 321,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib3 = lib||{}, images3 = images||{}, createjs3 = createjs||{}, ss3 = ss||{}, AdobeAn3 = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;