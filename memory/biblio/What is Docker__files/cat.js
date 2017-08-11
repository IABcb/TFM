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


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBJQgbgDgSgKQgagPgUgaQgTgYgFgkIgBgHIgBgDQgBgMAAgLIABAKIABADIABAHQAFAkATAYQAUAaAaAPQASAKAbADQAsAFAegIQA6gQAfgoQAXgcAFggIACgLQAAAMgCAMQgFAggXAcQgfAog6AQQgSAFgXAAQgPAAgSgCg");
	this.shape.setTransform(0,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F78CE").s().p("AglCGQgbgDgSgKQgagOgUgbQgTgZgFgjIgBgHIgBgDIgBgKQgCgmAVgeQAfguA3gOIATgEIApgDQAvADAmAZQAMAIAMALQAWAWAJAdIAEAPQADANgBAMIgCALQgFAhgXAcQgfAog6AQQgSAFgXAAQgPAAgSgCg");
	this.shape_1.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-14.3,31.2,28.6);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPARQgHgIAAgJQAAgIAHgHQAGgHAJAAQAKAAAGAHQAHAHAAAIQAAAJgHAIQgGAGgKAAQgJAAgGgGg");
	this.shape.setTransform(23.2,-0.9,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAbQgKgLAAgQQAAgPAKgLQAJgLAMAAQANAAAKALQAJALAAAPQAAAQgJALQgKALgNAAQgMAAgJgLg");
	this.shape_1.setTransform(25.1,1.9,0.928,0.928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQARQgIgHABgKQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAAKgGAHQgIAIgKAAQgJAAgHgIg");
	this.shape_2.setTransform(-8,-2.9,0.928,0.928);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAdQgLgLAAgSQAAgQALgNQAMgMAPAAQAQAAAMAMQALANAAAQQAAASgLALQgMANgQAAQgPAAgMgNg");
	this.shape_3.setTransform(-5,0.3,0.928,0.928);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E3E3E3","#A2A2A2","#4C4C4C","#151515","#000000"],[0,0.255,0.62,0.875,1],-0.4,5.1,5,-7.5).s().p("AAPBFIgQgKIgRgJIgUgHQgOgFgIgFIAagpQAUgiAFgFQAhgqATAIQAPAGACApQABAOgEAjIAAAFIgMBAQgPgGgPgJg");
	this.shape_4.setTransform(20.3,-27.2,0.928,0.928);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E3E3E3","#A2A2A2","#4C4C4C","#151515","#000000"],[0,0.255,0.62,0.875,1],0.9,7.3,-1.5,-6.5).s().p("Ag4AxQAWg1AbghQARgXALgKQAUgSALAEQAUAGAAA4QAAAHgDAPIgFArIgBATIggAIQghAKgzAFIgSABg");
	this.shape_5.setTransform(-11.5,-31.9,0.928,0.928);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D4FFF8").s().p("AAtBLIgrgIQgYgFgSAAIgrACIgmgFQgOgCgKgMQgLgNAAgNQAAgSAKgPIAFgHQALgPANgKQALgIANgGQARgIAXgEQA/gNBCAVQAuAOAWAjQAPAVgCARQgFAigkAOQgTAHgXAAQgOAAgPgDg");
	this.shape_6.setTransform(-12.2,-0.6,0.928,0.928);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAEBMQgpgJgnADIgWgBQgYgBgPgIQgTgJgGgTQgGgUAKgRIARgYIACgDQAJgKAKgIQANgJANgGIAMgGQBCgWBGANQAqAJAdAWQAkAbAEAjQACAVgKAKQgBABgBAEIgFAIQgDAFgCACQgaAVglABIgEAAQgbAAgvgKg");
	this.shape_7.setTransform(-12.1,-0.5,0.928,0.928);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D4FFF8").s().p("AAVBEIg5gGIglgCQgTgDgJgRQgLgWADgXIACgLQACgMAJgLQAFgHAJgHQAkgPAcgBIAZABQAsADAeAYQATAOAHAVQAIAWgLAUQgLASgWAKQgMAGgSAAIgUgCg");
	this.shape_8.setTransform(21,0.9,0.928,0.928);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAVBNIgrgHIgsgDQgXgBgOgRQgNgQgBgXQAAgIADgPQADgRAJgMIAHgIQAIgHAIgDIAHgFQAlgPAgACQAiACAQAGQAiAMAUAYQAQAVAAATQACARgIAOQgNAagbAKQgPAGgRAAIgSgCg");
	this.shape_9.setTransform(21.2,0.9,0.928,0.928);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BFACAC").s().p("AgNAnQgUgBgOgIQgNgIgBgNQgCgLAIgJQAagcAlABQAZAAAWAWQAHAIAAAHQAAAFgFAIQgGAJgJAEQgfAOgVAAIgDAAg");
	this.shape_10.setTransform(9.4,12.2,0.928,0.928);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAEIgRgBQgegDgPgWQgIgKACgMQABgNAKgKQAVgUAhgFQAfgEAXAOQAHAEAPAOQAHAHAAAKQAAAKgGAIQgJAMgRAJQgKAGgKACIgWAEIgGBZIgHABg");
	this.shape_11.setTransform(9.2,16.7,0.928,0.928);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3E3E3").s().p("AgGGyQgRgBgegFQgqgHgtgTQgMgNgTgKIgIgEQgTgIgbgXIgtgmQgmgkgbglQgbglgWguIgEgGIgEgRQgEgLAAgHQAAgFgCgLQgCgLAAgGIACgiQABgVAFgOQATg2AMgTQAggzAagcQA5g8AxgcIgMAAIAUg0IAHgQIARgfQALgQAIgPQAHgPAHgJQAMgRAPgNQAVgTAMAEQAZAIgOB1IgDAjIATAAIA+gBQAJAAAzAIQAnAGApASIAVAJIABgCIgegSQAQggARgYQAWgkAWgUQAWgVAMAFQANAGADAlQACAdgEAdIgGAkIgKAwIAAAPIADACIAEgFIAFACIAOARIAlAyQAVAcAMAYQAcA1AKAlQALApgDAlQgDAsgJAVQgbA/giAoIgfAdQgYAWgaASIgLAHIgLAGQgRAHgXAMIgaANIhmAqQgXAEgYAAIgPAAg");
	this.shape_12.setTransform(0.2,0.7,0.928,0.928);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgzGyQhAgOgrgTIgQgGQgKgDgGgEQgMgJgcgPIglggQgrglgigtQgcgkgYgsIgHgPQgVgoABgnQAAgsAIgZQANgnALgRQAWgjAKgMIAUgWQAmgoAkgbIAugfQAGgDABgGQAMgxAUgqQAUgrAUgdQAWgeANgJIAPgJQAJgDAJABQANACAIANQAMASABAZQABAqgDARQgEAbgHAWIAdgCIAigBQAPAAATADQAOACATAFIAhAJIAgAMIAbg4QAagwAhgaQAIgGAMgDQAUgFALARQAKAPAAAQIADAnIgBANIgFAjQgDAUgFAOQgGAWgCAEQgGALAJAJIAEADIAuA1IAZAhIACACIARAaQALAQAFAKQATArAFAOQAMAoACAcQAEA/gXA4QgEAKgIAOQgWAoggAiQgiAlgqAaQghASgTAJQgWAKgTAFQgVAGgUAEIgqAIIg9ADIgZABQgcAAgXgFg");
	this.shape_13.setTransform(0,-0.2,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-41,78.6,82);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA9BnQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgYQgBgcgEgjIgIg3QgEgVgNgQQgKgLgPACQgNABgVASQgPAOgJANQgEADgEgBQgDgCgBgDQgBgEACgEQAIgMAEgFIAHgFIAVgPQATgOATACQARACALANQAQAUAGAkIAEAgIgBBPIgBAWIgDABIgBAAg");
	this.shape.setTransform(-15,-12.6,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3E3E3").s().p("AA3DbIgDgNQgFgYgKgQQgFgFgFgBIgKAEIgnASQghAOgjAFQgaAFgWgGQgGgCgDAAIgFgEIgFgFQgLgKgGgUQgIgagEgrQgCgVgBgqQgCgiABgcIACghQgQgdgIggQgGgbAAgZQAKgPAMgMQAWgWAVADQAGABAGADQALAGAHAPQALAWAFAuQAGAvgDAsIgGBzQAAAaAGARQAJASAOACQAUADATgEQANgCAXgKIBFgeQATgHAOgEIAkgIQAmgGAZAIQAUAGADANIgHAFQgEACgEgDQgKgHgQgBIgbABIgFADIARABQAZACANAKQANAKACAOQACAOgKALQgMANgOgKIgXgTQgJgLgOgBQgPAAgNAKIAdArQAIANgBAMQAAAMgGACQgIAEgIgIQgGgHgDgFIgXgpIgDgEQgBgCgEACIAFANIAHAZQACAWgXAIIgGACQgHAAgEgKg");
	this.shape_1.setTransform(0.3,0.1,0.928,0.928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiCSIgIgcQADgagPgGIgEgBQgHgBgIAHIAAAAIgbAPIgBAAQgHABgSAIQgUAJgfABIggACQgQgBgOgEIAAgBQgFgBgFgEIAAgBIAAAAIgFgEQgEgGgCgEIgCgEIgJghIAAgBQAAgRgDgJQgEgrAAgyQABg2ADgoQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAZAJAUADIAeAHIAOAEIABAGQgDARAAAYIAAAoQAAAjAFARQAFAOAHAGQAGAFAMABIAVgEIBdgbQAGgBAKgFQBCghA5AJQANACAPAKQANAIgDAOQgDACgBAFQgEABABAEQACAFAFAIIAAACIAAAJIAAAKIgDAHQgFAFgGAMIAAAAQgKAJgRgFIgDAAQgEgCgFgHIgFgDIgDgEQgFgEgEgCQgCgDgJgEIgTgGQgCAAgDACIgBgBIgCABIABAGIAJAOIAQAUIAAABIAHATQACATgKAIIgKACIgDAAQgIgEgDgFIgFgDIgLgRIgFAVIAAAAIgNAMQgHAGgHABIgFAAQgKAAgGgHg");
	this.shape_2.setTransform(1.6,8,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-22.2,42.4,44.5);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3E3E3").s().p("ABICfQgCgHgBgKIAAgmQgBgKgEgFQgCgDgEgDIgBgBQgHgFgDADIgBAEIADAMIABADIAAABIABADQADASgIALQgGAGgFABQgFABgIgEQgIgFgDgGQgGgPgBgHIgBgbIgzAHQgSACgYAHQgVAFgRABQgdABgPgGIgIgDIgFgEIgDgFQgJgKgFgTQgFgaABglQAAgUADgnIAFg6IAEgXIAAgEQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADgGQABgDAFAAIALADQAWAJAGAKIAIASIAKAVQgDAcAAAfQABAkAHAhQAEAIAMAFQALAFAPgCIA8gJQAsgGArACIAZAAQARAAAXAGIASAGQAaAJANALQAPAMACANQABAHgGAKQgOAYgQgVIgQgUQgKgNgLADIgLACIgBAAIgBAAQgEAAgBACQgDACACADIgBAAIAGAIIATAcQAKAQgHALQgFAJgJgFQgHgGgDgGIgNgbQgIgOgMgLIAMAlQAFAMgEAOQgDAMgJAEIgGABQgGAAgDgHg");
	this.shape.setTransform(0,-0.2,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABOCuQgHgBgDgGIgCgCIgDgJIgDgNQAAgFgCgEIgRAOQgJABgKgEQgHgDgHgIIgIgNIgEgNQgBgFAAgLIACgMIgQACQgTADgWAFQgaAIgNACQgXAFgMAAQgdAAgbgJIAAAAQgFgDgEgEIAAgBIAAAAIgEgEIgFgKIgBgDIgFggIAAgBQABgRgCgHQAChGAShyIABADQACgGAEAAIAPAEIAQAGQAIAFAEAFQAEAEAEAKIANAaIABAAQADAAAAAYIgBAuQABAiAHAeQABACAGADQAMAGAPgCQAmgHATgCQAZgDAbAAIAoACIAlABQARABATAEIAPAEIAXAIQAMAFAHAIQAJAHAFALQAFALgHARQgHARgNAEQgKADgIgHIgSgVIAAgBQgJgNgIgBIgIAAIgBAAIgFABIgBAAQABAGABACIATATQAFAIAGAPQAEAMgEAJIgDABQgLAJgJAAQgJgBgJgLIgDgDIgEANIgQAOQgFADgEgBIgFAAg");
	this.shape_1.setTransform(0,0,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-16.2,40.1,32.4);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbApIgQgTIgMgVIgagpIABAAIAcAoIAOATIAMAWg");
	this.shape.setTransform(-0.5,1.4,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EECFCF").s().p("ABABVQgUgBgNgGQgLgGgPgMQgQgOgRgaIgegrIgIgQQgJgUgCgIQgDgKADgEQADgEALAAIAIACQAXAGAaAZQASASATAaIAhAwIACAEIAIARQAFAJAAAGQAAAGgCACQgCACgFAAIgGgBg");
	this.shape_1.setTransform(0.1,0.1,0.928,0.928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABHBcIgLgBQgPgBgNgGQgfgPgWgeQgHgJgNgVIgUgeIgJgOQgFgIgGgSQgOgdAigBQAPgBASAMQAaARAWAbQAaAfAWAnIAOAdIACAJQACADAAAFQAAAHgEADQgDACgFAAIgDAAg");
	this.shape_2.setTransform(0,0,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-8.5,15.9,17.2);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAANQhZgChEgNIAAgKQBEANBZACQAeABCAgCIAAAKIiAABIgeAAg");
	this.shape.setTransform(-14.4,3.1,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABeAKQgXgCgwAAIhCgCQgogBgcgGIAAgKQAcAHAoABIBCACQAwAAAXABIASACIAAAKg");
	this.shape_1.setTransform(18.7,4.2,0.928,0.928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3E3E3").s().p("AAAAvQhYgChCgOQACgIAFgIIAEgHQAMgOANgKQALgIANgGQARgIAXgEQA/gNBBAVQAvAOAWAiIAFAHQAAAAAAABQAAAAAAABQAAAAAAAAQABAAAAAAQAGANAAAKIiNACIgOgBg");
	this.shape_2.setTransform(-14.3,-0.9,0.928,0.928);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3E3E3").s().p("ABdAnQgXgCgvAAIhCgBQgngBgbgHIACgQQACgMAJgKQAFgHAJgHQAkgPAcgBIAZABQAsADAeAYQATANAHAVQADAKAAAJg");
	this.shape_3.setTransform(18.7,0.7,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-5.3,58.2,10.6);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFCF4").s().p("ABWhdIirC7g");
	this.shape.setTransform(0,-0.2,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFCF4").s().p("AgBACQgugvgfgjQAXAVA5A6QA0A1AZAdIhQhPg");
	this.shape_1.setTransform(0.6,1.6,0.928,0.928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFCF4").s().p("AhHAAIBFgEIBJAHIg6ADg");
	this.shape_2.setTransform(-1.1,0.4,0.928,0.928);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFCF4").s().p("AgEgGIAJhXIgFC7g");
	this.shape_3.setTransform(-0.6,0.3,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-9,16,18.1);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.5,1,1).p("Ak1gCQExhAE6Be");
	this.shape.setTransform(-15.4,-17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2.5,1,1).p("Ak1gDQEtg5E+BW");
	this.shape_1.setTransform(-15.5,-17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.5,1,1).p("Ak2gEQEqgyFDBP");
	this.shape_2.setTransform(-15.5,-17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2.5,1,1).p("Ak2gFQEngsFGBI");
	this.shape_3.setTransform(-15.6,-17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2.5,1,1).p("Ak3gGQEjglFMBA");
	this.shape_4.setTransform(-15.6,-18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2.5,1,1).p("Ak3gHQEggfFPA4");
	this.shape_5.setTransform(-15.7,-18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2.5,1,1).p("Ak4gIQEdgYFUAx");
	this.shape_6.setTransform(-15.8,-18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2.5,1,1).p("Ak4gJQEZgRFYAp");
	this.shape_7.setTransform(-15.8,-18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2.5,1,1).p("Ak5gJQEWgLFdAh");
	this.shape_8.setTransform(-15.9,-18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2.5,1,1).p("Ak5gKQETgEFgAa");
	this.shape_9.setTransform(-15.9,-18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2.5,1,1).p("Ak6gKQEPACFmAT");
	this.shape_10.setTransform(-16,-18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2.5,1,1).p("Ak6gJQELAJFqAL");
	this.shape_11.setTransform(-16,-18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2.5,1,1).p("Ak7gJQEJAPFuAE");
	this.shape_12.setTransform(-16.1,-18.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2.5,1,1).p("Ak7gJQEFAVFygD");
	this.shape_13.setTransform(-16.2,-18.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2.5,1,1).p("Ak8gJQECAbF3gK");
	this.shape_14.setTransform(-16.2,-19);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2.5,1,1).p("Ak8gLQD+AiF7gS");
	this.shape_15.setTransform(-16.3,-19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2.5,1,1).p("Ak9gMQD8ApF/ga");
	this.shape_16.setTransform(-16.3,-19.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2.5,1,1).p("Ak9gNQD4AvGDgh");
	this.shape_17.setTransform(-16.4,-19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2.5,1,1).p("Ak+gPQD0A3GJgo");
	this.shape_18.setTransform(-16.4,-19.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2.5,1,1).p("Ak+gQQDwA9GNgw");
	this.shape_19.setTransform(-16.5,-19.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2.5,1,1).p("Ak+gSQDtBEGQg3");
	this.shape_20.setTransform(-16.6,-19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2.5,1,1).p("Ak/gTQDqBKGVg/");
	this.shape_21.setTransform(-16.6,-19);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2.5,1,1).p("AlAgVQDnBRGahG");
	this.shape_22.setTransform(-16.7,-19);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2.5,1,1).p("AlAgWQDjBXGehO");
	this.shape_23.setTransform(-16.7,-19);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2.5,1,1).p("AlBgYQDgBeGjhV");
	this.shape_24.setTransform(-16.8,-19);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2.5,1,1).p("AlBgZQDdBkGmhc");
	this.shape_25.setTransform(-16.9,-19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2.5,1,1).p("AlBgbQDZBrGqhk");
	this.shape_26.setTransform(-16.9,-19);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2.5,1,1).p("AlCgdQDWByGvhs");
	this.shape_27.setTransform(-17,-19);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2.5,1,1).p("AlCgeQDSB4Gzhz");
	this.shape_28.setTransform(-17,-19);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2.5,1,1).p("AlDggQDQB/G3h7");
	this.shape_29.setTransform(-17.1,-18.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2.5,1,1).p("AlEghQDMCFG9iC");
	this.shape_30.setTransform(-17.1,-18.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2.5,1,1).p("AlEgjQDJCMHAiK");
	this.shape_31.setTransform(-17.2,-18.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2.5,1,1).p("AlEgkQDFCTHEiS");
	this.shape_32.setTransform(-17.3,-18.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2.5,1,1).p("AlFgmQDCCaHJiZ");
	this.shape_33.setTransform(-17.3,-18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(56).to({_off:true},1).wait(33));

	// Layer 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D0E2FE").s().p("AEpDfQhYgBhZgRQhagPhZgiQhagjhXg9QhXg8grg1Qgrg1gzhMQgFgIgGgGQEHg+FdBVQgIBRAzBOQAzBOBGA2QBFA2BjANQhTAmhWAAIgHAAg");
	this.shape_34.setTransform(1.5,2.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D0E2FE").s().p("AEpDfQhYgBhZgRQhagPhZgiQhagjhXg8QhXg9grg1Qgrg1gzhMQgFgIgGgGQEHg+FdBVQgIBRAzBOQAzBOBGA2QBFA2BjANQhTAmhWAAIgHAAg");
	this.shape_35.setTransform(1.5,2.5);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D0E2FE").s().p("AEpDeQhPgBhOgNIgUgEQhMgMhMgbIgcgLQhIgchHgtQgRgKgRgMQg5gogmgkQgUgTgPgTQgdgkgggtIghgxIgGgIIgFgGQEGg2FfBMQgIBTAzBOQALARAMAQQArA5A2ArIAQALQBBAtBYALQhRAmhVAAIgKAAg");
	this.shape_36.setTransform(1.5,2.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D0E2FE").s().p("AEqDdQhQgBhPgNIgTgEQhNgNhLgaIgcgLQhJgchHguIgigWQg5goglgkQgVgUgOgSQgdgkggguIgigwIgGgJIgEgFQEDgwFiBFQgIBUAyBOQALASAMAPQArA5A3ArIAQAMQBBAtBYALQhRAmhUAAIgKAAg");
	this.shape_37.setTransform(1.5,2.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D0E2FE").s().p("AEpDcQhPgBhPgOIgUgDQhMgNhMgbIgcgKQhJgdhHgtQgRgLgQgMQg6goglgkQgUgUgPgTQgdgjggguIghgxIgGgJIgEgEQEBgpFkA9QgHBUAxBPQALASAMAPQArA6A3ArIAQAMQBBAtBYALQhRAmhVAAIgKAAg");
	this.shape_38.setTransform(1.4,2.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D0E2FE").s().p("AEpDcQhQgChPgNIgUgEQhMgNhMgbIgcgKQhJgdhHgtIghgXQg5gpgmgkQgTgTgQgTQgdgkggguIghgxIgGgJIgEgEQD/gjFoA2QgIBWAwBOIAXAhQAsA7A3ArIAQAMQBAAtBaAMQhSAlhVABIgKAAg");
	this.shape_39.setTransform(1.4,2.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D0E2FE").s().p("AEqDbQhQgChPgNIgUgEQhNgNhLgbIgcgKQhKgdhHguQgSgLgQgMQg6gpglgkQgTgUgQgTQgdgkgfguIghgwIgHgJIgDgEQD9gcFqAuQgHBXAwBOQAKASAMAPQArA7A3AsIAQAMQBCAtBZAMQhSAmhUAAIgKAAg");
	this.shape_40.setTransform(1.4,2.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D0E2FE").s().p("AEpDaQhPgChQgNIgUgEQhNgNhLgbIgcgLQhJgdhIguIgigWQg5gqgmgkQgTgUgPgTQgdgkggguQgPgUgSgdIgGgJIgDgDQD6gWFuAnQgIBYAvBNQALATAMAPQArA7A3AsIAQAMQBCAuBZAMQhSAmhVAAIgKAAg");
	this.shape_41.setTransform(1.3,3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D0E2FE").s().p("AEpDZQhPgBhQgOIgUgDQhNgOhMgbIgcgLQhJgdhHguIgjgXQg5gpgmglQgTgTgPgUQgdgkggguQgOgUgTgdIgFgJIgEgDQD5gPFwAfQgIBZAvBOQAKASAMAQQAsA7A3AsIAQAMQBCAuBaAMQhTAmhVAAIgKAAg");
	this.shape_42.setTransform(1.3,3.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D0E2FE").s().p("AEpDYQhQgBhQgOIgUgEQhNgNhMgbIgcgLQhJgdhHgvIgigWQg6gqglglQgTgTgQgUQgdgkgggvQgNgTgTgeIgGgJIgDgDQD3gHFyAWQgHBbAtBOQALASAMAQQArA7A4AtIAQAMQBCAuBaAMQhSAmhWAAIgKAAg");
	this.shape_43.setTransform(1.3,3.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D0E2FE").s().p("AEpDYQhQgChQgNIgUgEQhNgNhMgcIgcgKQhKgehHguIgigXQg6gqglglQgTgUgPgTQgeglggguIgggxIgGgJIgCgDQD0gBF1APQgHBcAtBNQALATALAQQAsA8A4AsIAQANQBCAuBaAMQhSAmhVAAIgLAAg");
	this.shape_44.setTransform(1.3,3.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D0E2FE").s().p("AEpDZQhQgChQgOIgUgDQhOgOhMgbIgcgLQhJgehIguIgigXQg6grglglQgSgTgQgUQgdglggguQgNgSgUgfIgGgJIgBgDIJqANQgIBdAtBOQAKASAMAQQAsA9A3AtIAQAMQBCAvBbAMQhSAmhWAAIgKAAg");
	this.shape_45.setTransform(1.2,3.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D0E2FE").s().p("AEpDZQhRgChQgNIgTgEQhOgNhMgcIgdgLQhJgehIgvIghgXQg7gqglglQgSgUgQgUQgdgkgggvQgMgRgUggIgGgJIgCgCQDwAMF7AAQgHBeAsBNQAJATAMAQQAsA8A4AuIAQAMQBDAvBbAMQhTAmhWAAIgKAAg");
	this.shape_46.setTransform(1.2,3.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D0E2FE").s().p("AEpDaQhRgChQgOIgUgDQhNgOhNgcIgcgLQhKgehHguIgigYQg7grgkglQgTgUgQgTQgdglgggvQgMgQgUghIgGgJIgBgCQDuATF9gIQgHBfArBNQAKATAMAQQAsA+A4AtIAQAMQBCAwBcAMQhTAmhWAAIgKAAg");
	this.shape_47.setTransform(1.2,3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D0E2FE").s().p("AEzDbIgKAAQhRgDhQgOIgUgDQhOgOhMgcIgcgKQhKgfhIgvIgigXQg7grgkgmQgSgTgQgUQgdglgggvQgMgQgUghIgGgKIgBgBQDrAaGBgQQgHBhAqBMQAKAUAMAQQAsA9A4AuIAQAMQBCAwBcAMQhSAnhVAAIgCAAg");
	this.shape_48.setTransform(1.1,3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D0E2FE").s().p("AE0DbIgKAAQhSgChQgOIgUgDQhOgOhNgcIgcgLQhKgehIgwIgigXQg7grgkgmQgSgTgQgVQgdglggguQgLgQgVgiIgGgJIAAgBQDpAgGDgXQgHBhAqBNQAJAUAMAQQAsA9A4AuIAQANQBEAwBcAMQhSAmhVAAIgCAAg");
	this.shape_49.setTransform(1.1,2.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D0E2FE").s().p("AEzDcIgKAAQhRgChRgOIgUgEQhOgOhMgcIgcgLQhKgehIgwIgjgXQg6gsglglQgSgUgQgUQgdglgggvQgLgQgUgiIgGgJIgBgBQDoAnGFgfQgHBjApBNQAKATAMAQQAsA+A4AuIAQANQBDAxBdAMQhTAmhVAAIgCAAg");
	this.shape_50.setTransform(1.1,2.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D0E2FE").s().p("AEzDdIgKAAQhRgDhRgOIgUgDQhOgOhNgdIgcgLQhKgehIgwIgjgYQg6grgkgmQgSgTgRgVQgcglghgvQgKgPgVgjIgGgJIAAAAQDlAtGIgnQgGBlAoBMQAKAUALAQQAtA+A4AuIAQAOQBDAwBdAMQhSAnhWAAIgCAAg");
	this.shape_51.setTransform(1.1,2.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D0E2FE").s().p("AE0DdIgKAAQhSgChRgOIgVgEQhNgOhOgcIgbgLQhLgehIgxIgigXQg7gsgkgmQgSgUgPgUQgegmgggvQgKgOgWgkIgFgJIAAAAQDjA0GMguQgIBlAnBNQAKATAMARQAsA+A4AvIASANQBDAxBdAMQhTAmhVAAIgCAAg");
	this.shape_52.setTransform(1,2.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D0E2FE").s().p("AEzDeIgKAAQhRgChSgPIgTgDQhOgOhOgdIgcgLQhKgehJgxIgigYQg7grgjgnQgSgTgQgVQgegmgggvIgfgyIgGgJIABAAQDgA7GPg2QgIBnAoBMQAJAUAMARQAsA+A4AwIARAMQBDAxBeANQhSAmhWAAIgDAAg");
	this.shape_53.setTransform(1,2.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D0E2FE").s().p("AEzDfIgKAAQhRgChSgPIgUgDQhOgOhNgdIgcgLQhLgfhIgwIgigYQg8gsgjgnQgSgUgQgUQgdgmghgvIgegyIgGgKIABABQDeBCGRg+QgHBoAmBMQAKAUAMARQAsA/A4AvIARANQBDAxBeANQhTAmhWAAIgCAAg");
	this.shape_54.setTransform(0.9,2.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D0E2FE").s().p("AE0DgIgKAAQhSgDhSgOIgUgEQhOgOhOgdIgcgLQhKgehJgyIgigYQg7gsgkgnQgRgTgQgVQgeglgggwIgfgyIgGgKIACABQDcBJGUhGQgIBpAmBMQAKAUALASQAsA+A5AwIARANQBEAyBeAMQhTAnhWAAIgCAAg");
	this.shape_55.setTransform(0.9,2.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D0E2FE").s().p("AE0DgIgKAAQhSgChSgOIgUgEQhPgOhNgdIgcgMQhKgehJgxIgjgYQg7gtgkgnQgRgTgQgVQgdgmghgwIgegyIgGgJIABABQDbBPGWhNQgHBqAlBMQAJAUAMARQAsBAA5AvIARANQBEAzBeAMQhSAmhVAAIgEAAg");
	this.shape_56.setTransform(0.8,2.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D0E2FE").s().p("AE0DhIgKAAQhSgChSgPIgUgDQhPgPhNgdIgcgLQhLgfhJgxIgigYQg8gtgjgnQgRgUgQgVQgegmgggvIgfgyIgGgKIACABQDZBXGZhWQgHBsAkBMQAJAUAMARQAsBAA5AwIARANQBEAzBfAMQhTAmhUAAIgFAAg");
	this.shape_57.setTransform(0.8,2.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D0E2FE").s().p("AE0DiIgKAAQhTgChRgPIgVgEQhOgOhOgeIgcgLQhKgfhKgxIgigZQg8gsgjgoQgRgTgQgWQgeglgggwIgegyIgGgKIACACQDWBdGchdQgHBsAkBMQAJAVAMARQArBAA6AwIARANQBEAzBfANQhSAmhWAAIgEAAg");
	this.shape_58.setTransform(0.8,2.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D0E2FE").s().p("AE0DjIgKAAQhSgChTgPIgTgEQhQgOhOgeIgcgLQhKgfhJgyIgjgYQg7gtgkgoIgggpQgegmgggwQgIgLgWgnIgGgKIACACQDUBkGfhlQgIBuAjBMQAJAUAMASQAtBAA5AxIARANQBEAzBgANQhTAmhWAAIgEAAg");
	this.shape_59.setTransform(0.7,2.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D0E2FE").s().p("AE1DjIgKAAQhTgChSgPIgVgDQhPgPhNgeIgcgLQhLgfhKgyIgigZQg8gtgjgoIghgpQgegmgggvIgegzIgGgKIADADQDSBqGhhsQgHBuAiBMQAJAVAMARQAtBBA5AxIARANQBEA0BgAMQhTAnhVAAIgEgBg");
	this.shape_60.setTransform(0.7,2.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D0E2FE").s().p("AE0DkIgKAAQhSgChTgPIgUgEQhPgOhOgeIgcgLQhLgghJgyIgigYQg9gugjgoIgggpQgegmgggwIgfgyIgFgLIADADQDQBxGkh0QgIBwAiBMQAKAVALARQAsBBA6AxIARAOQBFA0BgAMQhTAnhWAAIgFgBg");
	this.shape_61.setTransform(0.6,2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D0E2FE").s().p("AE1DmIgKAAQhUgDhSgPIgUgDQhPgPhPgeIgcgLQhLgghJgyIgigZQg9gtgigoQgRgUgQgWQgegmgggwIgegyIgGgLIAEADQDNB4Gnh8QgHByAhBLQAJAVALASQAtBBA6AxIARAOQBEA0BhANQhTAmhWAAIgEAAg");
	this.shape_62.setTransform(0.6,1.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D0E2FE").s().p("AE1DnIgKAAQhTgDhTgPIgUgDQhQgPhOgeIgcgMQhLgfhJgyIgjgZQg8gugjgoQgQgUgRgWQgdgmghgwIgdgzIgGgKIAEADQDLB/GqiEQgIBzAhBLQAJAVALASQAtBCA6AxIARANQBEA1BhANQhTAmhWAAIgEAAg");
	this.shape_63.setTransform(0.5,1.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D0E2FE").s().p("AE1DoIgKAAQhTgDhTgPIgUgDQhQgPhOgeIgcgMQhLgghKgyIgjgZQg8gugjgpIgggpQgegngggwIgegzIgGgKIAEAEQDKCFGsiLQgHB0AgBLQAIAVAMASQAsBCA7AxIARAOQBFA1BhANQhTAmhVAAIgGAAg");
	this.shape_64.setTransform(0.5,1.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D0E2FE").s().p("AE1DpIgKAAQhTgDhTgPIgUgDQhQgQhPgeIgcgLQhLgghJgzIgjgZQg9gugigpIghgpQgdgnghgwIgdgzIgGgKIAEAEQDHCLGwiSQgHB1AfBKQAIAWAMASQAsBCA7AyIARAOQBFA1BhANQhSAmhVAAIgHAAg");
	this.shape_65.setTransform(0.4,1.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D0E2FE").s().p("AE1DqIgKAAQhUgChTgQIgUgDQhPgPhPgfIgcgLQhMgghJgzIgjgZQg8gvgjgoIghgqQgdgnghgwIgcgzIgHgLIAFAFQDFCSGyiaQgHB2AeBLQAJAVAMASQAsBDA6AyIARAOQBFA1BjANQhTAmhVAAIgHAAg");
	this.shape_66.setTransform(0.4,1.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D0E2FE").s().p("AE2DrIgKAAQhVgChTgQIgUgDQhQgQhPgeIgcgLQhLghhKgzIgigZQg9gvgjgpIgggpQgegngggxIgdgzIgGgKIAFAFQDCCZG1iiQgGB3AdBKQAJAWALASQAsBDA8AzIARAOQBFA1BiANQhTAmhVAAIgGAAg");
	this.shape_67.setTransform(0.4,1.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D0E2FE").s().p("AE1DsQhYgBhZgRQhagPhZgiQhagjhXg8QhXg9grg1Qgrg1gzhMIgkg+QDACoG+itQgJCdAzBOQAzBOBGA2QBFA2BjANQhTAnhWAAIgHgBg");
	this.shape_68.setTransform(0.3,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1).to({_off:false},0).wait(54).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-21.9,96.4,46.7);


(lib.Group_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AAAAyQgVgvgDgXIgBgKQAAgJAFgIQAGgHAJgCQAFgBAIAEQAIAEAEAHQALASgIARQgIAPgUAEQABAHAGAPQAGAPABAIQgHAAgCgHgAgGgtQgIADgBAHQgCATAKAWIAJgFQACgBAHgIQAHgJgBgKQgBgKgJgHQgEgDgDAAIgGACg");
	this.shape.setTransform(18,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgYA3IgBgKQgCgagBg1QAAgKAEgKQAEgJAHgBQAGgBAHAHQAFAHADAHQARAmADAfIABAHIgCADIgDABIgKgkIgcAMQgEACAAAHIABAnIgDAFQgEgEAAgGgAgUgYIABAfIAggOQgGgSgEgIQgFgPgKgIQgIANAAATg");
	this.shape_1.setTransform(12.9,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AARBIQgDgKgCgSIgDgcIgIg5QgIACgTAJQgSAIgKABIgBgDIAEgFQAUgPAggLIAugRIAJAAQgBAMgJACIgeALQgIABABAKIAFAiIAJA9QABADgDAKg");
	this.shape_2.setTransform(5.6,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0,0,20.6,16.8), null);


(lib.Group_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AAIAzIgIhZQgOAHgbAQQAFgJAKgHQAFgEANgIIAugXQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQgDAHgHAEIgNAGIgIAEQgFACABAIIAJBdIgBAHQgGgFgBgLg");
	this.shape.setTransform(4.2,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgPAhQgHgkACgWIADgUQAEgOAOgBQAKAAAHANQAKATgPATQgDADgHAEIgJAFIgFADQAAAGAEAVQADARgCALQgEgGgFgWgAgJgpQgGATAFATQAPgGAFgPQAFgPgLgMIgCAAQgIAAgDAKg");
	this.shape_1.setTransform(16.1,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgaAsIAFg1QACgaAFgMQAFgOAKAKIAEAFQANAZADAOIAFAhQABAEgCAIIgEAAIgJglQgWANgCADQgCABgDANIgDAZQgGgEAAgIgAgMgRIgCANQgBAHACAGIAXgQQgEgVgMgQQgGALAAAQg");
	this.shape_2.setTransform(10.5,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0,0.1,18.3,14.1), null);


(lib.Group_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AANA3IgBgJIgHhXIgkAMIAEgHIAbgPQARgJAMgCIADACIgEAHIgJAEQgGADgBACQgBACABAGQAEAUACAQIACA/QgFgDgCgFg");
	this.shape.setTransform(3.2,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgaA0IABhBQABgUACgFQADgMAJgFQAKgFAJAEQAKAEAFALQAFALgEALQgGANgSAJQgCACgEAAIgIgBIgDALIgCAhQgBAJgGACIgBgHgAAAgxQgFABgEAEQgEAEgBAGIgCAiQAAAAAAABQAAAAABABQAAAAABAAQAAABABABIAAAAIATgNQAPgLgFgQQgCgFgFgEQgEgEgEAAIgBAAg");
	this.shape_1.setTransform(17.1,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgbA5IgBgFIAIhGQADgWAIgMQADgGADAAQADgBAFADQAIAEAEALQAIAWADApQABAIgBAIIgDAOQgFgJgCgNIgDgWQgSAGgJAEQgEACgBAFIgEAcIgCAHQgEgBAAgCgAgOAKIAcgKQABgNgEgOQgFgOgIgIQgLAdgBAeg");
	this.shape_2.setTransform(9.9,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0,0,19.8,13.6), null);


(lib.Group_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AgBARIgFgtIgiANIgBgCIADgDIA0ggQAHgFALgDIAKABIgHAGQgGgBgLAJQgCACgKAFQgFACgBAEQgBACABAGQAGAkACARQADAYgCAIQgIgIgCgkg");
	this.shape.setTransform(4.2,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgHAqQgOgtgBgXQAAgJADgJQAFgMANAAQAMABAEAKQABAFAGAJQACAHgGANQgGAMgJAEIgHABIgBgCIALgPQAMgQgLgNQgEgFgFgBQgEAAgDAIQgEAMADATIAJAoQACAQgBAIQgGgLgBgEg");
	this.shape_1.setTransform(15.5,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgZAwQAAgyAFgaQADgOADgGQADgHAGAAQAFgBAFAGQAGAIACAHQAOAhgBAeIgCAIIgCAAIgIgdIgdAOIgFAjIgCAAIgDgIgAgPALIAcgJQgHgggKgRQgJAZgCAhg");
	this.shape_2.setTransform(9.6,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,0.1,17.8,12.5), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AgGAyQgNgrACgiQAAgIADgGQAGgOAMACQAFABAFAGQAFAHAAAGQgBAggaANIAIApIgCABgAgGgmQgIARAGAVQALgDAFgNQAGgNgFgJQgDgGgFAAQgEAAgDAGg");
	this.shape.setTransform(16.6,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AAAAmIgCgZIgGgwIgiAMIgBgDIBFgiQAKgEAIAGIgmAPQgGADABAJIAHA1IABAkIgCAFQgGgKgBgPg");
	this.shape_1.setTransform(4.4,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgXA0QgCgKABgHIAFg+IAEgRQADgLAIAAQAFgBAGAJQAOAbADAeIACAbIgCAHIgEAAIgHglIgdAPIAAAiIgDABIgEgFgAgNAMIAXgMQADgCgBgCQgGgcgKgQQgNAfAEAdg");
	this.shape_2.setTransform(11.5,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,0,18.5,12.8), null);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AAAA1IAAgGIgFhQIgaAEIgBgCIAGgEIA6gTQABAHgEACIgIAEIgSAFIAFBYQAAADgEAAIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape.setTransform(3.3,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgXAvQgCgcALglQAGgWAIgJQAIgLAGANIAEALQAJAlgDAiIgDAGQgDgHgBgNQAAgNgDgGQgGgBgIADIgLAFQgHADABAMIAAAXIgBAHIgCABgAgFgWQgFAPAAAJIASgFIAEgCIABgEQgBgVgHgNQgFAFgFAQg");
	this.shape_1.setTransform(8.8,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgPAtQgGgrgCgWQgDgZAXgKQAGgDAHACQAHADAEAGQAFAMgCAKQgEARgRALIgJAEIgCgEIAIgIQALgJAEgMQADgHgCgFQgCgGgGgCQgGgDgFADQgFACgCAHQgEAPAAAMIAHA+QAAADgEADQgEgIAAgFg");
	this.shape_2.setTransform(14.7,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,17.2,12.5), null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AAJA7IgBgHIgMhQQgFABgJAGQgIAFgFABIgCgEIA3gpQACgCAKgCQgGALgLAIIgRANIAHAgIAFAhQACALABAUQgEgCgCgDg");
	this.shape.setTransform(3.4,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgFAsIgIgRQgIgiADgSQACgNAIgGQAMgIAJALQALAOgGAOQgEAMgDADQgEAGgNAMIAGAcIgFgEgAgKgQQAAAHACASQAKgHAHgPQAGgRgPgIQgJAJgBANg");
	this.shape_1.setTransform(16.3,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgYA4IAAgTIAHhDIAEgPQACgIAKgCQAOAOAIAbQAIAZgFAVIgHgcQgSALgNAJIgCAGIgFAagAgMgQQgCALABATIAdgPQgFgagNgSQgIAMgCARg");
	this.shape_2.setTransform(9.9,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,18.4,12.9), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AgCAiIgBgUIgGgnIgcAHIgBgCIAEgEIA4gaQAEgCAHAAIAGAGIggANQgHACAAAJIAFAwIAAAaIgFABQgBgIgBgLg");
	this.shape.setTransform(3.9,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgPArQgGgmgCgTQgCgWAMgOQAHgHAIABQAJABAFAIQALAPgDAPQgDAMgPAMQgDACgEACIgKADIAEAsQgHgEgBgLgAAAgwQgFAAgDAGQgLAVAHAZQAQAAAKgTQAGgNgLgPQgFgGgEAAIAAABg");
	this.shape_1.setTransform(15.6,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgYAvIACgmIAHgoIADgLQAEgNAIAAQADgBADAEIAEAIQAHAUABAKIAHAzQABALgGAHQgDgIgBgPQgBgPgDgIIgcAMQgCAFAAAMQAAAMgEAHIgCgKgAgLgVIgEAZIACAGIAYgJQgBgdgMgTQgFALgEAPg");
	this.shape_2.setTransform(9.6,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,18.1,12.3), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AAIALQgGglgBgOIgiAQQAIgLANgIQAOgKANgEIASgEIABAEIgSAKQgIADgBACQgBABABAJIAJA3QACAMgBAYQAAABgEACQABgTgGggg");
	this.shape.setTransform(3.4,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgRAxQgGgxgCgaQAAgEACgNQADgKALgEQAKgDAIAHQAJAHAFAMQAGAOgHAMQgHAMgOAEIgFgBIAFgHIAJgGQAQgTgVgVQgGgGgHAEQgJAHAAAHIAAAUQABALAFAGQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgDAHABAJIADAQIABAKQAAAGgBAEIgDAAIgEgJg");
	this.shape_1.setTransform(17.1,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgaA/IAAgTQAEgnAGgfQACgOAFgPQACgHAHAAQAFgBAEAGIAHAQQAMAiAAAiIAAADIgFAJIACAEIAAAEQgEgEgBgGIgBgLIgBgXIgXAKQgOAFAAARIgCATQAAADgDAHgAgOAJIAfgMIgGgaQgEgPgHgKQgLAegDAhg");
	this.shape_2.setTransform(9.8,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,19.7,15.9), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AgCAnIAAgNIgDg5QgQABgSAMIACgHIAVgNQAggMAQgBIAFgBQAAAAABABQAAAAABAAQAAABAAAAQABABAAABQgHAGgMADIgVAFIACArQABAZgDATQgCgGAAgIg");
	this.shape.setTransform(4,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgYAtIAGgpQAEgWAGgRIAEgJQADgFAEgBQAEgBAEAFQAEAFABAFQAFAOADAdIABAWIgCANIgCAAQgDgHgBgMIgDgTIgDgBIgVAHIgEAVQgDANgGAHgAgFgWQgDAMABALIAVgHIgCgSQgCgLgGgGQgGAHgDAMg");
	this.shape_1.setTransform(8.7,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgTA4IgCgVQgCgiAAgPQABgRAJgMIAKgJQAHgFAHADQAHADAEAJQAGATgNAOQgOAQgQAAIABAaIABAMQAAAGgDAFgAgFgnIgCAEQgKAQAEATQAUgHAHgVQACgDgCgGQgCgGgDgCIgEgBQgFAAgFAHg");
	this.shape_2.setTransform(14.7,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,17.1,13.3), null);


(lib.Group_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgvADQAZgFAWgBIAYABQANACALACIAAABIgYgBIgYgCIgWABIgYADg");
	this.shape.setTransform(4.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19_0, new cjs.Rectangle(0,0,9.5,0.8), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AADAJQgDgdgEgQQgFAGgKADIgPAGQAEgIARgKQAPgKAOgDIAJAAQAEAAAGAEIgiANQANAygFAmQgDgNgDgfg");
	this.shape.setTransform(3.5,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgZAxQAAgOABgHIAOhCIACgIQAEgFAEgBQAGgDACAIIACADIALAjQAGATgBAQIAAAKQgBAFgGADIgEgWIAAgLQgBgGgDgEQgJAHgEACQgPAHgCARIgDAUIgDgFgAgIgQQgDANABAKIAVgMQgFgXgGgJQgFAHgDAOg");
	this.shape_1.setTransform(9.3,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgRAjQgIgtACgSQAAgIAEgLQAFgNANAAQAPAAAGANQAMAZgUAWQgEAFgHAFIgNAKIAFAoIgEABgAAAgyQgHACgDAGQgJAUAHAfQAQgLAIgPQAHgNgHgNQgFgIgFAAIgCABg");
	this.shape_2.setTransform(16.1,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0.1,18.6,12.3), null);


(lib.Group_18_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AAAADIgVgEIgHgCIABgBIANADIAOABIAIAAIAGAAIAPADIAAABIgPABIgOgCg");
	this.shape.setTransform(2.9,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18_0, new cjs.Rectangle(0,0,5.8,1), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AAMAzIgBgFIgKhOQgDgBgKAFQgIAEgHgCQAJgJAOgHIAWgKQAHgDADAEQAAAEgEACIgGADQgJAFgBADQgCACADALIAIBBIgBAKQgDgBgBgCg");
	this.shape.setTransform(2.8,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgNAmQgIglADgWQACgSAMgGQAJgGAGAEQAKAHgBAKQgBAOgIAMQgJALgNAEIAFAmQgFgDgCgIgAAAglQgHAFgBAGQgEANADASQALgJAGgMQAEgGAAgJQAAgFgFgDIgDAAQgDAAgBACg");
	this.shape_1.setTransform(15,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgXA5IAAgOIAFg9IAHgdQADgLAKACQAgAqgPAzQgCgGgBgQQgBgNgDgFQgPALgIAFQgEADAAAIIgCAaIgDAIgAgDguQgKAUABAfIATgLQAGgDgCgGIgLgfg");
	this.shape_2.setTransform(8.7,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,17,11.6), null);


(lib.Group_17_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgQADQAFgDALgBIAIgCQAFAAAEADIgBAAIgIABIgIAAIgHABIgJACg");
	this.shape.setTransform(1.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17_0, new cjs.Rectangle(0,0,3.3,0.8), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AgBAxIgBhTQgFgDgIAEQgJADgFgBQAEgGAIgDIANgGIAZgIQAGgDACAEQACAGgHACIgUAGIAAAuQAAAlgCAMIgDgHg");
	this.shape.setTransform(3,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgUAUIAMg5QADgJAHgJQAJACADANQAGAUACAPQACAHABAeIgCAIIgDAAIgFgmIgLAFQgFAEgDABQgKACgBALIgCAQQgBAJgFAGQgCgKAFgagAgLAFIACACIARgKQAIgFgCgHIgHgaQgBgCgEgFQgHAPgGAmg");
	this.shape_1.setTransform(7.7,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgPAtQgJgvACgWQACghAhAGQAHABACAFQADAFgCAGQgHAYgTAJQgKAEABAJIAEAaIABAOIgEABIgEgIgAgKgkQgHAOAFAOQAHgDAIgJQAIgIACgFIAAgKIgNAAQgGABgEAGg");
	this.shape_2.setTransform(13.7,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,16.1,14.4), null);


(lib.Group_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AAMADIgMgDIgYgCIAAAAQALgCAOABQAGAAAGACQAIACADADg");
	this.shape.setTransform(2.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16_0, new cjs.Rectangle(0,0,4.9,0.8), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AAGArIgHhGIgBgFQgGAAgIAEQgJAGgFAAIAEgFQAfgUAKgFQACgBALAAQAAAAABAAQAAAAAAABQABAAAAABQABABAAABIgTAHQgGADgCACQgBACAAAGIAGAuIAEAdIgBAIQgGgCAAgJg");
	this.shape.setTransform(3.1,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgMA3IgIgpQgDgXAAgSQAAgRAJgIQAJgLAKADQAQAEACAPQADAVgMAOIgSATQgGAFABAGIADAlIgCABQgEgFAAgCgAgEgwQgHAMgCAJQgBAJADATIAGgBQAOgTADgKQAEgNgKgGQgDgDgDAAQgCAAgCADg");
	this.shape_1.setTransform(15.7,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgcA7IgBgOQAEg4AHgZIAHgPQAHgMAJAKQAFAFABADQAPAkAEAiQABANgIAKIgGgrIgMAEQgGAEgEABQgQACAAAUIgCANIgCAKgAgIgnIgGAYQgEANABAKIAggKIgHgXQgEgOgGgKg");
	this.shape_2.setTransform(9.2,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,18.1,12.4), null);


(lib.Group_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgsAFIAWgFIAWgDIAXgBIAWABIAAABIgWACIgXAAIgWACIgVAEg");
	this.shape.setTransform(4.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15_0, new cjs.Rectangle(0,0.1,9,1.1), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AAEAoIgFhPIgYAAIgBgDIA1gLQgBAKgMABQgHACgCACQgBACAAAIIAGAtIAAAPQAAAIACAGQAAACgBAGIgEAAIgDgOg");
	this.shape.setTransform(2.7,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgLAuIgBgHIgDhEQgBgGACgHQACgIAFgCQAGgCAFAFQAJAGADAKQACALgGAJQgHAMgNABIADA2QgEgDgCgFgAgJgaIACATQAPgLAAgMQAAgLgMgEQgFAIAAALg");
	this.shape_1.setTransform(13.8,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgTA0IgDgXIAAgJQAAgGgCgEQgBgBABgEIABgFIADgZQABgLAEgIQACgGAFgBQAFgBAEAGQAWAbADAoQAAALgEANQgDgGgBgQQgCgPgDgIIgcAOIAAATQABAMgCAHgAgNACIAZgHQgIgagKgNQgMATAFAbg");
	this.shape_2.setTransform(8.3,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,15.4,12.7), null);


(lib.Group_14_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("Ag1AHQARgHAJgCQALgEAQgBQAPgBANADQAPAEALAFIgBAAIgbgEQgRgDgJAAQgPAAgMADQgIABgRAHg");
	this.shape.setTransform(5.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14_0, new cjs.Rectangle(0,0,10.8,1.6), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AgFgiQgEgBgGACQgJADgCABQADgJANgCIAlgEQgFAOgRgIQgFACABAIIAGA/IABAGQgBADgFABg");
	this.shape.setTransform(2.7,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgPAAQAIgkAGgJQAJAEAEAKIAIAbQAEAPgBAMIgBASIgDAAQgDgFAAgNQAAgNgEgGQgOAGgHAEQgEACgDAIIgGAWQgCgLAJgjgAgHgOIgEAWIAXgLIgFgRQgCgKgFgGQgEAJgDANg");
	this.shape_1.setTransform(8.1,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AgMAkIgEgfQgCgQABgNQABgOAHgEQALgIAJALQAIAIgBANQgCAKgHAIIgQANIABAPQAAAKgDAIgAgBgkQgDABgBAEQgFANAEARQAIgDAFgLQAGgKgIgIQgDgDgCAAIgBAAg");
	this.shape_2.setTransform(14.1,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,15.9,10.1), null);


(lib.Group_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgjABIAAgBIAjgBIASAAQAKABAIABIAAABIgSABg");
	this.shape.setTransform(3.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13_0, new cjs.Rectangle(0,0,7.3,0.5), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#710018").s().p("AgDAAQgBgEADgFQAEAGABADQAAACgEAIIgDgKg");
	this.shape.setTransform(4.3,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#710018").s().p("AgFgUIADgCQAFAMACAYQABAJgHAAg");
	this.shape_1.setTransform(4.1,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#710018").s().p("AAAAJIgBgJIgfAEIAEgEIA1gSIAIACIgGAGIgIADQgLAFgBACQgCADACAMIgDAEIgEgKg");
	this.shape_2.setTransform(3.3,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#710018").s().p("AgMAtIgCgFIgChDQgBgLAJgEQAKgFAIAGQAKAHgFALQgFAKgGAFQgNAKACAPQABAFgBALIgDAMgAgFggQgGAMAGAKIALgQQAEgFgHgEIgDgBQgDAAgCAEg");
	this.shape_3.setTransform(13.9,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#710018").s().p("AAPAeQgCgTgCgJIgVAKQgEACgBAHIgCAcIgDAIIgCgHQgCgWAIgpIAGgbIACgGQAEgMAGACQADAAADAEIAEAHIAFAQQADAKgCAHQADAFABAHIABANQABAPgBATQAAAEgDAGQgDgJgCgSgAgLAFIAXgKIgJgoIgDgBQgLAbAAAYg");
	this.shape_4.setTransform(8.5,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,15.6,11.9), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AASADIg1gEIAAgBIAjAAIATABQAIABAJADIAAABIgSgBg");
	this.shape.setTransform(3.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,7.1,0.7), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgbADIAbgEIAOgBQAJAAAFACIAAAAIgOACIgpABg");
	this.shape.setTransform(2.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0.1,5.6,0.6), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgeACIAAgBIAegCIAPAAIAQADIAAAAg");
	this.shape.setTransform(3.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,6.1,0.5), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgjAEIARgEIASgDIASAAIASADIAAAAQgGABgMAAIgSgBQgQAAgTAEg");
	this.shape.setTransform(3.6,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0.1,7.3,0.9), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgqACQAVgCAVgBIAWAAQAMABAJABIAAABIhVAAg");
	this.shape.setTransform(4.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0.1,8.6,0.5), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgaACIANgCIAbgCQAHABAGACIAAAAIgOABIgNgBQgRAAgJACg");
	this.shape.setTransform(2.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0.1,5.5,0.5), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgXACQALgCAMgBIAMgBQAIABAEACIAAAAIgvACg");
	this.shape.setTransform(2.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,4.8,0.6), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AAAABIgUAAIAAgBIAUgBIALAAIAKABIAAABIgLABg");
	this.shape.setTransform(2.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0.1,4.2,0.5), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgZADQANgEAMgBQAJgBAFABQAJACADACIAAABIgagCQgMAAgNADg");
	this.shape.setTransform(2.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,5.2,0.7), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AAAABIgcACIAAgBQAQgDAMgBIAOABQAIABAHABIAAABIgPABIgOgCg");
	this.shape.setTransform(2.9,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,5.8,0.6), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AAAADQgJgBgTgEIAAgBIAcADIAOgBIAPABIAAABQgIACgGAAIgEABIgLgBg");
	this.shape.setTransform(2.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,5.9,0.7), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AAAABQgHgBgHAAQgIAAgGACIgBAAQAGgCAJgBQAHgCAHABIAPABIAPADIAAAAIgPABIgPgCg");
	this.shape.setTransform(3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,5.9,0.7), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAF3").s().p("AgUgBIAAgBIAUABIAKAAIALACIAAAAIgLACg");
	this.shape.setTransform(2.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,4.2,0.6), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3553A").s().p("AgbAaQgMgIgDgSIAAgDIAAAAQABgCAGAAQAJABAKgBIAAgIIALAAIgCgNIANgBIADAUIAIgCIAJgBQgBgCgFgEQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAIgBgFIAAgCQAEgCADABIAHAFIAAgCQAAgDADgCQADgEAGACQADABgDAIQgCAHgEAFIgDALQgDALgKAJQgHAHgKADQgFACgFAAQgKAAgKgHgAgPAGQAAAAAAABQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABg");
	this.shape.setTransform(4.3,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,8.7,6.6), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969696").s().p("AgbAaQgMgIgDgSIAAgDIAAAAQABgCAGAAQAJABAKgBIAAgIIALAAIgCgNIANgBIADAUIAIgCIAJgBQgBgCgFgEQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAIgBgFIAAgCQAEgCADABIAHAFIAAgCQAAgDADgCQADgEAGACQADABgDAIQgCAHgEAFIgDALQgDALgKAJQgHAHgKADQgFACgFAAQgKAAgKgHgAgPAGQAAAAAAABQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABg");
	this.shape.setTransform(4.3,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,8.7,6.6), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFCF4").s().p("AA+AJQAAgUgGgDQgHgDhAADIhAADQASgFAsgHQAxgHATADQAfAFgCAVIgBARQgDANgIAAQgGAAAAgUg");
	this.shape.setTransform(61.8,-3.6,0.928,0.928);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(29.8,-11.8,0.928,0.928,0,0,0,2.1,0.3);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28,-9.1,0.928,0.928,0,0,0,3,0.3);

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.9,-9.1,0.928,0.928,0,0,0,3,0.4);

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.5,-11.1,0.928,0.928,0,0,0,2.9,0.3);

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19.9,-6.9,0.928,0.928,0,0,0,2.6,0.4);

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(22.6,-2.9,0.928,0.928,0,0,0,2.1,0.3);

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.1,-6.2,0.928,0.928,0,0,0,2.4,0.3);

	this.instance_7 = new lib.Group_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1.7,-8.7,0.928,0.928,0,0,0,2.8,0.3);

	this.instance_8 = new lib.Group_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.4,-3.7,0.928,0.928,0,0,0,4.3,0.4);

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(3.5,1,0.928,0.928,0,0,0,3.6,0.5);

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-8.4,-7.5,0.928,0.928,0,0,0,3.1,0.3);

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-19.1,-5.2,0.928,0.928,0,0,0,2.8,0.4);

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-9.3,-2.4,0.928,0.928,0,0,0,3.6,0.4);

	this.instance_13 = new lib.Group_13_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-18.8,5.9,0.928,0.928,0,0,0,3.6,0.3);

	this.instance_14 = new lib.Group_14_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-19.9,-0.3,0.928,0.928,0,0,0,5.4,0.8);

	this.instance_15 = new lib.Group_15_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-28.2,-3.6,0.928,0.928,0,0,0,4.5,0.6);

	this.instance_16 = new lib.Group_16_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-30.9,1.8,0.928,0.928,0,0,0,2.5,0.5);

	this.instance_17 = new lib.Group_17_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-28,8.8,0.928,0.928,0,0,0,1.7,0.5);

	this.instance_18 = new lib.Group_18_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-39.6,5.3,0.928,0.928,0,0,0,2.9,0.5);

	this.instance_19 = new lib.Group_19_0();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-39.5,-1.5,0.928,0.928,0,0,0,4.8,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFCF4").s().p("AiZArQgCgEgBgPQgBgSgCgJQgCgOADgHQADgGAMgFQAJgEAegDIAdgCIhAAYQgLAEADANIAGAXQABAJAdgIQAogNAVgFQAagFBfgPIBagOIkVBBIgVAIQgHADgEAAQgEAAgBgCg");
	this.shape_1.setTransform(-12.2,14.8,0.928,0.928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFCF4").s().p("ACSBCQhWgeglgLQhPgZhqgzQgogUgVgVQAaAPAjARQBIAiA0ANQA/APAnANQAoAOArATQAlARAYAQIAQAMg");
	this.shape_2.setTransform(-49.4,7.4,0.928,0.928);

	this.instance_20 = new lib.CompoundPath_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(21.7,4.6,0.928,0.928,0,0,0,4.4,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D15460").s().p("ACYBfIgsgUIg1gVIhGgbIhNgfIhKgjQgVgMgKgIIgNgJQgGgGgDgGQgCgIAAgLIAAgUIAIAEIA0AaIAzAYIAGADIArAVQAqAWAJADQAYAKAcAHQAtAPAiAIIA7APIAcAJIADAKQALAbAAAeIAAAFQglgKghgPg");
	this.shape_3.setTransform(-49.6,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDgCIgDgGIAAgCIADAAIADAEQAGAFABAMg");
	this.shape_4.setTransform(3.5,-19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F38453").s().p("AkbBzIL8igIAAAAIBogRQBegPAUgGIAEACQACABABAFQADAQgDAZIgFAYIlfA9Ik/A/Ig3ALQguALgtANIh6AkIggAHQAGgsgUghgAk1BqIgsgRIBBgSIA9AWIgtAMIgOADQgEACgFAAQgGAAgIgEgAkUBFIBugaIA8AZIhtAWgAmQBIIhLgYIBHgSIBqAmIhDARQgPgEgUgJgAiaApIBzgaIBEAZIh8AagAkgBAIhoglIBsgaIA5AVQAQAEAiANIhuAagAnpArQgQgFgMgFIgBgBIg1gWIgCgBIAAAAIgHgCIBQgOIBWAhIhHASgAApAlIhEgYIBKgPQAfAHAvAQIhVARgAinAjIg6gUIgvgPIBxgXIBsAjIhyAYgAnpgKIBugZIAtARIAnAQIhsAagACIARQgngNglgJIBXgSIBVAXIhgASgAiSgaIA5gLQAgALAmAHIA0ANIhIAOgApXgBQgngRgLgGIgCgBIBGgOQAbAMApAPIACABIhPAOgAChgaIBKgPIAFACIBIAWIhGAPIhRgYgAkcgEQgbgLgVgIIgkgPIAzgJIA5gIQARAEBHAXIgZAGQgzAJgjAJgAgSgZQgdgGgcgHIBwgSIABAAIBgAdIhXASIhBgQgAn+gSQgjgNgZgLIBtgWIAyATIAUAHIgFAAIg8APIgsAKgAD5gsIA7gMIACAAIBXAWIhLAPIhJgZgArCgyIAAgEIBGgLIAAABIAtAUIhHAPgAAzg6IBJgMIBiAZIhKAPQgzgOgugOgAjzg5IBAgKQATAFAaAKIAgAMIg5AKgAFCg7IBEgNIAHACIBOAUIhAANIhZgWgAnBhBIAqgIIAwgHIABAAIAAAAQAaAJAjAHIAUAFIgpAFQgiAGgbAHgAiEg6IghgMIArgHIBEgJIBNAZIhwASQgYgIgTgHgApxhCIBwgRIAoAQIhrAVgACMhJIA8gKIBdAXIgDABIg3ALIhfgZgAGVhKIBhgPQAoAKAgAJIhXASIhSgWgAknhGIgwgMIBDgLQAaAHAbAHIAeAHIhCAKgADYhWIBJgOIA2APIAfAJIhCANgAgnhZIA6gHIADAAIBXAWIhIAKgAn4hVIBegPIAmAQIhZAOgAIGhbIBSgOIBQAPIhdARIhFgSgAjdhVIgqgLIAGgBIAtgJIBEgJIBLAYIhuARQgVgGgVgFgAAnhjIA9gJIBVAVIg8ALgAEwhmIBCgNIBzAXIg4AJIgnAFgAmOhmIBBgKIAsAOIhFAMQgagJgOgHgADGhbIhSgTIBMgLIBSASIhKANgAiAh1IANgCIABAAIAZgDIA3ANIAmAIIg6AIgAGDh2IBUgOIAyAJQAaAIAnAGIhUAPgAkrhrIgVgIIBtgQQAWAEAdAIIg1AIQggAEgOAEIgQADIgYgHgAhJh9IBDgLIBaAZIg+AIgAEhhrQgZgFgQgDIgmgIIAfgFQASgBAXgGIAGACIBCAOIhBAMgABjhzIhcgXIBKgNIADACQAuANAsALIhIAKgAEpiJIBRgPIBPARIhXAOIhJgQgAiSh6IgygMIAtgHQAYAIAWAGIgKABIgBABIgbAEgABhiZIBTgJIBXAYIhLAKQg0gMgrgNgAiJiPIBGgLIAvAOIhFALIgwgOgADmibIgigJIBKgLIBcAUIhQAOQgWgFgegJgAgIiPIgugNIBRgNIAoAOIgTADIgtAIIgIABgAAoirIBFgKIA1APIgCAAIhOAJgAB9i3IALgCIBLgGIACAAQAGABAeAKIAEAAIhJALg");
	this.shape_5.setTransform(0.2,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#72021A").s().p("AkNDOQgKgCgJgDQgOgEgNgFIgcgMIgzgRQgMgDgGgDQgdgNg9gVIiqhRQgZgNgUgSQgMgLACgOIACgdQAAgMANgCQAOgEM4iIIABAAIBIgIIAJAAIBDAPIAyALIAHABQAUAEALAAIADABIABAAIBdAQQB6AXBNAQIAbAFIADAAIAVAIQAFAFACAHQAEAJABAFIAGAhIgBATQgCANgLAVQgFAJgLADIl1A/IjgAtIg0AMIhYATIisAoIgkAHIgOABIgIAAgAJKg+IhoASIABAAIr8CfQATAhgGAsIAggHIB6gkQAugMAugLIA2gMIE/g/IFgg8IAFgZQADgZgEgQQgBgEgBgBIgFgDQgTAGhfAPgArOgcQAAALADAHQACAHAGAEIANAJQALAJAUAMIBKAjIBNAgIBHAbIA1AVIAsAUQAhAOAlALIAAgFQAAgegKgcIgEgJIgcgKIg6gOQgjgJgtgOQgcgJgZgJQgJgEgqgVIgqgVIgHgDIgzgYIg0gZIgIgEIAAAUgAlfBZIArASQAPAGAJgFIAOgDIAtgMIg9gVgAkSBFIA8AVIBugWIg8gYgAnZAwIBKAZQAUAIAQAEIBCgRIhpgmgAiZApIA8AZIB8gaIhFgYgAmHAcIBoAkIABABIBvgaQgjgNgQgEIg4gUgApCAIIAGACIABAAIABAAIA1AWIACABQALAFAQAFIAFACIBHgTIhXghgAgaANIBEAZIAAAAIBVgRQgwgPgfgIgAkPAAIAwAQIA5AUIACABIBzgZIhtgjgAnngJIBVAhIBtgZIgogQIgtgRgAA+gFQAlAKAmANIAAABIBhgTIhVgXgAiRgaIBsAjIBHgPIgzgMQgngIgfgKgAqJgYIACAAQALAHAmAQIAKAEIBOgOIgBgBQgpgPgbgMgACigZIBSAXIBGgOIhIgXIgFgCgAk7gvIgzAKIAkAOQAUAJAcAKIAAAAQAjgIAzgKIAZgFQhHgYgQgEgAhJgmQAbAHAeAGIBAAQIBXgRIhggeIgBAAgAo4gqQAZALAiANIAKAFIAsgKIA8gOIAFgBIgTgHIgzgSgAD6gsIBJAaIBLgPIhWgWIgDgBgArBg1IAAADIAtAWIBHgQIgtgTIAAgBgAA1g6QAtAOAzAOIBKgPIhhgZgAjyg5IBUAbIA6gKIgggMQgagKgTgFgAFEg7IBZAWIA/gNIhNgUIgIgBgAllhPIgwAHIgqAHIBFAYQAcgHAigFIAogGIgTgEQgjgIgagIIgBgBgAh4hNIgrAHIAhAMQATAIAYAHIBvgSIhNgZgApwhCIAtAUIBsgVIgpgQgACOhJIBfAZIA2gLIAEgBIhdgXgAGXhKIBRAWIBXgSQgggJgogJgAlWhSIAwAMIAkAJIBCgKIgegIQgbgGgZgIgADahWIBcAXIBCgNIgfgJIg2gOgAgmhYIBNAZIBHgLIhXgWIgCAAgAn2hVIArAPIBZgOIgngQgAIHhbIBGATIBdgSIhQgPgAjThpIgtAIIgFABIApALQAVAFAWAGIBugRIhLgYgAAphiIBVAWIA8gLIhUgUgAExhmIBWAYIAngFIA5gJIhzgXgAmNhmQAPAHAaAJIBFgLIgsgPgAB2huIBSAUIACABIBJgOIhSgSgAh+h1IBKAYIA6gIIgmgIIg3gNIgaADIgBAAgAGFh2IByAYIBVgOQgogHgZgIIgzgJIhTAOgAk/hyIAVAHIAYAHIARgDQAOgDAfgFIA2gIQgdgIgXgEgAhHh9IBfAWIA9gIIhZgYgADyiAIgeAFIAlAIQARADAYAGIABAAIBAgMIhCgPIgFgBQgYAFgSABgAAJiKIBbAYIAEAAIBIgLQgsgKgugOIgDgBgAEriJIBJAQIBWgNIhOgSgAjDiGIAyAMIADABIAbgEIACAAIAKgCQgXgGgXgIgABiiYQArAMA1ANIBKgLIhXgYgAiHiPIAwAOIBFgLIgwgOgADFikIAiAKQAeAIAXAFIBQgOIhcgUgAg1icIAuANIADABIAIgCIAugIIASgCIgogOgAAqiqIApANIBPgJIACAAIg1gOgACJi5IgLACIA3APIBJgLIgEgBQgegKgGAAIgBgBIhMAGg");
	this.shape_6.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_20},{t:this.shape_2},{t:this.shape_1},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,-20.8,145.6,41.7);


(lib.taps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// <Group>_18
	this.instance = new lib.Group_18();
	this.instance.parent = this;
	this.instance.setTransform(-9.9,-5.5,0.928,0.928,0,0,0,8.5,5.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).to({_off:true},33).wait(49));

	// <Group>_14
	this.instance_1 = new lib.Group_14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.2,-4.7,0.928,0.928,0,0,0,8,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({_off:true},33).wait(46));

	// <Group>_26
	this.instance_2 = new lib.Group_26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11,-21.5,0.928,0.928,0,0,0,9,6.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({_off:true},33).wait(43));

	// <Group>_19
	this.instance_3 = new lib.Group_19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(11.1,-19.2,0.928,0.928,0,0,0,9.3,6.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).to({_off:true},33).wait(40));

	// <Group>_16
	this.instance_4 = new lib.Group_16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(32.8,-19.5,0.928,0.928,0,0,0,9.1,6.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({_off:true},33).wait(37));

	// <Group>_25
	this.instance_5 = new lib.Group_25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-19.3,-36.1,0.928,0.928,0,0,0,9.3,6.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},0).to({_off:true},33).wait(34));

	// <Group>_22
	this.instance_6 = new lib.Group_22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.1,-35.9,0.928,0.928,0,0,0,9.1,6.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({_off:false},0).to({_off:true},33).wait(31));

	// <Group>_13
	this.instance_7 = new lib.Group_13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(23.8,-32.9,0.928,0.928,0,0,0,7.8,6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({_off:true},33).wait(28));

	// <Group>_28
	this.instance_8 = new lib.Group_28();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-17,-54,0.928,0.928,0,0,0,9.2,7.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(72).to({_off:false},0).to({_off:true},33).wait(25));

	// <Group>_15
	this.instance_9 = new lib.Group_15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(3,-51.2,0.928,0.928,0,0,0,7.8,6.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(75).to({_off:false},0).to({_off:true},33).wait(22));

	// <Group>_24
	this.instance_10 = new lib.Group_24();
	this.instance_10.parent = this;
	this.instance_10.setTransform(23.3,-49.9,0.928,0.928,0,0,0,8.6,6.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(78).to({_off:false},0).to({_off:true},33).wait(19));

	// <Group>_29
	this.instance_11 = new lib.Group_29();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-31.5,-66.9,0.928,0.928,0,0,0,10.3,8.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(81).to({_off:false},0).to({_off:true},33).wait(16));

	// <Group>_27
	this.instance_12 = new lib.Group_27();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-8.6,-71.9,0.928,0.928,0,0,0,9.9,6.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(84).to({_off:false},0).to({_off:true},33).wait(13));

	// <Group>_20
	this.instance_13 = new lib.Group_20();
	this.instance_13.parent = this;
	this.instance_13.setTransform(12.1,-65.5,0.928,0.928,0,0,0,8.6,6.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(87).to({_off:false},0).to({_off:true},33).wait(10));

	// <Group>_17
	this.instance_14 = new lib.Group_17();
	this.instance_14.parent = this;
	this.instance_14.setTransform(32.1,-65.3,0.928,0.928,0,0,0,8.1,7.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(90).to({_off:false},0).to({_off:true},33).wait(7));

	// <Group>_23
	this.instance_15 = new lib.Group_23();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-19.7,-86.2,0.928,0.928,0,0,0,9.2,6.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(93).to({_off:false},0).to({_off:true},33).wait(4));

	// <Group>_21
	this.instance_16 = new lib.Group_21();
	this.instance_16.parent = this;
	this.instance_16.setTransform(10.7,-82.3,0.928,0.928,0,0,0,9.9,8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(96).to({_off:false},0).to({_off:true},33).wait(1));

	// <Group>_18
	this.instance_17 = new lib.Group_18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-9.9,-5.5,0.928,0.928,0,0,0,8.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},33).wait(97));

	// <Group>_14
	this.instance_18 = new lib.Group_14();
	this.instance_18.parent = this;
	this.instance_18.setTransform(16.2,-4.7,0.928,0.928,0,0,0,8,5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({_off:false},0).to({_off:true},33).wait(94));

	// <Group>_26
	this.instance_19 = new lib.Group_26();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-11,-21.5,0.928,0.928,0,0,0,9,6.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(6).to({_off:false},0).to({_off:true},33).wait(91));

	// <Group>_19
	this.instance_20 = new lib.Group_19();
	this.instance_20.parent = this;
	this.instance_20.setTransform(11.1,-19.2,0.928,0.928,0,0,0,9.3,6.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(9).to({_off:false},0).to({_off:true},33).wait(88));

	// <Group>_16
	this.instance_21 = new lib.Group_16();
	this.instance_21.parent = this;
	this.instance_21.setTransform(32.8,-19.5,0.928,0.928,0,0,0,9.1,6.3);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(12).to({_off:false},0).to({_off:true},33).wait(85));

	// <Group>_25
	this.instance_22 = new lib.Group_25();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-19.3,-36.1,0.928,0.928,0,0,0,9.3,6.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(15).to({_off:false},0).to({_off:true},33).wait(82));

	// <Group>_22
	this.instance_23 = new lib.Group_22();
	this.instance_23.parent = this;
	this.instance_23.setTransform(3.1,-35.9,0.928,0.928,0,0,0,9.1,6.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(18).to({_off:false},0).to({_off:true},33).wait(79));

	// <Group>_13
	this.instance_24 = new lib.Group_13();
	this.instance_24.parent = this;
	this.instance_24.setTransform(23.8,-32.9,0.928,0.928,0,0,0,7.8,6);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(21).to({_off:false},0).to({_off:true},33).wait(76));

	// <Group>_28
	this.instance_25 = new lib.Group_28();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-17,-54,0.928,0.928,0,0,0,9.2,7.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(24).to({_off:false},0).to({_off:true},33).wait(73));

	// <Group>_15
	this.instance_26 = new lib.Group_15();
	this.instance_26.parent = this;
	this.instance_26.setTransform(3,-51.2,0.928,0.928,0,0,0,7.8,6.4);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(27).to({_off:false},0).to({_off:true},33).wait(70));

	// <Group>_24
	this.instance_27 = new lib.Group_24();
	this.instance_27.parent = this;
	this.instance_27.setTransform(23.3,-49.9,0.928,0.928,0,0,0,8.6,6.3);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(30).to({_off:false},0).to({_off:true},33).wait(67));

	// <Group>_29
	this.instance_28 = new lib.Group_29();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-31.5,-66.9,0.928,0.928,0,0,0,10.3,8.4);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(33).to({_off:false},0).to({_off:true},33).wait(64));

	// <Group>_27
	this.instance_29 = new lib.Group_27();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-8.6,-71.9,0.928,0.928,0,0,0,9.9,6.9);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(36).to({_off:false},0).to({_off:true},33).wait(61));

	// <Group>_20
	this.instance_30 = new lib.Group_20();
	this.instance_30.parent = this;
	this.instance_30.setTransform(12.1,-65.5,0.928,0.928,0,0,0,8.6,6.7);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(39).to({_off:false},0).to({_off:true},33).wait(58));

	// <Group>_17
	this.instance_31 = new lib.Group_17();
	this.instance_31.parent = this;
	this.instance_31.setTransform(32.1,-65.3,0.928,0.928,0,0,0,8.1,7.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(42).to({_off:false},0).to({_off:true},33).wait(55));

	// <Group>_23
	this.instance_32 = new lib.Group_23();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-19.7,-86.2,0.928,0.928,0,0,0,9.2,6.5);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(45).to({_off:false},0).to({_off:true},33).wait(52));

	// <Group>_21
	this.instance_33 = new lib.Group_21();
	this.instance_33.parent = this;
	this.instance_33.setTransform(10.7,-82.3,0.928,0.928,0,0,0,9.9,8);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(48).to({_off:false},0).to({_off:true},33).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-10.9,15.8,10.7);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgYCCQg6gFgjgmQgfgjgDgzQgBgQAFgVQAGgbAXgXQAOgNAHgDQA1ghBMAHIARAFQAsAPAdAfQAeAhAAApQAAAogcAhQgeAjguAPQgdAKgcAAIgPAAg");
	var mask_graphics_54 = new cjs.Graphics().p("AgYCCQg6gFgjgmQgfgjgDgzQgBgQAFgVQAGgbAXgXQAOgNAHgDQA1ghBMAHIARAFQAsAPAdAfQAeAhAAApQAAAogcAhQgeAjguAPQgdAKgcAAIgPAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.1,y:-0.2}).wait(54).to({graphics:mask_graphics_54,x:0.1,y:-0.2}).wait(37));

	// Tween 1
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},54).to({startPosition:0},9).to({regY:-0.1,scaleY:0.52,x:-0.2,y:-21.5},27).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbCLQg+gFglgpQgigmgDg3QgBgSAFgWQAHgdAZgZQAOgOAIgEIgDAJQgIAYAKAWQAKAXAWALQAiARApgOQAZgJASgWQAQgRAAgRQABgRgEgKQgEgNgNgIIgCgDIAAgCIAPAEQAvAQAfAiQAhAjAAAtQgBAqgeAkQggAmgxAQQggALgfAAIgQAAg");
	this.shape.setTransform(0.1,0,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgqCWQgegEgWgLQgegRgVgdQgZgggFguQgHgxAcgmQAqg9BNgKIAvgEQBHADA1AyQAZAYALAgQAJAcgFAdQgGAmgaAfQgjAshDASQgVAGgaAAQgRAAgUgCg");
	this.shape_1.setTransform(0.1,0,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},54).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-14.1,33,28.2);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-35.5,9.2,1,1,8.5,0,0,-17.8,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},89).to({regX:-17.9,rotation:-7.5,x:-35.6},8).to({regY:-17.3,rotation:3.2,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},3).to({rotation:-24.5,x:-36.6,y:8.9},3).to({rotation:3.2,x:-35.6,y:9.3},3).to({rotation:-24.5,x:-36.6,y:8.9},3).to({rotation:3.2,x:-35.6,y:9.3},3).to({rotation:-24.5,x:-36.6,y:8.9},3).to({rotation:3.2,x:-35.6,y:9.3},3).to({regY:-17.4,rotation:-7.5,y:9.2},3).to({regY:-17.3,rotation:3.2,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},4).to({rotation:-24.5,x:-36.6,y:8.9},4).to({rotation:3.2,x:-35.6,y:9.3},3).to({rotation:-24.5,x:-36.6,y:8.9},3).to({rotation:3.2,x:-35.6,y:9.3},3).to({rotation:-24.5,x:-36.6,y:8.9},3).to({rotation:3.2,x:-35.6,y:9.3},3).to({_off:true},2).wait(8));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_97 = new cjs.Graphics().p("Ag1BnIgTgGQgYgHgWgMQgUgKgRgNQgUgPgOgOQgfgTgQgXQgQgYAFgUQAFgXAlgQQApgTA8ARQBUAXAxgCQAOAABEgKQAngGAiAMQAYAIANAJQAYAPADAVQAGAcgiAhQgcAagtAVQgtAXgnAFIgYADQgSACgRAAQgfAAgagHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(97).to({graphics:mask_graphics_97,x:0.7,y:7.1}).wait(137).to({graphics:null,x:0,y:0}).wait(8));

	// Layer 5
	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,23.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({x:-13.4,y:11.1},20).to({_off:true},117).wait(8));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_1 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_8 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_9 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_11 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_15 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_18 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_19 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_21 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_22 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_23 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_24 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_25 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_26 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_27 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_28 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_29 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_30 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_31 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_32 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_33 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_34 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_35 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_36 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_37 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_38 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_39 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_40 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_41 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_42 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_43 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_44 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_45 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_46 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_47 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_48 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_49 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_50 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_51 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_52 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_53 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_54 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_55 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_56 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_57 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_58 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_59 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_60 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_61 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_62 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_63 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_64 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_65 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_66 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_67 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_68 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_69 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_70 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_71 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_72 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_73 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_74 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_75 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_76 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_77 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_78 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_79 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_80 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_81 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_82 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_83 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_84 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_85 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_86 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_87 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_88 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_89 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_90 = new cjs.Graphics().p("ADPBFIg2gGIgigCQgSgCgIgRQgLgUAEgWIABgJQACgMAIgKQAFgGAJgGQAhgPAaAAIAYAAQApADAbAWQASAOAHATQAHAVgKASQgKAQgVAKQgLAFgQAAIgTgBgAhmA9IgogIQgXgFgRAAIgnACIgkgFQgMgCgKgLQgKgLAAgMQAAgQAKgPIAEgHQAKgOAMgJQALgIAMgFQAQgHAVgEQA7gMA9AUQArANAVAgQAMAUgCAPQgDAfgiANQgRAHgWAAQgNAAgOgCg");
	var mask_1_graphics_91 = new cjs.Graphics().p("ADPBBIg2gGIgigCQgSgCgIgRQgLgUAEgVIABgKQACgMAIgKQAFgGAJgGQAhgPAaAAIAYAAQApADAbAWQASAOAHATQAHAVgKASQgKAQgVAKQgLAFgQAAIgTgBgAhmA5IgogIQgXgFgRAAIgnACIgkgFQgMgCgKgLQgKgLAAgMQAAgQAKgPIAEgHQAKgOAMgJQALgIAMgFQAQgHAVgEQA7gMA9AUQArANAVAgQAMAUgCAPQgDAfgiANQgRAHgWAAQgNAAgOgCg");
	var mask_1_graphics_92 = new cjs.Graphics().p("ADPA9Ig2gFIgigDQgSgCgIgQQgLgUAEgVIABgKQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHATQAHAVgKATQgKAQgVAKQgLAEgQAAIgTgBgAhmA1IgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAVgCAOQgDAggiANQgRAGgWAAQgNAAgOgCg");
	var mask_1_graphics_93 = new cjs.Graphics().p("ADPA5Ig2gFIgigDQgSgCgIgQQgLgUAEgVIABgKQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHATQAHAVgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmAxIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgLQAAgRAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAVgCAOQgDAggiANQgRAHgWAAQgNAAgOgDg");
	var mask_1_graphics_94 = new cjs.Graphics().p("ADPA9Ig2gFIgigDQgSgCgIgQQgLgUAEgVIABgKQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHATQAHAVgKATQgKAQgVAKQgLAEgQAAIgTgBgAhmA1IgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAVgCAOQgDAggiANQgRAGgWAAQgNAAgOgCg");
	var mask_1_graphics_95 = new cjs.Graphics().p("ADPBBIg2gGIgigCQgSgCgIgRQgLgUAEgVIABgKQACgMAIgKQAFgGAJgGQAhgPAaAAIAYAAQApADAbAWQASAOAHATQAHAVgKASQgKAQgVAKQgLAFgQAAIgTgBgAhmA5IgogIQgXgFgRAAIgnACIgkgFQgMgCgKgLQgKgLAAgMQAAgQAKgPIAEgHQAKgOAMgJQALgIAMgFQAQgHAVgEQA7gMA9AUQArANAVAgQAMAUgCAPQgDAfgiANQgRAHgWAAQgNAAgOgCg");
	var mask_1_graphics_96 = new cjs.Graphics().p("ADPBFIg2gGIgigCQgSgCgIgRQgLgUAEgWIABgJQACgMAIgKQAFgGAJgGQAhgPAaAAIAYAAQApADAbAWQASAOAHATQAHAVgKASQgKAQgVAKQgLAFgQAAIgTgBgAhmA9IgogIQgXgFgRAAIgnACIgkgFQgMgCgKgLQgKgLAAgMQAAgQAKgPIAEgHQAKgOAMgJQALgIAMgFQAQgHAVgEQA7gMA9AUQArANAVAgQAMAUgCAPQgDAfgiANQgRAHgWAAQgNAAgOgCg");
	var mask_1_graphics_97 = new cjs.Graphics().p("ADPBKIg2gFIgigDQgSgCgIgQQgLgUAEgWIABgJQACgMAIgKQAFgHAJgGQAhgOAagBIAYABQApADAbAWQASANAHASQAHAWgKATQgKAQgVAKQgLAFgQAAIgTgCgAhmBCIgogIQgXgEgRAAIgnABIgkgEQgMgCgKgLQgKgMAAgMQAAgQAKgOIAEgHQAKgOAMgJQALgIAMgGQAQgHAVgDQA7gMA9ATQArANAVAgQAMAUgCAPQgDAggiANQgRAHgWAAQgNAAgOgDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_1,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_2,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_3,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_4,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_5,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_6,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_7,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_8,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_9,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_10,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_11,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_12,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_13,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_14,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_15,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_16,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_17,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_18,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_19,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_20,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_21,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_22,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_23,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_24,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_25,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_26,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_27,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_28,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_29,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_30,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_31,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_32,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_33,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_34,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_35,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_36,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_37,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_38,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_39,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_40,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_41,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_42,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_43,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_44,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_45,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_46,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_47,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_48,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_49,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_50,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_51,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_52,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_53,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_54,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_55,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_56,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_57,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_58,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_59,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_60,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_61,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_62,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_63,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_64,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_65,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_66,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_67,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_68,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_69,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_70,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_71,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_72,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_73,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_74,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_75,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_76,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_77,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_78,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_79,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_80,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_81,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_82,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_83,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_84,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_85,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_86,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_87,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_88,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_89,x:0.6,y:-8}).wait(1).to({graphics:mask_1_graphics_90,x:0.6,y:-8.2}).wait(1).to({graphics:mask_1_graphics_91,x:0.6,y:-8.5}).wait(1).to({graphics:mask_1_graphics_92,x:0.6,y:-8.9}).wait(1).to({graphics:mask_1_graphics_93,x:0.6,y:-9.3}).wait(1).to({graphics:mask_1_graphics_94,x:0.6,y:-8.9}).wait(1).to({graphics:mask_1_graphics_95,x:0.6,y:-8.5}).wait(1).to({graphics:mask_1_graphics_96,x:0.6,y:-8.2}).wait(1).to({graphics:mask_1_graphics_97,x:0.6,y:-8}).wait(137).to({graphics:null,x:0,y:0}).wait(8));

	// Layer 7
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.7,-10.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},89).to({y:-13.2},4).to({x:2.2,y:-20.8},4).to({_off:true},137).wait(8));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhyAWYAAAAAEgBAGgDYADgBAEgCAEgBYAEgCAFgDAFgBYAGgCAGgCAGgCYADgBADgBADgBYADgBAEAAADgBYAEgBADgBAEgBYADgBAEgBADAAYAIgBAHgBAGgBYAIAAAIgBAHABYADAAAEABADAAYAEABADAAAEABYAHABAGABAGACYAHACAFACAGABYAFACAFADAEABYAEACAEACADACYAGADADACAAAAIAAAAYAAAAgDgDgFgEYgDgCgDgCgEgDYgEgCgFgCgFgDYgFgDgGgCgGgDYgGgCgHgCgHgCYgEgBgEAAgDgBYgEgBgEAAgEgBYgIAAgIAAgHAAYgHABgIABgHABYgEABgEABgEABYgDABgEABgDABYgEABgDABgEABYgDACgDABgDACYgGACgGACgFACYgFADgFADgEACYgEADgDACgDABYgGAEgDACAAAAIAAAA");
	this.shape.setTransform(4.7,19.4,1,1,0,0,0,0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiLADYAAAAASABAaABYAaABAjAAAigBYAJAAAJAAAIgBYAJAAAIAAAIAAYAJgBAHAAAIAAYAHAAAHAAAHABYAGAAAGAAAGAAYAFAAAFABADAAYAIAAAFAAAAAAIAAAAYAAAAgFgBgHgBYgIgCgLgBgNgBYgGgBgHgBgIAAYgHgBgIAAgJAAYgIgBgIAAgJAAYgJABgIAAgJAAYgiABgjABgaACYgaABgSACAAAAIAAAA");
	this.shape_1.setTransform(3.9,15.7,1,1,0,0,0,0,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AijgSYAAAAAFADAIAEYAEACAFACAGADYAGACAHACAHACYAIADAIACAJACYAJADAJABAKACYAKABAKABAKABYALABAKAAALAAYAKAAAKgBAKgBYALAAAKgBAKgCYAJgBAKgBAJgCYAJgBAIgCAIgCYAHgCAHgBAHgCYAGgCAFgBAEgCYAJgDAFgCAAAAIAAAAYAAAAgFABgJACYgFABgFABgGACYgHACgHAAgHABYgIAAgIACgJABYgJABgKABgJABYgKABgKAAgKAAYgKABgLABgJAAYgLAAgKAAgKgBYgKAAgKgBgKgBYgJgBgKgBgJgCYgIgCgJAAgHgCYgIgCgHgCgGgCYgGgCgFgBgEgCYgJgDgFgCAAAAIAAAA");
	this.shape_2.setTransform(3.1,14.9,1,1,0,0,0,0,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai7gkYAAAAAEAFAJAHYACACACACACACYADACADACADADYADACAEACADADYAEACAEACAEACYAEACAEADAFACYAFACAFACAFADYACABADABACABYADABADABADABYAFABAGACAGACYAFABAGABAGACYADAAADABAEABIAJABYAGAAAGABAHABIATABYACAAADAAAEAAIAJgBYAHAAAGAAAGgBYANgBAMgBAMgDYAMgCALgDAKgDYALgEAJgDAJgEYAJgEAIgEAGgDYAHgEAGgDAEgEYAJgGAFgEAAAAIAAAAYAAAAgFADgKAGYgEADgHACgGAEYgHADgIACgJAEYgEACgFABgFABYgFACgFABgFACYgKACgLADgMABYgLACgMABgNABYgGABgGAAgGAAIgKABIgIAAIgTgBYgGgBgGAAgGgBYgGAAgGgBgGgBYgGgCgGgBgFgBYgGgBgFgCgGgBYgDgBgCgBgDAAYgCgBgDgBgDgBYgFgCgEgCgFgCYgFgCgEgBgEgCYgEgCgFgCgDgCYgEgCgDgDgEgCYgDgBgDgCgDgCYgDgCgCgCgCgBYgJgHgFgEAAAAIAAAA");
	this.shape_3.setTransform(2.3,14.1,1,1,0,0,0,0,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjUg1YAAAAAFAFAIALYACACADADACADYADADADADADADYAHAHAHAIAJAFYAFAEAFADAEAEYAGADAFADAGAEYALAHANAFANAFYAHADAHABAHACYAHACAHACAIABYAHABAIACAHABYAIAAAHABAIAAIALAAYAEABADgBAEAAYAHAAAIgBAHAAYAPgCAPgCAOgEYAOgDANgFAMgEYAGgDAGgDAFgDYAGgDAFgCAFgDYAJgHAJgFAHgGYAHgGAGgFAFgFYAIgJAGgGAAAAIAAAAYAAAAgGAFgKAJYgEAFgHAEgHAFYgHAFgKAFgJAGYgFADgFACgGACYgFADgGACgGADYgMADgMAFgOADYgOADgOABgOACYgIAAgHABgIAAYgDAAgEABgDgBIgLAAYgHAAgHgBgIAAYgHgBgHgBgHgBYgIgBgHgCgHgCYgGgCgHgBgHgCYgNgFgNgEgLgHYgFgDgGgDgFgDYgFgDgFgCgEgDYgKgGgHgHgHgGYgEgDgDgDgDgDYgCgCgDgDgCgCYgJgKgGgFAAAAIAAAA");
	this.shape_4.setTransform(1.5,13.3,1,1,0,0,0,0,-0.2);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({y:19.5},0).wait(9).to({y:19.6},0).wait(9).to({y:19.7},0).wait(8).to({y:19.8},0).wait(9).to({y:19.9},0).wait(9).to({y:20},0).wait(9).to({y:20.1},0).wait(9).to({y:20.2},0).wait(9).to({y:20.3},0).wait(9).to({y:20.4},0).wait(7).to({y:19.4},0).wait(1).to({y:18.4},0).wait(1).to({y:17.4},0).wait(1).to({y:16.4},0).to({_off:true},1).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(97).to({_off:false},0).wait(136).to({_off:true},1).wait(8));

	// Layer 1
	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.6,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},89).to({y:-10.7},4).to({y:-7.7},4).to({_off:true},137).wait(8));

	// Layer 3
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.4,25,1,1,14,0,0,-15.4,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},89).to({regY:-3,rotation:-9.2,y:25.1},8).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},3).to({rotation:0.8,x:5.5,y:25.1},3).to({rotation:-41.7,x:20.1,y:5.1},3).to({rotation:0.8,x:5.5,y:25.1},3).to({rotation:-41.7,x:20.1,y:5.1},3).to({rotation:0.8,x:5.5,y:25.1},3).to({rotation:-41.7,x:20.1,y:5.1},3).to({rotation:-9.2,x:5.4,y:25.1},3).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},4).to({rotation:0.8,x:5.5,y:25.1},4).to({rotation:-41.7,x:20.1,y:5.1},3).to({rotation:0.8,x:5.5,y:25.1},3).to({rotation:-41.7,x:20.1,y:5.1},3).to({rotation:0.8,x:5.5,y:25.1},3).to({rotation:-41.7,x:20.1,y:5.1},3).to({_off:true},2).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-48.7,78.6,100.7);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-0.1,0.05,0.05,180,0,0,-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.8,regY:0.1,scaleX:1,scaleY:1,rotation:0,x:-0.2},8).to({regX:-0.7,rotation:-163.5,y:-0.2,alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,0.8,0.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(56.5,-6.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).wait(50));

	// Layer 5
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.8,-17);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({_off:false},0).wait(56));

	// Layer 3
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.1,8.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98).to({_off:false},0).wait(61));

	// Layer 4
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({alpha:1},9).wait(61));

	// Layer 1
	this.instance_4 = new lib.CompoundPath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(21.7,8.5,0.928,0.928,0,0,0,4.4,3.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDgCIgEgGIAAgDIADAAIAEAEQAGAGACAMg");
	this.shape.setTransform(3.5,-15.8,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D1D1").s().p("AoVBCICzgoIAEgBIKAiDIAAAAIBwgTQBmgRAVgGIAFADQABABABAFQAEARgDAbIgFAbIl7BBIlXBEIg8AMIhjAZIiDAmIgjAIQAHgugVgkg");
	this.shape_1.setTransform(21.4,9.6,0.928,0.928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B4B4B4").s().p("ACkBnIgwgWIg4gXIhMgdIhTghIhQgmQgWgNgMgJIgNgKQgHgGgCgHQgDgIAAgMIAAgVIAJAEIA3AbIA4AbIAHADIAtAXIA3AbQAaAKAeAIQAxAQAlAJIA/AQIAeAKIAEAKQAMAegBAgIAAAFQgogLgjgPg");
	this.shape_2.setTransform(-49.7,11.2,0.928,0.928);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1D1D1").s().p("Ag9gDIAAgEIBLgLIAAABIAwAUIhLAQg");
	this.shape_3.setTransform(-64.8,-0.6,0.928,0.928);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1D1D1").s().p("AhEgDIAMgBIBQgHIACAAQAGABAgAKIAFABIhOALg");
	this.shape_4.setTransform(19.1,-13.9,0.928,0.928);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1D1D1").s().p("Ag0AEIglgKIBQgMIBjAVIhXAQQgXgGgggJg");
	this.shape_5.setTransform(28.1,-11.7,0.928,0.928);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1D1D1").s().p("AhqgEIBagPIA1AJQAcAIAqAHIhbAPg");
	this.shape_6.setTransform(48.9,-7.2,0.928,0.928);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1D1D1").s().p("AhagDIBngQQArAKAjAKIhdATIhYgXg");
	this.shape_7.setTransform(49.1,-2.9,0.928,0.928);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1D1D1").s().p("AhRgEIBIgOIAIACIBTAVIhEAOIhfgXg");
	this.shape_8.setTransform(40,-1.3,0.928,0.928);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1D1D1").s().p("AhPgGIBAgNIADABIBcAWIhQAQIhPgag");
	this.shape_9.setTransform(32.4,0.4,0.928,0.928);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1D1D1").s().p("AhRgEIBRgQIAEACIBOAYIhMAPIhXgZg");
	this.shape_10.setTransform(23.8,1.9,0.928,0.928);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D1D1D1").s().p("AgKAWQgqgOgogKIBdgUIBcAYIhnAVg");
	this.shape_11.setTransform(14.8,3.9,0.928,0.928);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1D1D1").s().p("AgHAVIhLgZIBRgRQAhAJAzAPIhbATg");
	this.shape_12.setTransform(5,5.9,0.928,0.928);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D1D1D1").s().p("AhiAAIB6gaIBMAaIiGAbg");
	this.shape_13.setTransform(-6.1,8.3,0.928,0.928);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D1D1D1").s().p("AhbACIB2gaIBBAZIh1AYg");
	this.shape_14.setTransform(-19,10.9,0.928,0.928);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D1D1D1").s().p("AgUARIgvgSIBFgTIBCAWIgxANIgPADQgEADgEAAQgHAAgJgEg");
	this.shape_15.setTransform(-28.9,13.3,0.928,0.928);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D1D1D1").s().p("AgOAQIhQgZIBMgUIBxAoIhHATQgRgFgVgJg");
	this.shape_16.setTransform(-38.6,9.9,0.928,0.928);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D1D1D1").s().p("AAIAbQgQgFgMgGIgCgBIg5gXIgCAAIAAAAIgIgCIBWgRIBcAkIhMATg");
	this.shape_17.setTransform(-49.6,6,0.928,0.928);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1D1D1").s().p("AgTASQgpgRgMgGIgCgBIBKgQQAdANAtAPIABABIhTAQg");
	this.shape_18.setTransform(-58,2.3,0.928,0.928);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D1D1D1").s().p("AhRAAIB4gTIArARIhzAWg");
	this.shape_19.setTransform(-54.8,-2.4,0.928,0.928);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1D1D1").s().p("AgaAPIgsgPIBkgPQATAIAWAHIhfAQg");
	this.shape_20.setTransform(-43.7,-4.4,0.928,0.928);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1D1D1").s().p("Ag6gCIBGgLQANAGAiAJIhJAMQgcgJgQgHg");
	this.shape_21.setTransform(-34.3,-5.8,0.928,0.928);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1D1D1").s().p("Ag/AJIgWgIIB0gRQAYAFAfAIIg5AHIgwAJIgSAEIgagIg");
	this.shape_22.setTransform(-23.9,-7.4,0.928,0.928);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D1D1D1").s().p("AAFAKQgagIgbgEIAwgHQAZAIAYAFIgLACIgBABIgdAEg");
	this.shape_23.setTransform(-15,-9,0.928,0.928);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1D1D1").s().p("AgKAOIg0gOIBKgMIAzAOIhJAMg");
	this.shape_24.setTransform(-7.8,-10.1,0.928,0.928);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D1D1D1").s().p("AgPAOIgygOIBYgNIArAOIgUADIgwAJIgKABg");
	this.shape_25.setTransform(0.8,-11.5,0.928,0.928);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D1D1").s().p("AhBgBIBJgLIA6AOIgDABIhTAKg");
	this.shape_26.setTransform(10.3,-12.8,0.928,0.928);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D1D1D1").s().p("AhbgHIBagLIBdAZIhRAMQg3gOgvgMg");
	this.shape_27.setTransform(18.3,-10.4,0.928,0.928);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D1D1D1").s().p("AAHAPQgZgHgSgDIgogHIAhgFQATgCAYgFIAGABIBHAPIhFANg");
	this.shape_28.setTransform(28.4,-7.9,0.928,0.928);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D1D1D1").s().p("AhVAAIBWgPIBVARIhcAOIhPgQg");
	this.shape_29.setTransform(37.9,-9.6,0.928,0.928);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D1D1D1").s().p("AgFAgIg+gWIgzgRIB5gZIB0AmIh6Abg");
	this.shape_30.setTransform(-16.1,4.8,0.928,0.928);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D1D1D1").s().p("AgOAbIg0gVIgngNIA3gMIA9gIQASAFBMAYIgbAFQg3ALglAKg");
	this.shape_31.setTransform(-26.9,1.2,0.928,0.928);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D1D1D1").s().p("AhLgIIBFgLQAUAGAcALIAiALIg9ALg");
	this.shape_32.setTransform(-17.2,-0.8,0.928,0.928);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D1D1D1").s().p("AhBAHQgOgGgWgFIAugIIBJgKIBUAaIh5AUQgZgJgVgIg");
	this.shape_33.setTransform(-7,-2.4,0.928,0.928);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D1D1D1").s().p("AhPgIIBAgJIADAAIBcAXIhNAMg");
	this.shape_34.setTransform(3.6,-3.9,0.928,0.928);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D1D1D1").s().p("AhNgGIBBgJIBaAUIhAALg");
	this.shape_35.setTransform(11.4,-5.1,0.928,0.928);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D1D1D1").s().p("AADAQIhXgUIBRgMIBYASIhPAPg");
	this.shape_36.setTransform(19.7,-6.4,0.928,0.928);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D1D1D1").s().p("AAIATIhhgZIBQgNIADACQAwAPAwAKIhOALg");
	this.shape_37.setTransform(9.3,-9.1,0.928,0.928);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D1D1D1").s().p("AhUgFIBIgLIBhAZIhDAJg");
	this.shape_38.setTransform(0.7,-7.8,0.928,0.928);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D1D1D1").s().p("AhHgJIAOgCIABAAIAbgEIA7AOIAqAIIhAAJg");
	this.shape_39.setTransform(-6.1,-6.7,0.928,0.928);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D1D1D1").s().p("Ag7AKQgfgIgOgDIAGgBIAwgJIBJgKIBRAYIh1ATQgYgHgWgFg");
	this.shape_40.setTransform(-16.5,-5.3,0.928,0.928);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D1D1D1").s().p("AgcAIIg0gMIBJgMQAaAIAeAHIAgAHIhHALg");
	this.shape_41.setTransform(-26.8,-3.6,0.928,0.928);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D1D1D1").s().p("AhbgEIAtgIIAygHIABgBIABABQAcAJAlAIIAVAEIgrAGQglAGgdAHg");
	this.shape_42.setTransform(-36.2,-2,0.928,0.928);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D1D1D1").s().p("AgfAWQglgOgbgLIB0gXIA2AUIAVAGIgFABIhBAPIguALg");
	this.shape_43.setTransform(-48,0.3,0.928,0.928);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D1D1D1").s().p("AhogEIB1gbIAxATIAqAQIhzAcg");
	this.shape_44.setTransform(-39.1,3.6,0.928,0.928);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D1D1D1").s().p("AgDAhIhwgmIB0gcIA9AVQARAFAlANIh2Acg");
	this.shape_45.setTransform(-28.4,7.5,0.928,0.928);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D1D1D1").s().p("AhggNIA+gLIAAAAQAiALAoAJIA5AMIhOARg");
	this.shape_46.setTransform(-5.5,2.8,0.928,0.928);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D1D1D1").s().p("AgyAJQgggHgegHIB4gTIABAAIBoAeIheATQgpgKgcgGg");
	this.shape_47.setTransform(3.1,0.8,0.928,0.928);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D1D1D1").s().p("AhbgIIBPgNIBoAaIhQARQg2gPgxgPg");
	this.shape_48.setTransform(13.8,-0.9,0.928,0.928);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D1D1D1").s().p("AhSgHIBCgLIBjAYIgEABIg7AMIhmgag");
	this.shape_49.setTransform(21.8,-2.5,0.928,0.928);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D1D1D1").s().p("AhUgEIBOgPIA6AQIAhAJIhHAOg");
	this.shape_50.setTransform(29.7,-4,0.928,0.928);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D1D1D1").s().p("AhhgGIBIgNIB7AYIg9AJIgpAGg");
	this.shape_51.setTransform(39.6,-5.6,0.928,0.928);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D1D1D1").s().p("AhWgCIBYgPIBVAQIhjASIhKgTg");
	this.shape_52.setTransform(60.1,-4.8,0.928,0.928);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2E2E2E").s().p("AkiDeQgKgCgLgDQgPgEgOgGIgdgNIg3gSIgUgHQgfgOhCgWIi3hXQgbgPgWgTQgMgLABgQIACgfQABgNANgDQAPgDN5iTIABAAIBOgJIAJAAIBJARIA2ALIAHABQAWAEALABIAEAAIAAAAIBlASQCEAYBSASIAdAGIADAAIAYAIQAFAFACAIQAEAKABAFIAHAjIgCAVQgBAOgMAXQgGAKgMACImSBFIjxAwIg4ANIhfAUIi6ArIgmAIIgPABIgJAAg");
	this.shape_53.setTransform(0,4.1,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4}]}).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,-16.8,145.6,41.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F78CE").s().p("AkdCkQhFgEiQhJQiNhHgcgrQgXgjAFg2IAJgvIUnAUQAPALANAQQAZAfgOASQgSAXm4BpQmqBnhPAAIgEAAg");
	this.shape.setTransform(11,-11.3,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8CBFF").s().p("AjpCXQhQgIiIgWQhggNhThKQhNhDAOglQAEgLAUgHQCTgwEMgOIDugGQCcADClALQFJAWA1AnQAEABABAFQALAnjfBQQjjBTi2AUQhfAKhXAAQhAAAg8gGg");
	this.shape_1.setTransform(-16.9,-19.6,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(116));

	// Layer 4
	this.instance = new lib.Symbol5("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(3.3,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116));

	// Layer 2
	this.instance_1 = new lib.Symbol6("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33.1,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#73ABFF").p("AAAADQAAgCAAgB");
	this.shape_2.setTransform(-17.4,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1}]}).wait(116));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#73ABFF").s().p("AjdLuIgsgNQjmhNikioQg/g2hPhGQgOgcgLgZQgWgvgEgQIgVhIQgNgxgDgwQgCgdAAglQAAgRACgYQACgWAEgQQAIgnAFgRQAJgdAPgkQANgjAWgZQAFgGAHgDIA8gRIBcgVIA3gIIB1gQQBxgMB8ACQA+ABBCAHQB0AJAtACQBlAFA6AAQA3AAAngEQAggDAjgJQA/gRBHgjIAAAAIABAAIACgCQAYgOAWgZQAYgdAMghQACgGACgSQABgGgIgCQgXgFgcgQQgVgNgUgdQgSgZgLglQgLgqABgiQABgkAOgXQAZABAZAMQAeAPAaARIAOALIAOALQARAMARAUIAQAVQAIALAEALIAGgXQAJgtAkgiQAighA9gUQAQgFAUgBIALAeQAOAygLAuQgMAvgdAnQgQAWgXAVIgoAmIAHAVIAeBBIADAFQAHATAWAvQAVAtAKASQASArAMAwQANA2ADA9IABAcIACAcQgBA4gDAoQgEArgIAqQgIAngJAaQgQAygPAgQgQAigGAKQgnA6gSAWQgRAVgnAoQgEAFgMAJQgMANgUAPIgjAaIgaASQg8AphKAmIgbAOIgQAGIgQAHQgSAKg1ASIgpAPIh7AgQg/AKhBAAQh4AAiBghg");
	this.shape_3.setTransform(0,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhJNlIgYAAQgIABgzgEIgQgDQgKgBgGAAIgQAAIgQgCIgpgGQgDgEgHAAQgIAAgDgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAQgIACgJgDIgQgFIgRgEQgLgCgFgDQgFgCgMgCQgLgCgFgDQgDgCgLgEQgJgDgDgFIgDgBQgIABgJgFIgQgIQgPgEgbgOIghgSIgwgbIgNgIQgIgFgEgFQgBgCgKgEQgKgCgGgJQgDgEgKgEIgjgcIgSgOQgLgJgFgIQgBgCgGgDQgFgCAAgFQgGgCgHgHIgKgLQgUgSgFgJQgCgEgJgJQgRgOgEgKIgEgEQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAgEgEgEIgHgGQgHgJgJgOIgnhBIgPgdQgJgTgHgKQgKgQgNgjIgFgPIgFgPIgEgLIgdhpIgEgcIgEgaQgEgbgBgeIABg4QABgeAEgaIALg1QAFgfARgoQAWg0AagpQARgaAjgOQAzgWA7gKIBcgQQAQABAKgGIAbgCIAbgDIA0gDQB2gMCEACQBFABBGAHQBOAHBfAGQCUAIBKgEQBBgCA2gPQBKgSBEgiIABgBQAngaAXgiQAPgUAHgLQADgFAEgNIAEgUIgcgFQgYgFgbgVQgtgjgUhOQgLgpAEgsQAEgiAMgVIACgLIAPgBIARgBQALABAMAFQArAQAVAQIAsAgQAYAUAUAgIAGAIIAKgdQAIgaAYgYQASgUAagPQAcgRAngJQARgFAXAAIAJgDQAKAIAKAXQAOAiADAbQADArgIAeQgJAjgWAkQgUAggqAdQgJAHgeAOQgHAEADAHIAnBRIABAEQADAEABAFIA6CGIACAEIAHAQQAHAUAJAfIATBJIARBmQAEAXABA4QABAogBAUIgCAfQgBASgDAMIgCAUIgEATIgDAUIgEAUIgKAkQgGAVgGANIgFASIgUAwIgFAHQgEAFAAAEQgDAAAAAEQAAAFgCABQgCACgDAIIgcAsIgMATQgbAkgZAdQgCAEgIAGQgHAGgDAEQgFAIgKAKQgOAMgDAEQgGAHgZATIgtAjQgoAcgnAYQgZAQgsAXQgOAIgfAOQgYAMgjAOIhDAcQgOAFgeAIIgLAGIg+ARIhVAUIgYAEQgOACgKgBQgHAEgKABIgSABIgvAEQgYADgxAAIgOABIgKgBg");
	this.shape_4.setTransform(0,0.1,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-80.6,182,161.4);


// stage content:
(lib.cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_233 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(233).call(this.frame_233).wait(1));

	// Layer 6
	this.instance = new lib.taps("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(148.9,58.2,1,1,0,0,0,0,-46.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).wait(130));

	// Layer 1
	this.instance_1 = new lib.Symbol4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(92,107.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(234));

	// Layer 5
	this.instance_2 = new lib.Symbol2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.5,157.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:75},75).to({startPosition:101},26).to({skewY:-1.5,startPosition:105},4).to({skewY:1,startPosition:109},4).to({skewY:-1.5,startPosition:113},4).to({skewY:0.6,startPosition:117},4).to({scaleX:1,skewY:-2,startPosition:121},4).to({regY:0.1,skewY:2.9,y:158,startPosition:126},5).to({scaleX:1,skewY:-1.7,startPosition:130},4).to({skewY:0.9,startPosition:134},4).to({skewY:-1.1,startPosition:138},4).to({regY:0,skewY:1,y:157.9,startPosition:142},4).to({skewY:-1.5,startPosition:147},5).to({skewY:0.6,startPosition:151},4).to({scaleX:1,skewY:-2,startPosition:154},3).to({regY:0.1,skewY:2.9,y:158,startPosition:157},3).to({scaleX:1,skewY:-1.7,startPosition:158},3).to({skewY:0.9},3).to({skewY:-1.1},3).to({regY:0,skewY:-1.5,y:157.9},3).to({skewY:1},4).to({skewY:-1.5},4).to({skewY:0.6},4).to({scaleX:1,skewY:-2},4).to({regY:0.1,skewY:2.9,y:158},5).to({scaleX:1,skewY:-1.7},4).to({skewY:0.9},4).to({skewY:-1.1},4).to({regY:0,skewY:1,y:157.9},4).to({skewY:-1.5},5).to({skewY:0.6},4).to({scaleX:1,skewY:-2},3).to({regY:0.1,skewY:2.9,y:158},3).to({scaleX:1,skewY:-1.7},3).to({skewY:0.9},3).to({skewY:-1.1},3).to({regY:0.2,scaleX:1,skewY:1.9,y:158.1},3).wait(1));

	// Layer 4
	this.instance_3 = new lib.Symbol1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(103,182.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(234));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3E3E3").s().p("AhEEVQhGgRhNgjQglgQgWgfQgXgggCgnQgBgGABgEIAIhSQACgSAFgWIAThLQAMgqAbgwQAMgVAIgKQAWgbAngVQBGgiBwAbQBGARA+AsQAdAUARARQAdAbAUAhQAjA9ABBHQABAZgEAdQgQBog/A3QgdAagoANQgUAHguAJQgfAHggAAQgrAAgtgMg");
	this.shape.setTransform(73.4,137.8,0.928,0.928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhcEdQgkgIgsgQIg0gTQgTgJgNgLQgrgkgIhGQgBgVAIg8IAHgzQAKg3AFgTQAQg7Ahg5QANgYAGgGQArg3BwgGQB7gFByBYQBFA0AfA/QATApAFArQAEAagDAOIgBAHQgBAMAAANQgDBQgiA6QgRAdgRAMIgIAGQgnAbgwAOQgbAHgsAFQgWADgXAAQg1AAg+gNg");
	this.shape_1.setTransform(73.4,137.3,0.928,0.928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("AqqCfQkVgwDfgrISHjQQJIhqjwCqQjwCqn+A+QjYAaizAAQiqAAiGgXg");
	this.shape_2.setTransform(117.8,250.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(234));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(117,198.7,189.5,210);
// library properties:
lib.properties = {
	width: 210,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib2 = lib||{}, images2 = images||{}, createjs2 = createjs||{}, ss2 = ss||{}, AdobeAn2 = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;