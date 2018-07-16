/**
 * Created by zyg on 16/7/15.
 */
'use strict';

var n=0;

class Container {
  constructor(props) {
    this.name = n++;
    this.props = props;
    this.children = [];
  }
  addChild(c){
    this.children.push(c)
  }
  addChildAt(c,i){
    this.children.splice(i,0,c);
  }
  removeChildAt(i){
    this.children.splice(i,1);
  }
}

class Sprite {

}

module.exports = {
  Container,
  Sprite,
}
