//>>built
define("dojox/mobile/bidi/Heading",["dojo/_base/declare","./common"],function(_1,_2){
return _1(null,{_setLabelAttr:function(_3){
this.inherited(arguments);
if(this.getTextDir(_3)==="rtl"){
this.domNode.style.direction="rtl";
}
this.labelDivNode.innerHTML=_2.enforceTextDirWithUcc(this.labelDivNode.innerHTML,this.textDir);
},_setBackAttr:function(_4){
this.inherited(arguments);
this.backButton.labelNode.innerHTML=_2.enforceTextDirWithUcc(this.backButton.labelNode.innerHTML,this.textDir);
this.labelNode.innerHTML=this.labelDivNode.innerHTML;
},_setTextDirAttr:function(_5){
if(!this._created||this.textDir!=_5){
this._set("textDir",_5);
if(this.getTextDir(this.labelDivNode.innerHTML)==="rtl"){
this.domNode.style.direction="rtl";
}
this.labelDivNode.innerHTML=_2.enforceTextDirWithUcc(_2.removeUCCFromText(this.labelDivNode.innerHTML),this.textDir);
_2.setTextDirForButtons(this);
}
}});
});
