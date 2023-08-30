npx sequelize-cli model:create --name User --attributes userName:string,email:string,password:string,role:string
npx sequelize-cli model:create --name Profile --attributes firstName:string,lastName:string,phone:string,UserId:integer
//add column categoryid
npx sequelize-cli model:create --name Event --attributes name:string,location:string,eventDate:date,price:integer,capacity:integer
npx sequelize-cli model:create --name Category --attributes name:string
npx sequelize-cli migration:generate --name add-FK-column-to-Event-table
npx sequelize-cli model:create --name Booking --attributes UserId:integer,EventId:integer

npx sequelize db:migrate
npx sequelize db:migrate:undo:all

npx sequelize db:seed:all
npx sequelize db:seed:undo:all


npm i 