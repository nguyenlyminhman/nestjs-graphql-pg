import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
  }),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
