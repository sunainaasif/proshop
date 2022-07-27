import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456' , 10),
        isAdmin: true
    },
    {
        name: 'Sunaina Asif',
        email: 'sunaina@example.com',
        password: bcrypt.hashSync('123456' , 10),
    },
    {
        name: 'Naina Bilal',
        email: 'naina@example.com',
        password: bcrypt.hashSync('123456' , 10),
    }
]

export default users;