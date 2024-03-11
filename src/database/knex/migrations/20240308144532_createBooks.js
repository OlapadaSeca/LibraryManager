
exports.up = (knex) => {
    return knex.schema.createTable("books", (table)=>{

  table.increments("idBooks").primary();
  table.string("author").notNullable();
  table.string("title").notNullable();
  table.integer("numberOfPages").notNullable();
  table.boolean("isAvaible").defaultTo("false");

    
     } )
    };


exports.down = (knex) =>{
  return knex.schema.dropTableIfExist("books")
};
