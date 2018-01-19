import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-addorupdate',
  templateUrl: './addorupdate.component.html',
  styleUrls: ['./addorupdate.component.css']
})
export class AddorupdateComponent implements OnInit {
  @Output() closeAddorUpdateLabelMask = new EventEmitter();
  title = '新增标签';
  display;
  width;
  options;
  public selecvtedNessary: any = []; // 必选项
  public selecvtedInnessary: any = []; // 可选项
  public selectedItems: any = []; // 已选项
  public orderNum: number = 0; // 保存 选中的item 在数组中的位置
  public canMoveUp: boolean = true; // 标识是否可以上移动
  public canMoveDown: boolean = true; // 标识是否可以下移动
  constructor() {
  }

  ngOnInit() {
    this.display = true;
    this.options = {
      nessaryOptions: [
        {label: '资产编号', val: '资产编号'},
        {label: '型号', val: '型号'},
        {label: '归属部门', val: '归属部门'}
      ],
      innessaryOptions: [
        {label: '资产名称', val: '资产名称'},
        {label: '类别', val: '类别'},
        {label: '品牌', val: '品牌'},
        {label: '序列号', val: '序列号'},
        {label: '所有者', val: '所有者'},
        {label: '供应商', val: '供应商'},
        {label: '所属应用', val: '所属应用'},
      ]
    };
    if (window.innerWidth < 1024) {
      this.width = window.innerWidth * 0.9;
    } else {
      this.width = window.innerWidth * 0.7;
    }
    this.selecvtedNessary = ['资产编号', '型号', '归属部门'];
    this.doCheckSelected();
  }

  doCheckSelected() {
    this.selectedItems = this.selecvtedNessary.concat(this.selecvtedInnessary);
  }

  onRadioClick(i) {
    this.orderNum = i;
    console.log(this.selectedItems[i]);
  }

  moveUp() {
    if (this.orderNum == 0) {
      return;
    }
    this.swapItems(this.selectedItems, this.orderNum, this.orderNum - 1);
    this.orderNum -= 1;
  }

  moveDown() {
    if (this.orderNum == this.selectedItems.length - 1) {
      return;
    }
    this.swapItems(this.selectedItems, this.orderNum, this.orderNum + 1);
    this.orderNum += 1;
  }

  swapItems(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
  }

  closeMask(bool) {
    this.closeAddorUpdateLabelMask.emit(bool);
  }

}
