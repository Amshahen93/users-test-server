import { NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import { IP4 } from './system/ip.helper';


async function bootstrap() {
  const serverConfig: {
    host: number;
    port?: string
  } = {
    host: 3000,
    // port: IP4.ip4
  }
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(
    serverConfig.host,
    serverConfig.port
  );
  console.log(
    'ran on',
    "\x1b[32m",
    `http://${serverConfig.port? serverConfig.port: 'localhost'}:${serverConfig.host}`
  );
}

bootstrap();
