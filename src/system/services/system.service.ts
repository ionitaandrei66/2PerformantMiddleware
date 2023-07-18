import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class SystemService {
  constructor(private readonly httpService: HttpService) {}

  login(email: string, password: string): Observable<AxiosResponse<any[]>> {
    const data = {"user":{email, password}}
    return this.httpService.post('https://api.2performant.com/users/sign_in.json', data);
  }
}
