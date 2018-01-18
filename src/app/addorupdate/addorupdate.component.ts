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
  selectedValues = [];
  selectedValue;
  constructor() { }

  ngOnInit() {
    this.display = true;
    this.options = {
      nessaryOptions:[
        {label:'资产编号',val:'资产编号'},
        {label:'型号',val:'型号'},
        {label:'归属部门',val:'归属部门'}
      ],
      innessaryOptions:[
        {label:'资产名称',val:'资产名称'},
        {label:'类别',val:'类别'},
        {label:'品牌',val:'品牌'},
        {label:'序列号',val:'序列号'},
        {label:'所有者',val:'所有者'},
        {label:'供应商',val:'供应商'},
        {label:'所属应用',val:'所属应用'},
      ]
    };
    if(window.innerWidth<1024){
      this.width = window.innerWidth*0.9;
    }else{
      this.width = window.innerWidth*0.7;
    }
  }
  closeMask(bool){
    this.closeAddorUpdateLabelMask.emit(bool);
  }

}
