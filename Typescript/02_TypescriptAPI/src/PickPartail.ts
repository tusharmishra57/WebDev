interface User {
    id: string,
    name: string,
    age: string, 
    email: string,
    password: string
}

// typescript API Pick
type UpdateProps = Pick<User, "name" | "age" | "email">

// typescript API Partial
type UpdatePropsOptional = Partial<UpdateProps>  //all three name age and email are optional, user don't have to give a three
function updateUser(updateProps: UpdatePropsOptional){
    //hit the database to update user
}   