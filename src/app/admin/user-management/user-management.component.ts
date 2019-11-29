import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  showSelect: any = {
    id: <any>[],
    status: <any>[]
  };
  showSpan: any = {
    id: <any>[],
    status: <any>[]
  };
  usersData: any;
  rolesData: any = [ {name: 'ADMIN'}, {name: 'USER'}, {name: 'TEACHER'} ];
  selectedButton = {};
  selectedRole: any;
  selectedRoleData: any;

  constructor(
    public http: HttpClient 
  ) {
   }

  ngOnInit() {
    this.http.get(
      '/api/admin/user-management'
    ).subscribe(res => {
      this.usersData = res;
      this.usersData.forEach(item => {
        this.showSelect.id[item.id] = item.id;
        this.showSelect.status[item.id] = false;
        this.showSpan.id[item.id] = item.id;
        this.showSpan.status[item.id] = true;
      });
      console.log(this.showSelect);
      console.log("this resp", this.usersData)
    })
  }

  onEditClick(id: any){
    this.selectedButton[id] = !this.selectedButton[id];
    if(this.selectedButton[id] == true){
      this.showSpan.id.forEach(item => {
        if(item == id){
          this.showSpan.status[item] = false;
          this.showSelect.status[item] = true;
          return;
        }
      });
    } else{
      this.showSpan.id.forEach(item => {
        if(item == id){
          this.showSpan.status[item] = true;
          this.showSelect.status[item] = false;
          return;
        }
      });
    }
  }

  onDeleteClick(id: any){
    this.http.delete(
      '/api/admin/user-management/delete',
      {
        headers:{},
        params:{
          id: id
        },
        observe: 'response'
      }
    ).subscribe(res => {
      res.statusText === "No Content" ? window.location.reload(true) : ''
    })
  }

  onChangeRole(id: any){
    this.selectedRoleData = this.selectedRole;
  }

  onSaveClick(id: any){
    console.log(this.selectedRoleData);
    this.http.post<any>(
      '/api/admin/user-management/save',
      {
        userId: id,
        roleName: this.selectedRoleData
      }
    ).subscribe(res => {
      console.log("Save res", res);
    },
    err => {
      console.log("Save error", err);
    })
  }

}
