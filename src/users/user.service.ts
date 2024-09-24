import { Injectable } from "@nestjs/common";

export interface User{
    id: number;
    name: string;
    age: number;
}

@Injectable()
export class UsersService{
    private users: User[] = [
        {id :1 , name: 'Jhon' , age :25},
        {id: 2, name :'Doe' ,  age :26}
    ];

    findAll(): User[]{
        return this.users
    }

    findOne(id: number): User {
        return this.users.find(user=>user.id===id);

    }

    create(users:User){
        this.users.push(users);
    }

    update(id :number ,updateUser: User){
        const index= this.users.findIndex(user => user.id === id);
        if(index!== -1){
            this.users[index] =updateUser;
        }
    }

    delete(id:number){
        this.users = this.users.filter(user => user.id !== id);
    }
}