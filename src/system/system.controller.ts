import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SystemService } from './services/system.service';
import { catchError, map, take } from 'rxjs';

@Controller('2performant')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.systemService.login(body.email, body.password).pipe(
      take(1),
      map((res) => {
        return res.data;
      }),
      catchError((error) => {
        if (error.status === 403) {
          // Handle the 403 error (wrong password or username) here
          throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
        } else {
          // Handle any other error
          throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
        }
      }),
    );
  }
}
