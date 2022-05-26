import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlConfig } from './config/graphql.config';
import { TypeOrmConfig } from './config/pg.config';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [GraphQLModule.forRoot(GraphqlConfig),
  TypeOrmModule.forRoot(TypeOrmConfig),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
