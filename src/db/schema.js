import {pgTable, serial, text, timestamp, integer} from "drizzle-orm/pg-core";



//creating postgress table
//serial("id") -> means its going to increment by 1
// why userid variabel is capital but the other is small
// cuz userID is for using it in our js code and user_id is for DB

export const favoriteTabel = pgTable("favorites" , {
    id: serial("id").primaryKey(),
    userID: text("user_id").notNull(),
    recipeID:integer("recipe_id").notNull(),
    title: text("title").notNull(),
    image: text("image"),
    cookTime: text("cook_time"),
    servings: text("servings"),
    createdAt: timestamp("created_at").defaultNow()

})

// when we run => npx drizzle-kit generate
// it generate a migration folder becuse the schema is written in js code so migration convert it to db format

// we created the migration NOW we need to push it to the cloude(to the website)

// to do that we have to run -> npx drizzle-kit migrate