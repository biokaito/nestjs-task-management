import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'BAtrieu281',
      database: 'tasks-management',
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{js,ts}']
    }),
  ],
})
export class AppModule {}
