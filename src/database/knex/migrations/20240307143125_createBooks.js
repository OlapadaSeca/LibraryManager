
exports.up = (knex) => {
    return knex.schema.createTable("books", (table)=>{

  table.increments("idBooks").primary();
  table.string("author").notNullable();
  table.string("title").notNullable();
  table.integer("number of pages").notNullable();
  table.boolean("isAvaible").defaultTo("false");
  table.integer("user_id").unsigned().index().references("idUsers").inTable("users")

    
     } )
    };


exports.down = (knex) =>{
  return knex.schema.dropTableIfExist("books")
};
