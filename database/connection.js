//COde for database connection
require('dotenv').config();
const pg = require('pg');
const {Sequelize,DataTypes}=require("sequelize")

if (!process.env.DB_URL) {
    console.error("ERROR: DB_URL environment variable is not defined");
    process.exit(1);
}

const sequelize=new Sequelize(process.env.DB_URL,{
    dialect:'postgres',
      dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    keepAlive: true,
  },
  pool: {
    max: 20,
    idleTimeoutMillis: 30000,
  },
})

sequelize.authenticate()
.then(()=>{
    console.log("Authentication successful");
})
.catch((err)=>{
    console.log("Error found"+err);
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.books=require('./models/book.model')(sequelize,DataTypes)

//Migration code
sequelize.sync({alter:false}).then(()=>{
    console.log("Successfully migrated");
})
module.exports=db
