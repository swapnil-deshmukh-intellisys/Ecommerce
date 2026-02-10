import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class HTTPService {
    public headers: Headers;
    public requestoptions: RequestOptions;
    public res: Response;
    public base_path_api: string;
    public base_path_image: string;
    public dirName = 'AppDownloads';
    public downloadedId = 'AppDownloadsID';
    public videoDirName = 'StatusVideoDownloads';
    public loderImg = './assets/imgs/loader.gif';
    constructor(public http: Http) { this.base_path_api = 'http://132.148.22.109:1100/'; }
    // get request
    public getRequsetOptionsUnauthorised(url: string): RequestOptions {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        console.log(this.headers);

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: url,
            headers: this.headers
        });

        return this.requestoptions;
    }

    public GetRequestUnauthorised(url: string): any {

        return this.http.request(new Request(this.getRequsetOptionsUnauthorised(url)))
            .map((res: Response) => {
                let jsonObj: any;
                if (res.status === 204) {
                    jsonObj = null;
                } else if (res.status === 500) {
                    jsonObj = null;
                } else if (res.status !== 204) {
                    jsonObj = res.json();
                }
                return [{ status: res.status, json: jsonObj }];
            })
            .catch(error => {
                if (error.status === 403) {
                    return Observable.throw(error);
                } else if (error.status === 400) {
                    return Observable.throw(error);
                } else {
                    return Observable.throw(error);
                }
            });
    }


    public PostRequestUnauthorised(url: string, data: any): any {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: data
        });

        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                // console.log(res.status);
                if (res.status === 201) {
                    return [{ status: res.status, json: res.json() }];
                } else if (res.status === 205) {
                    return [{ status: res.status, json: res.json() }];
                } else if (res.status === 200) {
                    return [{ status: res.status, json: res.json() }];
                }
            })
            .catch((error: any) => {
                // console.log(error.status);
                if (error.status === 500) {
                    return Observable.throw(error);
                } else if (error.status === 400) {
                    return Observable.throw(error);
                } else if (error.status === 409) {
                    return Observable.throw(error);
                } else if (error.status === 406) {
                    
                    return Observable.throw(error);
                } else if (error.status === 404) {
                    return Observable.throw(error);
                }
            });
    }


    // public PostRequest(url: string, data: any): any {

    //     this.headers = new Headers();
    //     this.headers.append("Content-Type", "application/json");
    //     this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('token'));
    //     this.requestoptions = new RequestOptions({
    //         method: RequestMethod.Post,
    //         url: url,
    //         headers: this.headers,
    //         body: data
    //     })

    //     return this.http.request(new Request(this.requestoptions))
    //         .map((res: Response) => {
    //             // console.log(res.status);
    //             if (res.status === 201) {
    //                 return [{ status: res.status, json: res.json() }]
    //             }
    //             else if (res.status === 205) {
    //                 return [{ status: res.status, json: res.json() }]
    //             }
    //             else if (res.status === 200) {
    //                 return [{ status: res.status, json: res.json() }]
    //             }
    //         })
    //         .catch((error: any) => {
    //             // console.log(error.status);
    //             if (error.status === 500) {
    //                 return Observable.throw(error);
    //             }
    //             else if (error.status === 400) {
    //                 return Observable.throw(error);
    //             }
    //             else if (error.status === 409) {
    //                 return Observable.throw(error);
    //             }
    //             else if (error.status === 406) {
    //                 ;
    //                 return Observable.throw(error);
    //             }
    //             else if (error.status === 404) {
    //                 return Observable.throw(error);
    //             }
    //         });
    // }

    public PutRequest(url: string, data: any): any {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        // this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('token'));
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Put,
            url: url,
            headers: this.headers,
            body: data
        });

        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                // console.log(res.status);
                if (res.status === 201) {
                    return [{ status: res.status, json: res.json() }];
                } else if (res.status === 205) {
                    return [{ status: res.status, json: res.json() }];
                } else if (res.status === 200) {
                    return [{ status: res.status, json: res.json() }];
                }
            })
            .catch((error: any) => {
                // console.log(error.status);
                if (error.status === 500) {
                    return Observable.throw(error);
                } else if (error.status === 400) {
                    return Observable.throw(error);
                } else if (error.status === 409) {
                    return Observable.throw(error);
                } else if (error.status === 406) {
                    
                    return Observable.throw(error);
                } else if (error.status === 404) {
                    return Observable.throw(error);
                }
            });
    }

    public DeleteRequest(url: string): any {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        // this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('token'));
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Delete,
            url: url,
            // body:data,
            headers: this.headers,
        });

        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                // console.log(res.status);
                if (res.status === 201) {
                    return [{ status: res.status, json: res.json() }];
                } else if (res.status === 205) {
                    return [{ status: res.status, json: res.json() }];
                } else if (res.status === 200) {
                    return [{ status: res.status, json: res.json() }];
                }
            })
            .catch((error: any) => {
                // console.log(error.status);
                if (error.status === 500) {
                    return Observable.throw(error);
                } else if (error.status === 400) {
                    return Observable.throw(error);
                } else if (error.status === 409) {
                    return Observable.throw(error);
                } else if (error.status === 406) {

                    return Observable.throw(error);
                } else if (error.status === 404) {
                    return Observable.throw(error);
                }
            });
    }

// userdata
getUserdata() {
    console.log('login successfully');
    const headers = new Headers();
    // this.loadToken();
    // headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    // return this.http.get('users/profile', {headers: headers})
    const url = 'http://132.148.22.109:1100/user/allUser';
    return this.http.get(url, { headers: headers })
      .map(res => res.json());
  }
 // all order data
  getAllorder(token) {
    console.log('login successfully');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    const url = 'http://132.148.22.109:1100/order/allOrderAdmin';
    return this.http.get(url, { headers: headers })
      .map(res => res.json());
  }
  // userdata
  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = 'http://132.148.22.109:1100/admin/signUp';
    return this.http.post(url, user, { headers: headers })
      .map(res => res.json());
  }
}
