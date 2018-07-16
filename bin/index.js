/**
 * Created by zyg on 16/7/15.
 */
'use strict';

var n=0;

class DisplayObject {
}

class Container extends DisplayObject{
  constructor(props) {
    this.name = `pixi-fake-${n++}`;
    this.children = [];
  }
  addChild(c){
    this.children.push(c);
    c.parent = this;
  }
  removeChildAt(i){
    this.children.splice(i, 1);
  }
  addChildAt(c,i){
    this.children.splice(i,0,c);
  }
  getChildIndex(c){
    return this.children.indexOf(c);
  }
}

class Sprite extends Container {

}

module.exports = {
  DisplayObject,
  Container,
  Sprite,
}
