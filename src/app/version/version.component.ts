import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { RpcVersion } from '../../generated-client/model/rpcVersion'
import { GRPCService } from '../../generated-client/api/gRPC.service'
import { version } from 'punycode';

const BASE_PATH = "localhost:8081"

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],

  providers: [GRPCService]
})
export class VersionComponent implements OnInit {

  version : RpcVersion

  constructor(private http:HttpClient, private service:GRPCService) {
    service.getVersion().subscribe(v => {
        console.log(v)
        this.version = v;
    });
  }

  ngOnInit() {
  }

}
