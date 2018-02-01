import { Component, ViewChild  } from '@angular/core';
import { TooltipComponent } from "./tooltip/tooltip.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(TooltipComponent) tooltip: TooltipComponent;
  tooltipText: string;
  wordings = {
    "a": "Tooltip Content for Button A",
    "b": "Tooltip Content for Button B"
  }

  buttonClick = function(buttonID: string): void{
    this.tooltip.showTooltip = true;
    var buttonElem = document.getElementById(buttonID);
    this.tooltip.yPos = buttonElem.offsetTop;
    this.tooltip.xPos = buttonElem.offsetLeft;
    this.tooltipText = this.wordings[buttonID];
  }

  buttonKeydown = function(event) : void{
    if (event.keyCode == 27){
      //ESC key
      this.tooltip.showTooltip = false;
      event.preventDefault();
    }
  }
}
