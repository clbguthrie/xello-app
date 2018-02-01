import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: {
    '(document:mousedown)': 'outerMouseDown($event)'
  },
})
export class TooltipComponent {
  @Input() text: string;
  public showTooltip: boolean = false;
  public xPos: number = 0;
  public yPos: number = 0;

  outerMouseDown = function(event) : void{
    if (event.target.id != "tooltipDiv"){
      this.showTooltip = false;
    }
  }

  tooltipClick = function() : void{
    this.showTooltip = true;
  }
}
