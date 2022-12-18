import React from "react";
import { makeAutoObservable } from "mobx";

class Bilkg {
  name = "";
  regions = "";
  constructor() {
    makeAutoObservable(this);
  }
  get() {
    console.log((this.regions = "hello"));
  }
}

export default new Bilkg();
