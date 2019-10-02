'use strict'

class UXButton {
  constructor() {
    /*this.disabled = false;
    this.focused = false;
    this.hovered = false;
    this.active = false;
    this.hasIcon = false;*/
    this.state = UXButton.State.DISABLED | UXButton.State.HAS_ICON;
  }

  getClassName() {
    let classNames = [];
    /*//очень плохой подход
    if( this.disabled) {
      classNames.push('item-disabled');//так для каждого флага
    }
    //куча условных операторов = ужасный код, работающий не опттимально
    */

    //Можно использовать биттовые карты!
    UXButton.StateClassName.forEach((className, state) => {
      if(!!(this.state & state)){
        classNames.push(className)
      }
    })

    return classNames;
  }

  static get State() {
    return {
      DISABLED: 0X01,
      FOCUSED: 0X02,
      HOVERED: 0X04,
      ACTIVE: 0X08,
      HAS_ICON: 0X10,
    }
  }

  static get StateClassName() {
    return new Map ([
      [UXButton.State.DISABLED, 'button-disable'],
      [UXButton.State.FOCUSED, 'button-focused'],
      [UXButton.State.HOVERED, 'button-hovered'],
      [UXButton.State.ACTIVE, 'button-active'],
      [UXButton.State.HAS_ICON, 'button-has-icon'],
    ])
  }
}

const btn = new UXButton;
console.log(btn)
const classes = btn.getClassName();
console.log(classes)
