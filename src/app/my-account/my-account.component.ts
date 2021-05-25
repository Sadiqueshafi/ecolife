import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyaccountService } from './myaccount.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
// import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  id = '7';
  a: any;
  form: any| FormGroup;
  getDataofsetting: any[] = [];
  customerId: any;
  changePassword: any | FormGroup;
  password: any;
  oldpassword: any;
  newPassword: any;
  confirmPassword: any;
  address: any[] = [];
  addAddress: any |FormGroup;
  customerAddress: any;
  // tslint:disable-next-line:ban-types
  data: Number = 1;
  // ListOfAddress: Observable<any[]> = this.accountsetting.loadToGetData();

  constructor(private accountsetting: MyaccountService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      customerFirstName: ['', Validators.required],
      customerLastName: ['', Validators.required],
      customerMobileNo: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerAlternateEmail: ['', Validators.required],
      customerAlternateMobileNo: ['', Validators.required],
    });
    this.changePassword = this.fb.group({
      customerEmail: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
      });
    this.addAddress = this.fb.group({
      customerId: 1,
      serialNo: 1,
      status: 0,
      addressType: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required]
      });
    this.getData(this.a);
    this.getaddress();

  }
  // tslint:disable-next-line:typedef
  getData(id: any){
    this.accountsetting.getAccountData(this.id)
    .subscribe((data) => {
      this.customerId = data.data[0].customerId;
      // console.log(data.data);
    // tslint:disable-next-line:align
    this.form.setValue({
      customerFirstName: data.data[0].customerFirstName,
      customerLastName: data.data[0].customerLastName,
      customerMobileNo: data.data[0].customerMobileNo,
      customerEmail: data.data[0].customerEmail,
      customerAlternateEmail: data.data[0].customerAlternateEmail,
      customerAlternateMobileNo: data.data[0].customerAlternateMobileNo,
      // lastModifiedBy: null
      });
    });
  }
  // tslint:disable-next-line:typedef
  get customerEmail(){
    return this.changePassword.get('customerEmail');
  }
  // tslint:disable-next-line:typedef
  get oldPwd(){
    return this.changePassword.get('password');
  }
   // tslint:disable-next-line:typedef
   get newPwd(){
    return this.changePassword.get('newPassword');
  }
   // tslint:disable-next-line:typedef
   get confirmPwd(){
    return this.changePassword.get('confirmPassword');
  }
   // tslint:disable-next-line:typedef
   changetoNewPassword(password: any){
    const query = this.changePassword.value;
    // tslint:disable-next-line:object-literal-key-quotes
    this.accountsetting.postToChangePassword(query);
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.form.value);
    const data = this.form.value;
    data.customerId = Number(this.customerId);
    data.lastModifiedBy = 1;
    console.log(data);
    // const formData = {data.customerId};
    this.accountsetting.putData( this.customerId, data).subscribe((res) => {
      if (res !== undefined && res != null){
        // this.toster.success('your Data update successfully', 'success');
      }else{
        // this.toster.error('your Data not be added ', 'error');
      }
    });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.form.controls; }
  // tslint:disable-next-line:typedef
  get addressValidations() { return this.addAddress.controls; }
  // tslint:disable-next-line:typedef
  getaddress(){
    const id = Number(1);
    this.accountsetting.get_Address(id).subscribe((res) => {
      this.customerAddress = res.data[0].customerId;
      console.log(res.data);
      this.address.length = 0;
      if (res != null) {
      for (var key in res['data']) {
        this.address.push(res.data[key]);
      }
    }
    // tslint:disable-next-line:align
    this.addAddress.setValue({
      customerId: res.data[0].customerId,
      serialNo: res.data[0].serialNo,
      status: res.data[0].addressStatus,
      addressType: res.data[0].addressType,
      address: res.data[0].address,
      state: res.data[0].state,
      country: res.data[0].country,
      zipCode: res.data[0].zipCode,
      // lastModifiedBy: null
      });
    });
  }
  // tslint:disable-next-line:typedef
  editAddress(cunstomerId: any){
    this.accountsetting.putAddress(cunstomerId, this.addAddress.value).subscribe(res => {
      console.log(res);
    });
  }
  // tslint:disable-next-line:typedef
  AddressSubmit(){
    const a = this.addAddress.value;
    console.log(a);
    this.accountsetting.addNewAddress(a);
  }

}
